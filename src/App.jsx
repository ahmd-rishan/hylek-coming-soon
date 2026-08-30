import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroContent } from './components/HeroContent';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized mouse offset from center (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative w-full min-h-[100svh] overflow-x-hidden flex flex-col justify-between select-none bg-[#070908]">
      {/* Background Container with Parallax + Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
        <div
          className="absolute -inset-6 sm:-inset-10 bg-cover bg-center animate-slow-zoom transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0) scale(1.04)`,
          }}
        />

        {/* Cinematic Multi-layered Dark Overlays */}
        {/* 1. Vignette radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.92)_100%)]" />

        {/* 2. Vertical atmosphere gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85" />

        {/* 3. Subtle ambient grain/mesh texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Main Page Layout Structure */}
      <div className="relative z-10 flex flex-col justify-between min-h-[100svh] w-full max-w-7xl mx-auto px-0">
        <Header onOpenModal={() => setIsModalOpen(true)} />

        <HeroContent />

        <div className="flex flex-col items-center gap-1 shrink-0 w-full">
          <SocialLinks onEmailClick={() => setIsModalOpen(true)} />
          <Footer />
        </div>
      </div>

      {/* Interactive Email Signup Modal */}
      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

export default App;
