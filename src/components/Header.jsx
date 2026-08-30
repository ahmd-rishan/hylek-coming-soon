import React from 'react';
import { Logo } from './Logo';

export const Header = ({ onOpenModal }) => {
  return (
    <header className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 lg:py-10 flex items-center justify-between z-30 animate-slide-down shrink-0 gap-2">
      {/* Brand Logo */}
      <a href="#" className="flex items-center group transition-opacity hover:opacity-90 shrink-0">
        <Logo />
      </a>

      {/* CTA Button */}
      <button
        onClick={onOpenModal}
        className="relative inline-flex items-center justify-center px-3 sm:px-5 lg:px-6 py-2 sm:py-3 lg:py-3.5 text-[11px] sm:text-sm lg:text-base font-medium tracking-wide text-white bg-black/40 backdrop-blur-md border border-[#FFD21F] rounded-[8px] transition-all duration-250 hover:bg-[#FFD21F] hover:text-black hover:shadow-[0_0_25px_rgba(255,210,31,0.35)] active:scale-95 cursor-pointer group shrink-0"
      >
        <span>Join Our Journey</span>
        <span className="ml-1 sm:ml-2 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </button>
    </header>
  );
};
