'use client';

import { motion } from 'framer-motion';
import { BookOpen, Download, Play, Star, Clock } from 'lucide-react';
import Link from 'next/link';

const scripts = [
  {
    id: 1,
    title: 'Hamlet - "To be or not to be"',
    author: 'William Shakespeare',
    genre: 'Classic',
    duration: '3 min',
    difficulty: 'Advanced',
    downloads: 1234,
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Romeo & Juliet - Balcony Scene',
    author: 'William Shakespeare',
    genre: 'Romance',
    duration: '5 min',
    difficulty: 'Intermediate',
    downloads: 2156,
    rating: 4.8,
  },
  {
    id: 3,
    title: 'A Streetcar Named Desire - Opening Monologue',
    author: 'Tennessee Williams',
    genre: 'Drama',
    duration: '4 min',
    difficulty: 'Advanced',
    downloads: 876,
    rating: 4.7,
  },
  {
    id: 4,
    title: 'The Importance of Being Earnest - Comedy Scene',
    author: 'Oscar Wilde',
    genre: 'Comedy',
    duration: '2 min',
    difficulty: 'Beginner',
    downloads: 1543,
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Death of a Salesman - Willy\'s Monologue',
    author: 'Arthur Miller',
    genre: 'Tragedy',
    duration: '6 min',
    difficulty: 'Advanced',
    downloads: 654,
    rating: 4.6,
  },
  {
    id: 6,
    title: 'The Glass Menagerie - Laura\'s Scene',
    author: 'Tennessee Williams',
    genre: 'Drama',
    duration: '3 min',
    difficulty: 'Intermediate',
    downloads: 987,
    rating: 4.8,
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'neon-lime';
    case 'Intermediate': return 'neon-cyan';
    case 'Advanced': return 'neon-pink';
    default: return 'text-muted';
  }
};

export default function MockScriptsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-cyan mb-2 flex items-center gap-3">
            <BookOpen className="w-10 h-10" />
            Mock Audition Scripts
          </h1>
          <p className="text-text-muted">
            Practice with professional scripts to perfect your audition skills
          </p>
        </motion.div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured p-8 mb-8 bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Practice Makes Perfect
              </h3>
              <p className="text-text-light mb-4">
                Access our library of classic and contemporary scripts. Each script includes performance notes,
                character analysis, and audio examples from professional actors.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-neon-pink" />
                  <span className="text-text-light">500+ Scripts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-neon-cyan" />
                  <span className="text-text-light">Audio Examples</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-neon-gold" />
                  <span className="text-text-light">Expert Notes</span>
                </div>
              </div>
            </div>
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-purple-pink rounded-full animate-pulse opacity-50" />
              <div className="absolute inset-2 bg-dark-bg rounded-full flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-neon-pink" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scripts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scripts.map((script, index) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="card h-full cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1 line-clamp-2">
                      {script.title}
                    </h3>
                    <p className="text-sm text-text-muted">by {script.author}</p>
                  </div>
                  <button className="p-2 rounded-full hover:bg-neon-pink/20 transition-colors">
                    <Download className="w-5 h-5 text-neon-pink" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-medium border border-neon-cyan/30">
                    {script.genre}
                  </span>
                  <span className={`px-3 py-1 rounded-full bg-${getDifficultyColor(script.difficulty)}/20 text-${getDifficultyColor(script.difficulty)} text-xs font-medium border border-${getDifficultyColor(script.difficulty)}/30`}>
                    {script.difficulty}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-text-muted mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{script.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>{script.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                    <span>{script.rating} rating</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="btn-outline flex-1 text-sm py-2">
                    <Play className="w-4 h-4 inline mr-1" />
                    Preview
                  </button>
                  <button className="btn-primary flex-1 text-sm py-2">
                    Practice
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 card-featured p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Practice Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Start with Beginner Scripts',
                description: 'Build confidence with simpler scenes before tackling advanced material',
              },
              {
                title: 'Record Yourself',
                description: 'Practice in front of a camera to improve your on-screen presence',
              },
              {
                title: 'Study the Notes',
                description: 'Read character analysis and performance notes for deeper understanding',
              },
            ].map((tip, index) => (
              <div key={index}>
                <h4 className="font-bold text-neon-cyan mb-2">{tip.title}</h4>
                <p className="text-sm text-text-muted">{tip.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
