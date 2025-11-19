'use client';

import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, Plus } from 'lucide-react';

const events = [
  { id: 1, title: 'Hamlet Rehearsal', type: 'Rehearsal', date: '2025-11-25', time: '18:00', location: 'Shri Ram Centre', color: 'neon-pink' },
  { id: 2, title: 'Audition: Romeo & Juliet', type: 'Audition', date: '2025-11-28', time: '14:00', location: 'Kamani Auditorium', color: 'neon-cyan' },
  { id: 3, title: 'Classical Music Workshop', type: 'Workshop', date: '2025-12-01', time: '16:00', location: 'India Habitat Centre', color: 'neon-lime' },
];

export default function CalendarPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold font-vietnam neon-text-pink mb-2 flex items-center gap-3">
              <CalendarIcon className="w-10 h-10" />
              My Calendar
            </h1>
            <p className="text-text-muted">Manage your events, rehearsals, and auditions</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Event
          </motion.button>
        </motion.div>

        {/* Calendar View Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured p-8 mb-8 text-center"
        >
          <CalendarIcon className="w-16 h-16 text-neon-pink mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Calendar View</h3>
          <p className="text-text-muted">Full calendar integration coming soon</p>
        </motion.div>

        {/* Upcoming Events */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card border-l-4 border-${event.color}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm text-text-muted">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-neon-cyan" />
                        {new Date(event.date).toLocaleDateString('en-IN', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-neon-lime" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-neon-gold" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${event.color}/20 text-${event.color} border border-${event.color}/30`}>
                    {event.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
