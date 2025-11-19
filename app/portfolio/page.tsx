'use client';

import { motion } from 'framer-motion';
import { Plus, Image, Video, FileText, Edit, Trash2, Eye, Download, Share2 } from 'lucide-react';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    type: 'video',
    title: 'Classical Kathak Performance',
    thumbnail: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400&h=300&fit=crop',
    date: '2024-11-15',
    views: 1234,
    likes: 89,
  },
  {
    id: 2,
    type: 'image',
    title: 'Theatre Headshots',
    thumbnail: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop',
    date: '2024-11-10',
    views: 567,
    likes: 45,
  },
  {
    id: 3,
    type: 'video',
    title: 'Monologue Reel 2024',
    thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
    date: '2024-11-05',
    views: 2345,
    likes: 156,
  },
  {
    id: 4,
    type: 'document',
    title: 'Acting Resume',
    thumbnail: '',
    date: '2024-10-28',
    views: 890,
    likes: 34,
  },
  {
    id: 5,
    type: 'image',
    title: 'Production Photos - Hamlet',
    thumbnail: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop',
    date: '2024-10-20',
    views: 1567,
    likes: 123,
  },
  {
    id: 6,
    type: 'video',
    title: 'Dance Fusion Showreel',
    thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=300&fit=crop',
    date: '2024-10-15',
    views: 3456,
    likes: 267,
  },
];

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredItems = selectedFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === selectedFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Video;
      case 'image':
        return Image;
      case 'document':
        return FileText;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold font-vietnam mb-2">
                <span className="neon-text-pink">My</span>{' '}
                <span className="neon-text-cyan">Portfolio</span>
              </h1>
              <p className="text-text-muted">
                Showcase your best work and share it with the world
              </p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add Item
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Items', value: portfolioItems.length, color: 'neon-pink' },
            { label: 'Total Views', value: portfolioItems.reduce((sum, item) => sum + item.views, 0).toLocaleString(), color: 'neon-cyan' },
            { label: 'Total Likes', value: portfolioItems.reduce((sum, item) => sum + item.likes, 0), color: 'neon-lime' },
            { label: 'This Month', value: '3', color: 'neon-gold' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex flex-wrap gap-3">
            {[
              { key: 'all', label: 'All', icon: null },
              { key: 'video', label: 'Videos', icon: Video },
              { key: 'image', label: 'Photos', icon: Image },
              { key: 'document', label: 'Documents', icon: FileText },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  selectedFilter === filter.key
                    ? 'bg-neon-pink text-white'
                    : 'bg-input-bg text-text-muted hover:text-white'
                }`}
              >
                {filter.icon && <filter.icon className="w-4 h-4" />}
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative mb-4 rounded-lg overflow-hidden bg-input-bg">
                  {item.thumbnail ? (
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.thumbnail})` }}
                    />
                  ) : (
                    <div className="h-48 flex items-center justify-center">
                      <TypeIcon className="w-16 h-16 text-text-muted" />
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <Edit className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                      item.type === 'video'
                        ? 'bg-neon-pink/80 text-white'
                        : item.type === 'image'
                        ? 'bg-neon-cyan/80 text-white'
                        : 'bg-neon-lime/80 text-white'
                    }`}>
                      <TypeIcon className="w-3 h-3" />
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm text-text-muted mb-3">
                    <span>{new Date(item.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-text-muted">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>❤️</span>
                        {item.likes}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded hover:bg-neon-cyan/20 transition-colors">
                        <Download className="w-4 h-4 text-neon-cyan" />
                      </button>
                      <button className="p-2 rounded hover:bg-red-500/20 transition-colors">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card-featured text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-neon-cyan/20 flex items-center justify-center mx-auto mb-4">
              <Image className="w-10 h-10 text-neon-cyan" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No items found</h3>
            <p className="text-text-muted mb-6">
              No portfolio items match the selected filter
            </p>
            <button className="btn-outline" onClick={() => setSelectedFilter('all')}>
              View All Items
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
