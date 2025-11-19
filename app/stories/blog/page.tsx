'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Bookmark, Share2, TrendingUp, Clock, Eye, Filter } from 'lucide-react';
import { useState } from 'react';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    verified: boolean;
  };
  coverImage: string;
  category: string;
  readTime: string;
  publishedAt: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
  featured: boolean;
}

export default function StoriesBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['All', 'Journey', 'Tutorial', 'Behind the Scenes', 'Success Story', 'Tips & Tricks', 'Inspiration'];

  const stories: Story[] = [
    {
      id: 1,
      title: 'From Street Performer to Studio Artist: My 10-Year Journey',
      excerpt: 'How I transformed my passion for music from performing on Mumbai streets to producing in my own studio. A story of persistence, learning, and community support...',
      author: {
        name: 'Arjun Singh',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        role: 'Music Producer',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=600&fit=crop',
      category: 'Journey',
      readTime: '8 min',
      publishedAt: '2025-11-15',
      likes: 1234,
      comments: 89,
      views: 5678,
      tags: ['music', 'journey', 'inspiration'],
      featured: true,
    },
    {
      id: 2,
      title: 'Mastering Portrait Photography: Complete Guide for Beginners',
      excerpt: 'Everything I learned in 5 years of portrait photography condensed into one comprehensive guide. From equipment to composition, lighting to editing...',
      author: {
        name: 'Priya Mehta',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        role: 'Photographer',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=600&fit=crop',
      category: 'Tutorial',
      readTime: '12 min',
      publishedAt: '2025-11-18',
      likes: 2456,
      comments: 156,
      views: 12340,
      tags: ['photography', 'tutorial', 'portraits'],
      featured: true,
    },
    {
      id: 3,
      title: 'Behind My Latest Animation: The Creative Process',
      excerpt: 'A detailed look at how I created my viral animation from concept to final render. Including challenges, solutions, and lessons learned...',
      author: {
        name: 'Neha Kapoor',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        role: 'Animator',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop',
      category: 'Behind the Scenes',
      readTime: '6 min',
      publishedAt: '2025-11-17',
      likes: 892,
      comments: 67,
      views: 4530,
      tags: ['animation', 'process', 'digital art'],
      featured: false,
    },
    {
      id: 4,
      title: 'How I Got My First Major Client as a Freelance Designer',
      excerpt: 'The strategies, mistakes, and lucky breaks that led to landing my first ₹5 lakh project. Practical advice for emerging designers...',
      author: {
        name: 'Vikram Patel',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        role: 'Designer',
        verified: false,
      },
      coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
      category: 'Success Story',
      readTime: '7 min',
      publishedAt: '2025-11-16',
      likes: 1567,
      comments: 123,
      views: 7890,
      tags: ['freelance', 'success', 'business'],
      featured: false,
    },
    {
      id: 5,
      title: '10 Time-Saving Shortcuts Every Digital Artist Should Know',
      excerpt: 'Productivity tips that transformed my workflow. These shortcuts and techniques can save you hours every week...',
      author: {
        name: 'Ananya Roy',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        role: 'Digital Artist',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop',
      category: 'Tips & Tricks',
      readTime: '5 min',
      publishedAt: '2025-11-14',
      likes: 3421,
      comments: 234,
      views: 15670,
      tags: ['tips', 'productivity', 'workflow'],
      featured: false,
    },
    {
      id: 6,
      title: 'Finding Inspiration in AI Era: Staying Relevant as an Artist',
      excerpt: 'Thoughts on navigating the changing landscape of art and creativity in the age of AI. How to embrace technology while staying true to your craft...',
      author: {
        name: 'Rahul Sharma',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        role: 'Writer & Artist',
        verified: true,
      },
      coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      category: 'Inspiration',
      readTime: '10 min',
      publishedAt: '2025-11-19',
      likes: 2890,
      comments: 456,
      views: 18900,
      tags: ['AI', 'inspiration', 'future'],
      featured: true,
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const featuredStories = stories.filter(s => s.featured);
  const regularStories = stories.filter(s => !s.featured);

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
            <span className="neon-text-cyan">Stories</span>
          </h1>
          <p className="text-text-muted">
            Real stories, insights, and inspiration from the artist community
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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

        {/* Featured Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-neon-pink" />
            <h2 className="text-2xl font-bold text-white">Featured Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="card-featured group cursor-pointer overflow-hidden hover:border-neon-cyan/40 transition-all"
              >
                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-neon-pink/90 backdrop-blur-sm text-white text-xs font-bold">
                      {story.category}
                    </span>
                  </div>

                  {/* Author Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white"
                        style={{ backgroundImage: `url(${story.author.avatar})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="text-white font-medium text-sm">{story.author.name}</span>
                          {story.author.verified && (
                            <svg className="w-4 h-4 text-neon-cyan" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          )}
                        </div>
                        <div className="text-text-muted text-xs">{story.author.role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-text-light text-sm mb-4 line-clamp-3">{story.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-neon-cyan/10 text-neon-cyan text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-text-muted border-t border-neon-cyan/20 pt-3">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {story.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {story.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {story.views}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {story.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regular Stories */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6">Latest Stories</h2>

          {regularStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="card-featured group cursor-pointer hover:border-neon-cyan/40 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Cover Image */}
                <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 rounded bg-neon-pink/90 backdrop-blur-sm text-white text-xs font-bold">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-neon-cyan transition-colors">
                      {story.title}
                    </h3>

                    <p className="text-text-light text-sm mb-3 line-clamp-2">{story.excerpt}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {story.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded bg-neon-cyan/10 text-neon-cyan text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-full bg-cover bg-center border border-neon-pink/30"
                        style={{ backgroundImage: `url(${story.author.avatar})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="text-white text-sm font-medium">{story.author.name}</span>
                          {story.author.verified && (
                            <svg className="w-4 h-4 text-neon-cyan" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          )}
                        </div>
                        <div className="text-text-muted text-xs">{story.author.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="flex items-center justify-between text-sm text-text-muted pt-3 border-t border-neon-cyan/20">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {story.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {story.comments}
                      </span>
                      <span className="text-xs">{formatDate(story.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full hover:bg-neon-pink/20 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-neon-cyan/20 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-featured bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-neon-pink/30 mt-12"
        >
          <div className="text-center">
            <h3 className="text-white font-bold text-2xl mb-2">Share Your Story</h3>
            <p className="text-text-muted mb-6">
              Inspire fellow artists by sharing your journey, insights, and experiences
            </p>
            <button className="btn-primary">
              Write a Story
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
