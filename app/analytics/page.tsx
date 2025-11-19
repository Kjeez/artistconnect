'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Eye, Heart, Users, Calendar, Download, BarChart3, PieChart } from 'lucide-react';
import { useState } from 'react';

const analyticsData = {
  overview: {
    profileViews: 12453,
    profileViewsChange: '+12.5%',
    postEngagement: 8923,
    postEngagementChange: '+8.3%',
    newFollowers: 234,
    newFollowersChange: '+15.2%',
    applicationViews: 567,
    applicationViewsChange: '+5.7%',
  },
  topPosts: [
    {
      id: 1,
      title: 'Classical Kathak Performance',
      type: 'video',
      views: 3456,
      likes: 289,
      comments: 45,
      date: '2024-11-15',
    },
    {
      id: 2,
      title: 'Behind the Scenes - Hamlet',
      type: 'image',
      views: 2234,
      likes: 178,
      comments: 23,
      date: '2024-11-10',
    },
    {
      id: 3,
      title: 'Monologue Practice Tips',
      type: 'video',
      views: 1892,
      likes: 156,
      comments: 34,
      date: '2024-11-05',
    },
  ],
  demographics: {
    ageGroups: [
      { range: '18-24', percentage: 35 },
      { range: '25-34', percentage: 45 },
      { range: '35-44', percentage: 15 },
      { range: '45+', percentage: 5 },
    ],
    locations: [
      { city: 'Mumbai', percentage: 40 },
      { city: 'Delhi', percentage: 25 },
      { city: 'Bangalore', percentage: 15 },
      { city: 'Pune', percentage: 10 },
      { city: 'Others', percentage: 10 },
    ],
  },
};

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold font-vietnam mb-2 flex items-center gap-3">
                <BarChart3 className="w-10 h-10 text-neon-pink" />
                <span className="neon-text-pink">Analytics</span>{' '}
                <span className="neon-text-cyan">Dashboard</span>
              </h1>
              <p className="text-text-muted">
                Track your performance and audience insights
              </p>
            </div>
            <button className="btn-outline flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export Report
            </button>
          </div>

          {/* Period Selector */}
          <div className="flex gap-2">
            {['7d', '30d', '90d', '1y'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedPeriod === period
                    ? 'bg-neon-pink text-white'
                    : 'bg-input-bg text-text-muted hover:text-white'
                }`}
              >
                {period === '7d' && 'Last 7 Days'}
                {period === '30d' && 'Last 30 Days'}
                {period === '90d' && 'Last 90 Days'}
                {period === '1y' && 'Last Year'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: 'Profile Views',
              value: analyticsData.overview.profileViews.toLocaleString(),
              change: analyticsData.overview.profileViewsChange,
              icon: Eye,
              color: 'neon-pink',
            },
            {
              label: 'Post Engagement',
              value: analyticsData.overview.postEngagement.toLocaleString(),
              change: analyticsData.overview.postEngagementChange,
              icon: Heart,
              color: 'neon-cyan',
            },
            {
              label: 'New Followers',
              value: analyticsData.overview.newFollowers.toLocaleString(),
              change: analyticsData.overview.newFollowersChange,
              icon: Users,
              color: 'neon-lime',
            },
            {
              label: 'Application Views',
              value: analyticsData.overview.applicationViews.toLocaleString(),
              change: analyticsData.overview.applicationViewsChange,
              icon: TrendingUp,
              color: 'neon-gold',
            },
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card-featured"
            >
              <div className="flex items-center justify-between mb-3">
                <metric.icon className={`w-8 h-8 text-${metric.color}`} />
                <span className={`text-sm font-bold ${
                  metric.change.startsWith('+') ? 'text-neon-lime' : 'text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className={`text-3xl font-bold text-${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-sm text-text-muted">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-featured"
          >
            <h2 className="text-xl font-bold text-white mb-4">Profile Views Trend</h2>
            <div className="h-64 bg-input-bg rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-text-muted mx-auto mb-2" />
                <p className="text-text-muted">Chart visualization would go here</p>
              </div>
            </div>
          </motion.div>

          {/* Engagement Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card-featured"
          >
            <h2 className="text-xl font-bold text-white mb-4">Engagement Rate</h2>
            <div className="h-64 bg-input-bg rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="w-16 h-16 text-text-muted mx-auto mb-2" />
                <p className="text-text-muted">Pie chart visualization would go here</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="card-featured"
          >
            <h2 className="text-xl font-bold text-white mb-4">Top Performing Posts</h2>
            <div className="space-y-4">
              {analyticsData.topPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="p-4 rounded-lg bg-input-bg hover:bg-neon-cyan/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-medium">{post.title}</h3>
                    <span className="px-2 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-bold border border-neon-cyan/30">
                      {post.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Demographics */}
          <div className="space-y-6">
            {/* Age Groups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-4">Audience by Age</h2>
              <div className="space-y-3">
                {analyticsData.demographics.ageGroups.map((group, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">{group.range}</span>
                      <span className="text-neon-cyan text-sm font-bold">{group.percentage}%</span>
                    </div>
                    <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-pink to-neon-cyan"
                        style={{ width: `${group.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-4">Top Locations</h2>
              <div className="space-y-3">
                {analyticsData.demographics.locations.map((location, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">{location.city}</span>
                      <span className="text-neon-lime text-sm font-bold">{location.percentage}%</span>
                    </div>
                    <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-lime to-neon-gold"
                        style={{ width: `${location.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
