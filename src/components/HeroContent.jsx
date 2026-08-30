import React from 'react';

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center z-20 px-4 sm:px-6 md:px-8 w-full max-w-[1100px] mx-auto my-auto py-2 sm:py-4 md:py-6">
      {/* Eyebrow */}
      <div className="animate-slide-up opacity-0 delay-200 mb-3 sm:mb-5 md:mb-6 max-w-[90vw] mx-auto">
        <span className="font-eyebrow text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.16em] sm:tracking-[0.25em] md:tracking-[0.32em] text-white/95 uppercase leading-relaxed drop-shadow-md inline-block">
          SOMETHING BIG IS BREWING AT <span className="text-[#FFD21F] font-bold inline-block">HYLEK.</span>
        </span>
      </div>

      {/* Main Heading: COMING SOON. */}
      <h1 className="hero-title font-heading font-black text-white uppercase text-center select-none animate-slide-up opacity-0 delay-400 drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)] w-full">
        <span className="block w-full">COMING</span>
        <span className="block w-full">
          SOON<span className="text-[#FFD21F] drop-shadow-[0_0_25px_rgba(255,210,31,0.6)]">.</span>
        </span>
      </h1>

      {/* Supporting Text */}
      <div className="mt-4 sm:mt-6 md:mt-8 space-y-1 sm:space-y-2 animate-slide-up opacity-0 delay-600 w-full max-w-[90%] sm:max-w-xl mx-auto">
        <p className="font-body text-xs sm:text-base md:text-lg text-white/90 font-light tracking-wide leading-relaxed drop-shadow">
          Bigger ideas. Bolder solutions. Built for what’s next.
        </p>
        <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 font-normal tracking-wider uppercase pt-0.5 sm:pt-1">
          Stay connected.
        </p>
      </div>
    </div>
  );
};
