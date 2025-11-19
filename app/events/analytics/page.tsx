'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye, DollarSign, Ticket, MapPin, Calendar, Download, Share2, ArrowUp, ArrowDown, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function EventAnalyticsPage() {
  const [timePeriod, setTimePeriod] = useState<'7d' | '30d' | '90d' | 'all'>('30d');

  const eventDetails = {
    title: 'Hamlet - Opening Night',
    date: '2025-12-20',
    venue: 'Prithvi Theatre',
    location: 'Mumbai',
  };

  const stats = [
    {
      label: 'Total Revenue',
      value: '₹4,85,000',
      change: '+18%',
      isPositive: true,
      icon: DollarSign,
      color: 'neon-lime',
    },
    {
      label: 'Tickets Sold',
      value: '347',
      change: '+23%',
      isPositive: true,
      icon: Ticket,
      color: 'neon-pink',
    },
    {
      label: 'Page Views',
      value: '12,456',
      change: '+31%',
      isPositive: true,
      icon: Eye,
      color: 'neon-cyan',
    },
    {
      label: 'Conversion Rate',
      value: '2.78%',
      change: '-5%',
      isPositive: false,
      icon: TrendingUp,
      color: 'neon-gold',
    },
  ];

  const ticketTypes = [
    { name: 'VIP', sold: 45, total: 50, revenue: '₹1,35,000', percentage: 90 },
    { name: 'Premium', sold: 127, total: 150, revenue: '₹2,54,000', percentage: 85 },
    { name: 'General', sold: 175, total: 250, revenue: '₹96,000', percentage: 70 },
  ];

  const audienceDemographics = [
    { category: 'Age 18-24', percentage: 25, color: 'bg-neon-pink' },
    { category: 'Age 25-34', percentage: 35, color: 'bg-neon-cyan' },
    { category: 'Age 35-44', percentage: 22, color: 'bg-neon-lime' },
    { category: 'Age 45+', percentage: 18, color: 'bg-neon-gold' },
  ];

  const trafficSources = [
    { source: 'Direct', visitors: 4567, percentage: 37 },
    { source: 'Social Media', visitors: 3234, percentage: 26 },
    { source: 'Search', visitors: 2890, percentage: 23 },
    { source: 'Email', visitors: 1234, percentage: 10 },
    { source: 'Other', visitors: 531, percentage: 4 },
  ];

  const dailyStats = [
    { date: 'Mon', views: 1200, sales: 45 },
    { date: 'Tue', views: 1450, sales: 52 },
    { date: 'Wed', views: 1800, sales: 68 },
    { date: 'Thu', views: 2100, sales: 71 },
    { date: 'Fri', views: 2400, sales: 89 },
    { date: 'Sat', views: 1900, sales: 78 },
    { date: 'Sun', views: 1606, sales: 54 },
  ];

  const maxViews = Math.max(...dailyStats.map(d => d.views));
  const maxSales = Math.max(...dailyStats.map(d => d.sales));

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/events/details">
            <button className="flex items-center gap-2 text-text-muted hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Event
            </button>
          </Link>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold font-vietnam mb-2">
                <span className="neon-text-pink">Event</span>{' '}
                <span className="neon-text-cyan">Analytics</span>
              </h1>
              <div className="flex items-center gap-4 text-text-muted text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(eventDetails.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {eventDetails.venue}, {eventDetails.location}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value as any)}
                className="input-field"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="all">All time</option>
              </select>
              <button className="btn-outline flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="btn-outline flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card-featured"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 rounded-full bg-${stat.color}/20`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold ${
                  stat.isPositive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              <div className="text-text-muted text-sm mb-1">{stat.label}</div>
              <div className="text-white text-2xl font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-6">Daily Performance</h2>
              <div className="space-y-6">
                {/* Views Chart */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-text-muted text-sm">Page Views</span>
                    <span className="text-neon-cyan font-bold">
                      {dailyStats.reduce((sum, d) => sum + d.views, 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-32">
                    {dailyStats.map((stat, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-input-bg rounded-t relative overflow-hidden flex-1 flex items-end">
                          <div
                            className="w-full bg-gradient-to-t from-neon-cyan to-neon-pink rounded-t transition-all"
                            style={{ height: `${(stat.views / maxViews) * 100}%` }}
                          />
                        </div>
                        <span className="text-text-muted text-xs">{stat.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sales Chart */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-text-muted text-sm">Ticket Sales</span>
                    <span className="text-neon-lime font-bold">
                      {dailyStats.reduce((sum, d) => sum + d.sales, 0)}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-32">
                    {dailyStats.map((stat, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-input-bg rounded-t relative overflow-hidden flex-1 flex items-end">
                          <div
                            className="w-full bg-gradient-to-t from-neon-lime to-neon-gold rounded-t transition-all"
                            style={{ height: `${(stat.sales / maxSales) * 100}%` }}
                          />
                        </div>
                        <span className="text-text-muted text-xs">{stat.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ticket Sales Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-6">Ticket Sales by Type</h2>
              <div className="space-y-4">
                {ticketTypes.map((ticket, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-white font-bold">{ticket.name}</span>
                        <span className="text-text-muted text-sm ml-2">
                          {ticket.sold}/{ticket.total}
                        </span>
                      </div>
                      <span className="text-neon-lime font-bold">{ticket.revenue}</span>
                    </div>
                    <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full transition-all"
                        style={{ width: `${ticket.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Traffic Sources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card-featured"
            >
              <h2 className="text-xl font-bold text-white mb-6">Traffic Sources</h2>
              <div className="space-y-3">
                {trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">{source.source}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-text-muted text-sm">
                            {source.visitors.toLocaleString()}
                          </span>
                          <span className="text-neon-cyan font-bold text-sm w-12 text-right">
                            {source.percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neon-cyan rounded-full transition-all"
                          style={{ width: `${source.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Audience Demographics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-neon-pink" />
                Audience Demographics
              </h3>
              <div className="space-y-4">
                {audienceDemographics.map((demo, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">{demo.category}</span>
                      <span className="text-neon-cyan font-bold text-sm">{demo.percentage}%</span>
                    </div>
                    <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                      <div
                        className={`h-full ${demo.color} rounded-full transition-all`}
                        style={{ width: `${demo.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Capacity</span>
                  <span className="text-white font-bold">450 seats</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Occupancy</span>
                  <span className="text-neon-lime font-bold">77.1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Avg. Ticket Price</span>
                  <span className="text-white font-bold">₹1,398</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Wishlist Adds</span>
                  <span className="text-neon-pink font-bold">892</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Social Shares</span>
                  <span className="text-neon-cyan font-bold">1,245</span>
                </div>
              </div>
            </motion.div>

            {/* Top Regions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="card-featured"
            >
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-neon-gold" />
                Top Regions
              </h3>
              <div className="space-y-3">
                {[
                  { city: 'Mumbai', percentage: 45 },
                  { city: 'Pune', percentage: 22 },
                  { city: 'Delhi', percentage: 15 },
                  { city: 'Bangalore', percentage: 10 },
                  { city: 'Others', percentage: 8 },
                ].map((region, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white text-sm">{region.city}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-input-bg rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neon-gold rounded-full"
                          style={{ width: `${region.percentage}%` }}
                        />
                      </div>
                      <span className="text-neon-gold font-bold text-sm w-10 text-right">
                        {region.percentage}%
                      </span>
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
