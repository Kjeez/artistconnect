'use client';

import { motion } from 'framer-motion';
import { Eye, Heart, MessageCircle, Users, Calendar, MapPin, ExternalLink, Play, Clock, TrendingUp, Filter } from 'lucide-react';
import { useState } from 'react';

interface Exhibition {
  id: number;
  title: string;
  artist: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  coverImage: string;
  description: string;
  category: string;
  artworks: number;
  visitors: number;
  likes: number;
  comments: number;
  startDate: string;
  endDate: string;
  status: 'live' | 'upcoming' | 'ended';
  featured: boolean;
  isVirtual: boolean;
  location?: string;
}

export default function VirtualExhibitionsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['All', 'Painting', 'Photography', 'Digital Art', 'Sculpture', 'Mixed Media', 'Installation'];

  const exhibitions: Exhibition[] = [
    {
      id: 1,
      title: 'Digital Dreams: AI & Human Creativity',
      artist: {
        name: 'Neha Kapoor',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop',
      description: 'Exploring the intersection of artificial intelligence and human artistic expression through 30+ digital artworks.',
      category: 'Digital Art',
      artworks: 34,
      visitors: 12450,
      likes: 2340,
      comments: 456,
      startDate: '2025-11-01',
      endDate: '2025-12-31',
      status: 'live',
      featured: true,
      isVirtual: true,
    },
    {
      id: 2,
      title: 'Urban Perspectives: Street Photography Collection',
      artist: {
        name: 'Priya Mehta',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=600&fit=crop',
      description: 'A journey through Mumbai\'s streets capturing raw, unfiltered moments of daily life.',
      category: 'Photography',
      artworks: 52,
      visitors: 8920,
      likes: 1567,
      comments: 234,
      startDate: '2025-11-15',
      endDate: '2025-12-15',
      status: 'live',
      featured: true,
      isVirtual: true,
    },
    {
      id: 3,
      title: 'Abstract Emotions: Colors of the Mind',
      artist: {
        name: 'Arjun Singh',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        verified: false,
      },
      coverImage: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=600&fit=crop',
      description: 'Contemporary abstract paintings exploring emotions through bold colors and dynamic compositions.',
      category: 'Painting',
      artworks: 28,
      visitors: 5670,
      likes: 892,
      comments: 123,
      startDate: '2025-12-01',
      endDate: '2026-01-15',
      status: 'upcoming',
      featured: false,
      isVirtual: false,
      location: 'Mumbai Art Gallery',
    },
    {
      id: 4,
      title: 'Sculpting the Future: 3D Art Exhibition',
      artist: {
        name: 'Vikram Patel',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=1200&h=600&fit=crop',
      description: 'Immersive 3D sculptures and installations blending traditional techniques with digital innovation.',
      category: 'Sculpture',
      artworks: 15,
      visitors: 3450,
      likes: 678,
      comments: 89,
      startDate: '2025-12-10',
      endDate: '2026-01-10',
      status: 'upcoming',
      featured: false,
      isVirtual: true,
    },
    {
      id: 5,
      title: 'Monochrome Magic: Black & White Photography',
      artist: {
        name: 'Ananya Roy',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&h=600&fit=crop',
      description: 'The timeless beauty of black and white photography showcasing contrast, texture, and emotion.',
      category: 'Photography',
      artworks: 45,
      visitors: 15230,
      likes: 3120,
      comments: 567,
      startDate: '2025-10-15',
      endDate: '2025-11-15',
      status: 'ended',
      featured: false,
      isVirtual: true,
    },
    {
      id: 6,
      title: 'Mixed Realities: Hybrid Art Forms',
      artist: {
        name: 'Rahul Sharma',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=600&fit=crop',
      description: 'Experimental artworks combining photography, painting, digital manipulation, and physical installations.',
      category: 'Mixed Media',
      artworks: 22,
      visitors: 7890,
      likes: 1234,
      comments: 289,
      startDate: '2025-11-20',
      endDate: '2025-12-20',
      status: 'live',
      featured: true,
      isVirtual: true,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return (
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live Now
          </span>
        );
      case 'upcoming':
        return <span className="px-3 py-1 rounded-full bg-neon-gold/20 text-neon-gold text-xs font-bold border border-neon-gold/30">Upcoming</span>;
      case 'ended':
        return <span className="px-3 py-1 rounded-full bg-gray-500/20 text-gray-400 text-xs font-bold border border-gray-500/30">Ended</span>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const getDaysRemaining = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const liveExhibitions = exhibitions.filter(e => e.status === 'live');
  const upcomingExhibitions = exhibitions.filter(e => e.status === 'upcoming');

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
            <span className="neon-text-pink">Virtual</span>{' '}
            <span className="neon-text-cyan">Exhibitions</span>
          </h1>
          <p className="text-text-muted">
            Explore art galleries from anywhere in the world
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Live Exhibitions', value: '12', icon: TrendingUp, color: 'neon-pink' },
            { label: 'Total Visitors', value: '45.2K', icon: Users, color: 'neon-cyan' },
            { label: 'Artworks', value: '1,234', icon: Eye, color: 'neon-lime' },
            { label: 'Artists', value: '234', icon: Users, color: 'neon-gold' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-featured text-center"
            >
              <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-2`} />
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-text-muted text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['All', 'Live', 'Upcoming', 'Ended'].map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedStatus === status.toLowerCase()
                    ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                    : 'bg-card-bg text-text-muted hover:text-white border border-neon-cyan/20'
                }`}
              >
                {status}
              </button>
            ))}
            <div className="border-l border-neon-cyan/20 mx-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                    : 'bg-card-bg text-text-muted hover:text-white border border-neon-cyan/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured / Live Exhibitions */}
        {liveExhibitions.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <h2 className="text-2xl font-bold text-white">Live Now</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liveExhibitions.map((exhibition, index) => (
                <motion.div
                  key={exhibition.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="card-featured group cursor-pointer overflow-hidden hover:border-neon-cyan/40 transition-all"
                >
                  {/* Cover Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={exhibition.coverImage}
                      alt={exhibition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

                    {/* Status and Virtual Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                      {getStatusBadge(exhibition.status)}
                      {exhibition.isVirtual && (
                        <span className="px-3 py-1 rounded-full bg-neon-cyan/90 backdrop-blur-sm text-black text-xs font-bold">
                          Virtual
                        </span>
                      )}
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-neon-pink text-xs font-bold">
                        {exhibition.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-neon-cyan transition-colors">
                      {exhibition.title}
                    </h3>

                    {/* Artist */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-full bg-cover bg-center border border-neon-pink/30"
                        style={{ backgroundImage: `url(${exhibition.artist.avatar})` }}
                      />
                      <div className="flex items-center gap-1">
                        <span className="text-white text-sm font-medium">{exhibition.artist.name}</span>
                        {exhibition.artist.verified && (
                          <svg className="w-4 h-4 text-neon-cyan" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        )}
                      </div>
                    </div>

                    <p className="text-text-light text-sm mb-4 line-clamp-2">
                      {exhibition.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      <div className="text-center p-2 rounded-lg bg-input-bg">
                        <div className="text-neon-pink font-bold text-sm">{exhibition.artworks}</div>
                        <div className="text-text-muted text-xs">Artworks</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-input-bg">
                        <div className="text-neon-cyan font-bold text-sm">{(exhibition.visitors / 1000).toFixed(1)}K</div>
                        <div className="text-text-muted text-xs">Visitors</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-input-bg">
                        <div className="text-neon-lime font-bold text-sm">{exhibition.likes}</div>
                        <div className="text-text-muted text-xs">Likes</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-input-bg">
                        <div className="text-neon-gold font-bold text-sm">{getDaysRemaining(exhibition.endDate)}d</div>
                        <div className="text-text-muted text-xs">Left</div>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="flex items-center justify-between text-xs text-text-muted mb-4 pb-4 border-b border-neon-cyan/20">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(exhibition.startDate)} - {formatDate(exhibition.endDate)}
                      </div>
                      {!exhibition.isVirtual && exhibition.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exhibition.location}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                        {exhibition.isVirtual ? 'Visit Virtual Gallery' : 'View Details'}
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="btn-outline px-3">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Exhibitions */}
        {upcomingExhibitions.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingExhibitions.map((exhibition, index) => (
                <motion.div
                  key={exhibition.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="card-featured group cursor-pointer hover:border-neon-cyan/40 transition-all"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <img
                      src={exhibition.coverImage}
                      alt={exhibition.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                    <div className="absolute top-2 right-2">
                      {getStatusBadge(exhibition.status)}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-white text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Starts {formatDate(exhibition.startDate)}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-bold mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                      {exhibition.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-text-muted">
                      <span>{exhibition.artworks} artworks</span>
                      <span>•</span>
                      <span>{exhibition.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Create Exhibition CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-featured bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-neon-pink/30 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-full bg-neon-pink/20">
              <Eye className="w-12 h-12 text-neon-pink" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-bold text-2xl mb-2">Host Your Virtual Exhibition</h3>
              <p className="text-text-muted">
                Showcase your artwork to a global audience. Create your virtual gallery today.
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Create Exhibition
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
