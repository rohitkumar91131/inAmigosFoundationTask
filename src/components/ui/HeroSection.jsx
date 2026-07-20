'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image / Gradient Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="hero-text text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Empowering Communities, <br />
          <span className="text-green-400">Changing Lives.</span>
        </h1>
        <p className="hero-text text-lg md:text-2xl text-gray-200 mb-10 font-light">
          Join the InAmigos Foundation in building a brighter, more sustainable future for Bilaspur and beyond.
        </p>
        
        <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-involved" className="px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1">
            Join the Cause
          </Link>
          <Link href="/what-we-do" className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/20 transition-all transform hover:-translate-y-1">
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}