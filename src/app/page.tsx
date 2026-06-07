import Navbar from "../compoments/Navbar";
import { BackgroundGradientAnimation } from "../compoments/background-gradient-animation";
import About from "../compoments/About";
import { Carousel } from "../compoments/Candles";

  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

export default function Home() {
  return (
    <>
      <Navbar />

      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center px-4 text-center pointer-events-none">
          <h1 className="font-ma-police-2 bg-gradient-to-b from-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-2xl text-5xl md:text-7xl lg:text-8xl tracking-wide">
            Leila Candles
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base lg:text-lg text-white/70 font-light tracking-wide font-ma-police-2">
            Bougies artisanales en cire d&apos;abeille — lumière douce, parfum naturel.
          </p>
        </div>
      </BackgroundGradientAnimation>

      <About />

  <div className="relative overflow-hidden w-full h-full py-20">
  <div className="mx-auto mb-16 max-w-2xl text-center">
    <span className="mb-3 inline-block text-2xl font-ma-police uppercase tracking-[0.2em] text-neutral-400">
      Collection
    </span>
    <h1 className="text-5xl font-ma-police-2 tracking-tight  text-neutral-900 sm:text-5xl">
      Nos produits
    </h1>
    <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400">
      Découvrez notre gamme de bougies parfumées, façonnées avec soin.
    </p>
  </div>

  <Carousel slides={slideData} />
</div>
    </>
  );
}