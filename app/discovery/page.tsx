'use client';

import { motion } from 'framer-motion';
import { MapPin, Filter, Star, Briefcase } from 'lucide-react';
import Link from 'next/link';

const artists = [
  { id: 1, name: 'Rajesh Kumar', role: 'Classical Sitarist', location: 'Delhi', distance: '2.5 km', rating: 4.9, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  { id: 2, name: 'Priya Sharma', role: 'Kathak Dancer', location: 'Noida', distance: '5 km', rating: 4.8, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
  { id: 3, name: 'Amit Patel', role: 'Stand-up Comedian', location: 'Gurugram', distance: '8 km', rating: 4.7, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
  { id: 4, name: 'Neha Singh', role: 'Wedding Anchor', location: 'Delhi', distance: '3 km', rating: 5.0, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
];

const venues = [
  { id: 1, name: 'Shri Ram Centre', type: 'Theatre', location: 'Mandi House', distance: '1.2 km' },
  { id: 2, name: 'Kamani Auditorium', type: 'Auditorium', location: 'Connaught Place', distance: '3 km' },
  { id: 3, name: 'India Habitat Centre', type: 'Cultural Center', location: 'Lodhi Road', distance: '4.5 km' },
];

export default function DiscoveryPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-lime mb-2 flex items-center gap-3">
            <MapPin className="w-10 h-10" />
            Local Discovery
          </h1>
          <p className="text-text-muted">Find artists, venues, and opportunities near you</p>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured h-64 mb-8 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-neon-cyan/10 to-neon-lime/10" />
          <div className="relative z-10 text-center">
            <MapPin className="w-16 h-16 text-neon-lime mx-auto mb-4" />
            <p className="text-text-light font-medium">Interactive Map</p>
            <p className="text-text-muted text-sm">Map integration coming soon</p>
          </div>
        </motion.div>

        {/* Artists Near You */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Artists Near You</h2>
            <button className="flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-colors">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/profile/${artist.id}`}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="card cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-neon-lime"
                        style={{ backgroundImage: `url(${artist.image})` }}
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-white">{artist.name}</h3>
                        <p className="text-sm text-text-muted">{artist.role}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-text-muted">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {artist.distance}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-neon-gold fill-neon-gold" />
                            {artist.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nearby Venues */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Nearby Venues</h2>
          <div className="space-y-3">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card flex items-center justify-between hover:border-neon-lime/50 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="font-bold text-white">{venue.name}</h3>
                  <p className="text-sm text-text-muted">{venue.type} • {venue.location}</p>
                </div>
                <div className="flex items-center gap-2 text-neon-lime text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {venue.distance}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
