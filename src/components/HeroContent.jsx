import React from 'react';

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center z-20 px-4 max-w-5xl mx-auto my-auto py-6">
      {/* Eyebrow */}
      <div className="animate-slide-up opacity-0 delay-200 mb-4 sm:mb-6">
        <span className="font-eyebrow text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] md:tracking-[0.32em] text-white/95 uppercase drop-shadow-md">
          SOMETHING BIG IS BREWING AT <span className="text-[#FFD21F] font-bold">HYLEK.</span>
        </span>
      </div>

      {/* Main Heading: COMING SOON. */}
      <h1 className="hero-title font-heading font-black tracking-tighter text-white uppercase text-center select-none animate-slide-up opacity-0 delay-400 drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        <span className="block">COMING</span>
        <span className="block">
          SOON<span className="text-[#FFD21F] drop-shadow-[0_0_25px_rgba(255,210,31,0.6)]">.</span>
        </span>
      </h1>

      {/* Subtext */}
      <div className="mt-6 sm:mt-8 space-y-1.5 sm:space-y-2 animate-slide-up opacity-0 delay-600">
        <p className="font-body text-sm sm:text-base md:text-lg text-white/90 font-light tracking-wide max-w-xl mx-auto drop-shadow">
          Bigger ideas. Bolder solutions. Built for what’s next.
        </p>
        <p className="font-body text-xs sm:text-sm text-white/70 font-normal tracking-wider uppercase pt-1">
          Stay connected.
        </p>
      </div>
    </div>
  );
};
