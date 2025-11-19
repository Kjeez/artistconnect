'use client';

import { motion } from 'framer-motion';
import { Users, UserPlus, MessageCircle, Star, MapPin, Briefcase, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const suggestedConnections = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Film Director',
    location: 'Mumbai',
    mutualConnections: 12,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    tags: ['Direction', 'Screenwriting'],
  },
  {
    id: 2,
    name: 'Ananya Verma',
    role: 'Theatre Producer',
    location: 'Delhi',
    mutualConnections: 8,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    tags: ['Production', 'Management'],
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Casting Director',
    location: 'Bangalore',
    mutualConnections: 15,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    tags: ['Casting', 'Talent Scouting'],
  },
  {
    id: 4,
    name: 'Meera Patel',
    role: 'Choreographer',
    location: 'Mumbai',
    mutualConnections: 20,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    tags: ['Choreography', 'Dance'],
  },
];

const recentActivity = [
  { user: 'Rajesh Kumar', action: 'viewed your profile', time: '2 hours ago' },
  { user: 'Ananya Verma', action: 'sent you a connection request', time: '5 hours ago' },
  { user: 'Vikram Singh', action: 'commented on your post', time: '1 day ago' },
];

export default function NetworkingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam mb-2 flex items-center gap-3">
            <Users className="w-10 h-10 text-neon-pink" />
            <span className="neon-text-pink">Professional</span>{' '}
            <span className="neon-text-cyan">Network</span>
          </h1>
          <p className="text-text-muted">
            Connect with theatre professionals and expand your network
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Connections', value: '342', color: 'neon-pink' },
            { label: 'Following', value: '156', color: 'neon-cyan' },
            { label: 'Followers', value: '489', color: 'neon-lime' },
            { label: 'Profile Views', value: '1.2K', color: 'neon-gold' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <div className={`text-3xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search & Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-featured"
            >
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search professionals..."
                    className="input-field pl-10"
                  />
                </div>
                <button className="btn-outline px-4">
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {['all', 'directors', 'actors', 'producers', 'choreographers'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                      selectedFilter === filter
                        ? 'bg-neon-pink text-white'
                        : 'bg-input-bg text-text-muted hover:text-white'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Suggested Connections */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Suggested Connections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedConnections.map((person, index) => (
                  <motion.div
                    key={person.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="card"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-full bg-cover bg-center flex-shrink-0 border-2 border-neon-pink"
                        style={{ backgroundImage: `url(${person.image})` }}
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
                        <p className="text-text-muted text-sm mb-2">{person.role}</p>
                        <div className="flex items-center gap-3 text-xs text-text-muted">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {person.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-neon-gold fill-neon-gold" />
                            {person.rating}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {person.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs border border-neon-cyan/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-text-muted mb-4">
                      {person.mutualConnections} mutual connections
                    </div>

                    <div className="flex gap-2">
                      <button className="btn-primary flex-1 text-sm py-2 flex items-center justify-center gap-2">
                        <UserPlus className="w-4 h-4" />
                        Connect
                      </button>
                      <button className="btn-outline px-3">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card-featured"
            >
              <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="pb-4 border-b border-neon-cyan/20 last:border-0">
                    <p className="text-white text-sm mb-1">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-text-muted">{activity.action}</span>
                    </p>
                    <p className="text-xs text-text-muted">{activity.time}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Network Growth */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="card-featured"
            >
              <h3 className="text-lg font-bold text-white mb-4">Network Growth</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-muted">Profile Completion</span>
                    <span className="text-sm text-neon-lime font-bold">85%</span>
                  </div>
                  <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-pink to-neon-lime w-[85%]" />
                  </div>
                </div>
                <div className="pt-3 border-t border-neon-cyan/20">
                  <p className="text-sm text-text-light mb-2">
                    Complete your profile to get more connection requests!
                  </p>
                  <button className="btn-outline w-full text-sm">
                    Complete Profile
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="card-featured"
            >
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-3 rounded-lg bg-input-bg text-white text-sm hover:bg-neon-cyan/20 transition-colors text-left px-4">
                  View Connection Requests
                </button>
                <button className="w-full py-3 rounded-lg bg-input-bg text-white text-sm hover:bg-neon-cyan/20 transition-colors text-left px-4">
                  Invite Colleagues
                </button>
                <button className="w-full py-3 rounded-lg bg-input-bg text-white text-sm hover:bg-neon-cyan/20 transition-colors text-left px-4">
                  Explore Communities
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
