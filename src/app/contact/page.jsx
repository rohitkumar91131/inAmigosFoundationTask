'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const container = useRef();
  
  // Pre-filled with basic defaults for testing
  const [formData, setFormData] = useState({
    fullName: 'Rohit Kumar',
    email: 'rk34190100@gmail.com',
    message: ''
  });

  // Smooth entry animation
  useGSAP(() => {
    gsap.from('.contact-animate', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: container });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message ready to be sent! (API wiring pending)');
  };

  return (
    <div ref={container} className="min-h-screen bg-white dark:bg-black transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Breadcrumb removed, responsive text sizing added) */}
        <div className="contact-animate mb-12 md:mb-16 border-b border-black dark:border-white pb-6 md:pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter">
            Get in Touch.
          </h1>
        </div>

        {/* Adjusted gaps for mobile screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="contact-animate flex flex-col space-y-8 md:space-y-10">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4 md:mb-6">Contact Information</h2>
              <p className="text-gray-500 dark:text-gray-400 font-light max-w-sm text-sm md:text-base">
                Have a question or want to get involved? Reach out to us directly using the details below or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black dark:text-white uppercase tracking-wider text-xs md:text-sm mb-1">Address</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light text-sm md:text-base">
                    Ward No. 5, Gram Post, Sipat Ujwal Nagar,<br />
                    Bilaspur. Chhattisgarh<br />
                    Pin-Code: 495555
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black dark:text-white uppercase tracking-wider text-xs md:text-sm mb-1">Phone</h3>
                  <a href="tel:+916267309902" className="text-gray-500 dark:text-gray-400 font-light hover:text-black dark:hover:text-white transition-colors text-sm md:text-base">
                    +91 626 730 9902
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-black dark:text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-black dark:text-white uppercase tracking-wider text-xs md:text-sm mb-1">Email</h3>
                  <div className="flex flex-col gap-1">
                    {/* Added break-all for mobile so long emails don't break the layout */}
                    <a href="mailto:support@inamigosfoundation.org.in" className="text-gray-500 dark:text-gray-400 font-light hover:text-black dark:hover:text-white transition-colors text-sm md:text-base break-all">
                      support@inamigosfoundation.org.in
                    </a>
                    <a href="mailto:inamigosfoundation@gmail.com" className="text-gray-500 dark:text-gray-400 font-light hover:text-black dark:hover:text-white transition-colors text-sm md:text-base break-all">
                      inamigosfoundation@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="contact-animate">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <label htmlFor="fullName" className="block text-xs md:text-sm font-semibold text-black dark:text-white uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors font-light placeholder-gray-400 text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-black dark:text-white uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors font-light placeholder-gray-400 text-sm md:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-black dark:text-white uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 md:py-3 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors font-light placeholder-gray-400 resize-none text-sm md:text-base"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* Button scales to full width on mobile, auto on desktop */}
              <button
                type="submit"
                className="group flex items-center justify-center w-full md:w-auto gap-3 px-8 py-3 md:py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform"
              >
                Submit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}