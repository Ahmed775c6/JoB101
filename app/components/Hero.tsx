'use client'
import Link from "next/link";
import Options from "./Options";
import { useState } from "react";
const Hero = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
<>
    {
      showOptions && <Options onClose={() => { setShowOptions(false); }} />
    }
    <div className="relative flex flex-col justify-center items-center p-4 w-full min-h-screen gap-3 bg-black/90">
      {/* Background container for full coverage */}
      <div className="absolute inset-0 -z-10">
        {/* Replace with your actual background image */}
        <div className="bg-gray-900 w-full h-full" />
      </div>

      <div className="max-w-6xl w-full px-4 flex flex-col items-center">
        {/* Responsive heading with fluid sizing */}
        <h1 className='
          font-bold 
          text-4xl  /* Base mobile size */
          sm:text-5xl  
          md:text-7xl  
          lg:text-8xl  
          xl:text-8xl  
          leading-tight 
          tracking-tight
          text-white
        '>
          Welcome To Job 101
        </h1>
        
        {/* Responsive paragraph with margin adjustments */}
        <p className='
        text-white
          text-lg    
          sm:text-xl  
          md:text-2xl
          lg:text-3xl 
          mt-4     
          md:mt-6   
          mb-6     
          md:mb-10   
          max-w-2xl 
        '>
          Your Side Job Opportunity
        </p>
        
        {/* Responsive button with hover effect */}
        <button
          className='
          bg-gradient-to-r from-blue-600 to-purple-600 text-white
            px-4 py-3   
            md:px-6 md:py-4 
            rounded-sm 
            font-semibold 
            cursor-pointer 
            text-base   
            md:text-lg   
            hover:bg-opacity-80 
            transition-all
            duration-200
          ' 
        onClick={() => setShowOptions(!showOptions)}
        >
          Get Started For Free
        </button>
      </div>
    </div>
</>
  );
};

export default Hero;