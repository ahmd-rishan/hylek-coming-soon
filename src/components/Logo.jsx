import React from 'react';

export const Logo = ({ className = "" }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`} aria-label="HYLEK. Logo">
      <span className="font-heading font-extrabold tracking-tight text-white text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] xl:text-[2.4rem] leading-none lowercase">
        hylek<span className="text-[#FFD21F]">.</span>
      </span>
    </div>
  );
};
