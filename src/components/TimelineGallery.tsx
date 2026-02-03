import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  src: string;
  caption: string;
  rotation: number; 
}

interface TimelineGalleryProps {
  images: GalleryItem[];
}

export function TimelineGallery({ images }: TimelineGalleryProps) {
  const [items, setItems] = useState(images);

  const moveTopToBottom = () => {
    setItems((prev) => {
      const newItems = [...prev];
      const topItem = newItems.pop(); // Remove last (top)
      if (topItem) {
        newItems.unshift(topItem); // Add to front (bottom)
      }
      return newItems;
    });
  };

  return (
    <div 
      className="relative h-64 w-full cursor-pointer group/gallery perspective-1000" 
      onClick={(e) => {
        e.stopPropagation();
        moveTopToBottom();
      }}
    >
      {/* Background hint */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] rounded-lg -z-10" />
      
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {items.map((photo, index) => {
            const isTop = index === items.length - 1;
            const isBottom = index === 0;
            
            // We only really see the top few items usually, but we render all
            // Calculate a stacked position
            // Top item is at 0,0
            // Items below are slightly offset
            
            // Reverse index for visual stacking logic
            const reverseIndex = (items.length - 1) - index;
            
            return (
              <motion.div
                layout
                key={photo.src}
                className="absolute w-full aspect-[4/3] bg-white p-2 shadow-md rounded-sm border border-gray-100 origin-center"
                style={{
                    zIndex: index,
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  rotate: isTop ? 0 : (index % 2 === 0 ? 3 : -3) + (reverseIndex * 2), 
                  scale: isTop ? 1 : 1 - (reverseIndex * 0.03), // Less shrinking
                  y: isTop ? 0 : -15 * reverseIndex, // More vertical spread upwards
                  x: isTop ? 0 : (reverseIndex % 2 === 0 ? 15 : -15) * reverseIndex, // Wider horizontal spread
                  opacity: 1,
                  filter: isTop ? 'none' : 'contrast(0.9)' // clearer background images
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    layout: { duration: 0.3 }
                }}
                whileHover={isTop ? { scale: 1.02 } : {}}
              >
                 <div className="relative w-full h-full overflow-hidden bg-gray-50 border border-gray-100 p-[0px] mx-[0px] my-[5px]">
                    <img 
                      src={photo.src} 
                      alt={photo.caption} 
                      className="w-full h-full object-cover object-[center_25%] pointer-events-none select-none"
                    />
                 </div>
                 
                 {isTop && (
                   <motion.div 
                     initial={{ opacity: 0, y: 5 }}
                     animate={{ opacity: 1, y: 0 }}
                     className="absolute -bottom-10 left-0 right-0 text-center"
                   >
                     <span className="inline-flex items-center gap-1.5 text-[10px] text-gray-500 font-medium tracking-wide uppercase bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
                       {photo.caption}
                       <span className="w-1 h-1 rounded-full bg-gray-300 mx-1" />
                       <span className="text-gray-400">Click to shuffle</span>
                     </span>
                   </motion.div>
                 )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
