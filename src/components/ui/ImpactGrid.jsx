import Image from 'next/image';

export default function ImpactGrid() {
  // Placeholder data - later you will map over your MongoDB Photo schema here
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop', alt: 'Charity Work 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1593113580326-89689885c490?q=80&w=800&auto=format&fit=crop', alt: 'Charity Work 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=800&auto=format&fit=crop', alt: 'Charity Work 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop', alt: 'Charity Work 4' },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact on the Ground</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">Real actions, real results. Take a look at our recent initiatives and community support programs.</p>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 row-span-2 relative h-[400px] rounded-2xl overflow-hidden group">
            <Image src={photos[0].url} alt={photos[0].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          <div className="relative h-[188px] rounded-2xl overflow-hidden group">
            <Image src={photos[1].url} alt={photos[1].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative h-[188px] rounded-2xl overflow-hidden group">
            <Image src={photos[2].url} alt={photos[2].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}