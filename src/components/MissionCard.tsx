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
      initial={{ opacity: 0, x: delay === 0 ? -50 : delay === 0.2 ? 0 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.45, 0, 0.55, 1] }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)' }}
      className="bg-white rounded-xl p-8 flex flex-col items-start transition-all"
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
