import React from 'react';

export const Logo = ({ className = "h-6 md:h-7" }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`} aria-label="HYLEK. Logo">
      <span className="font-heading font-extrabold tracking-tight text-white text-2xl md:text-3xl leading-none lowercase">
        hylek<span className="text-[#FFD21F]">.</span>
      </span>
    </div>
  );
};
