import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Brand & Address */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-full inline-flex">
                <Image 
                  src="/assets/logo.png" 
                  alt="InAmigos Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                InAmigos Foundation
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Ward No. 5, Gram Post, Sipat Ujwal Nagar, <br />
              Bilaspur. Chhattisgarh <br />
              Pin-Code: 495555
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-lg font-semibold mb-2">Quick Links</h3>
            <Link href="/who-we-are" className="hover:text-green-500 transition-colors w-fit">Who We Are</Link>
            <Link href="/what-we-do" className="hover:text-green-500 transition-colors w-fit">What We Do</Link>
            <Link href="/get-involved" className="hover:text-green-500 transition-colors w-fit">Get Involved</Link>
            <Link href="/contact" className="hover:text-green-500 transition-colors w-fit">Contact Us</Link>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-lg font-semibold mb-2">Connect With Us</h3>
            <p className="text-sm flex items-center gap-2">
              <span className="font-medium text-gray-200">Phone:</span> 
              <a href="tel:+916267309902" className="hover:text-green-500 transition-colors">+91 626 730 9902</a>
            </p>
            <p className="text-sm flex flex-col gap-1 mt-2">
              <span className="font-medium text-gray-200">Email:</span>
              <a href="mailto:support@inamigosfoundation.org.in" className="hover:text-green-500 transition-colors">
                support@inamigosfoundation.org.in
              </a>
              <a href="mailto:inamigosfoundation@gmail.com" className="hover:text-green-500 transition-colors">
                inamigosfoundation@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Section: Copyright & Developer Credits */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} InAmigos Foundation. All Rights Reserved.</p>
          
          {/* Developer Credits */}
          <div className="flex items-center gap-3">
            <span>Developed by <span className="font-medium text-gray-300">Rohit Kumar</span></span>
            
            {/* GitHub Icon */}
            <a 
              href="https://github.com/rohitkumar91131" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a 
              href="https://www.linkedin.com/in/rohit-kumar-114037328/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}