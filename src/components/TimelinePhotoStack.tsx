'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface TimelineImage {
  src: string;
  caption: string;
}

interface TimelinePhotoStackProps {
  images: TimelineImage[];
  label?: string;
  milestoneYear?: string;
}

export function TimelinePhotoStack({ images, label, milestoneYear }: TimelinePhotoStackProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Take up to 3 images for the stack
  const stackImages = images.slice(0, 3);
  
  // Fixed rotations for the visual stack to look "curated"
  const rotations = [-3, 2, -1]; 

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="flex flex-col items-center group/stack">
        <div 
          className="relative w-[280px] md:w-[320px] aspect-[4/3] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {stackImages.map((img, index) => {
            // Reverse index for z-index (0 is top)
            const isTop = index === 0;
            const zIndex = 30 - index * 10;
            const rotation = rotations[index % rotations.length];
            
            return (
              <motion.div
                key={img.src}
                className="absolute inset-0 bg-white p-2 rounded-xl shadow-lg border-2 border-white transition-transform duration-300 ease-out group-hover/stack:scale-[1.02]"
                style={{
                  zIndex,
                  transform: `rotate(${rotation}deg) translateY(${index * 8}px) translateX(${index * 4}px)`,
                }}
                whileHover={isTop ? { y: -5 } : {}}
              >
                <div className="w-full h-full overflow-hidden rounded-lg bg-gray-100 relative">
                  <img 
                    src={img.src} 
                    alt={img.caption} 
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle scrim/overlay for depth on non-top items */}
                  {!isTop && <div className="absolute inset-0 bg-black/10" />}
                </div>
              </motion.div>
            );
          })}
          
          {/* Hover Overlay with Icon on Top Card */}
          <motion.div 
            className="absolute inset-0 z-40 flex items-center justify-center opacity-0 group-hover/stack:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ transform: `rotate(${rotations[0]}deg)` }}
          >
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 text-white shadow-xl">
              <Maximize2 className="w-5 h-5" />
            </div>
          </motion.div>
        </div>

        {/* Caption & Interaction */}
        <div className="mt-8 flex flex-col items-center gap-2">
          {label && (
             <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium tracking-wider text-white/60 uppercase">
               {label}
             </span>
          )}
          <button 
            onClick={() => setIsOpen(true)}
            className="text-xs text-[#E03694] font-semibold hover:text-[#E03694]/80 transition-colors flex items-center gap-1.5"
          >
            View gallery
            <span className="w-1 h-1 rounded-full bg-current" />
            {images.length} photos
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent hideCloseButton className="max-w-4xl w-full bg-[#0a0a0a] border-white/10 p-0 overflow-hidden text-white sm:rounded-2xl">
          <VisuallyHidden>
            <DialogTitle>Photo Gallery: {milestoneYear} - {label}</DialogTitle>
            <DialogDescription>A gallery of images from {milestoneYear}</DialogDescription>
          </VisuallyHidden>
          
          <div className="relative aspect-[16/9] md:aspect-[3/2] w-full bg-black flex items-center justify-center">
             <AnimatePresence mode="wait">
               <motion.img
                 key={currentIndex}
                 src={images[currentIndex].src}
                 alt={images[currentIndex].caption}
                 initial={{ opacity: 0, scale: 1.05 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.4 }}
                 className="max-h-full max-w-full object-contain"
               />
             </AnimatePresence>
             
             {/* Controls */}
             <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="pointer-events-auto rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 backdrop-blur-md h-10 w-10 md:h-12 md:w-12"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="pointer-events-auto rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 backdrop-blur-md h-10 w-10 md:h-12 md:w-12"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
             </div>

             {/* Close Button (Desktop overlay style) */}
             <button 
               onClick={() => setIsOpen(false)}
               className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white/80 hover:text-white transition-colors border border-white/10"
               aria-label="Close gallery"
             >
               <X className="w-5 h-5" />
             </button>
          </div>
          
          {/* Caption Bar */}
          <div className="p-4 md:p-6 bg-[#111] border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
               <p className="text-sm md:text-base font-medium text-white">
                 {images[currentIndex].caption}
               </p>
               <p className="text-xs text-white/50 uppercase tracking-wide">
                 {currentIndex + 1} of {images.length}
               </p>
            </div>
            {milestoneYear && (
               <div className="text-[#E03694] font-bold text-xl opacity-90">
                 {milestoneYear}
               </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
