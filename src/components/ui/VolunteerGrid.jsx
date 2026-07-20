'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function VolunteerGrid({ volunteers }) {
  const container = useRef();

  // Smooth stagger animation for the team cards
  useGSAP(() => {
    gsap.from('.volunteer-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    });
  }, { scope: container });

  if (!volunteers || volunteers.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 font-light border border-dashed border-gray-300 dark:border-gray-800">
        Our volunteer roster is currently being updated.
      </div>
    );
  }

  return (
    <div ref={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-16">
      {volunteers.map((volunteer, index) => (
        <div key={volunteer._id || index} className="volunteer-card group cursor-pointer text-center">
          {/* Portrait Image */}
          <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-full mx-auto max-w-[250px]">
            <img 
              src={volunteer.imageUrl} 
              alt={volunteer.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              loading="lazy"
            />
            {/* Dark overlay that fades on hover */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Details */}
          <h3 className="text-xl font-bold text-black dark:text-white uppercase tracking-wide mb-1">
            {volunteer.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 font-light tracking-widest text-sm uppercase">
            {volunteer.role}
          </p>
        </div>
      ))}
    </div>
  );
}