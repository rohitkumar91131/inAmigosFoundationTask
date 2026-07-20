'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function MissionStats() {
  const sectionRef = useRef();

  useGSAP(() => {
    const numbers = gsap.utils.toArray('.stat-number');
    
    numbers.forEach((num) => {
      const target = parseInt(num.getAttribute('data-target'), 10);
      
      gsap.to(num, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        innerHTML: target,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: 'power2.out',
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-black transition-colors border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6 tracking-tight">Our Mission</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
            We are dedicated to uplifting underprivileged communities through direct action, education, and sustainable development. Every effort is a step toward equality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <div className="text-6xl font-black text-black dark:text-white mb-2 tracking-tighter">
              <span className="stat-number" data-target="500">0</span>+
            </div>
            <div className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 font-medium mt-4">Lives Impacted</div>
          </div>
          <div className="p-8">
            <div className="text-6xl font-black text-black dark:text-white mb-2 tracking-tighter">
              <span className="stat-number" data-target="50">0</span>+
            </div>
            <div className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 font-medium mt-4">Active Volunteers</div>
          </div>
          <div className="p-8">
            <div className="text-6xl font-black text-black dark:text-white mb-2 tracking-tighter">
              <span className="stat-number" data-target="15">0</span>+
            </div>
            <div className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 font-medium mt-4">Ongoing Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}