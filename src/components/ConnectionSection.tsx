'use client';

import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ConnectionSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#FFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
          >
            <h2
              className="mb-6"
              style={{
                color: '#1A1A1A',
                fontSize: '2.5rem',
                lineHeight: '1.2',
                letterSpacing: '-1px'
              }}
            >
              Connection in Action.
            </h2>
            <p
              style={{
                color: '#666666',
                fontSize: '1.125rem',
                lineHeight: '1.5'
              }}
            >
              Every day, SparkPoint creates opportunities for meaningful connection — 
              bringing together neighbors, partners, and resources to build a stronger, 
              more resilient community. Through intentional design and collaborative action, 
              we transform individual moments into collective impact.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
            className="relative"
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760783320455-f7092d00fade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBkaW5pbmclMjBwZW9wbGUlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzYxMDk3MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community connection"
              className="w-full h-full object-cover"
              style={{ aspectRatio: '16/10' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
