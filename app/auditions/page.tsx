'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Film, Music, Drama, Filter, Calendar, MapPin } from 'lucide-react';

const auditions = [
  {
    id: 1,
    title: 'Hamlet',
    location: 'Delhi-NCR',
    deadline: '2025-12-15',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop',
    roles: ['Lead Actor', 'Supporting'],
    type: 'Acting',
  },
  {
    id: 2,
    title: 'Romeo and Juliet',
    location: 'Delhi-NCR',
    deadline: '2025-12-20',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&h=300&fit=crop',
    roles: ['Romeo', 'Juliet'],
    type: 'Acting',
  },
  {
    id: 3,
    title: 'Macbeth',
    location: 'Delhi-NCR',
    deadline: '2025-12-25',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=300&fit=crop',
    roles: ['Macbeth', 'Lady Macbeth'],
    type: 'Acting',
  },
];

export default function AuditionsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-pink mb-2">
            AI-Powered Audition Matching
          </h1>
          <p className="text-text-muted">Find auditions that match your skills and preferences</p>
        </motion.div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="search"
              placeholder="Search for auditions"
              className="input pl-12 w-full"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 mb-8">
          {[
            { icon: Drama, label: 'Acting' },
            { icon: Music, label: 'Singing' },
            { icon: Film, label: 'Dance' },
          ].map((filter) => {
            const Icon = filter.icon;
            return (
              <motion.button
                key={filter.label}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-input-bg hover:bg-neon-pink hover:text-white transition-all whitespace-nowrap"
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{filter.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Auditions List */}
        <div className="space-y-4">
          {auditions.map((audition, index) => (
            <motion.div
              key={audition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/auditions/${audition.id}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card-featured flex items-center gap-4 cursor-pointer"
                >
                  <div
                    className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${audition.image})` }}
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">{audition.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-text-muted">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {audition.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Deadline: {new Date(audition.deadline).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-input-bg text-neon-pink">
                    →
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/auditions/video-analysis">
            <motion.div
              whileHover={{ y: -5 }}
              className="card-featured p-6 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-2">Video Analysis</h3>
              <p className="text-text-muted mb-4">
                Upload your audition video to get AI-powered feedback
              </p>
              <button className="btn-primary">Upload Video</button>
            </motion.div>
          </Link>

          <Link href="/auditions/mock-scripts">
            <motion.div
              whileHover={{ y: -5 }}
              className="card-featured p-6 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-white mb-2">Mock Audition Scripts</h3>
              <p className="text-text-muted mb-4">
                Practice with scripts from our library to hone your skills
              </p>
              <button className="btn-secondary">Explore Scripts</button>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
