'use client';

import { motion } from 'framer-motion';
import { Ticket, Calendar, MapPin, Clock, Download, Share2, QrCode, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const tickets = [
  {
    id: 'TKT001234',
    event: 'The Phantom of the Opera',
    venue: 'National Centre for the Performing Arts',
    date: '2025-12-15',
    time: '7:30 PM',
    seats: ['A-12', 'A-13'],
    type: 'VIP',
    price: 5000,
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=200&fit=crop',
  },
  {
    id: 'TKT001235',
    event: 'Classical Dance Recital',
    venue: 'Prithvi Theatre, Mumbai',
    date: '2025-11-28',
    time: '6:00 PM',
    seats: ['B-5'],
    type: 'Premium',
    price: 1500,
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400&h=200&fit=crop',
  },
  {
    id: 'TKT001236',
    event: 'Stand-up Comedy Night',
    venue: 'Canvas Laugh Club',
    date: '2025-11-22',
    time: '8:00 PM',
    seats: ['C-8', 'C-9'],
    type: 'Standard',
    price: 800,
    status: 'used',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400&h=200&fit=crop',
  },
];

export default function MyTicketsPage() {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');
  const [showQR, setShowQR] = useState<string | null>(null);

  const upcomingTickets = tickets.filter(t => t.status === 'confirmed');
  const pastTickets = tickets.filter(t => t.status === 'used');

  const displayTickets = selectedTab === 'upcoming' ? upcomingTickets : pastTickets;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam mb-2 flex items-center gap-3">
            <Ticket className="w-10 h-10 text-neon-pink" />
            <span className="neon-text-pink">My</span>{' '}
            <span className="neon-text-cyan">Tickets</span>
          </h1>
          <p className="text-text-muted">
            View and manage your event tickets
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Upcoming', value: upcomingTickets.length, color: 'neon-lime' },
            { label: 'Past Events', value: pastTickets.length, color: 'neon-cyan' },
            { label: 'Total Spent', value: `₹${tickets.reduce((sum, t) => sum + t.price * t.seats.length, 0).toLocaleString()}`, color: 'neon-gold' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-neon-cyan/20">
          <button
            onClick={() => setSelectedTab('upcoming')}
            className={`pb-3 px-4 font-medium transition-all ${
              selectedTab === 'upcoming'
                ? 'text-neon-pink border-b-2 border-neon-pink'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Upcoming ({upcomingTickets.length})
          </button>
          <button
            onClick={() => setSelectedTab('past')}
            className={`pb-3 px-4 font-medium transition-all ${
              selectedTab === 'past'
                ? 'text-neon-pink border-b-2 border-neon-pink'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Past Events ({pastTickets.length})
          </button>
        </div>

        {/* Tickets List */}
        <div className="space-y-6">
          {displayTickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-featured overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Event Image */}
                <div
                  className="w-full md:w-48 h-32 bg-cover bg-center flex-shrink-0 rounded-lg"
                  style={{ backgroundImage: `url(${ticket.image})` }}
                />

                {/* Ticket Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{ticket.event}</h3>
                      <p className="text-text-muted text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {ticket.venue}
                      </p>
                    </div>
                    {ticket.status === 'confirmed' ? (
                      <span className="px-3 py-1 rounded-full bg-neon-lime/20 text-neon-lime text-xs font-bold border border-neon-lime/30 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Confirmed
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-text-muted/20 text-text-muted text-xs font-bold border border-text-muted/30">
                        Used
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-text-muted">
                      <Calendar className="w-4 h-4 text-neon-pink" />
                      {new Date(ticket.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <Clock className="w-4 h-4 text-neon-cyan" />
                      {ticket.time}
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                      <Ticket className="w-4 h-4 text-neon-lime" />
                      {ticket.seats.join(', ')}
                    </div>
                    <div className="text-text-muted">
                      {ticket.type} • ₹{ticket.price * ticket.seats.length}
                    </div>
                  </div>

                  {/* Ticket ID */}
                  <div className="mb-4 p-2 rounded bg-input-bg inline-block">
                    <span className="text-xs text-text-muted">Ticket ID:</span>
                    <span className="text-xs text-white ml-2 font-mono">{ticket.id}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    {ticket.status === 'confirmed' && (
                      <button
                        onClick={() => setShowQR(showQR === ticket.id ? null : ticket.id)}
                        className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
                      >
                        <QrCode className="w-4 h-4" />
                        {showQR === ticket.id ? 'Hide QR Code' : 'Show QR Code'}
                      </button>
                    )}
                    <button className="btn-outline text-sm py-2 px-4 flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="btn-outline text-sm py-2 px-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>

                  {/* QR Code Section */}
                  {showQR === ticket.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 p-4 rounded-lg bg-white"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                          <QrCode className="w-32 h-32 text-gray-400" />
                        </div>
                        <p className="text-gray-600 text-sm text-center">
                          Scan this QR code at the venue entrance
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {displayTickets.length === 0 && (
            <div className="card-featured text-center py-12">
              <Ticket className="w-16 h-16 text-text-muted mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Tickets Found</h3>
              <p className="text-text-muted mb-6">
                {selectedTab === 'upcoming'
                  ? 'You don\'t have any upcoming events. Start exploring!'
                  : 'No past events to show.'}
              </p>
              {selectedTab === 'upcoming' && (
                <button className="btn-primary">
                  Browse Events
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
