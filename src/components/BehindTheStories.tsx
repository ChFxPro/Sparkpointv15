'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Camera } from 'lucide-react';
import interviewOutdoor from 'figma:asset/28635c221385162e7318f9ca720b599fe97a1bb5.png';
import interviewIndoor from 'figma:asset/9c661c719237d099265f1fb1d61cc2e4d16fcc41.png';
import portraitBlue from 'figma:asset/804331be6917486c365a5471a09f615ba2d0f66b.png';
import filmingSetup from 'figma:asset/183c96a680c45035b0835db81082bdb93af69f97.png'; // Reusing from AboutPage for variety

interface StoryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  credit?: string;
}

const IMAGES: StoryImage[] = [
  {
    id: 'outdoor-interview',
    src: interviewOutdoor,
    alt: 'Interview taking place outdoors in front of a colorful mural',
    caption: 'Listening in public spaces — where people already are.',
  },
  {
    id: 'indoor-setup',
    src: interviewIndoor,
    alt: 'Behind the scenes of a filmed interview with lighting equipment',
    caption: 'Careful, consent-first documentary work.',
  },
  {
    id: 'portrait-blue',
    src: portraitBlue,
    alt: 'Close up portrait of a community member speaking',
    caption: 'Creating room for someone to be heard.',
  },
  {
    id: 'filming-setup',
    src: filmingSetup,
    alt: 'Filming an interview',
    caption: 'Behind the scenes of community listening.',
  }
];

export function BehindTheStories() {
  const [selectedImage, setSelectedImage] = useState<StoryImage | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl">
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">
            Behind the Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
            This is what listening looks like.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-2xl">
            Story collection happens in real places, with real people — built around trust, consent, and care.
          </p>
        </div>
      </div>

      {/* Filmstrip Gallery */}
      <div 
        ref={scrollContainerRef}
        className="relative flex overflow-x-auto pb-12 px-6 space-x-6 snap-x snap-mandatory scrollbar-hide -mx-6 md:mx-0 pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
        style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        }}
      >
        {IMAGES.map((image, index) => (
          <motion.div
            key={image.id}
            className="flex-shrink-0 snap-center first:pl-6 last:pr-6 md:first:pl-0 md:last:pr-24"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div 
              className="relative group cursor-pointer w-[85vw] md:w-[500px] aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              onClick={() => setSelectedImage(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(image);
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              
              {/* Caption Chip */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-gray-100 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium text-gray-800 flex items-center gap-2">
                    <Camera size={14} className="text-gray-400" />
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer for end of scroll */}
        <div className="w-6 flex-shrink-0" />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md z-50"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#111]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] w-auto object-contain"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center max-w-xl"
              >
                <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
                  {selectedImage.caption}
                </p>
                <p className="text-sm text-white/50 mt-2 font-mono uppercase tracking-widest">
                  SparkPoint Story Collection
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
