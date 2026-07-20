export default function GallerySkeleton() {
  const heights = ['h-[300px]', 'h-[400px]', 'h-[250px]', 'h-[500px]', 'h-[350px]', 'h-[450px]', 'h-[300px]', 'h-[250px]', 'h-[400px]'];
  
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
      {heights.map((height, i) => (
        <div 
          key={i} 
          className={`break-inside-avoid w-full ${height} bg-gray-200 dark:bg-gray-900 rounded-sm animate-pulse`}
        />
      ))}
    </div>
  );
}