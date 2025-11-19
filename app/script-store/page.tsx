'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  Sparkles,
  FileText,
  Download,
  Heart,
  Star,
  TrendingUp,
  Clock,
  IndianRupee,
} from 'lucide-react';

const scripts = [
  {
    id: 1,
    title: 'The Midnight Train',
    author: 'Rajesh Kumar',
    genre: 'Drama',
    duration: '90 min',
    castSize: '6 characters',
    price: 'Free',
    rating: 4.8,
    reviews: 124,
    downloads: 1542,
    description: 'A compelling story about redemption set on a train journey through rural India.',
    featured: true,
  },
  {
    id: 2,
    title: 'Delhi Diaries',
    author: 'Priya Sharma',
    genre: 'Comedy',
    duration: '60 min',
    castSize: '4 characters',
    price: '₹299',
    rating: 4.9,
    reviews: 89,
    downloads: 876,
    description: 'A hilarious take on modern Delhi life and its quirky characters.',
    featured: true,
  },
  {
    id: 3,
    title: 'The Last Performance',
    author: 'Amit Patel',
    genre: 'Tragedy',
    duration: '120 min',
    castSize: '8 characters',
    price: '₹499',
    rating: 4.7,
    reviews: 156,
    downloads: 2341,
    description: 'An aging actor\'s final bow in a story of art, sacrifice, and legacy.',
    featured: false,
  },
  {
    id: 4,
    title: 'Monsoon Madness',
    author: 'Neha Singh',
    genre: 'Romance',
    duration: '75 min',
    castSize: '5 characters',
    price: 'Free',
    rating: 4.6,
    reviews: 67,
    downloads: 543,
    description: 'A romantic comedy set during the monsoon season in a small Indian town.',
    featured: false,
  },
];

export default function ScriptStorePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-cyan mb-2">
            Script Store
          </h1>
          <p className="text-text-muted">
            Discover amazing scripts or create your own with AI
          </p>
        </motion.div>

        {/* AI Generator CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Link href="/script-store/generate">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card-featured cursor-pointer bg-gradient-to-r from-purple-900/20 to-pink-900/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-2xl bg-gradient-purple-pink">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold neon-text-pink mb-2">
                    AI Script Generator
                  </h3>
                  <p className="text-text-muted">
                    Generate custom scripts in seconds using our AI. Just provide genre, characters, and theme.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Generate Script
                </motion.button>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scripts by title, author, or genre..."
              className="input pl-12 w-full"
            />
          </div>
        </div>

        {/* Featured Scripts */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-neon-gold" />
            <h2 className="text-2xl font-bold font-vietnam text-white">Featured Scripts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scripts
              .filter((s) => s.featured)
              .map((script, index) => (
                <motion.div
                  key={script.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/script-store/${script.id}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card-featured h-full cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                            {script.title}
                          </h3>
                          <p className="text-sm text-text-muted">by {script.author}</p>
                        </div>
                        <button className="p-2 rounded-full hover:bg-neon-pink/20 transition-colors">
                          <Heart className="w-5 h-5 text-text-muted hover:text-neon-pink" />
                        </button>
                      </div>

                      <p className="text-text-light leading-relaxed mb-4">
                        {script.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full border border-neon-pink/30 text-xs font-medium text-neon-pink">
                          {script.genre}
                        </span>
                        <span className="px-3 py-1 rounded-full border border-neon-cyan/30 text-xs font-medium text-neon-cyan">
                          {script.castSize}
                        </span>
                        <span className="px-3 py-1 rounded-full border border-neon-lime/30 text-xs font-medium text-neon-lime">
                          {script.duration}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-neon-cyan/20">
                        <div className="flex items-center gap-4 text-sm text-text-muted">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                            <span>{script.rating}</span>
                            <span className="text-xs">({script.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            <span>{script.downloads}</span>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-neon-gold">
                          {script.price}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>

        {/* All Scripts */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6 text-neon-cyan" />
            <h2 className="text-2xl font-bold font-vietnam text-white">All Scripts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scripts.map((script, index) => (
              <motion.div
                key={script.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/script-store/${script.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card h-full cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                        {script.title}
                      </h3>
                      <button className="p-2 rounded-full hover:bg-neon-pink/20 transition-colors">
                        <Heart className="w-4 h-4 text-text-muted hover:text-neon-pink" />
                      </button>
                    </div>

                    <p className="text-xs text-text-muted mb-3">by {script.author}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 rounded-full border border-neon-pink/30 text-xs font-medium text-neon-pink">
                        {script.genre}
                      </span>
                      <span className="px-2 py-1 rounded-full border border-neon-cyan/30 text-xs font-medium text-neon-cyan">
                        {script.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-text-muted">
                        <Star className="w-3 h-3 text-neon-gold fill-neon-gold" />
                        <span>{script.rating}</span>
                      </div>
                      <div className="font-bold text-neon-gold">{script.price}</div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
