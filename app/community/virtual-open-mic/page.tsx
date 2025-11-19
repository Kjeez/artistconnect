'use client';

import { motion } from 'framer-motion';
import { Mic, Video, Calendar, Users, Clock, Play, Heart, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Comedy Night Open Mic',
    host: 'Laugh Factory Delhi',
    date: '2025-11-25',
    time: '8:00 PM',
    duration: '2 hours',
    participants: 12,
    maxSlots: 20,
    genre: 'Comedy',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Poetry Slam Virtual Stage',
    host: 'Words & Rhythm Community',
    date: '2025-11-26',
    time: '7:00 PM',
    duration: '90 minutes',
    participants: 8,
    maxSlots: 15,
    genre: 'Poetry',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'Acoustic Music Sessions',
    host: 'Delhi Music Circle',
    date: '2025-11-27',
    time: '6:30 PM',
    duration: '2.5 hours',
    participants: 15,
    maxSlots: 25,
    genre: 'Music',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=200&fit=crop',
  },
];

const pastPerformances = [
  {
    id: 1,
    title: 'Monologue Night Highlights',
    performer: 'Priya Sharma',
    views: 2345,
    likes: 456,
    comments: 89,
    thumbnail: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Stand-up Comedy Set',
    performer: 'Amit Patel',
    views: 5678,
    likes: 892,
    comments: 134,
    thumbnail: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'Classical Dance Performance',
    performer: 'Neha Singh',
    views: 3421,
    likes: 678,
    comments: 112,
    thumbnail: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=300&h=200&fit=crop',
  },
];

export default function VirtualOpenMicPage() {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');

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
            <Mic className="w-10 h-10 text-neon-pink" />
            <span className="neon-text-pink">Virtual</span>{' '}
            <span className="neon-text-cyan">Open Mic</span>
          </h1>
          <p className="text-text-muted">
            Perform live, showcase your talent, and connect with audiences worldwide
          </p>
        </motion.div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured p-8 mb-8 bg-gradient-to-r from-neon-pink/10 via-neon-cyan/10 to-neon-lime/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">
                Join Our Next Open Mic Night!
              </h2>
              <p className="text-text-light mb-4">
                Sign up for an upcoming slot and perform live in front of a supportive audience.
                All genres welcome - theatre, comedy, music, poetry, and more!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Book Your Slot
                </button>
                <button className="btn-outline">
                  Host an Event
                </button>
              </div>
            </div>
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink to-neon-cyan rounded-full animate-pulse opacity-50" />
              <div className="absolute inset-2 bg-dark-bg rounded-full flex items-center justify-center">
                <Mic className="w-16 h-16 text-neon-pink" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Live Events', value: '50+', color: 'neon-pink' },
            { label: 'Performers', value: '1,200+', color: 'neon-cyan' },
            { label: 'Total Views', value: '45K+', color: 'neon-lime' },
            { label: 'This Week', value: '12', color: 'neon-gold' },
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

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-neon-cyan/20">
          <button
            onClick={() => setSelectedTab('upcoming')}
            className={`pb-3 px-4 font-medium transition-all ${
              selectedTab === 'upcoming'
                ? 'text-neon-pink border-b-2 border-neon-pink'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setSelectedTab('past')}
            className={`pb-3 px-4 font-medium transition-all ${
              selectedTab === 'past'
                ? 'text-neon-pink border-b-2 border-neon-pink'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Past Performances
          </button>
        </div>

        {/* Upcoming Events */}
        {selectedTab === 'upcoming' && (
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-featured overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Event Image */}
                  <div
                    className="w-full md:w-64 h-48 md:h-auto bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />

                  {/* Event Info */}
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                        <p className="text-text-muted text-sm">{event.host}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-neon-lime/20 text-neon-lime text-xs font-bold border border-neon-lime/30">
                        {event.genre}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-text-muted">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        {new Date(event.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <Clock className="w-4 h-4 text-neon-pink" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <Video className="w-4 h-4 text-neon-lime" />
                        {event.duration}
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <Users className="w-4 h-4 text-neon-gold" />
                        {event.participants}/{event.maxSlots} slots
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-neon-pink to-neon-cyan"
                          style={{ width: `${(event.participants / event.maxSlots) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-text-muted mt-1">
                        {event.maxSlots - event.participants} slots remaining
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button className="btn-primary flex-1">
                        Register to Perform
                      </button>
                      <button className="btn-outline">
                        Watch Live
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Past Performances */}
        {selectedTab === 'past' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastPerformances.map((performance, index) => (
              <motion.div
                key={performance.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card cursor-pointer"
              >
                <div className="relative mb-4 group">
                  <div
                    className="h-48 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${performance.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{performance.title}</h3>
                <p className="text-text-muted text-sm mb-4">by {performance.performer}</p>

                <div className="flex items-center justify-between text-sm text-text-muted">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {performance.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {performance.comments}
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {performance.views}
                  </div>
                  <button className="p-1 rounded-full hover:bg-neon-pink/20 transition-colors">
                    <Share2 className="w-4 h-4 text-neon-pink" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 card-featured p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Choose an Event',
                description: 'Browse upcoming open mic nights and select one that matches your style',
              },
              {
                step: '2',
                title: 'Book Your Slot',
                description: 'Register for a performance slot and prepare your 3-5 minute act',
              },
              {
                step: '3',
                title: 'Go Live',
                description: 'Join the virtual stage, perform, and get real-time audience feedback',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-neon-pink/20 border-2 border-neon-pink flex items-center justify-center text-neon-pink font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
