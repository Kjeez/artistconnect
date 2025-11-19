'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Menu, X, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Events', href: '/booking' },
    { label: 'Scripts', href: '/script-store' },
    { label: 'Community', href: '/social' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-neon-cyan/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.h1
              className="text-xl md:text-2xl font-bold font-vietnam neon-text-pink tracking-wider"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              TheatreConnect
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-light hover:text-neon-cyan transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-full text-text-light hover:bg-neon-pink/20 hover:text-neon-pink transition-all duration-200"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
              </button>

              <AnimatePresence>
                {notificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-80 glass rounded-xl border border-neon-cyan/20 p-4 shadow-neon-cyan"
                  >
                    <h3 className="text-lg font-bold mb-3 neon-text-cyan">Notifications</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-card-bg rounded-lg hover:bg-input-bg transition-colors cursor-pointer">
                        <p className="text-sm font-medium">New audition opportunity</p>
                        <p className="text-xs text-text-muted mt-1">Hamlet - Lead Role</p>
                      </div>
                      <div className="p-3 bg-card-bg rounded-lg hover:bg-input-bg transition-colors cursor-pointer">
                        <p className="text-sm font-medium">Rehearsal reminder</p>
                        <p className="text-xs text-text-muted mt-1">Tomorrow at 5 PM</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile (Desktop) */}
            <Link
              href="/profile"
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-purple-pink hover:neon-glow-pink transition-all duration-300"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Profile</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-text-light hover:bg-neon-pink/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-neon-cyan/20"
            >
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 rounded-lg text-text-light hover:bg-neon-pink/20 hover:text-neon-pink transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg text-text-light hover:bg-neon-pink/20 hover:text-neon-pink transition-all duration-200 flex items-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
