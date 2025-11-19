'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, Calendar, Users, Shield, Settings } from 'lucide-react';
import Link from 'next/link';

const adminModules = [
  { icon: LayoutDashboard, title: 'CMS Dashboard', description: 'Manage all content', link: '/admin/cms', color: 'neon-pink' },
  { icon: Calendar, title: 'Event Management', description: 'Manage theatre events', link: '/admin/events', color: 'neon-cyan' },
  { icon: FileText, title: 'Script Management', description: 'Manage script library', link: '/admin/scripts', color: 'neon-lime' },
  { icon: Users, title: 'User Management', description: 'Manage users & roles', link: '/admin/users', color: 'neon-gold' },
  { icon: Shield, title: 'Content Moderation', description: 'Review flagged content', link: '/admin/moderation', color: 'neon-purple' },
  { icon: Settings, title: 'Settings', description: 'System configuration', link: '/admin/settings', color: 'neon-cyan' },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold font-vietnam mb-4">
            <span className="neon-text-pink">Admin</span>{' '}
            <span className="neon-text-cyan">Dashboard</span>
          </h1>
          <p className="text-text-muted text-lg">Manage TheatreConnect platform</p>
        </motion.div>

        {/* Admin Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Link key={index} href={module.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card-featured p-6 cursor-pointer h-full"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-${module.color}/20 mb-4`}>
                    <Icon className={`w-7 h-7 text-${module.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                  <p className="text-text-muted text-sm">{module.description}</p>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 card-featured p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Platform Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Users', value: '10,234', color: 'neon-pink' },
              { label: 'Active Events', value: '156', color: 'neon-cyan' },
              { label: 'Scripts', value: '2,341', color: 'neon-lime' },
              { label: 'Auditions', value: '89', color: 'neon-gold' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold text-${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
