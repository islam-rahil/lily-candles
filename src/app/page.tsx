import Navbar from "../compoments/Navbar";
import { BackgroundGradientAnimation } from "../compoments/background-gradient-animation";
import About from "../compoments/About";

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
    </>
  );
}