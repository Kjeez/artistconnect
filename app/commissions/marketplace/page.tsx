'use client';

import { motion } from 'framer-motion';
import { DollarSign, Clock, Star, MessageCircle, Filter, Search, TrendingUp, Award, Check } from 'lucide-react';
import { useState } from 'react';

interface Commission {
  id: number;
  title: string;
  artist: {
    name: string;
    avatar: string;
    verified: boolean;
    rating: number;
    completedOrders: number;
  };
  category: string;
  startingPrice: number;
  deliveryTime: string;
  image: string;
  features: string[];
  tags: string[];
}

export default function CommissionMarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const categories = [
    'All',
    'Portrait Art',
    'Music Production',
    'Video Editing',
    'Graphic Design',
    'Animation',
    'Writing',
    'Photography',
  ];

  const commissions: Commission[] = [
    {
      id: 1,
      title: 'Custom Portrait Painting',
      artist: {
        name: 'Priya Mehta',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        verified: true,
        rating: 4.9,
        completedOrders: 127,
      },
      category: 'Portrait Art',
      startingPrice: 5000,
      deliveryTime: '7 days',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop',
      features: ['High Resolution', 'Multiple Revisions', 'Commercial Use', 'Source Files'],
      tags: ['realistic', 'oil painting', 'custom'],
    },
    {
      id: 2,
      title: 'Professional Music Production',
      artist: {
        name: 'Arjun Singh',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        verified: true,
        rating: 5.0,
        completedOrders: 89,
      },
      category: 'Music Production',
      startingPrice: 8000,
      deliveryTime: '5 days',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop',
      features: ['Mixing & Mastering', 'Unlimited Revisions', 'Commercial License', 'Studio Quality'],
      tags: ['electronic', 'production', 'mixing'],
    },
    {
      id: 3,
      title: 'Video Editing & Color Grading',
      artist: {
        name: 'Vikram Patel',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        verified: true,
        rating: 4.8,
        completedOrders: 156,
      },
      category: 'Video Editing',
      startingPrice: 3000,
      deliveryTime: '3 days',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
      features: ['4K Support', 'Color Correction', 'Motion Graphics', 'Fast Delivery'],
      tags: ['premiere', 'color grading', 'cinematic'],
    },
    {
      id: 4,
      title: 'Logo & Brand Identity Design',
      artist: {
        name: 'Neha Kapoor',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        verified: false,
        rating: 4.7,
        completedOrders: 94,
      },
      category: 'Graphic Design',
      startingPrice: 4500,
      deliveryTime: '4 days',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
      features: ['Vector Files', '3 Concepts', 'Print Ready', 'Brand Guidelines'],
      tags: ['logo', 'branding', 'modern'],
    },
    {
      id: 5,
      title: '2D Character Animation',
      artist: {
        name: 'Ananya Roy',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        verified: true,
        rating: 4.9,
        completedOrders: 73,
      },
      category: 'Animation',
      startingPrice: 6500,
      deliveryTime: '10 days',
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&h=400&fit=crop',
      features: ['Full Animation', 'Character Design', 'Multiple Formats', 'Rigging'],
      tags: ['2d', 'character', 'animated'],
    },
    {
      id: 6,
      title: 'Professional Photography Session',
      artist: {
        name: 'Rahul Sharma',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        verified: true,
        rating: 4.8,
        completedOrders: 112,
      },
      category: 'Photography',
      startingPrice: 7000,
      deliveryTime: '2 days',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop',
      features: ['50+ Photos', 'Editing Included', 'High Resolution', 'Location Flexible'],
      tags: ['portrait', 'professional', 'studio'],
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
            <span className="neon-text-pink">Commission</span>{' '}
            <span className="neon-text-cyan">Marketplace</span>
          </h1>
          <p className="text-text-muted">
            Hire talented artists for your custom projects
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search for services..."
                className="input-field pl-10 w-full"
              />
            </div>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="input-field"
            >
              <option value="all">All Prices</option>
              <option value="budget">Under ₹5,000</option>
              <option value="mid">₹5,000 - ₹10,000</option>
              <option value="premium">Above ₹10,000</option>
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
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                    : 'bg-card-bg text-text-muted hover:text-white border border-neon-cyan/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Commission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commissions.map((commission, index) => (
            <motion.div
              key={commission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-featured group cursor-pointer hover:border-neon-cyan/40 transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={commission.image}
                  alt={commission.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                  <span className="text-neon-cyan text-xs font-bold">{commission.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors">
                  {commission.title}
                </h3>

                {/* Artist Info */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-full bg-cover bg-center border border-neon-pink/30"
                    style={{ backgroundImage: `url(${commission.artist.avatar})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-white text-sm font-medium truncate">
                        {commission.artist.name}
                      </span>
                      {commission.artist.verified && (
                        <svg className="w-4 h-4 text-neon-cyan flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-text-muted">
                      <Star className="w-3 h-3 fill-neon-gold text-neon-gold" />
                      {commission.artist.rating} ({commission.artist.completedOrders})
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {commission.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 text-xs text-text-muted bg-input-bg px-2 py-1 rounded"
                      >
                        <Check className="w-3 h-3 text-neon-lime" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {commission.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs text-text-muted bg-neon-cyan/10 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Price and Delivery */}
                <div className="flex items-center justify-between pt-3 border-t border-neon-cyan/20">
                  <div>
                    <div className="text-text-muted text-xs mb-1">Starting at</div>
                    <div className="text-neon-lime font-bold text-lg">
                      ₹{commission.startingPrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-text-muted text-xs mb-1">Delivery</div>
                    <div className="text-white font-medium flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {commission.deliveryTime}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="btn-primary flex-1">
                    Order Now
                  </button>
                  <button className="btn-outline px-3">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Seller CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-featured bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-neon-pink/30 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-full bg-neon-pink/20">
              <Award className="w-12 h-12 text-neon-pink" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-bold text-2xl mb-2">Start Offering Your Services</h3>
              <p className="text-text-muted">
                Share your talent with thousands of clients and earn from your passion
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Become a Seller
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
