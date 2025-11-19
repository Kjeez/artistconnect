'use client';

import { motion } from 'framer-motion';
import { BookOpen, Download, Star, Heart, Share2, Clock, Users, Award, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const scriptData = {
  id: 'SCR001',
  title: 'Midnight in Mumbai',
  subtitle: 'A Contemporary Drama in Three Acts',
  author: 'Rohan Desai',
  price: 599,
  rating: 4.7,
  reviews: 89,
  downloads: 1234,
  genre: 'Drama',
  language: 'English',
  duration: '2 hours 15 minutes',
  pages: 87,
  characters: 8,
  acts: 3,
  yearWritten: 2024,
  image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop',
  description: `A gripping contemporary drama that explores the intersecting lives of eight strangers in the bustling metropolis of Mumbai. Set over the course of one transformative night, the play delves into themes of ambition, love, betrayal, and redemption.

As midnight approaches, each character faces a crucial decision that will alter the trajectory of their lives. Through powerful monologues and intense dialogue, "Midnight in Mumbai" captures the essence of modern urban life while exploring timeless human emotions.

This critically acclaimed script has been performed in over 50 theatres across India and has won multiple awards for its innovative narrative structure and compelling character development.`,
  synopsis: `Act I introduces us to our eight protagonists - a struggling actor, a corporate executive, a taxi driver, an artist, a journalist, a doctor, a musician, and a street vendor. Their lives seem unconnected until fate begins to weave their stories together.

Act II brings these characters into direct and indirect contact, revealing hidden connections and building towards a series of moral dilemmas. The tension escalates as secrets are unveiled and loyalties are tested.

Act III converges all storylines at midnight, where choices are made, consequences faced, and redemption sought. The play concludes with a powerful meditation on human connection in an increasingly disconnected world.`,
  reviews_list: [
    {
      author: 'Priya Sharma',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Absolutely brilliant script! The character development is phenomenal and the dialogue is crisp and realistic.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      author: 'Vikram Singh',
      rating: 4,
      date: '1 month ago',
      comment: 'Great contemporary piece. Perfect for modern theatre groups. The ensemble cast makes it challenging but rewarding.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
  ],
  samplePages: [1, 2, 15, 45],
  tags: ['Contemporary', 'Ensemble', 'Urban', 'Drama', 'Award-Winning'],
};

export default function ScriptDetailsPage() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [showSample, setShowSample] = useState(false);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-80 mb-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${scriptData.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-dark-bg/40" />

        <Link href="/script-store">
          <button className="absolute top-4 left-4 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors z-10">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>

        <div className="absolute bottom-0 left-0 right-0 container mx-auto max-w-6xl px-4 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-bold border border-neon-pink/30">
                {scriptData.genre}
              </span>
              <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-bold border border-neon-cyan/30">
                {scriptData.language}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-2">{scriptData.title}</h1>
            <p className="text-xl text-text-light mb-3">{scriptData.subtitle}</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-text-muted">by <span className="text-white font-medium">{scriptData.author}</span></span>
              <span className="text-text-muted">•</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                <span className="text-white font-medium">{scriptData.rating}</span>
                <span className="text-text-muted">({scriptData.reviews})</span>
              </div>
              <span className="text-text-muted">•</span>
              <span className="text-text-muted">{scriptData.downloads.toLocaleString()} downloads</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-4">Script Information</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <Clock className="w-6 h-6 text-neon-pink mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">{scriptData.duration}</div>
                  <div className="text-xs text-text-muted">Duration</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <BookOpen className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">{scriptData.pages} pages</div>
                  <div className="text-xs text-text-muted">Length</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <Users className="w-6 h-6 text-neon-lime mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">{scriptData.characters} roles</div>
                  <div className="text-xs text-text-muted">Characters</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <Award className="w-6 h-6 text-neon-gold mx-auto mb-2" />
                  <div className="text-white font-medium text-sm">{scriptData.acts} acts</div>
                  <div className="text-xs text-text-muted">Structure</div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-featured"
            >
              <h2 className="text-2xl font-bold text-white mb-4">About This Script</h2>
              <p className="text-text-light leading-relaxed whitespace-pre-line mb-6">
                {scriptData.description}
              </p>

              <h3 className="text-lg font-bold text-white mb-3">Synopsis</h3>
              <p className="text-text-light leading-relaxed whitespace-pre-line">
                {scriptData.synopsis}
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-featured"
            >
              <h3 className="text-lg font-bold text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {scriptData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-sm border border-neon-cyan/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-featured"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Reviews</h2>
              <div className="space-y-4">
                {scriptData.reviews_list.map((review, index) => (
                  <div key={index} className="pb-4 border-b border-neon-cyan/20 last:border-0">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url(${review.avatar})` }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">{review.author}</h4>
                          <span className="text-sm text-text-muted">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-neon-gold fill-neon-gold'
                                  : 'text-text-muted'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-text-light">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Purchase Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-featured sticky top-4"
            >
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-neon-pink mb-2">
                  ₹{scriptData.price}
                </div>
                <p className="text-sm text-text-muted">One-time purchase • Full rights</p>
              </div>

              <div className="space-y-3 mb-6">
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Buy Now
                </button>
                <button
                  onClick={() => setShowSample(!showSample)}
                  className="btn-outline w-full"
                >
                  {showSample ? 'Hide Sample' : 'Read Sample'}
                </button>
              </div>

              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`flex-1 py-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                    isFavorited
                      ? 'border-neon-pink bg-neon-pink/10 text-neon-pink'
                      : 'border-neon-cyan/20 text-text-muted hover:border-neon-cyan/50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-neon-pink' : ''}`} />
                </button>
                <button className="flex-1 py-3 rounded-lg border-2 border-neon-cyan/20 text-text-muted hover:border-neon-cyan/50 transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-neon-cyan/20">
                  <span className="text-text-muted">Format</span>
                  <span className="text-white">PDF</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neon-cyan/20">
                  <span className="text-text-muted">File Size</span>
                  <span className="text-white">2.4 MB</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-neon-cyan/20">
                  <span className="text-text-muted">Language</span>
                  <span className="text-white">{scriptData.language}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-text-muted">Year</span>
                  <span className="text-white">{scriptData.yearWritten}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neon-cyan/20">
                <h4 className="text-white font-medium mb-3">What's Included</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    'Full script in PDF format',
                    'Character breakdown',
                    'Stage directions',
                    'Performance notes',
                    'Lifetime access',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-text-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
