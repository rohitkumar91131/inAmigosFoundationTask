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

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p>© {new Date().getFullYear()} InAmigos Foundation. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Developed by Visho Infotech</p>
        </div>

      </div>
    </footer>
  );
}