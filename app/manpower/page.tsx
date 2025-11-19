'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Star, Briefcase, Music, Drama, Mic } from 'lucide-react';
import Link from 'next/link';

const talents = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Classical Sitarist',
    location: 'Delhi',
    rating: 4.9,
    reviews: 45,
    hourlyRate: '₹5,000',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    skills: ['Sitar', 'Classical Music', 'Weddings'],
    verified: true,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Kathak Dancer',
    location: 'Noida',
    rating: 4.8,
    reviews: 38,
    hourlyRate: '₹4,000',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    skills: ['Kathak', 'Dance', 'Corporate Events'],
    verified: true,
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Stand-up Comedian',
    location: 'Gurugram',
    rating: 4.7,
    reviews: 67,
    hourlyRate: '₹8,000',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    skills: ['Comedy', 'Hosting', 'Events'],
    verified: false,
  },
  {
    id: 4,
    name: 'Neha Singh',
    role: 'Wedding Anchor',
    location: 'Delhi',
    rating: 5.0,
    reviews: 92,
    hourlyRate: '₹6,000',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    skills: ['Anchoring', 'Hosting', 'Weddings'],
    verified: true,
  },
];

export default function ManpowerPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-gold mb-2">
            Talent Marketplace
          </h1>
          <p className="text-text-muted">
            Hire talented performers for your events - weddings, corporate, festivals
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search for artists, musicians, dancers..."
              className="input pl-12 w-full"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {[
              { icon: Music, label: 'Musicians' },
              { icon: Drama, label: 'Actors' },
              { icon: Mic, label: 'Anchors' },
              { icon: Briefcase, label: 'All Talent' },
            ].map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.label}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-neon-gold/20 text-text-muted hover:border-neon-gold/50 hover:text-neon-gold font-medium whitespace-nowrap transition-all"
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Talent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talents.map((talent, index) => (
            <motion.div
              key={talent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/manpower/${talent.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card-featured cursor-pointer h-full"
                >
                  {/* Profile image */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div
                        className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-neon-gold"
                        style={{ backgroundImage: `url(${talent.image})` }}
                      />
                      {talent.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-neon-lime border-2 border-dark-bg flex items-center justify-center">
                          <Star className="w-3 h-3 text-dark-bg fill-dark-bg" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{talent.name}</h3>
                      <p className="text-text-muted text-sm mb-2">{talent.role}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-neon-cyan" />
                        <span className="text-text-muted">{talent.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {talent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full border border-neon-gold/30 text-xs font-medium text-neon-gold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Rating & pricing */}
                  <div className="flex items-center justify-between pt-4 border-t border-neon-cyan/20">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                      <span className="font-bold text-white">{talent.rating}</span>
                      <span className="text-sm text-text-muted">({talent.reviews})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-text-muted">Starting from</div>
                      <div className="text-lg font-bold text-neon-gold">{talent.hourlyRate}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 py-3 rounded-lg bg-gradient-gold-purple text-white font-semibold hover:neon-glow-gold transition-all"
                  >
                    View Profile & Book
                  </motion.button>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold font-vietnam text-center neon-text-gold mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Browse & Select', desc: 'Find the perfect talent for your event' },
              { step: 2, title: 'Book & Pay', desc: 'Secure booking with instant confirmation' },
              { step: 3, title: 'Enjoy Event', desc: 'Professional performance guaranteed' },
            ].map((item) => (
              <div key={item.step} className="card text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-gold-purple text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
