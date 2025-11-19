'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, DollarSign, Users, Clock, Share2, Heart, Briefcase, Award, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function OpportunityDetailsPage() {
  const [isApplied, setIsApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const opportunity = {
    id: 1,
    title: 'Lead Actor for Shakespeare\'s Hamlet',
    company: 'National Theatre Mumbai',
    companyLogo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&h=400&fit=crop',
    category: 'Acting',
    type: 'Full-time',
    compensation: '₹50,000 - ₹80,000/month',
    location: 'Mumbai, Maharashtra',
    posted: '2 days ago',
    deadline: '2025-12-15',
    applications: 127,
    slots: 2,
    experienceRequired: '3-5 years',
    ageRange: '25-40',
    gender: 'Any',
    description: `We are seeking a talented and experienced actor to portray the lead role in our upcoming production of Shakespeare's Hamlet. This is a prestigious opportunity to work with India's leading theatre company and showcase your skills to a national audience.

The role requires exceptional dramatic range, classical training, and the ability to connect with modern audiences while maintaining the integrity of Shakespeare's text.`,
    requirements: [
      'Proven experience in classical theatre',
      'Strong vocal projection and diction',
      'Physical fitness for demanding stage performance',
      'Availability for 6-month contract',
      'Willingness to relocate to Mumbai',
    ],
    responsibilities: [
      'Learn and perform the lead role in Hamlet',
      'Attend daily rehearsals (Mon-Fri, 10 AM - 6 PM)',
      'Participate in promotional activities',
      'Collaborate with director and cast members',
      'Maintain character consistency throughout run',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Accommodation provided',
      'Professional development opportunities',
      'National media exposure',
      'Portfolio building support',
    ],
    director: {
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      title: 'Director & Producer',
      productions: 15,
    },
  };

  return (
    <div className="min-h-screen pb-8">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${opportunity.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-app-bg" />

        <div className="relative container mx-auto max-w-6xl px-4 h-full flex flex-col justify-between py-6">
          <Link href="/opportunities">
            <button className="flex items-center gap-2 text-white hover:text-neon-cyan transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Opportunities
            </button>
          </Link>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <div
                className="w-16 h-16 rounded-lg bg-cover bg-center border-2 border-neon-pink"
                style={{ backgroundImage: `url(${opportunity.companyLogo})` }}
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  {opportunity.title}
                </h1>
                <p className="text-neon-cyan font-medium">{opportunity.company}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-featured"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <Briefcase className="w-6 h-6 text-neon-pink mx-auto mb-2" />
                  <div className="text-text-muted text-xs mb-1">Type</div>
                  <div className="text-white font-medium text-sm">{opportunity.type}</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <MapPin className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                  <div className="text-text-muted text-xs mb-1">Location</div>
                  <div className="text-white font-medium text-sm">{opportunity.location.split(',')[0]}</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <DollarSign className="w-6 h-6 text-neon-lime mx-auto mb-2" />
                  <div className="text-text-muted text-xs mb-1">Compensation</div>
                  <div className="text-white font-medium text-sm">₹50-80K</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-input-bg">
                  <Calendar className="w-6 h-6 text-neon-gold mx-auto mb-2" />
                  <div className="text-text-muted text-xs mb-1">Deadline</div>
                  <div className="text-white font-medium text-sm">Dec 15</div>
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
              <h2 className="text-xl font-bold text-white mb-4">About the Role</h2>
              <div className="text-text-light leading-relaxed whitespace-pre-line">
                {opportunity.description}
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-neon-pink" />
                Requirements
              </h2>
              <ul className="space-y-3">
                {opportunity.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                    <span className="text-text-light">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-neon-gold" />
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {opportunity.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon-lime mt-2 flex-shrink-0" />
                    <span className="text-text-light">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-neon-lime" />
                Benefits
              </h2>
              <ul className="space-y-3">
                {opportunity.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-neon-lime mt-0.5 flex-shrink-0" />
                    <span className="text-text-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Director Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-4">About the Director</h2>
              <div className="flex items-center gap-4">
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-neon-cyan"
                  style={{ backgroundImage: `url(${opportunity.director.avatar})` }}
                />
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">{opportunity.director.name}</h3>
                  <p className="text-text-muted mb-2">{opportunity.director.title}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-neon-pink font-medium">
                      {opportunity.director.productions} Productions
                    </span>
                  </div>
                </div>
                <button className="btn-outline">View Profile</button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-featured sticky top-4 space-y-4"
            >
              {/* Action Buttons */}
              <button
                onClick={() => setIsApplied(!isApplied)}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  isApplied
                    ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50'
                    : 'btn-primary'
                }`}
              >
                {isApplied ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Application Submitted
                  </span>
                ) : (
                  'Apply Now'
                )}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex-1 btn-outline flex items-center justify-center gap-2 ${
                    isSaved ? 'text-neon-pink border-neon-pink' : ''
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Saved' : 'Save'}
                </button>
                <button className="flex-1 btn-outline flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Stats */}
              <div className="pt-4 border-t border-neon-cyan/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Posted</span>
                  <span className="text-white font-medium">{opportunity.posted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Applications</span>
                  <span className="text-neon-cyan font-bold">{opportunity.applications}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Positions</span>
                  <span className="text-neon-lime font-bold">{opportunity.slots}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Deadline</span>
                  <span className="text-neon-gold font-medium">
                    {new Date(opportunity.deadline).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              {/* Requirements Summary */}
              <div className="pt-4 border-t border-neon-cyan/20 space-y-3">
                <h3 className="text-white font-bold">Quick Requirements</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Experience</span>
                    <span className="text-white font-medium">{opportunity.experienceRequired}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Age Range</span>
                    <span className="text-white font-medium">{opportunity.ageRange}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Gender</span>
                    <span className="text-white font-medium">{opportunity.gender}</span>
                  </div>
                </div>
              </div>

              {/* Time Remaining */}
              <div className="pt-4 border-t border-neon-cyan/20">
                <div className="p-4 rounded-lg bg-neon-gold/10 border border-neon-gold/30">
                  <div className="flex items-center gap-2 text-neon-gold mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-bold">Time Remaining</span>
                  </div>
                  <div className="text-white text-2xl font-bold">23 days</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
