'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.hero-text', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle grain or pure black background */}
      <div className="absolute inset-0 bg-black z-0"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="hero-text text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Empowering Communities.<br />
          Changing Lives.
        </h1>
        <p className="hero-text text-lg md:text-xl text-gray-400 mb-10 font-light max-w-2xl mx-auto">
          Join the InAmigos Foundation in building a brighter, more sustainable future for Bilaspur and beyond.
        </p>
        
        <div className="hero-text flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/get-involved" className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 font-semibold transition-all transform hover:-translate-y-1">
            Join the Cause
          </Link>
          <Link href="/what-we-do" className="px-8 py-4 rounded-full bg-transparent border border-white text-white hover:bg-white/10 font-semibold transition-all transform hover:-translate-y-1">
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}