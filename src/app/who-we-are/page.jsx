'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function WhoWeArePage() {
  const container = useRef();

  // Smooth entry animation for the text blocks
  useGSAP(() => {
    gsap.from('.story-animate', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <div ref={container} className="min-h-screen bg-white dark:bg-black transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="story-animate mb-16 md:mb-24 border-b border-black dark:border-white pb-8 md:pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-black dark:text-white tracking-tighter mb-6">
            Our Story.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-light text-xl md:text-3xl max-w-4xl leading-tight">
            Founded in Bilaspur, the InAmigos Foundation was built on a single, uncompromising belief: that collective action can rewrite the future of our communities.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
          <div className="story-animate">
            <h2 className="text-sm font-bold text-black dark:text-white uppercase tracking-widest mb-6 border-l-2 border-black dark:border-white pl-4">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
              To empower the underprivileged through sustainable initiatives in education, healthcare, and community development. We do not just provide aid; we build ecosystems of support that allow individuals to lift themselves out of poverty and crisis.
            </p>
          </div>
          
          <div className="story-animate">
            <h2 className="text-sm font-bold text-black dark:text-white uppercase tracking-widest mb-6 border-l-2 border-black dark:border-white pl-4">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
              A world where zip codes do not dictate destinies. We envision communities across Chhattisgarh and beyond where every child has access to learning, every family has basic healthcare, and no one is left behind in the pursuit of a dignified life.
            </p>
          </div>
        </div>

        {/* The Approach Section */}
        <div className="story-animate border-t border-gray-200 dark:border-gray-800 pt-16 md:pt-24 flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white tracking-tighter">
              How We Work.
            </h2>
          </div>
          <div className="md:w-2/3 space-y-12">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">01. Direct Action</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                We cut through red tape. When a community in Bilaspur needs resources, our volunteer network mobilizes immediately to deliver food, medical supplies, and educational materials directly to the source.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">02. Transparency</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                Trust is our most valuable asset. Every donation, every project, and every impact metric is tracked and openly shared. You always know exactly where your support is going.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">03. Sustainable Growth</h3>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                Short-term relief is critical, but long-term independence is the goal. We focus on skill-building and education to ensure communities can thrive long after our initial intervention.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="story-animate mt-24 md:mt-32 pt-12 border-t border-black dark:border-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xl md:text-2xl font-bold text-black dark:text-white">
            Be part of the change.
          </p>
          <Link 
            href="/contact" 
            className="group flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform"
          >
            Reach Out <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}