import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#52592D] grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src="/art1.jpeg"
          fill
          alt="Bougies naturelles Lily Candles"
          className="object-cover"
        />
      </div>

      <div className="px-8 py-12 md:px-16 text-[#FFE9D4]">
        <span className="block text-xs uppercase tracking-widest font-ma-police text-[#D8CC34] mb-4">
          Notre histoire
        </span>

        <h2 className="font-ma-police text-3xl md:text-5xl leading-tight mb-6">
          À propos de Lily Candles
        </h2>

        <p className="font-ma-police-2 text-base md:text-lg leading-relaxed text-[#EDE6D6] mb-6">
          Chez Lily Candles, nous fabriquons des bougies 100 % naturelles à
          partir de cire d'abeille pure et d'huiles essentielles soigneusement
          sélectionnées. Chaque bougie est coulée à la main, dans le respect des
          traditions artisanales et de la nature.
        </p>

        <p className="font-ma-police-2 text-base md:text-lg leading-relaxed text-[#EDE6D6] mb-8">
          Au-delà de la lumière, nos bougies diffusent une atmosphère apaisante
          aux vertus relaxantes et purifiantes — pensées pour accompagner vos
          moments de bien-être, de méditation et de ressourcement.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <li className="font-ma-police-2 text-sm text-[#EDE6D6]">
            <span className="block text-[#D8CC34] text-lg font-ma-police-2">100 %</span>
            Cire naturelle
          </li>
          <li className="font-ma-police-2 text-sm text-[#EDE6D6]">
            <span className="block text-[#D8CC34] text-lg font-ma-police-2">0 %</span>
            Produits chimiques
          </li>
          <li className="font-ma-police-2 text-sm text-[#EDE6D6]">
            <span className="block text-[#D8CC34] text-lg font-ma-police-2">Fait main</span>
            En petites séries
          </li>
        </ul>

        <button className="inline-flex items-center gap-2 bg-[#D8CC34] text-[#52592D] text-sm uppercase tracking-widest px-8 py-3 font-ma-police hover:bg-[#FFE9D4] transition">
          Découvrir nos bougies <span>→</span>
        </button>
      </div>
    </section>
  );
}