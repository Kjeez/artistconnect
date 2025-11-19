'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  MapPin,
  Star,
  Calendar,
  Edit,
  Video,
  Image as ImageIcon,
  Music,
  Award,
  Share2,
  Settings,
} from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'reviews' | 'calendar'>('portfolio');

  const portfolioItems = [
    {
      id: 1,
      type: 'video',
      title: 'Hamlet Monologue',
      thumbnail: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&h=300&fit=crop',
      views: '1.2K',
    },
    {
      id: 2,
      type: 'image',
      title: 'Character Portrait',
      thumbnail: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop',
      views: '856',
    },
    {
      id: 3,
      type: 'video',
      title: 'Classical Dance Performance',
      thumbnail: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&h=300&fit=crop',
      views: '2.1K',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Director',
      rating: 5,
      comment: 'Exceptional talent! Delivered beyond expectations.',
      date: '2025-11-15',
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Event Organizer',
      rating: 5,
      comment: 'Professional and punctual. Would hire again!',
      date: '2025-11-10',
    },
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Hero section with cover */}
      <div className="relative h-64 bg-gradient-stage">
        <div className="absolute inset-0 bg-dark-bg/50" />
        <button className="absolute top-4 right-4 p-2 rounded-full glass border border-neon-cyan/30 hover:border-neon-cyan transition-all">
          <Settings className="w-5 h-5 text-neon-cyan" />
        </button>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark rounded-2xl border border-neon-pink/30 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-purple-pink p-1">
                <div
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop)',
                  }}
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 rounded-full bg-neon-pink hover:neon-glow-pink transition-all">
                <Edit className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold font-vietnam neon-text-pink mb-2">
                    Priya Sharma
                  </h1>
                  <p className="text-text-muted mb-3">Theatre Actor • Classical Dancer</p>

                  <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-neon-cyan" />
                      <span>Delhi, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                      <span>4.9 (24 reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-neon-lime" />
                      <span>Verified Artist</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Theatre', 'Dance', 'Kathak', 'Acting'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full border border-neon-cyan/30 text-xs font-medium text-neon-cyan"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Edit Profile
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Bio */}
              <p className="text-text-light leading-relaxed mt-4">
                Passionate theatre actor with 5+ years of experience in classical and contemporary
                performances. Trained in Kathak and various acting methodologies. Available for
                productions, events, and collaborations across Delhi-NCR.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex gap-4 border-b border-neon-cyan/20 mb-6">
            {[
              { id: 'portfolio', label: 'Portfolio', icon: ImageIcon },
              { id: 'reviews', label: 'Reviews', icon: Star },
              { id: 'calendar', label: 'Availability', icon: Calendar },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition-all relative ${
                    activeTab === tab.id
                      ? 'text-neon-pink'
                      : 'text-text-muted hover:text-text-light'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-pink neon-glow-pink"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="min-h-[400px]">
            {/* Portfolio tab */}
            {activeTab === 'portfolio' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Add new button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card cursor-pointer flex flex-col items-center justify-center h-64 border-dashed"
                >
                  <div className="p-4 rounded-full bg-neon-pink/20 mb-4">
                    <ImageIcon className="w-8 h-8 text-neon-pink" />
                  </div>
                  <p className="font-medium text-white">Add New Item</p>
                  <p className="text-sm text-text-muted mt-1">Photo, Video, or Audio</p>
                </motion.div>

                {/* Portfolio items */}
                {portfolioItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -5 }}
                    className="card group cursor-pointer"
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.thumbnail})` }}
                      />
                      <div className="absolute inset-0 bg-dark-bg/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {item.type === 'video' ? (
                          <Video className="w-12 h-12 text-white" />
                        ) : (
                          <Music className="w-12 h-12 text-white" />
                        )}
                      </div>
                      <div className="absolute top-3 right-3 px-2 py-1 rounded glass text-xs font-semibold">
                        {item.type === 'video' ? '▶' : '🖼️'}
                      </div>
                    </div>
                    <h3 className="font-bold text-white group-hover:text-neon-pink transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-1">{item.views} views</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Reviews tab */}
            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {reviews.map((review) => (
                  <div key={review.id} className="card">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-cyan-lime" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-bold text-white">{review.name}</h4>
                            <p className="text-sm text-text-muted">{review.role}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-neon-gold text-neon-gold" />
                            ))}
                          </div>
                        </div>
                        <p className="text-text-light leading-relaxed">{review.comment}</p>
                        <p className="text-sm text-text-muted mt-2">
                          {new Date(review.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Calendar tab */}
            {activeTab === 'calendar' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card text-center py-12"
              >
                <Calendar className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Availability Calendar</h3>
                <p className="text-text-muted mb-6">
                  Manage your schedule and show when you're available for bookings
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Set Availability
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
