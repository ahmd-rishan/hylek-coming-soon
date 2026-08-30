import React from 'react';

export const SocialLinks = ({ onEmailClick }) => {
  return (
    <div className="flex items-center justify-center gap-4 py-4 z-30">
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center text-white/90 transition-all duration-300 hover:border-[#FFD21F] hover:text-[#FFD21F] hover:bg-[#FFD21F]/10 hover:scale-110 hover:shadow-[0_0_16px_rgba(255,210,31,0.3)] animate-slide-up opacity-0 delay-500 group"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
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
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center text-white/90 transition-all duration-300 hover:border-[#FFD21F] hover:text-[#FFD21F] hover:bg-[#FFD21F]/10 hover:scale-110 hover:shadow-[0_0_16px_rgba(255,210,31,0.3)] animate-slide-up opacity-0 delay-600 group"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
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
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center text-white/90 transition-all duration-300 hover:border-[#FFD21F] hover:text-[#FFD21F] hover:bg-[#FFD21F]/10 hover:scale-110 hover:shadow-[0_0_16px_rgba(255,210,31,0.3)] animate-slide-up opacity-0 delay-700 group"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110"
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
