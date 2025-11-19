'use client';

import { motion } from 'framer-motion';
import { Search, TrendingUp, MapPin, Calendar, Users, Star } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { name: 'Theatre', count: 234, icon: '🎭', color: 'neon-pink' },
  { name: 'Music', count: 156, icon: '🎵', color: 'neon-cyan' },
  { name: 'Dance', count: 189, icon: '💃', color: 'neon-lime' },
  { name: 'Comedy', count: 98, icon: '😂', color: 'neon-gold' },
];

const trending = [
  { id: 1, title: 'Delhi Nights - Modern Theatre', type: 'Event', location: 'Shri Ram Centre', attendees: 250, image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop' },
  { id: 2, title: 'Classical Music Workshop', type: 'Workshop', location: 'India Habitat Centre', attendees: 50, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop' },
  { id: 3, title: 'Stand-up Comedy Night', type: 'Event', location: 'Canvas Laugh Club', attendees: 120, image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400&h=300&fit=crop' },
];

const featuredArtists = [
  { id: 1, name: 'Priya Sharma', role: 'Kathak Dancer', rating: 4.9, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
  { id: 2, name: 'Rajesh Kumar', role: 'Classical Sitarist', rating: 4.8, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  { id: 3, name: 'Amit Patel', role: 'Stand-up Comedian', rating: 4.7, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold font-vietnam mb-4 text-center">
            <span className="neon-text-pink">Explore</span>{' '}
            <span className="neon-text-cyan">Theatre</span>
          </h1>
          <p className="text-text-muted text-center text-lg">
            Discover events, artists, workshops, and opportunities
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-text-muted" />
            <input
              type="search"
              placeholder="Search events, artists, venues..."
              className="input pl-14 w-full text-lg py-4"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`card-featured cursor-pointer text-center p-6 border-${category.color}/30`}
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className={`text-xl font-bold text-${category.color} mb-1`}>{category.name}</h3>
                <p className="text-text-muted text-sm">{category.count} items</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trending */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-neon-gold" />
            <h2 className="text-2xl font-bold text-white">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trending.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card cursor-pointer"
              >
                <div
                  className="h-48 rounded-lg bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <span className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-bold border border-neon-pink/30 inline-block mb-3">
                  {item.type}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {item.attendees}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Artists */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArtists.map((artist, index) => (
              <Link key={artist.id} href={`/profile/${artist.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card cursor-pointer text-center"
                >
                  <div
                    className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-neon-cyan mx-auto mb-4"
                    style={{ backgroundImage: `url(${artist.image})` }}
                  />
                  <h3 className="text-lg font-bold text-white mb-1">{artist.name}</h3>
                  <p className="text-text-muted text-sm mb-3">{artist.role}</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                    <span className="text-white font-medium">{artist.rating}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
