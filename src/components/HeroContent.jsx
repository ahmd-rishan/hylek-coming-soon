import React from 'react';

export const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center z-20 px-4 sm:px-6 md:px-8 w-[min(92vw,1600px)] mx-auto my-auto py-2 sm:py-4">
      {/* Eyebrow */}
      <div className="animate-slide-up opacity-0 delay-200 mb-4 sm:mb-6 md:mb-8 max-w-full mx-auto">
        <span className="font-eyebrow text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-[0.18em] sm:tracking-[0.26em] md:tracking-[0.34em] text-white/95 uppercase leading-relaxed drop-shadow-md inline-block">
          SOMETHING BIG IS BREWING AT <span className="text-[#FFD21F] font-bold inline-block">HYLEK.</span>
        </span>
      </div>

      {/* Main Heading: COMING SOON. (Strictly 2 unbroken lines) */}
      <h1 className="hero-title font-heading font-black text-white uppercase text-center select-none animate-slide-up opacity-0 delay-400 drop-shadow-[0_12px_40px_rgba(0,0,0,0.65)] w-full">
        <span className="hero-word w-full">COMING</span>
        <span className="hero-word w-full">
          SOON<span className="text-[#FFD21F] drop-shadow-[0_0_30px_rgba(255,210,31,0.65)]">.</span>
        </span>
      </h1>

      {/* Supporting Copy */}
      <div className="mt-6 sm:mt-8 md:mt-10 space-y-2 sm:space-y-2.5 animate-slide-up opacity-0 delay-600 w-full max-w-[92%] sm:max-w-2xl md:max-w-3xl mx-auto">
        <p className="font-body text-xs sm:text-base md:text-lg lg:text-xl text-white/90 font-light tracking-wide leading-relaxed drop-shadow">
          Bigger ideas. Bolder solutions. Built for what’s next.
        </p>
        <p className="font-body text-[11px] sm:text-xs md:text-sm lg:text-base text-white/70 font-normal tracking-wider uppercase pt-1">
          Stay connected.
        </p>
      </div>
    </div>
  );
};
