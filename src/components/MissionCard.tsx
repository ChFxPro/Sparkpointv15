'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MissionCardProps {
  icon: ReactNode;
  title: string;
  body: string;
  delay: number;
}

export function MissionCard({ icon, title, body, delay }: MissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl p-8 flex flex-col items-start h-full"
      style={{
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div
        className="mb-6 p-4 rounded-lg"
        style={{
          backgroundColor: 'rgba(224, 54, 148, 0.1)'
        }}
      >
        {icon}
      </div>
      
      <h3 className="mb-3" style={{ color: '#1A1A1A', letterSpacing: '-0.5px' }}>
        {title}
      </h3>
      
      <p style={{ color: '#666666', lineHeight: '1.5' }}>
        {body}
      </p>
    </motion.div>
  );
}
