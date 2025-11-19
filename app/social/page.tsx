'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Play,
  TrendingUp,
  Users,
  Hash,
} from 'lucide-react';

const posts = [
  {
    id: 1,
    author: {
      name: 'Priya Sharma',
      role: 'Theatre Actor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      verified: true,
    },
    timestamp: '2 hours ago',
    content: 'Just wrapped up rehearsals for our upcoming production of Hamlet! The energy in the room was electric. Can\'t wait to share this with you all. 🎭✨',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop',
    },
    likes: 234,
    comments: 45,
    shares: 12,
    tags: ['Hamlet', 'Theatre', 'Rehearsal'],
  },
  {
    id: 2,
    author: {
      name: 'Rahul Verma',
      role: 'Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      verified: true,
    },
    timestamp: '5 hours ago',
    content: 'Excited to announce open auditions for our new production "Delhi Diaries"! Looking for 4 talented actors. Auditions start next week. Link in bio!',
    likes: 456,
    comments: 89,
    shares: 67,
    tags: ['Audition', 'DelhiDiaries', 'Opportunity'],
  },
  {
    id: 3,
    author: {
      name: 'Anjali Patel',
      role: 'Kathak Dancer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      verified: false,
    },
    timestamp: '1 day ago',
    content: 'Behind the scenes from yesterday\'s Kathak performance. The stage, the lights, the energy - this is what I live for! 💃',
    media: {
      type: 'video',
      url: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&h=600&fit=crop',
    },
    likes: 678,
    comments: 123,
    shares: 45,
    tags: ['Kathak', 'Dance', 'Performance'],
  },
];

const trendingTopics = [
  { tag: 'DelhiTheatre', posts: 1234 },
  { tag: 'AuditionAlert', posts: 856 },
  { tag: 'StageLife', posts: 2341 },
  { tag: 'TheatreLovers', posts: 567 },
];

const suggestedUsers = [
  {
    name: 'Arjun Kapoor',
    role: 'Comedian',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    followers: '12K',
  },
  {
    name: 'Neha Singh',
    role: 'Script Writer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    followers: '8.5K',
  },
];

export default function SocialPage() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const toggleBookmark = (postId: number) => {
    setBookmarkedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl font-bold font-vietnam neon-text-pink mb-2">
                Community Feed
              </h1>
              <p className="text-text-muted">Connect with artists and stay updated</p>
            </motion.div>

            {/* Create post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-purple-pink" />
                <input
                  type="text"
                  placeholder="Share your theatre moments..."
                  className="input flex-1"
                />
              </div>
            </motion.div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  {/* Post header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-3">
                      <div
                        className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-neon-pink"
                        style={{ backgroundImage: `url(${post.author.avatar})` }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-white">{post.author.name}</h3>
                          {post.author.verified && (
                            <div className="w-4 h-4 rounded-full bg-neon-cyan flex items-center justify-center">
                              <span className="text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-text-muted">{post.author.role}</p>
                        <p className="text-xs text-text-muted mt-1">{post.timestamp}</p>
                      </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-neon-pink/10 transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-text-muted" />
                    </button>
                  </div>

                  {/* Post content */}
                  <p className="text-text-light leading-relaxed mb-4">{post.content}</p>

                  {/* Post media */}
                  {post.media && (
                    <div className="relative rounded-xl overflow-hidden mb-4 -mx-4">
                      <div
                        className="h-96 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.media.url})` }}
                      />
                      {post.media.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-dark-bg/30">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 rounded-full bg-neon-pink/90 hover:bg-neon-pink transition-all"
                          >
                            <Play className="w-8 h-8 text-white" />
                          </motion.button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm text-neon-cyan hover:text-neon-pink cursor-pointer transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Post actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-neon-cyan/20">
                    <div className="flex items-center gap-6">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleLike(post.id)}
                        className="flex items-center gap-2 text-text-muted hover:text-neon-pink transition-colors group"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            likedPosts.includes(post.id)
                              ? 'fill-neon-pink text-neon-pink'
                              : 'group-hover:scale-110'
                          }`}
                        />
                        <span className="text-sm font-medium">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                      </motion.button>

                      <button className="flex items-center gap-2 text-text-muted hover:text-neon-cyan transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </button>

                      <button className="flex items-center gap-2 text-text-muted hover:text-neon-lime transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.shares}</span>
                      </button>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleBookmark(post.id)}
                      className="text-text-muted hover:text-neon-gold transition-colors"
                    >
                      <Bookmark
                        className={`w-5 h-5 ${
                          bookmarkedPosts.includes(post.id) ? 'fill-neon-gold text-neon-gold' : ''
                        }`}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Trending topics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card sticky top-20"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-neon-gold" />
                <h3 className="font-bold text-white">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <motion.button
                    key={topic.tag}
                    whileHover={{ x: 5 }}
                    className="w-full text-left p-3 rounded-lg hover:bg-neon-pink/10 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Hash className="w-4 h-4 text-neon-pink" />
                      <span className="font-medium text-white">{topic.tag}</span>
                    </div>
                    <p className="text-xs text-text-muted">{topic.posts.toLocaleString()} posts</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Suggested users */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-neon-cyan" />
                <h3 className="font-bold text-white">Suggested Artists</h3>
              </div>
              <div className="space-y-3">
                {suggestedUsers.map((user) => (
                  <div key={user.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-neon-cyan"
                        style={{ backgroundImage: `url(${user.avatar})` }}
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white">{user.name}</h4>
                        <p className="text-xs text-text-muted">{user.role}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-1.5 rounded-full bg-gradient-purple-pink text-white text-sm font-medium hover:neon-glow-pink transition-all"
                    >
                      Follow
                    </motion.button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
