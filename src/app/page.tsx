import Navbar from "../compoments/Navbar";
import { BackgroundGradientAnimation } from "../compoments/background-gradient-animation";
import About from "../compoments/About";
import { Carousel } from "../compoments/Candles";
import { AnimatedTestimonials } from "../compoments/Team";
import Contact from "../compoments/Contact";
import Reveal from "../compoments/Reveal";
import RevealBg from "../compoments/RevealBg";
import Footer from "../compoments/Footer";

const slideData = [
  { title: "YLANG YLANG", button: "", src: "/p1.jpeg" },
  { title: "LAVENDER", button: "", src: "/p2.jpeg" },
  { title: "ROSE and OUD", button: "", src: "/p4.jpeg" },
];

const testimonials = [
  {
    quote:
      "Chaque bougie raconte une histoire. Mon rôle est de composer des fragrances qui éveillent des souvenirs et transforment un simple instant en moment précieux.",
    name: "Leïla Benali",
    designation: "Fondatrice & Maître Parfumeur",
    src: "/e1.avif",
  },
  {
    quote:
      "La cire, la mèche, le temps de combustion — rien n'est laissé au hasard. Je veille à ce que chaque pièce qui sort de l'atelier soit irréprochable.",
    name: "Yacine Haddad",
    designation: "Responsable Production & Artisanat",
    src: "/e2.avif",
  },
  {
    quote:
      "Le parfum se ressent aussi par les yeux. Je conçois chaque packaging comme un écrin, pour que l'objet soit aussi beau éteint qu'allumé.",
    name: "Amira Cherif",
    designation: "Directrice Artistique & Design",
    src: "/e3.avif",
  },
  {
    quote:
      "Sélectionner les meilleures cires naturelles et des matières premières durables, c'est ma fierté. La qualité commence par le choix des ingrédients.",
    name: "Karim Mansouri",
    designation: "Responsable Sourcing & Qualité",
    src: "/e4.avif",
  },
  {
    quote:
      "Au-delà de la vente, je tisse un lien avec chaque client. Comprendre leurs envies et leur faire découvrir la fragrance parfaite, c'est tout l'art de notre maison.",
    name: "Sofia Belkacem",
    designation: "Responsable Relation Client",
    src: "/e5.avif",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <BackgroundGradientAnimation>
        <div
          id="top"
          className="absolute z-50 inset-0 flex flex-col items-center justify-center px-5 sm:px-6 text-center pointer-events-none"
        >
          <h1 className="font-ma-police-2 bg-gradient-to-b from-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-2xl text-[clamp(2.25rem,8vw,7rem)] leading-[1.1] tracking-wide">
            Leïla Candles
          </h1>
          <p className="mt-4 sm:mt-5 max-w-[18rem] sm:max-w-md md:max-w-xl text-sm sm:text-base lg:text-lg text-white/70 font-light leading-relaxed tracking-wide font-ma-police-2">
            Bougies artisanales en cire d&apos;abeille — lumière douce, parfum naturel.
          </p>
        </div>
      </BackgroundGradientAnimation>

      <About />

      {/* Collection : #52592D → #EDE6D6 */}
      <RevealBg
        bgClassName="bg-[#EDE6D6]"
        fromClassName="bg-[#52592D]/30"
        duration={2000}
      >
        <div
          id="collection"
          className="relative overflow-hidden w-full h-full py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto mb-10 sm:mb-14 lg:mb-16 max-w-2xl px-4 text-center">
            <span className="mb-2 sm:mb-3 inline-block text-lg sm:text-2xl font-ma-police uppercase tracking-[0.2em] text-neutral-400">
              Collection
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ma-police-2 tracking-tight text-neutral-900">
              Nos produits
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-500">
              Découvrez notre gamme de bougies parfumées, façonnées avec soin.
            </p>
          </div>
          <Carousel slides={slideData} />
        </div>
      </RevealBg>

      {/* Équipe : #EDE6D6 → #FFE9D4 */}
      <RevealBg
        bgClassName="bg-[#FFE9D4]"
        fromClassName="bg-[#EDE6D6]"
        duration={1600}
      >
        <section
          id="equipe"
          className="relative overflow-hidden w-full py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto mb-10 sm:mb-14 lg:mb-16 max-w-2xl px-4 text-center">
            <span className="mb-2 sm:mb-3 inline-block text-lg sm:text-2xl font-ma-police uppercase tracking-[0.2em] text-[#794022]/70">
              L'équipe
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-ma-police-2 tracking-tight text-neutral-900">
              Notre Équipe
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-600">
              Les artisans derrière chaque création, animés par la même passion du détail.
            </p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} />
        </section>
      </RevealBg>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}