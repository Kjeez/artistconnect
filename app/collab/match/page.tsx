'use client';

import { motion } from 'framer-motion';
import { Sparkles, X, Heart, MessageCircle, MapPin, Briefcase, Award, Star, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ArtistMatch {
  id: number;
  name: string;
  avatar: string;
  role: string;
  location: string;
  bio: string;
  skills: string[];
  matchScore: number;
  experience: string;
  projects: number;
  rating: number;
  lookingFor: string[];
  coverImage: string;
}

export default function CollabMatchPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedArtists, setLikedArtists] = useState<number[]>([]);
  const [passedArtists, setPassedArtists] = useState<number[]>([]);

  const matches: ArtistMatch[] = [
    {
      id: 1,
      name: 'Priya Mehta',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      role: 'Photographer & Visual Artist',
      location: 'Mumbai, Maharashtra',
      bio: 'Specializing in portrait and street photography. Love collaborating with musicians and performers to create stunning visual stories.',
      skills: ['Portrait Photography', 'Photo Editing', 'Videography', 'Adobe Lightroom'],
      matchScore: 95,
      experience: '6 years',
      projects: 47,
      rating: 4.8,
      lookingFor: ['Musicians', 'Dancers', 'Fashion Designers'],
      coverImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Arjun Singh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      role: 'Music Producer & Composer',
      location: 'Bangalore, Karnataka',
      bio: 'Electronic music producer looking to collaborate with vocalists and visual artists. Passionate about creating immersive audiovisual experiences.',
      skills: ['Music Production', 'Sound Design', 'Mixing', 'Ableton Live'],
      matchScore: 92,
      experience: '8 years',
      projects: 63,
      rating: 4.9,
      lookingFor: ['Vocalists', 'Video Artists', 'Lyricists'],
      coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Neha Kapoor',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      role: 'Animator & Motion Designer',
      location: 'Delhi, NCR',
      bio: '2D/3D animator creating vibrant visual stories. Looking to work with musicians for music videos and collaborate on interactive art projects.',
      skills: ['After Effects', '3D Animation', 'Motion Graphics', 'Character Design'],
      matchScore: 88,
      experience: '5 years',
      projects: 34,
      rating: 4.7,
      lookingFor: ['Musicians', 'Writers', 'Game Developers'],
      coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Vikram Patel',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      role: 'Filmmaker & Director',
      location: 'Pune, Maharashtra',
      bio: 'Independent filmmaker interested in documentary and experimental films. Seeking collaborators for narrative storytelling projects.',
      skills: ['Cinematography', 'Editing', 'Screenwriting', 'Premiere Pro'],
      matchScore: 85,
      experience: '7 years',
      projects: 28,
      rating: 4.6,
      lookingFor: ['Actors', 'Composers', 'Cinematographers'],
      coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=400&fit=crop',
    },
  ];

  const handleLike = () => {
    if (currentIndex < matches.length) {
      setLikedArtists([...likedArtists, matches[currentIndex].id]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePass = () => {
    if (currentIndex < matches.length) {
      setPassedArtists([...passedArtists, matches[currentIndex].id]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentMatch = matches[currentIndex];

  if (currentIndex >= matches.length) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured text-center max-w-md"
        >
          <Sparkles className="w-16 h-16 text-neon-pink mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">No More Matches!</h2>
          <p className="text-text-muted mb-6">
            You've viewed all potential collaborators. Check back later for more matches!
          </p>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-neon-lime/10 border border-neon-lime/30">
              <div className="text-neon-lime font-bold text-2xl mb-1">{likedArtists.length}</div>
              <div className="text-text-muted text-sm">Artists Liked</div>
            </div>
            <button
              onClick={() => {
                setCurrentIndex(0);
                setLikedArtists([]);
                setPassedArtists([]);
              }}
              className="btn-primary w-full"
            >
              Start Over
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Find</span>{' '}
            <span className="neon-text-cyan">Collaborators</span>
          </h1>
          <p className="text-text-muted">
            AI-powered matching to connect with artists for your next project
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-text-muted text-sm">
              {currentIndex + 1} / {matches.length}
            </span>
          </div>
        </motion.div>

        {/* Match Card */}
        <motion.div
          key={currentMatch.id}
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          className="card-featured overflow-hidden mb-8"
        >
          {/* Cover Image */}
          <div className="relative h-48">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentMatch.coverImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

            {/* Match Score */}
            <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-neon-lime backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-black font-bold">{currentMatch.matchScore}% Match</span>
              </div>
            </div>

            {/* Avatar */}
            <div className="absolute -bottom-12 left-6">
              <div
                className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-app-bg"
                style={{ backgroundImage: `url(${currentMatch.avatar})` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-16 px-6 pb-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white mb-1">{currentMatch.name}</h2>
              <p className="text-neon-cyan font-medium mb-2">{currentMatch.role}</p>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {currentMatch.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {currentMatch.experience}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center p-3 rounded-lg bg-input-bg">
                <div className="text-neon-pink font-bold text-lg">{currentMatch.projects}</div>
                <div className="text-text-muted text-xs">Projects</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-input-bg">
                <div className="text-neon-cyan font-bold text-lg flex items-center justify-center gap-1">
                  {currentMatch.rating}
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-text-muted text-xs">Rating</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-input-bg">
                <div className="text-neon-lime font-bold text-lg">{currentMatch.matchScore}%</div>
                <div className="text-text-muted text-xs">Match</div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-4">
              <h3 className="text-white font-bold mb-2">About</h3>
              <p className="text-text-light text-sm leading-relaxed">{currentMatch.bio}</p>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <h3 className="text-white font-bold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {currentMatch.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm border border-neon-cyan/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Looking For */}
            <div className="mb-4">
              <h3 className="text-white font-bold mb-2">Looking to collaborate with</h3>
              <div className="flex flex-wrap gap-2">
                {currentMatch.lookingFor.map((role, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-sm border border-neon-pink/30"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* View Profile Button */}
            <button className="btn-outline w-full flex items-center justify-center gap-2">
              View Full Profile
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-6"
        >
          <button
            onClick={handlePass}
            className="w-16 h-16 rounded-full bg-card-bg border-2 border-red-500/30 hover:bg-red-500/20 hover:border-red-500 transition-all flex items-center justify-center group"
          >
            <X className="w-8 h-8 text-red-400 group-hover:text-red-300" />
          </button>

          <button
            onClick={handleLike}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-pink to-neon-cyan hover:scale-110 transition-all flex items-center justify-center shadow-neon-pink"
          >
            <Heart className="w-10 h-10 text-white" />
          </button>

          <button className="w-16 h-16 rounded-full bg-card-bg border-2 border-neon-cyan/30 hover:bg-neon-cyan/20 hover:border-neon-cyan transition-all flex items-center justify-center group">
            <MessageCircle className="w-8 h-8 text-neon-cyan group-hover:text-neon-cyan" />
          </button>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-text-muted text-sm">
            <span className="text-neon-pink">❤</span> Like to connect •{' '}
            <span className="text-red-400">✕</span> Pass •{' '}
            <span className="text-neon-cyan">💬</span> Send message
          </p>
        </motion.div>

        {/* Matched Artists Counter */}
        {likedArtists.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full bg-neon-lime backdrop-blur-sm shadow-lg"
          >
            <span className="text-black font-bold">
              {likedArtists.length} {likedArtists.length === 1 ? 'match' : 'matches'}!
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
