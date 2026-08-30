import React from 'react';
import { Logo } from './Logo';

export const Header = ({ onOpenModal }) => {
  return (
    <header className="w-full px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between z-30 animate-slide-down">
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
        <Logo />
      </a>

      {/* CTA Button */}
      <button
        onClick={onOpenModal}
        className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-white bg-black/30 backdrop-blur-md border border-[#FFD21F] rounded-[7px] transition-all duration-250 hover:bg-[#FFD21F] hover:text-black hover:shadow-[0_0_20px_rgba(255,210,31,0.3)] active:scale-95 cursor-pointer group"
      >
        <span>Join Our Journey</span>
        <span className="ml-1.5 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </button>
    </header>
  );
};
