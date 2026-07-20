import GallerySkeleton from '@/components/ui/GallerySkeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header (Matches the real page so it doesn't jump) */}
        <div className="mb-12 md:mb-16 border-b border-black dark:border-white pb-6 md:pb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter mb-4">
            Our Impact.
          </h1>
          {/* Pulsing paragraph placeholder */}
          <div className="h-6 w-full md:w-2/3 bg-gray-200 dark:bg-gray-900 animate-pulse rounded-sm mt-4"></div>
          <div className="h-6 w-3/4 md:w-1/2 bg-gray-200 dark:bg-gray-900 animate-pulse rounded-sm mt-2"></div>
        </div>

        {/* The actual masonry skeleton */}
        <GallerySkeleton />

      </div>
    </div>
  );
}