'use client';

import { motion } from 'framer-motion';
import { Video, Radio, Users, Eye, Heart, MessageCircle, Share2, Settings, Maximize } from 'lucide-react';
import { useState } from 'react';

const liveStreams = [
  {
    id: 1,
    title: 'Classical Kathak Performance - Live',
    performer: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=600&h=400&fit=crop',
    viewers: 1234,
    category: 'Dance',
    isLive: true,
  },
  {
    id: 2,
    title: 'Stand-up Comedy Open Mic',
    performer: 'Vikram Singh',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&h=400&fit=crop',
    viewers: 892,
    category: 'Comedy',
    isLive: true,
  },
  {
    id: 3,
    title: 'Behind the Scenes: Theatre Rehearsal',
    performer: 'Rajesh Kumar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop',
    viewers: 567,
    category: 'Theatre',
    isLive: true,
  },
];

const scheduledStreams = [
  {
    id: 1,
    title: 'Musical Theatre Workshop',
    performer: 'Ananya Verma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    scheduledTime: '2025-11-25 18:00',
    category: 'Workshop',
  },
  {
    id: 2,
    title: 'Q&A with Director Rajesh Kumar',
    performer: 'Rajesh Kumar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    scheduledTime: '2025-11-26 19:30',
    category: 'Talk',
  },
];

const chatMessages = [
  { id: 1, user: 'Arjun_23', message: 'Amazing performance! 🎭', timestamp: '2 min ago' },
  { id: 2, user: 'Theatre_Fan', message: 'Love the energy!', timestamp: '3 min ago' },
  { id: 3, user: 'Priya_Admirer', message: 'Incredible footwork!', timestamp: '4 min ago' },
  { id: 4, user: 'Mumbai_Arts', message: 'Where can I learn this?', timestamp: '5 min ago' },
];

export default function LiveStreamingPage() {
  const [selectedStream, setSelectedStream] = useState(liveStreams[0]);
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold font-vietnam mb-2 flex items-center gap-3">
                <Radio className="w-10 h-10 text-red-500 animate-pulse" />
                <span className="neon-text-pink">Live</span>{' '}
                <span className="neon-text-cyan">Streaming</span>
              </h1>
              <p className="text-text-muted">
                Watch live performances and connect with artists in real-time
              </p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Video className="w-5 h-5" />
              Go Live
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-featured overflow-hidden"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedStream.thumbnail})` }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Video className="w-20 h-20 text-white/50" />
                </div>

                {/* Live Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-red-500 text-white text-sm font-bold flex items-center gap-2 animate-pulse">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  LIVE
                </div>

                {/* Viewers Count */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm text-white text-sm font-bold flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {selectedStream.viewers.toLocaleString()}
                </div>

                {/* Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Settings className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Maximize className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stream Info */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-neon-pink flex-shrink-0"
                    style={{ backgroundImage: `url(${selectedStream.avatar})` }}
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {selectedStream.title}
                    </h2>
                    <p className="text-text-muted mb-3">{selectedStream.performer}</p>
                    <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-bold border border-neon-cyan/30">
                      {selectedStream.category}
                    </span>
                  </div>
                  <button className="btn-primary">
                    Follow
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Other Live Streams */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Other Live Streams</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {liveStreams.filter(s => s.id !== selectedStream.id).map((stream) => (
                  <motion.div
                    key={stream.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedStream(stream)}
                    className="card cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${stream.thumbnail})` }}
                      />
                      <div className="absolute top-2 left-2 px-2 py-1 rounded bg-red-500 text-white text-xs font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        LIVE
                      </div>
                      <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {stream.viewers}
                      </div>
                    </div>
                    <h4 className="text-white font-medium mb-1">{stream.title}</h4>
                    <p className="text-text-muted text-sm">{stream.performer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scheduled Streams */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Upcoming Streams</h3>
              <div className="space-y-3">
                {scheduledStreams.map((stream) => (
                  <div key={stream.id} className="card-featured">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-neon-cyan flex-shrink-0"
                        style={{ backgroundImage: `url(${stream.avatar})` }}
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{stream.title}</h4>
                        <p className="text-text-muted text-sm">{stream.performer}</p>
                        <p className="text-neon-lime text-xs mt-1">
                          {new Date(stream.scheduledTime).toLocaleString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                      <button className="btn-outline text-sm py-2 px-4">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-featured h-[calc(100vh-12rem)] flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-neon-cyan/20">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-neon-cyan" />
                  Live Chat
                </h3>
                <span className="text-sm text-text-muted">
                  {selectedStream.viewers} watching
                </span>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="animate-fadeIn">
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-neon-pink" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium text-sm">{msg.user}</span>
                          <span className="text-text-muted text-xs">{msg.timestamp}</span>
                        </div>
                        <p className="text-text-light text-sm">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-neon-cyan/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Send a message..."
                    className="input-field flex-1"
                  />
                  <button className="btn-primary px-4">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
