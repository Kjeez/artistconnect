'use client';

import { motion } from 'framer-motion';
import { Bell, Calendar, Users, Heart, MessageCircle, Star } from 'lucide-react';

const notifications = [
  { id: 1, type: 'audition', icon: Star, title: 'New Audition Match', message: 'Hamlet - Lead Role matches your profile', time: '10m ago', unread: true },
  { id: 2, type: 'event', icon: Calendar, title: 'Event Reminder', message: 'Your booked event starts tomorrow at 6 PM', time: '2h ago', unread: true },
  { id: 3, type: 'social', icon: Heart, title: 'New Follower', message: 'Rajesh Kumar started following you', time: '5h ago', unread: false },
  { id: 4, type: 'message', icon: MessageCircle, title: 'New Message', message: 'Priya Sharma sent you a message', time: '1d ago', unread: false },
  { id: 5, type: 'community', icon: Users, title: 'Community Update', message: 'New post in Theatre Lovers Delhi group', time: '2d ago', unread: false },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold font-vietnam neon-text-pink flex items-center gap-3">
              <Bell className="w-8 h-8" />
              Notifications
            </h1>
            <button className="text-neon-cyan hover:text-neon-pink transition-colors text-sm font-medium">
              Mark all as read
            </button>
          </div>
        </motion.div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notif, index) => {
            const Icon = notif.icon;
            return (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`card cursor-pointer ${notif.unread ? 'border-l-4 border-neon-pink' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${notif.unread ? 'bg-neon-pink/20' : 'bg-input-bg'}`}>
                    <Icon className={`w-5 h-5 ${notif.unread ? 'text-neon-pink' : 'text-neon-cyan'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold mb-1 ${notif.unread ? 'text-white' : 'text-text-light'}`}>
                      {notif.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-2">{notif.message}</p>
                    <span className="text-xs text-text-muted">{notif.time}</span>
                  </div>
                  {notif.unread && (
                    <div className="w-3 h-3 rounded-full bg-neon-pink" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
