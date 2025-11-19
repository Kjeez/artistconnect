'use client';

import { motion } from 'framer-motion';
import { Bell, Search, FileText, MapPin, Video, Zap } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Bell,
    title: 'AI Rehearsal Alerts',
    description: 'Real-time notifications when it\'s your turn to speak in script readings',
    color: 'neon-pink',
    gradient: 'gradient-purple-pink',
    link: '/rehearsal',
  },
  {
    icon: FileText,
    title: 'Script Store',
    description: 'Access thousands of scripts or generate new ones with AI',
    color: 'neon-cyan',
    gradient: 'gradient-cyan-lime',
    link: '/script-store',
  },
  {
    icon: Search,
    title: 'Local Discovery',
    description: 'Find artists, venues, and opportunities near you on an interactive map',
    color: 'neon-lime',
    gradient: 'gradient-cyan-lime',
    link: '/opportunities',
  },
  {
    icon: Video,
    title: 'Virtual Rehearsals',
    description: 'Collaborate with your cast remotely with built-in video calls',
    color: 'neon-gold',
    gradient: 'gradient-gold-purple',
    link: '/rehearsal',
  },
  {
    icon: MapPin,
    title: 'Venue Booking',
    description: 'Book theatre spaces and manage your event logistics',
    color: 'neon-purple',
    gradient: 'gradient-purple-pink',
    link: '/booking',
  },
  {
    icon: Zap,
    title: 'Instant Auditions',
    description: 'Record auditions with built-in teleprompter and submit instantly',
    color: 'neon-cyan',
    gradient: 'gradient-cyan-lime',
    link: '/opportunities',
  },
];

export default function FeaturesCarousel() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-dark-bg to-card-bg/30">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-vietnam neon-text-pink mb-4">
            Powerful Features
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Everything you need to succeed in the theatre world, powered by cutting-edge AI
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={feature.link}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="card-featured group cursor-pointer h-full"
                  >
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold mb-2 group-hover:neon-text-${feature.color.split('-')[1]} transition-all`}>
                      {feature.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-sm font-semibold text-neon-pink opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Explore
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
