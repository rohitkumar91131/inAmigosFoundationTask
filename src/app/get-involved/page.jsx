import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import dbConnect from '@/lib/dbConnect';
import Volunteer from '@/models/Volunteer';
import VolunteerGrid from '@/components/ui/VolunteerGrid';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Get Involved | InAmigos Foundation',
  description: 'Meet our dedicated team of volunteers and find out how you can join our mission.',
};

async function getVolunteers() {
  try {
    await dbConnect();
    const volunteers = await Volunteer.find({}).sort({ createdAt: -1 }).lean();
    return volunteers.map(v => ({
      ...v,
      _id: v._id.toString(),
      createdAt: v.createdAt?.toISOString() || null
    }));
  } catch (error) {
    console.error('Failed to fetch volunteers:', error);
    return [];
  }
}

export default async function GetInvolvedPage() {
  const volunteers = await getVolunteers();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 md:mb-20 border-b border-black dark:border-white pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter mb-6">
              Meet The Team.
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-light text-lg">
              The heart of the InAmigos Foundation is our people. Meet the dedicated volunteers driving change in Bilaspur, and discover how you can stand with us.
            </p>
          </div>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform shrink-0"
          >
            Become a Volunteer <ArrowRight size={18} />
          </Link>
        </div>

        {/* The Grid Component */}
        <VolunteerGrid volunteers={volunteers} />

      </div>
    </div>
  );
}