'use client';

import { motion } from 'framer-motion';
import { UserPlus, Star, Award, Briefcase, MessageCircle, Calendar, Video, CheckCircle, Filter, Search } from 'lucide-react';
import { useState } from 'react';

interface Mentor {
  id: number;
  name: string;
  avatar: string;
  role: string;
  specialty: string;
  experience: string;
  rating: number;
  mentees: number;
  hourlyRate: string;
  availability: 'available' | 'limited' | 'booked';
  skills: string[];
  bio: string;
  languages: string[];
  responseTime: string;
}

export default function MentorshipRequestPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<string>('all');

  const specialties = ['All', 'Music Production', 'Photography', 'Digital Art', 'Video Editing', 'Writing', 'Business', 'Marketing'];

  const mentors: Mentor[] = [
    {
      id: 1,
      name: 'Arjun Singh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      role: 'Senior Music Producer',
      specialty: 'Music Production',
      experience: '12 years',
      rating: 4.9,
      mentees: 47,
      hourlyRate: '₹2,500',
      availability: 'available',
      skills: ['Music Production', 'Mixing', 'Mastering', 'Sound Design', 'Ableton Live'],
      bio: 'Helping aspiring producers develop their unique sound. Worked with major labels and independent artists across genres.',
      languages: ['English', 'Hindi', 'Punjabi'],
      responseTime: '< 2 hours',
    },
    {
      id: 2,
      name: 'Priya Mehta',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      role: 'Award-Winning Photographer',
      specialty: 'Photography',
      experience: '15 years',
      rating: 5.0,
      mentees: 89,
      hourlyRate: '₹3,000',
      availability: 'limited',
      skills: ['Portrait Photography', 'Photo Editing', 'Lighting', 'Business Strategy', 'Client Management'],
      bio: 'National Geographic contributor. Specializing in portrait and documentary photography. Built successful studio from scratch.',
      languages: ['English', 'Hindi', 'Gujarati'],
      responseTime: '< 4 hours',
    },
    {
      id: 3,
      name: 'Vikram Patel',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      role: 'Creative Director',
      specialty: 'Digital Art',
      experience: '10 years',
      rating: 4.8,
      mentees: 62,
      hourlyRate: '₹2,000',
      availability: 'available',
      skills: ['Digital Illustration', 'Concept Art', 'Character Design', 'Portfolio Development', 'Industry Insights'],
      bio: 'Leading creative director at top animation studio. Passionate about helping artists break into the industry.',
      languages: ['English', 'Hindi', 'Marathi'],
      responseTime: '< 3 hours',
    },
    {
      id: 4,
      name: 'Neha Kapoor',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      role: 'Content Creator & Marketer',
      specialty: 'Marketing',
      experience: '8 years',
      rating: 4.7,
      mentees: 34,
      hourlyRate: '₹1,800',
      availability: 'available',
      skills: ['Content Strategy', 'Social Media', 'Brand Building', 'Audience Growth', 'Monetization'],
      bio: 'Built audience of 500K+ followers. Help artists build their online presence and monetize their creativity.',
      languages: ['English', 'Hindi'],
      responseTime: '< 1 hour',
    },
    {
      id: 5,
      name: 'Ananya Roy',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      role: 'Film Editor & Educator',
      specialty: 'Video Editing',
      experience: '11 years',
      rating: 4.9,
      mentees: 56,
      hourlyRate: '₹2,200',
      availability: 'limited',
      skills: ['Video Editing', 'Color Grading', 'Storytelling', 'Premiere Pro', 'DaVinci Resolve'],
      bio: 'Edited award-winning documentaries and feature films. Teaching practical editing skills and workflow optimization.',
      languages: ['English', 'Hindi', 'Bengali'],
      responseTime: '< 2 hours',
    },
    {
      id: 6,
      name: 'Rahul Sharma',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      role: 'Published Author & Writing Coach',
      specialty: 'Writing',
      experience: '14 years',
      rating: 4.8,
      mentees: 71,
      hourlyRate: '₹1,500',
      availability: 'booked',
      skills: ['Creative Writing', 'Storytelling', 'Publishing', 'Content Writing', 'Script Writing'],
      bio: '5 published novels and numerous short stories. Guiding writers through the entire publishing journey.',
      languages: ['English', 'Hindi', 'Urdu'],
      responseTime: '< 6 hours',
    },
  ];

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'available':
        return <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">Available</span>;
      case 'limited':
        return <span className="px-3 py-1 rounded-full bg-neon-gold/20 text-neon-gold text-xs font-bold border border-neon-gold/30">Limited</span>;
      case 'booked':
        return <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">Booked</span>;
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
            <span className="neon-text-pink">Find</span>{' '}
            <span className="neon-text-cyan">Your Mentor</span>
          </h1>
          <p className="text-text-muted">
            Connect with experienced artists who can guide your creative journey
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Active Mentors', value: '234', icon: UserPlus, color: 'neon-pink' },
            { label: 'Avg. Rating', value: '4.8', icon: Star, color: 'neon-gold' },
            { label: 'Success Stories', value: '1.2K', icon: Award, color: 'neon-cyan' },
            { label: 'Total Sessions', value: '5.6K', icon: Video, color: 'neon-lime' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-featured text-center"
            >
              <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-2`} />
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-text-muted text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search mentors by name or skill..."
                className="input-field pl-10 w-full"
              />
            </div>
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="input-field"
            >
              <option value="all">All Availability</option>
              <option value="available">Available Now</option>
              <option value="limited">Limited Spots</option>
            </select>
            <button className="btn-outline flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </motion.div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedSpecialty === specialty.toLowerCase()
                    ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                    : 'bg-card-bg text-text-muted hover:text-white border border-neon-cyan/20'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-featured hover:border-neon-cyan/40 transition-all"
            >
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-neon-pink"
                    style={{ backgroundImage: `url(${mentor.avatar})` }}
                  />
                  <div className="absolute -bottom-1 -right-1">
                    {getAvailabilityBadge(mentor.availability)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-xl mb-1">{mentor.name}</h3>
                  <div className="text-neon-cyan font-medium text-sm mb-1">{mentor.role}</div>
                  <div className="text-text-muted text-xs mb-3">{mentor.specialty} • {mentor.experience} exp</div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <div className="flex items-center gap-1 text-neon-gold">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold">{mentor.rating}</span>
                    </div>
                    <div className="text-text-muted">
                      <span className="text-white font-medium">{mentor.mentees}</span> mentees
                    </div>
                    <div className="text-neon-lime font-bold">{mentor.hourlyRate}/hr</div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-text-light text-sm mt-4 mb-3 line-clamp-2">
                {mentor.bio}
              </p>

              {/* Skills */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-2">
                  {mentor.skills.slice(0, 4).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs border border-neon-cyan/30"
                    >
                      {skill}
                    </span>
                  ))}
                  {mentor.skills.length > 4 && (
                    <span className="px-2 py-1 rounded-full bg-input-bg text-text-muted text-xs">
                      +{mentor.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex items-center justify-between text-xs text-text-muted mb-4 pb-4 border-b border-neon-cyan/20">
                <div className="flex items-center gap-4">
                  <span>🌐 {mentor.languages.join(', ')}</span>
                  <span>⚡ {mentor.responseTime}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  className={`btn-primary flex-1 ${
                    mentor.availability === 'booked' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={mentor.availability === 'booked'}
                >
                  {mentor.availability === 'booked' ? 'Fully Booked' : 'Request Session'}
                </button>
                <button className="btn-outline px-4">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Mentor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-featured bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10 border-neon-pink/30 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-full bg-neon-pink/20">
              <Award className="w-12 h-12 text-neon-pink" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-bold text-2xl mb-2">Become a Mentor</h3>
              <p className="text-text-muted">
                Share your knowledge and experience. Help the next generation of artists grow.
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Apply as Mentor
            </button>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Find Your Mentor', desc: 'Browse mentors by specialty and experience' },
              { icon: Calendar, title: 'Book a Session', desc: 'Schedule a convenient time for both' },
              { icon: Video, title: 'Connect & Learn', desc: 'Meet via video call or chat' },
              { icon: CheckCircle, title: 'Grow Together', desc: 'Apply feedback and track progress' },
            ].map((step, index) => (
              <div key={index} className="card-featured text-center">
                <div className="p-4 rounded-full bg-neon-cyan/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-neon-cyan" />
                </div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
