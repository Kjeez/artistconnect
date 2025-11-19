'use client';

import { motion } from 'framer-motion';
import { Search, MoreVertical, Send } from 'lucide-react';

const conversations = [
  { id: 1, name: 'Rajesh Kumar', role: 'Director', lastMessage: 'Looking forward to the audition!', time: '2h ago', unread: 2, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: 2, name: 'Priya Sharma', role: 'Actor', lastMessage: 'Thanks for the opportunity', time: '5h ago', unread: 0, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { id: 3, name: 'Amit Patel', role: 'Producer', lastMessage: 'Let\'s discuss the script', time: '1d ago', unread: 1, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
];

export default function MessagesPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="sticky top-0 z-10 glass-dark p-4 border-b border-neon-cyan/20">
          <h1 className="text-2xl font-bold neon-text-cyan mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input type="search" placeholder="Search conversations" className="input pl-12 w-full" />
          </div>
        </div>

        {/* Conversations List */}
        <div className="divide-y divide-neon-cyan/10">
          {conversations.map((conv, index) => (
            <motion.div
              key={conv.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 hover:bg-card-bg/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-neon-pink"
                    style={{ backgroundImage: `url(${conv.avatar})` }}
                  />
                  {conv.unread > 0 && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-neon-pink flex items-center justify-center text-xs font-bold">
                      {conv.unread}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white">{conv.name}</h3>
                    <span className="text-xs text-text-muted">{conv.time}</span>
                  </div>
                  <p className="text-sm text-text-muted">{conv.role}</p>
                  <p className={`text-sm mt-1 ${conv.unread > 0 ? 'text-white font-medium' : 'text-text-muted'}`}>
                    {conv.lastMessage}
                  </p>
                </div>
                <button className="p-2 rounded-full hover:bg-neon-pink/20 transition-colors">
                  <MoreVertical className="w-5 h-5 text-text-muted" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
