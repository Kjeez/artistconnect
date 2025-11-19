'use client';

import { motion } from 'framer-motion';
import { User, Bell, Lock, CreditCard, Globe, Moon, Volume2, Eye, Shield, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const settingsCategories = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Edit Profile', description: 'Update your personal information', href: '/settings/profile' },
      { icon: Lock, label: 'Password & Security', description: 'Manage your password and security settings', href: '/settings/security' },
      { icon: Eye, label: 'Privacy', description: 'Control who can see your content', href: '/settings/privacy' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Notifications', description: 'Manage notification preferences', toggle: true, key: 'notifications' },
      { icon: Moon, label: 'Dark Mode', description: 'Toggle dark theme', toggle: true, key: 'darkMode' },
      { icon: Globe, label: 'Language', description: 'English', href: '/settings/language' },
      { icon: Volume2, label: 'Sound Effects', description: 'Enable interface sounds', toggle: true, key: 'sounds' },
    ],
  },
  {
    title: 'Billing',
    items: [
      { icon: CreditCard, label: 'Payment Methods', description: 'Manage payment options', href: '/settings/payment' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', description: 'Get support and FAQs', href: '/help' },
      { icon: Shield, label: 'Terms & Privacy Policy', description: 'Review our policies', href: '/legal' },
    ],
  },
];

export default function SettingsPage() {
  const [toggleStates, setToggleStates] = useState({
    notifications: true,
    darkMode: true,
    sounds: false,
  });

  const handleToggle = (key: string) => {
    setToggleStates(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Settings</span>
          </h1>
          <p className="text-text-muted">
            Manage your account preferences and settings
          </p>
        </motion.div>

        {/* Settings Categories */}
        <div className="space-y-8">
          {settingsCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-xl font-bold text-white mb-4">{category.title}</h2>
              <div className="card-featured divide-y divide-neon-cyan/20">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.toggle ? (
                      <button
                        onClick={() => handleToggle(item.key!)}
                        className="w-full flex items-center justify-between p-4 hover:bg-neon-cyan/5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-neon-cyan" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-white font-medium">{item.label}</h3>
                            <p className="text-sm text-text-muted">{item.description}</p>
                          </div>
                        </div>
                        <div
                          className={`relative w-12 h-6 rounded-full transition-colors ${
                            toggleStates[item.key as keyof typeof toggleStates]
                              ? 'bg-neon-pink'
                              : 'bg-input-bg'
                          }`}
                        >
                          <div
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              toggleStates[item.key as keyof typeof toggleStates]
                                ? 'translate-x-6'
                                : ''
                            }`}
                          />
                        </div>
                      </button>
                    ) : (
                      <Link href={item.href || '#'}>
                        <div className="flex items-center justify-between p-4 hover:bg-neon-cyan/5 transition-colors cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-neon-cyan" />
                            </div>
                            <div>
                              <h3 className="text-white font-medium">{item.label}</h3>
                              <p className="text-sm text-text-muted">{item.description}</p>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-text-muted" />
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Account Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Account Actions</h2>
          <div className="card-featured space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-colors">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
            <button className="w-full py-3 text-text-muted hover:text-white transition-colors text-sm">
              Delete Account
            </button>
          </div>
        </motion.div>

        {/* App Info */}
        <div className="mt-8 text-center text-sm text-text-muted">
          <p>TheatreConnect v1.0.0</p>
          <p>© 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
