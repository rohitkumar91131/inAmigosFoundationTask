import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-green-600 dark:bg-green-700 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Make a Real Difference?
        </h2>
        <p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">
          Whether you want to volunteer your time, donate, or simply learn more about our ongoing campaigns, we would love to hear from you.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-green-700 hover:bg-gray-100 font-bold transition-all shadow-xl transform hover:-translate-y-1"
        >
          Contact Us <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}