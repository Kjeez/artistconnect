'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Users,
  Briefcase,
  Star,
  TrendingUp,
} from 'lucide-react';

const opportunities = [
  {
    id: 1,
    title: 'Lead Role - Hamlet Production',
    type: 'Casting Call',
    company: 'Delhi Theatre Group',
    location: 'Shri Ram Centre, Delhi',
    date: '2025-11-25',
    deadline: '2025-11-22',
    budget: '₹15,000 - ₹25,000',
    applicants: 23,
    description: 'Seeking experienced male actor (25-35 years) for lead role in contemporary Hamlet adaptation',
    tags: ['Theatre', 'Acting', 'Lead Role'],
    verified: true,
    urgent: true,
  },
  {
    id: 2,
    title: 'Classical Sitarist for Wedding',
    type: 'Gig',
    company: 'Sharma Events',
    location: 'Taj Palace, New Delhi',
    date: '2025-12-05',
    deadline: '2025-11-28',
    budget: '₹20,000',
    applicants: 8,
    description: '3-hour performance needed for wedding sangeet ceremony. Classical raga experience required.',
    tags: ['Sitar', 'Classical Music', 'Wedding'],
    verified: true,
    urgent: false,
  },
  {
    id: 3,
    title: 'Stand-up Comedian - Corporate Event',
    type: 'Gig',
    company: 'TechCorp India',
    location: 'Gurugram',
    date: '2025-11-30',
    deadline: '2025-11-23',
    budget: '₹30,000',
    applicants: 15,
    description: 'Clean comedy set (30 mins) for annual company celebration. 500+ audience.',
    tags: ['Comedy', 'Stand-up', 'Corporate'],
    verified: false,
    urgent: false,
  },
  {
    id: 4,
    title: 'Kathak Dancer - Music Video',
    type: 'Project',
    company: 'Indie Music Productions',
    location: 'Noida Film City',
    date: '2025-12-10',
    deadline: '2025-11-27',
    budget: '₹12,000 - ₹18,000',
    applicants: 31,
    description: 'Music video shoot featuring Kathak. 2-day commitment. Portfolio required.',
    tags: ['Kathak', 'Dance', 'Music Video'],
    verified: true,
    urgent: false,
  },
];

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'casting' | 'gigs' | 'projects'>('all');

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'casting' && opp.type === 'Casting Call') ||
                         (selectedFilter === 'gigs' && opp.type === 'Gig') ||
                         (selectedFilter === 'projects' && opp.type === 'Project');
    return matchesSearch && matchesFilter;
  });

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
            Opportunities
          </h1>
          <p className="text-text-muted">Find your next gig, audition, or collaboration</p>
        </motion.div>

        {/* Search and filters */}
        <div className="mb-8 space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search opportunities..."
              className="input pl-12 w-full"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {[
              { id: 'all', label: 'All', icon: Briefcase },
              { id: 'casting', label: 'Casting Calls', icon: Users },
              { id: 'gigs', label: 'Gigs', icon: Star },
              { id: 'projects', label: 'Projects', icon: TrendingUp },
            ].map((filter) => {
              const Icon = filter.icon;
              return (
                <motion.button
                  key={filter.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(filter.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 font-medium whitespace-nowrap transition-all ${
                    selectedFilter === filter.id
                      ? 'border-neon-pink bg-neon-pink/20 text-neon-pink'
                      : 'border-neon-cyan/20 text-text-muted hover:border-neon-cyan/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{filter.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Opportunities list */}
        <div className="space-y-4">
          {filteredOpportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/opportunities/${opp.id}`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="card-featured cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left side - Main info */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-neon-pink transition-colors">
                            {opp.title}
                          </h3>
                          {opp.urgent && (
                            <span className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-bold border border-neon-pink/30 whitespace-nowrap">
                              URGENT
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-text-muted">
                          <span className="font-medium text-neon-cyan">{opp.company}</span>
                          {opp.verified && (
                            <span className="flex items-center gap-1 text-neon-lime">
                              <Star className="w-3 h-3 fill-neon-lime" />
                              Verified
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-light leading-relaxed">
                        {opp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {opp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full border border-neon-cyan/30 text-xs font-medium text-neon-cyan"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta info */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-text-muted">
                          <MapPin className="w-4 h-4 text-neon-pink" />
                          <span className="truncate">{opp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted">
                          <Calendar className="w-4 h-4 text-neon-cyan" />
                          <span>{new Date(opp.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted">
                          <DollarSign className="w-4 h-4 text-neon-gold" />
                          <span className="truncate">{opp.budget}</span>
                        </div>
                        <div className="flex items-center gap-2 text-text-muted">
                          <Users className="w-4 h-4 text-neon-lime" />
                          <span>{opp.applicants} applicants</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side - CTA */}
                    <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
                      <div className="text-right">
                        <div className="text-xs text-text-muted mb-1">Deadline</div>
                        <div className="flex items-center gap-1 text-neon-pink font-bold">
                          <Clock className="w-4 h-4" />
                          <span>{new Date(opp.deadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary whitespace-nowrap"
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filteredOpportunities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card text-center py-12"
          >
            <Search className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No opportunities found</h3>
            <p className="text-text-muted">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
