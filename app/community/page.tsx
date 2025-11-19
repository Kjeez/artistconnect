'use client';

import { motion } from 'framer-motion';
import { Users, Calendar, Award, Mic, BookOpen } from 'lucide-react';
import Link from 'next/link';

const communityFeatures = [
  { icon: Users, title: 'Community Hub', description: 'Connect with fellow artists and theatre enthusiasts', link: '/social', color: 'neon-pink' },
  { icon: Calendar, title: 'Virtual Open Mic', description: 'Showcase your talent in our online events', link: '/community/virtual-open-mic', color: 'neon-cyan' },
  { icon: Award, title: 'Challenges', description: 'Participate in gamified acting challenges', link: '/gamification/challenges', color: 'neon-lime' },
  { icon: BookOpen, title: 'Mentorship', description: 'Learn from experienced theatre professionals', link: '/community/mentorship', color: 'neon-gold' },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold font-vietnam mb-4">
            <span className="neon-text-pink">Theatre</span>{' '}
            <span className="neon-text-cyan">Community</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Join thousands of artists, connect, collaborate, and grow together in the vibrant theatre community
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={index} href={feature.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card-featured p-8 cursor-pointer h-full"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-${feature.color}/20 mb-4`}>
                    <Icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-featured p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Community Stats</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '10K+', label: 'Active Members' },
              { value: '500+', label: 'Events Hosted' },
              { value: '50+', label: 'Cities' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold neon-text-cyan mb-2">{stat.value}</div>
                <div className="text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
