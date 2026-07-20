'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import GallerySkeleton from './GallerySkeleton';

export default function GalleryGrid({ initialPhotos, initialHasMore }) {
  const [photos, setPhotos] = useState(initialPhotos || []);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const observer = useRef();

  const fetchPhotos = async (pageNumber) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/gallery?page=${pageNumber}&limit=9`);
      const data = await res.json();
      
      if (data.photos) {
        setPhotos(prev => [...prev, ...data.photos]);
        setHasMore(data.hasMore);
      }
    } catch (error) {
      console.error("Error fetching photos", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Observer attached to the last image to trigger next page fetch
  const lastPhotoElementRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => {
          const nextPage = prevPage + 1;
          fetchPhotos(nextPage);
          return nextPage;
        });
      }
    });
    
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore]);

  // Lock scroll & animate lightbox
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.lightbox-modal', { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <>
      {photos.length === 0 && isLoading ? (
        <GallerySkeleton />
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => {
            const isLast = photos.length === index + 1;
            return (
              <div 
                ref={isLast ? lastPhotoElementRef : null}
                key={photo._id || index} 
                onClick={() => setSelectedImage(photo)}
                className="break-inside-avoid relative overflow-hidden group bg-gray-100 dark:bg-gray-900 cursor-zoom-in"
              >
                <img 
                  src={photo.imageUrl || photo.url} 
                  alt={photo.altText || 'Foundation Work'} 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>
      )}

      {/* Infinite Scroll Loader */}
      {isLoading && photos.length > 0 && (
        <div className="flex justify-center py-12">
          <Loader2 className="w-6 h-6 text-black dark:text-white animate-spin" />
        </div>
      )}

      {/* Full Screen Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-12">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-[101]"
          >
            <X size={36} />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage.imageUrl || selectedImage.url} 
              alt={selectedImage.altText || 'Expanded View'}
              className="max-w-full max-h-full object-contain select-none"
            />
          </div>
        </div>
      )}
    </>
  );
}