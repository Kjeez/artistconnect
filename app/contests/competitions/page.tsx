'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Award, Filter, Search, Clock, Star, Medal, Target } from 'lucide-react';
import { useState } from 'react';

interface Contest {
  id: number;
  title: string;
  organizer: string;
  image: string;
  category: string;
  prizes: string[];
  deadline: string;
  participants: number;
  entryFee: string;
  status: 'open' | 'judging' | 'closed';
  difficulty: 'beginner' | 'intermediate' | 'expert' | 'all';
  description: string;
}

export default function ContestsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const categories = ['All', 'Photography', 'Digital Art', 'Music', 'Writing', 'Video', 'Design', 'Mixed Media'];

  const contests: Contest[] = [
    {
      id: 1,
      title: 'Global Photography Challenge 2025',
      organizer: 'World Photo Federation',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=500&fit=crop',
      category: 'Photography',
      prizes: ['₹2,00,000', '₹1,00,000', '₹50,000'],
      deadline: '2025-12-31',
      participants: 3456,
      entryFee: 'Free',
      status: 'open',
      difficulty: 'all',
      description: 'Capture the essence of human connection in this global photography competition. Open to all photographers worldwide.',
    },
    {
      id: 2,
      title: 'Digital Art Innovation Awards',
      organizer: 'Creative Tech Guild',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop',
      category: 'Digital Art',
      prizes: ['₹5,00,000', '₹2,50,000', '₹1,00,000'],
      deadline: '2025-11-30',
      participants: 1234,
      entryFee: '₹500',
      status: 'open',
      difficulty: 'intermediate',
      description: 'Pushing boundaries in digital art. Featuring categories for NFT art, generative art, and interactive installations.',
    },
    {
      id: 3,
      title: 'Independent Music Producer Contest',
      organizer: 'Sound Wave Records',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop',
      category: 'Music',
      prizes: ['Studio Time', 'Distribution Deal', '₹75,000'],
      deadline: '2025-12-15',
      participants: 892,
      entryFee: 'Free',
      status: 'open',
      difficulty: 'all',
      description: 'Win studio recording time and distribution deal. Submit your best original track across any genre.',
    },
    {
      id: 4,
      title: 'Short Story Writing Competition',
      organizer: 'Literary Arts Foundation',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop',
      category: 'Writing',
      prizes: ['₹1,00,000', '₹50,000', 'Publication'],
      deadline: '2025-11-25',
      participants: 2156,
      entryFee: '₹300',
      status: 'judging',
      difficulty: 'all',
      description: 'Write a compelling short story under 5000 words. Winners will be published in our anthology.',
    },
    {
      id: 5,
      title: 'Motion Graphics Showdown',
      organizer: 'Pixel Perfect Studios',
      image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&h=500&fit=crop',
      category: 'Video',
      prizes: ['₹3,00,000', '₹1,50,000', '₹75,000'],
      deadline: '2025-12-20',
      participants: 567,
      entryFee: '₹750',
      status: 'open',
      difficulty: 'expert',
      description: 'Advanced motion graphics competition. Create a 30-second explainer animation on the theme "Future of Creativity".',
    },
    {
      id: 6,
      title: 'Logo Design Championship',
      organizer: 'Brand Masters Association',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop',
      category: 'Design',
      prizes: ['₹1,50,000', 'Mentorship', '₹50,000'],
      deadline: '2026-01-15',
      participants: 1567,
      entryFee: 'Free',
      status: 'open',
      difficulty: 'beginner',
      description: 'Design a memorable logo for a fictional startup. Perfect for emerging designers to showcase their skills.',
    },
  ];

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">Open</span>;
      case 'judging':
        return <span className="px-3 py-1 rounded-full bg-neon-gold/20 text-neon-gold text-xs font-bold border border-neon-gold/30">Judging</span>;
      case 'closed':
        return <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">Closed</span>;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-400';
      case 'intermediate':
        return 'text-neon-gold';
      case 'expert':
        return 'text-red-400';
      default:
        return 'text-neon-cyan';
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
            <span className="neon-text-pink">Contests</span>{' '}
            <span className="neon-text-cyan">& Competitions</span>
          </h1>
          <p className="text-text-muted">
            Showcase your talent and win amazing prizes
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Active Contests', value: '18', icon: Trophy, color: 'neon-pink' },
            { label: 'Total Prizes', value: '₹45L', icon: Award, color: 'neon-cyan' },
            { label: 'Participants', value: '12.5K', icon: Users, color: 'neon-lime' },
            { label: 'Winners', value: '234', icon: Medal, color: 'neon-gold' },
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
                placeholder="Search contests..."
                className="input-field pl-10 w-full"
              />
            </div>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="input-field"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
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

        {/* Contest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contests.map((contest, index) => (
            <motion.div
              key={contest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-featured group hover:border-neon-cyan/40 transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={contest.image}
                  alt={contest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                  {getStatusBadge(contest.status)}
                  <span className={`px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs font-bold ${getDifficultyColor(contest.difficulty)}`}>
                    {contest.difficulty.charAt(0).toUpperCase() + contest.difficulty.slice(1)}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-neon-cyan/90 backdrop-blur-sm text-black text-xs font-bold">
                    {contest.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-neon-cyan transition-colors">
                  {contest.title}
                </h3>
                <div className="text-neon-pink font-medium text-sm mb-3">{contest.organizer}</div>

                <p className="text-text-light text-sm mb-4 line-clamp-2">{contest.description}</p>

                {/* Prizes */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-neon-gold" />
                    <span className="text-white font-bold text-sm">Prizes:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {contest.prizes.map((prize, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-neon-gold/20 text-neon-gold text-xs border border-neon-gold/30"
                      >
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'} {prize}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 rounded-lg bg-input-bg">
                    <Clock className="w-4 h-4 text-neon-cyan mx-auto mb-1" />
                    <div className="text-white font-bold text-xs">{getDaysRemaining(contest.deadline)}d</div>
                    <div className="text-text-muted text-xs">Left</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-input-bg">
                    <Users className="w-4 h-4 text-neon-lime mx-auto mb-1" />
                    <div className="text-white font-bold text-xs">{contest.participants}</div>
                    <div className="text-text-muted text-xs">Joined</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-input-bg">
                    <Target className="w-4 h-4 text-neon-pink mx-auto mb-1" />
                    <div className="text-white font-bold text-xs">{contest.entryFee}</div>
                    <div className="text-text-muted text-xs">Fee</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="btn-primary flex-1">
                    {contest.status === 'open' ? 'Enter Now' : 'View Details'}
                  </button>
                  <button className="btn-outline px-4">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Host Your Contest CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-featured bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-neon-pink/30 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-full bg-neon-pink/20">
              <Trophy className="w-12 h-12 text-neon-pink" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-bold text-2xl mb-2">Host Your Own Contest</h3>
              <p className="text-text-muted">
                Discover new talent and build your community by hosting contests on ArtistConnect
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Create Contest
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
