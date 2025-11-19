'use client';

import { motion } from 'framer-motion';
import { Download, Star, ExternalLink, Search, Filter, Palette, Music, Video, Code, Image as ImageIcon, FileText, Zap, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface Resource {
  id: number;
  name: string;
  description: string;
  category: string;
  icon: string;
  type: 'software' | 'template' | 'tutorial' | 'asset';
  price: string;
  rating: number;
  downloads: number;
  url: string;
  tags: string[];
}

export default function ResourcesToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const categories = ['All', 'Design', 'Music', 'Video', 'Photography', 'Writing', 'Development', 'Marketing'];

  const resources: Resource[] = [
    {
      id: 1,
      name: 'Krita',
      description: 'Free and open-source digital painting application. Perfect for concept art, texture painting, and illustrations.',
      category: 'Design',
      icon: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop',
      type: 'software',
      price: 'Free',
      rating: 4.7,
      downloads: 2500000,
      url: 'https://krita.org',
      tags: ['painting', 'illustration', 'free'],
    },
    {
      id: 2,
      name: 'Audacity',
      description: 'Free, open-source audio editing and recording software. Multi-track editing, effects, and analysis tools.',
      category: 'Music',
      icon: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop',
      type: 'software',
      price: 'Free',
      rating: 4.5,
      downloads: 3400000,
      url: 'https://audacityteam.org',
      tags: ['audio', 'editing', 'recording'],
    },
    {
      id: 3,
      name: 'DaVinci Resolve',
      description: 'Professional video editing, color correction, and audio post-production in one tool. Free version available.',
      category: 'Video',
      icon: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&h=200&fit=crop',
      type: 'software',
      price: 'Free / ₹22,999',
      rating: 4.8,
      downloads: 1800000,
      url: 'https://blackmagicdesign.com',
      tags: ['video', 'editing', 'color grading'],
    },
    {
      id: 4,
      name: 'Portfolio Template Pack',
      description: 'Professional website templates for artists. HTML/CSS responsive designs ready to customize.',
      category: 'Development',
      icon: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&h=200&fit=crop',
      type: 'template',
      price: '₹1,499',
      rating: 4.6,
      downloads: 5600,
      url: '#',
      tags: ['web', 'portfolio', 'template'],
    },
    {
      id: 5,
      name: 'Photography Presets Bundle',
      description: '50+ professional Lightroom presets for various photography styles. Film looks, portraits, landscapes.',
      category: 'Photography',
      icon: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=200&h=200&fit=crop',
      type: 'asset',
      price: '₹999',
      rating: 4.9,
      downloads: 12300,
      url: '#',
      tags: ['presets', 'lightroom', 'photography'],
    },
    {
      id: 6,
      name: 'Music Theory Masterclass',
      description: 'Complete video course on music theory for producers and composers. 40+ hours of content.',
      category: 'Music',
      icon: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop',
      type: 'tutorial',
      price: '₹2,999',
      rating: 4.8,
      downloads: 8900,
      url: '#',
      tags: ['tutorial', 'music theory', 'course'],
    },
    {
      id: 7,
      name: 'Blender',
      description: 'Free 3D creation suite. Modeling, rigging, animation, simulation, rendering, and more.',
      category: 'Design',
      icon: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop',
      type: 'software',
      price: 'Free',
      rating: 4.9,
      downloads: 4200000,
      url: 'https://blender.org',
      tags: ['3d', 'modeling', 'animation'],
    },
    {
      id: 8,
      name: 'Character Design Assets',
      description: '500+ character templates, expressions, and poses for illustrators and animators.',
      category: 'Design',
      icon: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=200&h=200&fit=crop',
      type: 'asset',
      price: '₹1,799',
      rating: 4.7,
      downloads: 6700,
      url: '#',
      tags: ['characters', 'illustration', 'assets'],
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'design':
        return Palette;
      case 'music':
        return Music;
      case 'video':
        return Video;
      case 'photography':
        return ImageIcon;
      case 'writing':
        return FileText;
      case 'development':
        return Code;
      case 'marketing':
        return TrendingUp;
      default:
        return Zap;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'software':
        return 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10';
      case 'template':
        return 'text-neon-pink border-neon-pink/30 bg-neon-pink/10';
      case 'tutorial':
        return 'text-neon-lime border-neon-lime/30 bg-neon-lime/10';
      case 'asset':
        return 'text-neon-gold border-neon-gold/30 bg-neon-gold/10';
      default:
        return 'text-white border-white/30 bg-white/10';
    }
  };

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
            <span className="neon-text-pink">Resources</span>{' '}
            <span className="neon-text-cyan">& Tools</span>
          </h1>
          <p className="text-text-muted">
            Essential tools, templates, and resources for artists
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Free Tools', value: '127', icon: Zap, color: 'neon-cyan' },
            { label: 'Templates', value: '456', icon: FileText, color: 'neon-pink' },
            { label: 'Tutorials', value: '234', icon: Video, color: 'neon-lime' },
            { label: 'Total Downloads', value: '2.5M', icon: Download, color: 'neon-gold' },
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

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search resources..."
                className="input-field pl-10 w-full"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="input-field"
            >
              <option value="all">All Types</option>
              <option value="software">Software</option>
              <option value="template">Templates</option>
              <option value="tutorial">Tutorials</option>
              <option value="asset">Assets</option>
            </select>
            <button className="btn-outline flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                      : 'bg-card-bg text-text-muted hover:text-white border border-neon-cyan/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-featured group hover:border-neon-cyan/40 transition-all"
            >
              {/* Icon/Image */}
              <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                <img
                  src={resource.icon}
                  alt={resource.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                {/* Type Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold border ${getTypeColor(resource.type)}`}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                  {resource.name}
                </h3>

                <p className="text-text-light text-sm mb-3 line-clamp-2">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {resource.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-neon-cyan/10 text-neon-cyan text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1 text-neon-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">{resource.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-muted">
                    <Download className="w-4 h-4" />
                    <span>{(resource.downloads / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="text-neon-lime font-bold">
                    {resource.price}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 flex items-center justify-center gap-2 text-center"
                  >
                    {resource.price === 'Free' ? 'Download' : 'Get Now'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button className="btn-outline px-3">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submit Resource CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-featured bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-neon-pink/30 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-full bg-neon-cyan/20">
              <Zap className="w-12 h-12 text-neon-cyan" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-bold text-2xl mb-2">Share Your Resources</h3>
              <p className="text-text-muted">
                Help the community by sharing useful tools, templates, or tutorials you've created
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Submit Resource
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
