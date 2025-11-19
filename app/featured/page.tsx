'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Briefcase, Award, TrendingUp, Heart, MessageCircle, Eye, Trophy, Users } from 'lucide-react';
import { useState } from 'react';

const featuredArtists = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Professional Kathak Dancer',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=400&fit=crop',
    rating: 4.9,
    reviews: 156,
    experience: '12 years',
    projects: 89,
    category: 'Dance',
    verified: true,
    bio: 'Award-winning Kathak dancer with expertise in classical and fusion performances.',
    stats: { followers: 2345, views: 45600, likes: 8923 },
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Theatre Director & Actor',
    location: 'Delhi, India',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=400&fit=crop',
    rating: 4.8,
    reviews: 203,
    experience: '18 years',
    projects: 127,
    category: 'Theatre',
    verified: true,
    bio: 'Acclaimed director known for contemporary adaptations of classical plays.',
    stats: { followers: 3456, views: 67800, likes: 12345 },
  },
  {
    id: 3,
    name: 'Ananya Verma',
    role: 'Musical Theatre Performer',
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=400&fit=crop',
    rating: 5.0,
    reviews: 189,
    experience: '10 years',
    projects: 73,
    category: 'Musical',
    verified: true,
    bio: 'Versatile performer specializing in Broadway-style musical theatre.',
    stats: { followers: 1987, views: 34500, likes: 6789 },
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Stand-up Comedian',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=400&fit=crop',
    rating: 4.7,
    reviews: 234,
    experience: '8 years',
    projects: 156,
    category: 'Comedy',
    verified: true,
    bio: 'Popular stand-up comedian and improv expert with multiple sold-out shows.',
    stats: { followers: 4567, views: 89000, likes: 15678 },
  },
];

const categories = ['All', 'Dance', 'Theatre', 'Musical', 'Comedy', 'Acting'];

export default function FeaturedArtistsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArtists = selectedCategory === 'All'
    ? featuredArtists
    : featuredArtists.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-neon-gold/20 border-2 border-neon-gold flex items-center justify-center">
              <Star className="w-6 h-6 text-neon-gold fill-neon-gold" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-vietnam">
                <span className="neon-text-pink">Featured</span>{' '}
                <span className="neon-text-cyan">Artists</span>
              </h1>
              <p className="text-text-muted">
                Discover top-rated performers and creators
              </p>
            </div>
          </div>
        </motion.div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured p-8 mb-8 bg-gradient-to-r from-neon-pink/20 via-neon-cyan/20 to-neon-lime/20 text-center"
        >
          <Trophy className="w-16 h-16 text-neon-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Spotlight on Excellence
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            These exceptional artists have been handpicked for their outstanding talent, professionalism, and contributions to the theatre community.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-neon-pink text-white'
                  : 'bg-input-bg text-text-muted hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Artists */}
        <div className="space-y-8">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="card-featured overflow-hidden relative group"
            >
              {/* Cover Image */}
              <div
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${artist.coverImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />

                {/* Verified Badge */}
                {artist.verified && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neon-lime/90 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Verified
                  </div>
                )}

                {/* Profile Image */}
                <div className="absolute -bottom-16 left-8">
                  <div
                    className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-dark-bg"
                    style={{ backgroundImage: `url(${artist.image})` }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{artist.name}</h2>
                    <p className="text-text-light text-lg mb-2">{artist.role}</p>
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-neon-cyan" />
                        {artist.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                        <span className="text-white font-medium">{artist.rating}</span>
                        <span>({artist.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 md:mt-0">
                    <button className="btn-outline px-4 py-2">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="btn-outline px-4 py-2">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="btn-primary">
                      View Profile
                    </button>
                  </div>
                </div>

                <p className="text-text-light mb-6 leading-relaxed">
                  {artist.bio}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-input-bg">
                    <Briefcase className="w-5 h-5 text-neon-pink mx-auto mb-1" />
                    <div className="text-white font-bold">{artist.projects}</div>
                    <div className="text-xs text-text-muted">Projects</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-input-bg">
                    <Award className="w-5 h-5 text-neon-cyan mx-auto mb-1" />
                    <div className="text-white font-bold">{artist.experience}</div>
                    <div className="text-xs text-text-muted">Experience</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-input-bg">
                    <Users className="w-5 h-5 text-neon-lime mx-auto mb-1" />
                    <div className="text-white font-bold">{artist.stats.followers.toLocaleString()}</div>
                    <div className="text-xs text-text-muted">Followers</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-input-bg">
                    <Eye className="w-5 h-5 text-neon-gold mx-auto mb-1" />
                    <div className="text-white font-bold">{artist.stats.views.toLocaleString()}</div>
                    <div className="text-xs text-text-muted">Views</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-input-bg">
                    <Heart className="w-5 h-5 text-neon-pink mx-auto mb-1" />
                    <div className="text-white font-bold">{artist.stats.likes.toLocaleString()}</div>
                    <div className="text-xs text-text-muted">Likes</div>
                  </div>
                </div>

                {/* Category Badge */}
                <div>
                  <span className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm font-medium border border-neon-cyan/30">
                    {artist.category} Specialist
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 card-featured p-8 text-center"
        >
          <TrendingUp className="w-12 h-12 text-neon-lime mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Want to be Featured?
          </h3>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Build an outstanding profile, receive excellent reviews, and contribute actively to the community to get featured on this page.
          </p>
          <button className="btn-primary">
            Learn How to Get Featured
          </button>
        </motion.div>
      </div>
    </div>
  );
}
