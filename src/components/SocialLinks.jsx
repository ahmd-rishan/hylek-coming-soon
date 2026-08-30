import React from 'react';

export const SocialLinks = ({ onEmailClick }) => {
  return (
    <div className="flex items-center justify-center gap-3.5 sm:gap-4 md:gap-5 py-2 sm:py-3 z-30 shrink-0">
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center text-white/90 transition-all duration-300 hover:border-[#FFD21F] hover:text-[#FFD21F] hover:bg-[#FFD21F]/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,210,31,0.35)] animate-slide-up opacity-0 delay-500 group cursor-pointer"
      >
        <svg
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center text-white/90 transition-all duration-300 hover:border-[#FFD21F] hover:text-[#FFD21F] hover:bg-[#FFD21F]/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,210,31,0.35)] animate-slide-up opacity-0 delay-600 group cursor-pointer"
      >
        <svg
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      {/* Email */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onEmailClick();
        }}
        aria-label="Email"
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center text-white/90 transition-all duration-300 hover:border-[#FFD21F] hover:text-[#FFD21F] hover:bg-[#FFD21F]/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,210,31,0.35)] animate-slide-up opacity-0 delay-700 group cursor-pointer"
      >
        <svg
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>
    </div>
  );
};
