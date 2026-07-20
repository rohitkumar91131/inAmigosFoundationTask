'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navContainer = useRef();
  const mobileMenuRef = useRef();

  // 1. Initial Load Animations (Desktop & Global)
  useGSAP(() => {
    // Drop the entire navbar in from the top
    gsap.from(navContainer.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });

    // Stagger the desktop links fading in
    gsap.from('.nav-link', {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      delay: 0.3,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, { scope: navContainer });

  // 2. Mobile Menu Toggle Animations
  useGSAP(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        display: 'block'
      });
      // Stagger mobile links sliding in from the left
      gsap.fromTo('.mobile-link', 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(1.7)' }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
        display: 'none'
      });
    }
  }, [isOpen]);

  return (
    <nav ref={navContainer} className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/assets/logo.png" 
                alt="InAmigos Foundation Logo" 
                width={50} 
                height={50} 
                className="object-contain"
                priority
              />
              <span className="text-xl font-bold text-gray-800 tracking-tight hidden sm:block">
                InAmigos Foundation
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link text-gray-700 hover:text-green-600 font-medium transition">Home</Link>
            <Link href="/who-we-are" className="nav-link text-gray-700 hover:text-green-600 font-medium transition">Who We Are</Link>
            <Link href="/what-we-do" className="nav-link text-gray-700 hover:text-green-600 font-medium transition">What We Do</Link>
            <Link href="/get-involved" className="nav-link text-gray-700 hover:text-green-600 font-medium transition">Get Involved</Link>
            <Link href="/contact" className="nav-link text-gray-700 hover:text-green-600 font-medium transition">Contact Us</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        ref={mobileMenuRef} 
        className="md:hidden overflow-hidden bg-white border-t border-gray-100 hidden"
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col shadow-inner">
          <Link href="/" onClick={() => setIsOpen(false)} className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50">Home</Link>
          <Link href="/who-we-are" onClick={() => setIsOpen(false)} className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50">Who We Are</Link>
          <Link href="/what-we-do" onClick={() => setIsOpen(false)} className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50">What We Do</Link>
          <Link href="/get-involved" onClick={() => setIsOpen(false)} className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50">Get Involved</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mobile-link block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}