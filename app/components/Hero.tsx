import Link from "next/link";

const Hero = () => {
  return (
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
          sm:text-5xl  /* 640px+ */
          md:text-7xl  /* 768px+ */
          lg:text-8xl  /* 1024px+ */
          xl:text-8xl  /* 1280px+ */
          leading-tight 
          tracking-tight
          text-white
        '>
          Welcome To Job 101
        </h1>
        
        {/* Responsive paragraph with margin adjustments */}
        <p className='
        text-white
          text-lg    /* Base mobile size */
          sm:text-xl  /* 640px+ */
          md:text-2xl /* 768px+ */
          lg:text-3xl /* 1024px+ */
          mt-4      /* Top margin mobile */
          md:mt-6   /* Top margin on medium screens */
          mb-6      /* Bottom margin mobile */
          md:mb-10   /* Bottom margin on medium screens */
          max-w-2xl /* Prevent overly long lines */
        '>
          Your Side Job Opportunity
        </p>
        
        {/* Responsive button with hover effect */}
        <Link 
          className='
            bg-white 
            text-black 
            px-4 py-3    /* Base padding */
            md:px-6 md:py-4 /* Larger padding on medium+ */
            rounded-sm 
            font-semibold 
            cursor-pointer 
            text-base    /* Base text size */
            md:text-lg   /* Larger text on medium+ */
            hover:bg-opacity-80 /* Hover effect */
            transition-all
            duration-200
          ' 
          href="/"
        >
          Get Started For Free
        </Link>
      </div>
    </div>
  );
};

export default Hero;