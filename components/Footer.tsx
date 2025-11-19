'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Calendar, FileText, Users, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Calendar, label: 'Events', href: '/booking' },
    { icon: FileText, label: 'Scripts', href: '/script-store' },
    { icon: Users, label: 'Community', href: '/social' },
    { icon: User, label: 'Profile', href: '/profile' },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass-dark border-t border-neon-cyan/20 rounded-t-2xl">
        <nav className="flex justify-around items-center py-2 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-1 flex-1 py-2"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    'p-2 rounded-full transition-all duration-200',
                    isActive
                      ? 'bg-neon-pink/20 text-neon-pink'
                      : 'text-text-muted hover:text-neon-cyan hover:bg-neon-cyan/10'
                  )}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <span
                  className={cn(
                    'text-xs font-medium transition-colors',
                    isActive ? 'text-neon-pink' : 'text-text-muted'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="h-safe-area-inset-bottom bg-transparent" />
      </div>
    </footer>
  );
}
