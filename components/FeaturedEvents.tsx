'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Delhi Nights',
    description: 'A modern take on classic tales',
    date: '2025-11-25',
    venue: 'Shri Ram Centre',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop',
    category: 'Drama',
    attendees: 150,
  },
  {
    id: 2,
    title: 'The Tempest',
    description: "Shakespeare's timeless masterpiece",
    date: '2025-11-28',
    venue: 'Kamani Auditorium',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=600&fit=crop',
    category: 'Classical',
    attendees: 200,
  },
  {
    id: 3,
    title: 'Hamlet',
    description: 'A tragic tale of betrayal',
    date: '2025-12-01',
    venue: 'NSD Abhimanch',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&h=600&fit=crop',
    category: 'Tragedy',
    attendees: 180,
  },
  {
    id: 4,
    title: 'Stand-Up Comedy Night',
    description: 'Delhi\'s funniest comedians',
    date: '2025-12-05',
    venue: 'Canvas Laugh Club',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=600&fit=crop',
    category: 'Comedy',
    attendees: 120,
  },
];

export default function FeaturedEvents() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-vietnam neon-text-cyan"
            >
              Featured Events
            </motion.h2>
            <p className="text-text-muted mt-2">Discover amazing performances happening near you</p>
          </div>
          <Link
            href="/booking"
            className="hidden md:flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-colors"
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Events grid - horizontal scroll on mobile */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[85%] md:w-auto snap-center"
            >
              <Link href={`/booking/${event.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card group cursor-pointer h-full"
                >
                  {/* Event image */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs font-semibold text-neon-lime border border-neon-lime/30">
                      {event.category}
                    </div>
                  </div>

                  {/* Event details */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-text-muted mt-1">{event.description}</p>
                    </div>

                    <div className="space-y-2 text-sm text-text-muted">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        <span>{new Date(event.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-neon-pink" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-neon-gold" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 py-2 rounded-lg bg-gradient-purple-pink text-white font-semibold text-sm hover:neon-glow-pink transition-all"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="md:hidden mt-6 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-colors"
          >
            View All Events
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
