'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const navRef = useRef();
  const overlayRef = useRef();
  const menuRef = useRef();

  // Ensure theme icons only load after mounting to prevent hydration errors
  useEffect(() => setMounted(true), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // GSAP Animations for Mobile Menu (Sexy top-to-bottom slide)
  const { contextSafe } = useGSAP({ scope: navRef });

  const toggleMenuAnimations = contextSafe((show) => {
    if (show) {
      // 1. Fade in blurred overlay
      gsap.to(overlayRef.current, { 
        display: 'block', 
        opacity: 1, 
        duration: 0.3, 
        ease: 'power2.out' 
      });
      // 2. Slide down the menu from top
      gsap.fromTo(menuRef.current, 
        { yPercent: -100, display: 'none' },
        { yPercent: 0, display: 'block', duration: 0.6, ease: 'power4.out' }
      );
      // 3. Stagger the links sliding up inside the menu
      gsap.fromTo('.mobile-link',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, delay: 0.2, ease: 'power2.out' }
      );
    } else {
      // Slide menu back up
      gsap.to(menuRef.current, { 
        yPercent: -100, 
        duration: 0.4, 
        ease: 'power3.in' 
      });
      // Fade out overlay
      gsap.to(overlayRef.current, { 
        opacity: 0, 
        duration: 0.4, 
        onComplete: () => {
          gsap.set([overlayRef.current, menuRef.current], { display: 'none' });
        }
      });
    }
  });

  // Trigger animations when isOpen state changes
  useEffect(() => {
    toggleMenuAnimations(isOpen);
  }, [isOpen, toggleMenuAnimations]);

  return (
    <nav ref={navRef} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 relative z-50" onClick={() => setIsOpen(false)}>
              <div className="bg-white p-1 rounded-full inline-flex shadow-sm">
                <Image 
                  src="/assets/logo.png" 
                  alt="InAmigos Foundation Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight hidden sm:block">
                InAmigos Foundation
              </span>
            </Link>
          </div>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">Home</Link>
            <Link href="/who-we-are" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">Who We Are</Link>
            <Link href="/what-we-do" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">What We Do</Link>
            <Link href="/get-involved" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">Get Involved</Link>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors">Contact Us</Link>
            
            {/* Desktop Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>

          {/* Mobile Actions (Theme Toggle + Hamburger) */}
          <div className="md:hidden flex items-center gap-4 relative z-50">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 dark:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Blurred Backdrop Overlay (Closes menu on click) */}
      <div 
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 hidden"
      />

      {/* Mobile Menu Panel (Slides from Top) */}
      <div 
        ref={menuRef} 
        className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-45 hidden shadow-2xl rounded-b-3xl pt-24 pb-8 px-6 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="flex flex-col space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="mobile-link text-2xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">Home</Link>
          <Link href="/who-we-are" onClick={() => setIsOpen(false)} className="mobile-link text-2xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">Who We Are</Link>
          <Link href="/what-we-do" onClick={() => setIsOpen(false)} className="mobile-link text-2xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">What We Do</Link>
          <Link href="/get-involved" onClick={() => setIsOpen(false)} className="mobile-link text-2xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">Get Involved</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mobile-link text-2xl font-bold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}