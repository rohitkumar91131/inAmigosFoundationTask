import dbConnect from '@/lib/dbConnect';
import Photo from '@/models/Photo';
import GalleryGrid from '@/components/ui/GalleryGrid';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'What We Do | InAmigos Foundation',
  description: 'See our real impact on the ground through our community initiatives.',
};

async function getInitialPhotos() {
  try {
    await dbConnect();
    const photos = await Photo.find({}).sort({ createdAt: -1 }).limit(9).lean();
    const total = await Photo.countDocuments();
    
    return {
      photos: photos.map(photo => ({
        ...photo,
        _id: photo._id.toString(),
        createdAt: photo.createdAt.toISOString()
      })),
      hasMore: photos.length < total
    };
  } catch (error) {
    console.error('Failed to fetch initial photos:', error);
    return { photos: [], hasMore: false };
  }
}

export default async function WhatWeDoPage() {
  const { photos, hasMore } = await getInitialPhotos();

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 md:mb-16 border-b border-black dark:border-white pb-6 md:pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter mb-4">
            Our Impact.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-light text-lg max-w-2xl">
            Real actions, real results. Browse through our visual gallery to see the on-the-ground initiatives, community support, and volunteer efforts driving our mission forward.
          </p>
        </div>

        {/* Client Gallery Grid */}
        <GalleryGrid initialPhotos={photos} initialHasMore={hasMore} />

      </div>
    </div>
  );
}