'use client';

import { motion } from 'framer-motion';
import { Users, Star, BookOpen, Calendar, Award, TrendingUp, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const mentors = [
  {
    id: 1,
    name: 'Dr. Ananya Sharma',
    role: 'Classical Theatre Director',
    experience: '25+ years',
    rating: 4.9,
    students: 156,
    specialties: ['Shakespeare', 'Method Acting', 'Voice Training'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    price: '₹2,500/session',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Film & TV Acting Coach',
    experience: '15+ years',
    rating: 4.8,
    students: 234,
    specialties: ['Camera Acting', 'Audition Prep', 'Character Development'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    price: '₹3,000/session',
  },
  {
    id: 3,
    name: 'Priya Malhotra',
    role: 'Musical Theatre Expert',
    experience: '20+ years',
    rating: 5.0,
    students: 98,
    specialties: ['Singing', 'Dance', 'Broadway Style'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    price: '₹2,800/session',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Improv & Comedy Coach',
    experience: '12+ years',
    rating: 4.7,
    students: 187,
    specialties: ['Stand-up', 'Improv', 'Comic Timing'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    price: '₹2,200/session',
  },
];

const programs = [
  {
    title: 'Beginner Acting Bootcamp',
    duration: '8 weeks',
    sessions: 16,
    students: 45,
    level: 'Beginner',
    color: 'neon-lime',
  },
  {
    title: 'Advanced Character Study',
    duration: '12 weeks',
    sessions: 24,
    students: 32,
    level: 'Advanced',
    color: 'neon-pink',
  },
  {
    title: 'Audition Mastery',
    duration: '6 weeks',
    sessions: 12,
    students: 67,
    level: 'Intermediate',
    color: 'neon-cyan',
  },
];

export default function MentorshipPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Mentorship</span>{' '}
            <span className="neon-text-cyan">Programs</span>
          </h1>
          <p className="text-text-muted">
            Learn from industry experts and accelerate your theatre career
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured p-6 mb-8 bg-gradient-to-r from-neon-pink/10 to-neon-cyan/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Expert Mentors', value: '150+' },
              { icon: BookOpen, label: 'Programs', value: '45+' },
              { icon: Award, label: 'Students', value: '2,500+' },
              { icon: TrendingUp, label: 'Success Rate', value: '92%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Programs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`card cursor-pointer border-l-4 border-${program.color}`}
              >
                <span className={`px-3 py-1 rounded-full bg-${program.color}/20 text-${program.color} text-xs font-bold border border-${program.color}/30 inline-block mb-3`}>
                  {program.level}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{program.title}</h3>
                <div className="space-y-2 text-sm text-text-muted mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{program.duration} • {program.sessions} sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{program.students} students enrolled</span>
                  </div>
                </div>
                <button className="btn-primary w-full text-sm">
                  View Program
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Find a Mentor</h2>
          <div className="flex flex-wrap gap-3">
            {['all', 'Theatre', 'Film & TV', 'Musical', 'Comedy'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-neon-pink text-white'
                    : 'bg-input-bg text-text-muted hover:text-white'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-featured"
            >
              <div className="flex items-start gap-4">
                {/* Profile Image */}
                <div
                  className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-neon-pink flex-shrink-0"
                  style={{ backgroundImage: `url(${mentor.image})` }}
                />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                  <p className="text-text-muted text-sm mb-2">{mentor.role}</p>

                  <div className="flex flex-wrap gap-3 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                      <span className="text-white">{mentor.rating}</span>
                    </div>
                    <span className="text-text-muted">•</span>
                    <span className="text-text-muted">{mentor.students} students</span>
                    <span className="text-text-muted">•</span>
                    <span className="text-text-muted">{mentor.experience}</span>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs border border-neon-cyan/30"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-neon-lime font-bold">{mentor.price}</span>
                    <div className="flex gap-2">
                      <button className="btn-outline text-sm py-2 px-4">
                        <MessageCircle className="w-4 h-4 inline mr-1" />
                        Message
                      </button>
                      <button className="btn-primary text-sm py-2 px-4">
                        Book Session
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 card-featured p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-3">Want to Become a Mentor?</h2>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Share your expertise with aspiring artists and earn while making a difference in the theatre community
          </p>
          <button className="btn-primary">
            Apply as Mentor
          </button>
        </motion.div>
      </div>
    </div>
  );
}
