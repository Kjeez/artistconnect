'use client';

import { motion } from 'framer-motion';
import { Heart, Eye, Download, Share2, Filter, Grid, List, Image as ImageIcon, Video, Music, Palette, Camera, Pencil } from 'lucide-react';
import { useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  artist: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  image: string;
  category: string;
  medium: string;
  likes: number;
  views: number;
  price?: string;
  forSale: boolean;
}

export default function GalleryShowcasePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedium, setSelectedMedium] = useState<string>('all');

  const categories = [
    { name: 'All', value: 'all', icon: Palette },
    { name: 'Painting', value: 'painting', icon: Palette },
    { name: 'Photography', value: 'photography', icon: Camera },
    { name: 'Digital Art', value: 'digital', icon: ImageIcon },
    { name: 'Illustration', value: 'illustration', icon: Pencil },
    { name: 'Sculpture', value: 'sculpture', icon: Palette },
    { name: 'Mixed Media', value: 'mixed', icon: Palette },
  ];

  const artworks: Artwork[] = [
    {
      id: 1,
      title: 'Urban Symphony',
      artist: {
        name: 'Priya Mehta',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        verified: true,
      },
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=1000&fit=crop',
      category: 'painting',
      medium: 'Acrylic on Canvas',
      likes: 234,
      views: 1520,
      price: '₹45,000',
      forSale: true,
    },
    {
      id: 2,
      title: 'Monsoon Memories',
      artist: {
        name: 'Arjun Singh',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        verified: true,
      },
      image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=600&fit=crop',
      category: 'photography',
      medium: 'Digital Photography',
      likes: 456,
      views: 3240,
      price: '₹12,000',
      forSale: true,
    },
    {
      id: 3,
      title: 'Digital Dreams',
      artist: {
        name: 'Neha Kapoor',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        verified: false,
      },
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1200&fit=crop',
      category: 'digital',
      medium: 'Digital Illustration',
      likes: 678,
      views: 4560,
      forSale: false,
    },
    {
      id: 4,
      title: 'Street Life',
      artist: {
        name: 'Vikram Patel',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        verified: true,
      },
      image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&h=900&fit=crop',
      category: 'photography',
      medium: 'Street Photography',
      likes: 345,
      views: 2340,
      price: '₹8,000',
      forSale: true,
    },
    {
      id: 5,
      title: 'Abstract Emotions',
      artist: {
        name: 'Ananya Roy',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        verified: true,
      },
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=800&fit=crop',
      category: 'painting',
      medium: 'Oil on Canvas',
      likes: 567,
      views: 3890,
      price: '₹65,000',
      forSale: true,
    },
    {
      id: 6,
      title: 'Cyberpunk City',
      artist: {
        name: 'Rahul Sharma',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        verified: false,
      },
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=1000&fit=crop',
      category: 'digital',
      medium: '3D Art',
      likes: 892,
      views: 5670,
      forSale: false,
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Artist</span>{' '}
            <span className="neon-text-cyan">Gallery</span>
          </h1>
          <p className="text-text-muted">
            Discover amazing artwork from talented artists worldwide
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex-1 w-full">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                      selectedCategory === cat.value
                        ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                        : 'bg-input-bg text-text-muted hover:text-white border border-transparent'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-neon-cyan/20 text-neon-cyan'
                    : 'bg-input-bg text-text-muted hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-neon-cyan/20 text-neon-cyan'
                    : 'bg-input-bg text-text-muted hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
              <button className="btn-outline flex items-center gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div
          className={
            viewMode === 'masonry'
              ? 'columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          }
        >
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`${viewMode === 'masonry' ? 'break-inside-avoid' : ''} group cursor-pointer`}
            >
              <div className="card-featured overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                      <Heart className="w-6 h-6 text-white" />
                    </button>
                    <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                      <Share2 className="w-6 h-6 text-white" />
                    </button>
                    <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                      <Download className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* For Sale Badge */}
                  {artwork.forSale && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-neon-lime/90 backdrop-blur-sm">
                      <span className="text-black font-bold text-xs">For Sale</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                    {artwork.title}
                  </h3>

                  {/* Artist */}
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-full bg-cover bg-center border border-neon-pink/30"
                      style={{ backgroundImage: `url(${artwork.artist.avatar})` }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-white text-sm font-medium truncate">
                          {artwork.artist.name}
                        </span>
                        {artwork.artist.verified && (
                          <svg className="w-4 h-4 text-neon-cyan flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-text-muted text-sm mb-3">{artwork.medium}</div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-text-muted">
                        <Heart className="w-4 h-4" />
                        {artwork.likes}
                      </span>
                      <span className="flex items-center gap-1 text-text-muted">
                        <Eye className="w-4 h-4" />
                        {artwork.views}
                      </span>
                    </div>
                    {artwork.forSale && artwork.price && (
                      <span className="text-neon-lime font-bold">{artwork.price}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <button className="btn-primary px-8">
            Load More Artwork
          </button>
        </motion.div>
      </div>
    </div>
  );
}
