'use client';

import { motion } from 'framer-motion';
import { Play, Pause, Heart, Share2, Download, MoreHorizontal, Music, Headphones, Clock, TrendingUp, User } from 'lucide-react';
import { useState } from 'react';

interface Track {
  id: number;
  title: string;
  artist: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  coverArt: string;
  genre: string;
  duration: string;
  plays: number;
  likes: number;
  waveform: number[];
  releaseDate: string;
}

export default function MusicStudioPage() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const genres = ['All', 'Classical', 'Folk', 'Electronic', 'Rock', 'Hip Hop', 'Jazz', 'Ambient'];

  const tracks: Track[] = [
    {
      id: 1,
      title: 'Raga Fusion',
      artist: {
        name: 'Aditya Sharma',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        verified: true,
      },
      coverArt: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
      genre: 'Classical',
      duration: '4:32',
      plays: 12450,
      likes: 892,
      waveform: [20, 45, 60, 35, 80, 55, 70, 45, 90, 50, 65, 40, 75, 55, 85, 45, 70, 50, 60, 35],
      releaseDate: '2025-11-15',
    },
    {
      id: 2,
      title: 'Desert Winds',
      artist: {
        name: 'Priya Mehta',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        verified: true,
      },
      coverArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
      genre: 'Folk',
      duration: '3:45',
      plays: 8920,
      likes: 567,
      waveform: [30, 50, 70, 45, 65, 80, 55, 70, 50, 85, 45, 60, 75, 50, 80, 45, 65, 55, 70, 40],
      releaseDate: '2025-11-10',
    },
    {
      id: 3,
      title: 'Neon Dreams',
      artist: {
        name: 'DJ Vikram',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        verified: false,
      },
      coverArt: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop',
      genre: 'Electronic',
      duration: '5:12',
      plays: 15670,
      likes: 1234,
      waveform: [40, 70, 85, 60, 90, 75, 80, 65, 95, 70, 85, 60, 90, 70, 80, 55, 75, 65, 85, 50],
      releaseDate: '2025-11-18',
    },
    {
      id: 4,
      title: 'Mumbai Monsoon',
      artist: {
        name: 'Neha Kapoor',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        verified: true,
      },
      coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      genre: 'Ambient',
      duration: '6:28',
      plays: 6780,
      likes: 445,
      waveform: [25, 40, 55, 35, 60, 45, 65, 40, 70, 50, 60, 35, 65, 50, 70, 40, 60, 45, 55, 30],
      releaseDate: '2025-11-08',
    },
    {
      id: 5,
      title: 'Street Beats',
      artist: {
        name: 'Arjun MC',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        verified: true,
      },
      coverArt: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
      genre: 'Hip Hop',
      duration: '3:18',
      plays: 11230,
      likes: 789,
      waveform: [35, 60, 75, 50, 85, 65, 75, 55, 90, 60, 75, 50, 80, 60, 85, 50, 70, 55, 75, 45],
      releaseDate: '2025-11-12',
    },
  ];

  const togglePlay = (trackId: number) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
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
            <span className="neon-text-pink">Music</span>{' '}
            <span className="neon-text-cyan">Studio</span>
          </h1>
          <p className="text-text-muted">
            Discover and share original music from independent artists
          </p>
        </motion.div>

        {/* Genre Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedGenre === genre.toLowerCase()
                    ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                    : 'bg-card-bg text-text-muted hover:text-white border border-neon-cyan/20'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Track List */}
          <div className="lg:col-span-2 space-y-4">
            {tracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="card-featured group hover:border-neon-cyan/40 transition-all"
              >
                <div className="flex gap-4">
                  {/* Cover Art */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${track.coverArt})` }}
                    />
                    <button
                      onClick={() => togglePlay(track.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all rounded-lg"
                    >
                      {playingTrack === track.id ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </button>
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold text-lg truncate group-hover:text-neon-cyan transition-colors">
                          {track.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div
                            className="w-6 h-6 rounded-full bg-cover bg-center border border-neon-pink/30"
                            style={{ backgroundImage: `url(${track.artist.avatar})` }}
                          />
                          <span className="text-text-muted text-sm">{track.artist.name}</span>
                          {track.artist.verified && (
                            <svg className="w-4 h-4 text-neon-cyan" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      <button className="p-2 rounded-full hover:bg-input-bg transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-text-muted" />
                      </button>
                    </div>

                    {/* Waveform */}
                    <div className="flex items-center gap-1 h-12 mb-2">
                      {track.waveform.map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-neon-cyan/30 rounded-full hover:bg-neon-pink transition-colors cursor-pointer"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>

                    {/* Stats and Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-text-muted">
                        <span className="flex items-center gap-1">
                          <Headphones className="w-4 h-4" />
                          {track.plays.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {track.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {track.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full hover:bg-neon-pink/20 text-text-muted hover:text-neon-pink transition-all">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-neon-cyan/20 text-text-muted hover:text-neon-cyan transition-all">
                          <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-neon-lime/20 text-text-muted hover:text-neon-lime transition-all">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Artists */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-neon-pink" />
                Trending Artists
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Aditya Sharma', plays: '124K', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
                  { name: 'DJ Vikram', plays: '98K', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
                  { name: 'Neha Kapoor', plays: '87K', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
                  { name: 'Priya Mehta', plays: '76K', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
                ].map((artist, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-input-bg transition-all cursor-pointer">
                    <div
                      className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-neon-cyan/30"
                      style={{ backgroundImage: `url(${artist.avatar})` }}
                    />
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm">{artist.name}</div>
                      <div className="text-text-muted text-xs">{artist.plays} plays</div>
                    </div>
                    <button className="btn-outline text-xs px-3 py-1">Follow</button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Genres */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Music className="w-5 h-5 text-neon-cyan" />
                Top Genres
              </h3>
              <div className="space-y-3">
                {[
                  { genre: 'Electronic', percentage: 28, color: 'bg-neon-pink' },
                  { genre: 'Classical', percentage: 24, color: 'bg-neon-cyan' },
                  { genre: 'Hip Hop', percentage: 18, color: 'bg-neon-lime' },
                  { genre: 'Folk', percentage: 15, color: 'bg-neon-gold' },
                  { genre: 'Rock', percentage: 15, color: 'bg-purple-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm">{item.genre}</span>
                      <span className="text-text-muted text-xs">{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upload Your Music */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="card-featured bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-neon-pink/30"
            >
              <div className="text-center">
                <Music className="w-12 h-12 text-neon-pink mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Share Your Music</h3>
                <p className="text-text-muted text-sm mb-4">
                  Upload your tracks and reach thousands of music lovers
                </p>
                <button className="btn-primary w-full">
                  Upload Track
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
