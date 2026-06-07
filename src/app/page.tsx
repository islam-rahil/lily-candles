import Navbar from "../compoments/Navbar";
import { BackgroundGradientAnimation } from "../compoments/background-gradient-animation";
import About from "../compoments/About";
import { Carousel } from "../compoments/Candles";
import { AnimatedTestimonials } from "../compoments/Team";
import Contact from "../compoments/Contact";
import Reveal from "../compoments/Reveal";
import RevealBg from "../compoments/RevealBg";

const slideData = [
  { title: "Mystic Mountains", button: "Explore Component", src: "/p1.jpeg" },
  { title: "Urban Dreams", button: "Explore Component", src: "/p2.jpeg" },
  { title: "Neon Nights", button: "Explore Component", src: "/p3.jpeg" },
  { title: "Desert Whispers", button: "Explore Component", src: "/p4.jpeg" },
];

const testimonials = [
  {
    quote:
      "Chaque bougie raconte une histoire. Mon rôle est de composer des fragrances qui éveillent des souvenirs et transforment un simple instant en moment précieux.",
    name: "Leila Benali",
    designation: "Fondatrice & Maître Parfumeur",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3560&auto=format&fit=crop",
  },
  {
    quote:
      "La cire, la mèche, le temps de combustion — rien n'est laissé au hasard. Je veille à ce que chaque pièce qui sort de l'atelier soit irréprochable.",
    name: "Yacine Haddad",
    designation: "Responsable Production & Artisanat",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Le parfum se ressent aussi par les yeux. Je conçois chaque packaging comme un écrin, pour que l'objet soit aussi beau éteint qu'allumé.",
    name: "Amira Cherif",
    designation: "Directrice Artistique & Design",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote:
      "Sélectionner les meilleures cires naturelles et des matières premières durables, c'est ma fierté. La qualité commence par le choix des ingrédients.",
    name: "Karim Mansouri",
    designation: "Responsable Sourcing & Qualité",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3464&auto=format&fit=crop",
  },
  {
    quote:
      "Au-delà de la vente, je tisse un lien avec chaque client. Comprendre leurs envies et leur faire découvrir la fragrance parfaite, c'est tout l'art de notre maison.",
    name: "Sofia Belkacem",
    designation: "Responsable Relation Client",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
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

      {/* About : fond plein, géré dans le composant (texte clair → pas de révélation) */}
      <About />

      {/* Collection : #52592D → #EDE6D6 */}
      <RevealBg
        bgClassName="bg-[#EDE6D6]"
        fromClassName="bg-[#52592D]/30"
        duration={2000}
      >
        <div className="relative overflow-hidden w-full h-full py-20">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="mb-3 inline-block text-2xl font-ma-police uppercase tracking-[0.2em] text-neutral-400">
              Collection
            </span>
            <h1 className="text-5xl font-ma-police-2 tracking-tight text-neutral-900 sm:text-5xl">
              Nos produits
            </h1>
            <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400">
              Découvrez notre gamme de bougies parfumées, façonnées avec soin.
            </p>
          </div>
          <Carousel slides={slideData} />
        </div>
      </RevealBg>

      {/* Équipe : #EDE6D6 → #FFE9D4 (deux crèmes proches → transition subtile) */}
      <RevealBg
        bgClassName="bg-[#FFE9D4]"
        fromClassName="bg-[#EDE6D6]"
        duration={1600}
      >
        <section className="relative overflow-hidden w-full py-20">
          <div className="mx-auto mb-16 max-w-2xl text-center px-4">
            <span className="mb-3 inline-block text-2xl font-ma-police uppercase tracking-[0.2em] text-[#794022]/70">
              L'équipe
            </span>
            <h2 className="text-4xl font-ma-police-2 tracking-tight text-neutral-900 sm:text-5xl">
              Notre Équipe
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Les artisans derrière chaque création, animés par la même passion du détail.
            </p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} />
        </section>
      </RevealBg>

      {/* Contact : #FFE9D4 → #794022 (à appliquer dans Contact.tsx, voir note) */}
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}