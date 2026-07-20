import Image from 'next/image';

export default function ImpactGrid() {
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop', alt: 'Charity Work 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1593113580326-89689885c490?q=80&w=800&auto=format&fit=crop', alt: 'Charity Work 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=800&auto=format&fit=crop', alt: 'Charity Work 3' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4 tracking-tight">Impact on the Ground</h2>
            <p className="text-gray-500 dark:text-gray-400 font-light">Real actions, real results. A look at our recent initiatives.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 row-span-2 relative h-[500px] overflow-hidden group bg-gray-100 dark:bg-gray-900">
            <Image src={photos[0].url} alt={photos[0].alt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="relative h-[242px] overflow-hidden group bg-gray-100 dark:bg-gray-900">
            <Image src={photos[1].url} alt={photos[1].alt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="relative h-[242px] overflow-hidden group bg-gray-100 dark:bg-gray-900">
            <Image src={photos[2].url} alt={photos[2].alt} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}