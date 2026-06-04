import Image from "next/image";
import Navbar from "../compoments/Navbar";
import { BackgroundGradientAnimation } from "../compoments/background-gradient-animation";
import About from "../compoments/About";



export default function Home() {
  return (
   <>
     <Navbar/>
       <BackgroundGradientAnimation>
        
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <h1 className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b font-ma-police-2  from-white/90 to-white/30">
         lyli candel's 
        </h1>
      </div>
       </BackgroundGradientAnimation>
       <About/>
   
   </>
  );
}
