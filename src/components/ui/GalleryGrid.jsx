'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';
import GallerySkeleton from './GallerySkeleton';

export default function GalleryGrid({ initialPhotos, initialHasMore }) {
  const [photos, setPhotos] = useState(initialPhotos || []);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const observer = useRef();

  // The function to grab the next batch of images
  const fetchPhotos = async (pageNumber) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/gallery?page=${pageNumber}&limit=9`);
      const data = await res.json();
      
      if (data.photos && data.photos.length > 0) {
        // Append new photos to the existing array
        setPhotos(prev => [...prev, ...data.photos]);
        setHasMore(data.hasMore);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching photos", error);
    } finally {
      setIsLoading(false);
    }
  };

  // The Sensor: Watches the last image in the grid
  const lastPhotoElementRef = useCallback(node => {
    if (isLoading) return; // Stop watching if we are already fetching
    if (observer.current) observer.current.disconnect(); // Clear old sensor
    
    observer.current = new IntersectionObserver(entries => {
      // If the last image crosses into view AND there are more images in the DB
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => {
          const nextPage = prevPage + 1;
          fetchPhotos(nextPage);
          return nextPage;
        });
      }
    });
    
    if (node) observer.current.observe(node); // Attach sensor to the new node
  }, [isLoading, hasMore]);

  // Lock background scroll & animate the Lightbox modal
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
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {photos.map((photo, index) => {
          // Identify the very last photo to attach the sensor
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

      {/* Infinite Scroll Skeleton (Appears at the bottom when fetching the next page) */}
      {isLoading && photos.length > 0 && (
        <div className="mt-6">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            <div className="break-inside-avoid w-full h-[300px] bg-gray-200 dark:bg-gray-900 rounded-sm animate-pulse" />
            <div className="break-inside-avoid w-full h-[250px] bg-gray-200 dark:bg-gray-900 rounded-sm animate-pulse hidden sm:block" />
            <div className="break-inside-avoid w-full h-[350px] bg-gray-200 dark:bg-gray-900 rounded-sm animate-pulse hidden md:block" />
          </div>
        </div>
      )}

      {/* Full Screen Black Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal fixed inset-0 z-[100] bg-black flex items-center justify-center p-4 md:p-12">
          {/* Top Right Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-[101]"
          >
            <X size={36} />
          </button>
          
          {/* Main Focused Image */}
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