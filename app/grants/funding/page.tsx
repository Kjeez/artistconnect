'use client';

import { motion } from 'framer-motion';
import { DollarSign, Calendar, Users, TrendingUp, Award, ExternalLink, Filter, Search, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface Grant {
  id: number;
  title: string;
  organization: string;
  logo: string;
  amount: string;
  deadline: string;
  category: string;
  eligibility: string[];
  description: string;
  applicants: number;
  status: 'open' | 'closing-soon' | 'closed';
  tags: string[];
}

export default function GrantsFundingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('open');

  const categories = ['All', 'Visual Arts', 'Music', 'Film', 'Digital Arts', 'Performance', 'Literature', 'Mixed Media'];

  const grants: Grant[] = [
    {
      id: 1,
      title: 'Emerging Artist Grant 2025',
      organization: 'National Arts Foundation',
      logo: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=100&h=100&fit=crop',
      amount: '₹5,00,000',
      deadline: '2025-12-31',
      category: 'All Arts',
      eligibility: ['Age 18-35', 'Indian Resident', 'Portfolio Required', 'First-time applicants'],
      description: 'Supporting emerging artists across all disciplines to develop their practice and create new work. This grant provides financial support and mentorship opportunities.',
      applicants: 234,
      status: 'open',
      tags: ['Emerging', 'All Arts', 'Mentorship'],
    },
    {
      id: 2,
      title: 'Digital Arts Innovation Fund',
      organization: 'Tech Arts Council',
      logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop',
      amount: '₹10,00,000',
      deadline: '2025-11-30',
      category: 'Digital Arts',
      eligibility: ['NFT/Digital Art', 'Innovative Project', 'No Age Limit', 'Portfolio Required'],
      description: 'Funding for digital artists exploring cutting-edge technology in their work, including VR, AR, AI-assisted art, and NFT projects.',
      applicants: 156,
      status: 'closing-soon',
      tags: ['Digital', 'Innovation', 'NFT'],
    },
    {
      id: 3,
      title: 'Community Music Project Grant',
      organization: 'Music for All Foundation',
      logo: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop',
      amount: '₹3,00,000',
      deadline: '2025-12-15',
      category: 'Music',
      eligibility: ['Community Focus', 'Team Project', 'Educational Component', 'Any Age'],
      description: 'Supporting music projects that bring communities together. Ideal for workshops, concerts, and educational programs.',
      applicants: 89,
      status: 'open',
      tags: ['Music', 'Community', 'Education'],
    },
    {
      id: 4,
      title: 'Independent Film Production Fund',
      organization: 'Cinema Development Corp',
      logo: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=100&h=100&fit=crop',
      amount: '₹15,00,000',
      deadline: '2025-11-25',
      category: 'Film',
      eligibility: ['Original Script', 'Budget Plan Required', 'Indian Stories', 'Director/Producer'],
      description: 'Funding for independent filmmakers to produce original content. Documentary and narrative films eligible.',
      applicants: 312,
      status: 'closing-soon',
      tags: ['Film', 'Production', 'Storytelling'],
    },
    {
      id: 5,
      title: 'Visual Arts Exhibition Grant',
      organization: 'Contemporary Art Society',
      logo: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=100&h=100&fit=crop',
      amount: '₹2,50,000',
      deadline: '2026-01-31',
      category: 'Visual Arts',
      eligibility: ['Exhibition Proposal', 'Venue Confirmed', 'Professional Artist', 'Portfolio'],
      description: 'Support for artists planning solo or group exhibitions. Covers production, installation, and promotional costs.',
      applicants: 67,
      status: 'open',
      tags: ['Exhibition', 'Visual Arts', 'Gallery'],
    },
    {
      id: 6,
      title: 'Performance Art Development Fund',
      organization: 'Live Arts Council',
      logo: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=100&h=100&fit=crop',
      amount: '₹4,00,000',
      deadline: '2025-12-20',
      category: 'Performance',
      eligibility: ['Live Performance', 'Original Work', 'Professional Resume', 'Video Samples'],
      description: 'Grants for performance artists, including dancers, theatre makers, and interdisciplinary performers creating new work.',
      applicants: 124,
      status: 'open',
      tags: ['Performance', 'Dance', 'Theatre'],
    },
  ];

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold border border-green-500/30">Open</span>;
      case 'closing-soon':
        return <span className="px-3 py-1 rounded-full bg-neon-gold/20 text-neon-gold text-xs font-bold border border-neon-gold/30">Closing Soon</span>;
      case 'closed':
        return <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">Closed</span>;
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
            <span className="neon-text-pink">Grants</span>{' '}
            <span className="neon-text-cyan">& Funding</span>
          </h1>
          <p className="text-text-muted">
            Find funding opportunities to support your artistic projects
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Active Grants', value: '24', icon: Award, color: 'neon-pink' },
            { label: 'Total Funding', value: '₹2.5Cr', icon: DollarSign, color: 'neon-cyan' },
            { label: 'Artists Funded', value: '1,234', icon: Users, color: 'neon-lime' },
            { label: 'Success Rate', value: '68%', icon: TrendingUp, color: 'neon-gold' },
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
                placeholder="Search grants..."
                className="input-field pl-10 w-full"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-field"
            >
              <option value="open">Open</option>
              <option value="closing-soon">Closing Soon</option>
              <option value="all">All Status</option>
            </select>
            <button className="btn-outline flex items-center gap-2">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30'
                    : 'bg-card-bg text-text-muted hover:text-white border border-neon-cyan/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grants List */}
        <div className="grid grid-cols-1 gap-6">
          {grants.map((grant, index) => (
            <motion.div
              key={grant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-featured hover:border-neon-cyan/40 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div
                  className="w-full md:w-24 h-24 rounded-lg bg-cover bg-center border-2 border-neon-pink/30 flex-shrink-0"
                  style={{ backgroundImage: `url(${grant.logo})` }}
                />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white font-bold text-xl">{grant.title}</h3>
                        {getStatusBadge(grant.status)}
                      </div>
                      <div className="text-neon-cyan font-medium mb-2">{grant.organization}</div>
                      <p className="text-text-light text-sm leading-relaxed mb-3">
                        {grant.description}
                      </p>
                    </div>
                  </div>

                  {/* Grant Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-input-bg">
                      <div className="flex items-center gap-2 text-neon-lime mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-xs text-text-muted">Grant Amount</span>
                      </div>
                      <div className="text-white font-bold">{grant.amount}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-input-bg">
                      <div className="flex items-center gap-2 text-neon-gold mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs text-text-muted">Deadline</span>
                      </div>
                      <div className="text-white font-bold">
                        {new Date(grant.deadline).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="text-neon-gold text-xs mt-1">
                        {getDaysRemaining(grant.deadline)} days left
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-input-bg">
                      <div className="flex items-center gap-2 text-neon-cyan mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-xs text-text-muted">Applicants</span>
                      </div>
                      <div className="text-white font-bold">{grant.applicants}</div>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="mb-4">
                    <h4 className="text-white font-bold text-sm mb-2">Eligibility:</h4>
                    <div className="flex flex-wrap gap-2">
                      {grant.eligibility.map((item, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs border border-neon-cyan/30"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {grant.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded bg-neon-pink/10 text-neon-pink text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button className="btn-outline text-sm flex items-center gap-2">
                        View Details
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="btn-primary text-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="card-featured bg-gradient-to-br from-neon-cyan/10 to-neon-pink/10 border-neon-cyan/30 mt-8"
        >
          <div className="flex flex-col md:flex-row items-start gap-4">
            <AlertCircle className="w-8 h-8 text-neon-cyan flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-white font-bold mb-2">Need Help with Your Application?</h3>
              <p className="text-text-light text-sm mb-4">
                Our team offers free consultation to help you craft winning grant applications. Book a session with our grant advisors.
              </p>
              <button className="btn-outline text-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
