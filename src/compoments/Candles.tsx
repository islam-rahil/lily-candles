"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import {
  useState,
  useRef,
  useId,
  useEffect,
  useCallback,
  KeyboardEvent,
} from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  // valeurs cibles (mises à jour par la souris)
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  // valeurs courantes (interpolées vers la cible)
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  const isActive = current === index;

  useEffect(() => {
    if (!isActive) return;

    const animate = () => {
      const el = slideRef.current;
      if (el) {
        // interpolation : on se rapproche de la cible de 10% à chaque frame
        const ease = 0.1;
        xRef.current += (targetXRef.current - xRef.current) * ease;
        yRef.current += (targetYRef.current - yRef.current) * ease;

        el.style.setProperty("--x", `${xRef.current}px`);
        el.style.setProperty("--y", `${yRef.current}px`);
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isActive]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    targetXRef.current = event.clientX - (r.left + r.width / 2);
    targetYRef.current = event.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    // on ne fait que changer la cible : la boucle ramène doucement à 0
    targetXRef.current = 0;
    targetYRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} sur la collection`}
        aria-hidden={!isActive}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isActive
            ? "scale(1) rotateX(0deg)"
            : "scale(0.98) rotateX(8deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#EDE6D6] rounded-[1%] overflow-hidden"
          style={{
            transform: isActive
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover transition-opacity duration-700 ease-in-out"
            style={{ opacity: isActive ? 1 : 0.5 }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading={isActive ? "eager" : "lazy"}
            decoding="async"
          />
          {isActive && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            isActive ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">
            {title}
          </h2>
          <div className="flex justify-center">
            <button
              tabIndex={isActive ? 0 : -1}
              className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
              {button}
            </button>
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => (
  <button
    type="button"
    aria-label={title}
    title={title}
    onClick={handleClick}
    className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-[3px] border-transparent rounded-full focus:border-[#EDE6D6] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
      type === "previous" ? "rotate-180" : ""
    }`}
  >
    <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
  </button>
);

interface CarouselProps {
  slides: SlideData[];
  /** Lecture automatique (ms). 0 ou non défini = désactivée */
  autoPlay?: number;
}

export function Carousel({ slides, autoPlay = 0 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

  const handlePreviousClick = useCallback(() => goTo(current - 1), [current, goTo]);
  const handleNextClick = useCallback(() => goTo(current + 1), [current, goTo]);

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  // Autoplay optionnel
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(handleNextClick, autoPlay);
    return () => clearInterval(timer);
  }, [autoPlay, handleNextClick]);

  // Navigation clavier
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") handlePreviousClick();
    if (e.key === "ArrowRight") handleNextClick();
  };

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Nos produits"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={`${id}-${index}`}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)] items-center">
        <CarouselControl
          type="previous"
          title="Slide précédente"
          handleClick={handlePreviousClick}
        />

        {/* Indicateurs */}
        <div className="flex items-center gap-2 mx-4">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Aller à la slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-6 bg-[#52592D]"
                  : "w-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

        <CarouselControl
          type="next"
          title="Slide suivante"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}