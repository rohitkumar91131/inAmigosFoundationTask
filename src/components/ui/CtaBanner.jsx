import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-32 bg-black dark:bg-white transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white dark:text-black mb-8 tracking-tighter">
          Ready to Make a Difference?
        </h2>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white dark:bg-black text-black dark:text-white hover:scale-105 font-bold transition-transform"
        >
          Contact Us <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}