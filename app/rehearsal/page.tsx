'use client';

import { motion } from 'framer-motion';
import { Video, Users, Bell, FileText, Plus, Calendar } from 'lucide-react';
import Link from 'next/link';

const rehearsals = [
  {
    id: 1,
    name: 'Hamlet - Act 3 Scene 1',
    production: 'Hamlet',
    date: '2025-11-25',
    time: '18:00',
    participants: 6,
    status: 'upcoming',
  },
  {
    id: 2,
    name: 'Delhi Diaries - Full Read',
    production: 'Delhi Diaries',
    date: '2025-11-22',
    time: '19:30',
    participants: 4,
    status: 'today',
  },
];

export default function RehearsalPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-pink mb-2">
            Virtual Rehearsal Rooms
          </h1>
          <p className="text-text-muted">
            Collaborate with your cast remotely with AI-powered rehearsal tools
          </p>
        </motion.div>

        {/* AI Features highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-gradient-purple-pink">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold neon-text-pink">AI Rehearsal Alerts</h3>
              <p className="text-text-muted text-sm">Get notified when it's your turn to speak</p>
            </div>
          </div>
          <p className="text-text-light leading-relaxed">
            Our AI monitors the script in real-time and alerts each actor when their line is
            approaching. Never miss your cue again!
          </p>
        </motion.div>

        {/* Create new rehearsal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link href="/rehearsal/create">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card cursor-pointer border-dashed"
            >
              <div className="flex items-center justify-center gap-4 py-8">
                <div className="p-4 rounded-full bg-neon-cyan/20">
                  <Plus className="w-8 h-8 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Create New Rehearsal Room</h3>
                  <p className="text-text-muted">Start a video call with your cast</p>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Rehearsal rooms list */}
        <div>
          <h2 className="text-2xl font-bold font-vietnam text-white mb-6">
            Your Rehearsal Rooms
          </h2>
          <div className="space-y-4">
            {rehearsals.map((rehearsal, index) => (
              <motion.div
                key={rehearsal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/rehearsal/${rehearsal.id}`}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="card-featured cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 rounded-full bg-gradient-cyan-lime">
                          <Video className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{rehearsal.name}</h3>
                            {rehearsal.status === 'today' && (
                              <span className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-bold border border-neon-pink/30">
                                TODAY
                              </span>
                            )}
                          </div>
                          <p className="text-text-muted mb-3">{rehearsal.production}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-neon-cyan" />
                              <span>
                                {new Date(rehearsal.date).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-neon-lime" />
                              <span>{rehearsal.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-neon-gold" />
                              <span>{rehearsal.participants} participants</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary whitespace-nowrap"
                      >
                        Join Room
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Bell,
              title: 'AI Cue Alerts',
              description: 'Get notified before your line',
              color: 'neon-pink',
            },
            {
              icon: FileText,
              title: 'Shared Scripts',
              description: 'Everyone sees the same script',
              color: 'neon-cyan',
            },
            {
              icon: Video,
              title: 'HD Video Calls',
              description: 'Crystal clear video & audio',
              color: 'neon-lime',
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-${feature.color}/20 mb-4`}>
                  <Icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-text-muted">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
