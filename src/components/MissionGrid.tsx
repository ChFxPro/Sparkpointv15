'use client';

import { Heart, Users, Leaf } from 'lucide-react';
import { MissionCard } from './MissionCard';
import { motion } from 'motion/react';

export function MissionGrid() {
  return (
    <section id="mission" className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593043927112-08289c3f1b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwcGFwZXIlMjB0ZXh0dXJlJTIwbGlnaHR8ZW58MXx8fHwxNzYxMDg5NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(248, 249, 250, 0.85)' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
          className="text-center mb-16"
        >
          <h2
            className="mb-4"
            style={{ color: '#1A1A1A', fontSize: '3rem', lineHeight: '1.2', letterSpacing: '-1px' }}
          >
            Connection becomes care, trust, and action.
          </h2>
          <p
            className="max-w-3xl mx-auto"
            style={{ color: '#666666', fontSize: '1.25rem', lineHeight: '1.5' }}
          >
            SparkPoint focuses on the connective work that makes community well-being possible — bringing people, organizations, and resources into alignment so meaningful support can take shape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MissionCard
            icon={<Heart size={40} style={{ color: '#E03694' }} />}
            title="Creating Shared Space"
            body="Convening people across differences and experiences, and creating spaces where trust, voice, and understanding can grow."
            delay={0}
          />
          <MissionCard
            icon={<Users size={40} style={{ color: '#E03694' }} />}
            title="Aligning People & Resources"
            body="Helping partners and community members connect, coordinate, and navigate support more effectively."
            delay={0.2}
          />
          <MissionCard
            icon={<Leaf size={40} style={{ color: '#E03694' }} />}
            title="Strengthening Belonging & Resilience"
            body="Supporting collective healing and long-term resilience by reinforcing connection, dignity, and belonging."
            delay={0.4}
          />
        </div>

        <div className="text-center mt-12">
           <p style={{ color: '#666666', fontSize: '1.125rem' }}>
             These connective practices shape everything SparkPoint does.
           </p>
        </div>
      </div>
    </section>
  );
}
