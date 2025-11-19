'use client';

import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, Eye, Pin, TrendingUp, Clock, Search, Filter, Plus, Tag } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface ForumThread {
  id: number;
  title: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  content: string;
  replies: number;
  views: number;
  likes: number;
  isPinned: boolean;
  isHot: boolean;
  createdAt: string;
  lastActivity: string;
}

export default function CommunityForumPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'discussion' | 'question' | 'showcase'>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'trending'>('latest');

  const threads: ForumThread[] = [
    {
      id: 1,
      title: 'Tips for first-time directors: Lessons from my debut production',
      author: {
        name: 'Rajesh Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        role: 'Director',
      },
      category: 'Discussion',
      tags: ['directing', 'tips', 'beginners'],
      content: 'Just wrapped my first production as a director and wanted to share some insights that might help others starting out...',
      replies: 47,
      views: 1234,
      likes: 89,
      isPinned: true,
      isHot: true,
      createdAt: '2 days ago',
      lastActivity: '5 min ago',
    },
    {
      id: 2,
      title: 'What\'s the best way to prepare for classical theatre auditions?',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        role: 'Actor',
      },
      category: 'Question',
      tags: ['auditions', 'classical', 'preparation'],
      content: 'I have an audition coming up for a Shakespeare production. Any advice on preparation techniques?',
      replies: 23,
      views: 567,
      likes: 34,
      isPinned: false,
      isHot: false,
      createdAt: '5 hours ago',
      lastActivity: '1 hour ago',
    },
    {
      id: 3,
      title: 'Showcase: My latest set design for "A Midsummer Night\'s Dream"',
      author: {
        name: 'Ananya Verma',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        role: 'Set Designer',
      },
      category: 'Showcase',
      tags: ['set-design', 'shakespeare', 'showcase'],
      content: 'Excited to share photos and insights from my recent set design project. Would love your feedback!',
      replies: 31,
      views: 892,
      likes: 67,
      isPinned: false,
      isHot: true,
      createdAt: '1 day ago',
      lastActivity: '30 min ago',
    },
    {
      id: 4,
      title: 'How do you handle stage fright? Looking for practical advice',
      author: {
        name: 'Vikram Singh',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        role: 'Actor',
      },
      category: 'Question',
      tags: ['performance', 'advice', 'mental-health'],
      content: 'I\'ve been performing for years but still get nervous before shows. What are your techniques?',
      replies: 56,
      views: 1543,
      likes: 102,
      isPinned: false,
      isHot: true,
      createdAt: '3 days ago',
      lastActivity: '2 hours ago',
    },
    {
      id: 5,
      title: 'Discussion: The future of theatre in the digital age',
      author: {
        name: 'Neha Kapoor',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        role: 'Producer',
      },
      category: 'Discussion',
      tags: ['digital', 'future', 'innovation'],
      content: 'With streaming and virtual performances becoming more common, how do you see traditional theatre evolving?',
      replies: 78,
      views: 2341,
      likes: 145,
      isPinned: false,
      isHot: true,
      createdAt: '1 week ago',
      lastActivity: '10 min ago',
    },
    {
      id: 6,
      title: 'Seeking collaborators for experimental theatre project in Mumbai',
      author: {
        name: 'Arjun Mehta',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        role: 'Director',
      },
      category: 'Discussion',
      tags: ['collaboration', 'mumbai', 'experimental'],
      content: 'Working on an experimental piece that blends traditional and modern theatre. Looking for interested artists!',
      replies: 19,
      views: 423,
      likes: 28,
      isPinned: false,
      isHot: false,
      createdAt: '12 hours ago',
      lastActivity: '3 hours ago',
    },
  ];

  const categories = ['All', 'Discussion', 'Question', 'Showcase'];
  const popularTags = ['auditions', 'directing', 'acting', 'shakespeare', 'tips', 'collaboration', 'set-design', 'lighting'];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'discussion':
        return 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10';
      case 'question':
        return 'text-neon-pink border-neon-pink/30 bg-neon-pink/10';
      case 'showcase':
        return 'text-neon-lime border-neon-lime/30 bg-neon-lime/10';
      default:
        return 'text-neon-gold border-neon-gold/30 bg-neon-gold/10';
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
                <span className="neon-text-pink">Community</span>{' '}
                <span className="neon-text-cyan">Forum</span>
              </h1>
              <p className="text-text-muted">
                Connect, share, and learn with fellow theatre artists
              </p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Thread
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters and Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-featured"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="input-field pl-10 w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="input-field"
                  >
                    <option value="latest">Latest</option>
                    <option value="popular">Most Popular</option>
                    <option value="trending">Trending</option>
                  </select>
                  <button className="btn-outline flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category.toLowerCase() as any)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                      activeTab === category.toLowerCase()
                        ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                        : 'bg-input-bg text-text-muted hover:text-white border border-transparent'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Thread List */}
            <div className="space-y-4">
              {threads.map((thread, index) => (
                <motion.div
                  key={thread.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="card-featured hover:border-neon-cyan/40 transition-all cursor-pointer"
                >
                  <div className="flex gap-4">
                    {/* Author Avatar */}
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-neon-pink flex-shrink-0"
                      style={{ backgroundImage: `url(${thread.author.avatar})` }}
                    />

                    {/* Thread Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {thread.isPinned && (
                              <Pin className="w-4 h-4 text-neon-gold flex-shrink-0" />
                            )}
                            {thread.isHot && (
                              <TrendingUp className="w-4 h-4 text-neon-pink flex-shrink-0" />
                            )}
                            <h3 className="text-white font-bold text-lg hover:text-neon-cyan transition-colors truncate">
                              {thread.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-muted">
                            <span className="font-medium text-white">{thread.author.name}</span>
                            <span>•</span>
                            <span>{thread.author.role}</span>
                            <span>•</span>
                            <span>{thread.createdAt}</span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border flex-shrink-0 ${getCategoryColor(thread.category)}`}>
                          {thread.category}
                        </span>
                      </div>

                      {/* Content Preview */}
                      <p className="text-text-light text-sm mb-3 line-clamp-2">
                        {thread.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {thread.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded bg-input-bg text-text-muted text-xs hover:text-neon-cyan transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-text-muted hover:text-neon-cyan transition-colors">
                          <MessageSquare className="w-4 h-4" />
                          <span>{thread.replies}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted hover:text-neon-pink transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{thread.likes}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted">
                          <Eye className="w-4 h-4" />
                          <span>{thread.views}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted ml-auto">
                          <Clock className="w-4 h-4" />
                          <span>Active {thread.lastActivity}</span>
                        </div>
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
              className="text-center"
            >
              <button className="btn-outline">
                Load More Threads
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Popular Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-neon-pink" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-input-bg text-text-muted text-sm hover:text-neon-cyan hover:bg-neon-cyan/10 border border-transparent hover:border-neon-cyan/30 transition-all"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-text-muted text-sm">Total Threads</span>
                    <span className="text-neon-cyan font-bold">2,547</span>
                  </div>
                  <div className="h-1 bg-input-bg rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink w-3/4" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-text-muted text-sm">Active Members</span>
                    <span className="text-neon-lime font-bold">8,392</span>
                  </div>
                  <div className="h-1 bg-input-bg rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-lime to-neon-gold w-4/5" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-text-muted text-sm">Posts Today</span>
                    <span className="text-neon-pink font-bold">143</span>
                  </div>
                  <div className="h-1 bg-input-bg rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-pink to-neon-purple w-1/2" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Forum Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4">Forum Guidelines</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan mt-1.5 flex-shrink-0" />
                  <span>Be respectful and constructive</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-pink mt-1.5 flex-shrink-0" />
                  <span>Stay on topic</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-lime mt-1.5 flex-shrink-0" />
                  <span>No spam or self-promotion</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-gold mt-1.5 flex-shrink-0" />
                  <span>Search before posting</span>
                </li>
              </ul>
              <Link href="/guidelines">
                <button className="btn-outline w-full mt-4 text-sm">
                  Read Full Guidelines
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
