'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Heart, Share2, Ticket, Star, ArrowLeft, Info } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const eventData = {
  title: 'The Phantom of the Opera',
  tagline: 'A Timeless Musical Masterpiece',
  image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200&h=600&fit=crop',
  date: '2025-12-15',
  time: '7:30 PM',
  duration: '2 hours 30 minutes',
  venue: 'National Centre for the Performing Arts',
  location: 'Nariman Point, Mumbai',
  price: {
    vip: 5000,
    premium: 3500,
    standard: 2000,
  },
  rating: 4.8,
  reviews: 1234,
  genre: 'Musical Theatre',
  language: 'English',
  ageRating: 'U/A 13+',
  seatsAvailable: 156,
  totalSeats: 500,
  description: `Experience the haunting beauty of Andrew Lloyd Webber's legendary musical. Set in the Paris Opera House, this timeless tale of love, obsession, and redemption will transport you to a world of mystery and enchantment.

The Phantom of the Opera has captivated audiences worldwide for over three decades with its unforgettable music, spectacular set design, and powerful performances. Don't miss this limited engagement featuring an internationally acclaimed cast.`,
  highlights: [
    'Tony Award-winning production',
    'Live orchestra performance',
    'Stunning period costumes',
    'State-of-the-art staging',
  ],
  cast: [
    { name: 'Rajesh Sharma', role: 'The Phantom', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Priya Kapoor', role: 'Christine Daaé', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
    { name: 'Arjun Malhotra', role: 'Raoul', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
  ],
};

export default function EventDetailsPage() {
  const [selectedTicket, setSelectedTicket] = useState<'vip' | 'premium' | 'standard' | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  const getTotalPrice = () => {
    if (!selectedTicket) return 0;
    return eventData.price[selectedTicket] * quantity;
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Image */}
      <div className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventData.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />

        {/* Back Button */}
        <Link href="/booking">
          <button className="absolute top-4 left-4 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
          >
            <Heart className={`w-5 h-5 ${isFavorited ? 'fill-neon-pink text-neon-pink' : ''}`} />
          </button>
          <button className="p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-bold border border-neon-pink/30 inline-block mb-2">
              {eventData.genre}
            </span>
            <h1 className="text-4xl font-bold text-white mb-2">{eventData.title}</h1>
            <p className="text-text-light mb-3">{eventData.tagline}</p>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-neon-gold fill-neon-gold" />
              <span className="text-white font-bold">{eventData.rating}</span>
              <span className="text-text-muted">({eventData.reviews} reviews)</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-featured"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-neon-cyan" />
                Event Details
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-neon-pink" />
                  <div>
                    <div className="text-white font-medium">
                      {new Date(eventData.date).toLocaleDateString('en-IN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="text-sm text-text-muted">{eventData.time}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-neon-cyan" />
                  <div>
                    <div className="text-white font-medium">Duration</div>
                    <div className="text-sm text-text-muted">{eventData.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-neon-lime" />
                  <div>
                    <div className="text-white font-medium">{eventData.venue}</div>
                    <div className="text-sm text-text-muted">{eventData.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-neon-gold" />
                  <div>
                    <div className="text-white font-medium">
                      {eventData.seatsAvailable} seats left
                    </div>
                    <div className="text-sm text-text-muted">
                      of {eventData.totalSeats} total
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-neon-cyan/20">
                <div>
                  <span className="text-text-muted text-sm">Language:</span>
                  <span className="text-white ml-2">{eventData.language}</span>
                </div>
                <div>
                  <span className="text-text-muted text-sm">Age Rating:</span>
                  <span className="text-white ml-2">{eventData.ageRating}</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-featured"
            >
              <h2 className="text-2xl font-bold text-white mb-4">About This Event</h2>
              <p className="text-text-light leading-relaxed whitespace-pre-line mb-6">
                {eventData.description}
              </p>

              <h3 className="text-lg font-bold text-white mb-3">Highlights</h3>
              <ul className="space-y-2">
                {eventData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-text-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-featured"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Featured Cast</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {eventData.cast.map((member, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="w-24 h-24 rounded-full bg-cover bg-center mx-auto mb-3 border-2 border-neon-pink"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <h4 className="text-white font-medium">{member.name}</h4>
                    <p className="text-sm text-text-muted">{member.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-featured sticky top-4"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Ticket className="w-5 h-5 text-neon-pink" />
                Book Tickets
              </h3>

              {/* Ticket Types */}
              <div className="space-y-3 mb-6">
                {Object.entries(eventData.price).map(([type, price]) => (
                  <button
                    key={type}
                    onClick={() => setSelectedTicket(type as any)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedTicket === type
                        ? 'border-neon-pink bg-neon-pink/10'
                        : 'border-neon-cyan/20 hover:border-neon-cyan/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium capitalize">{type}</div>
                        <div className="text-sm text-text-muted">₹{price.toLocaleString()}</div>
                      </div>
                      {selectedTicket === type && (
                        <div className="w-6 h-6 rounded-full bg-neon-pink flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Quantity Selector */}
              {selectedTicket && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-6"
                >
                  <label className="text-white font-medium mb-2 block">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full bg-input-bg text-white font-bold hover:bg-neon-cyan/20 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      className="w-10 h-10 rounded-full bg-input-bg text-white font-bold hover:bg-neon-cyan/20 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Total */}
              {selectedTicket && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 mb-6"
                >
                  <div className="flex items-center justify-between text-white">
                    <span className="font-medium">Total</span>
                    <span className="text-2xl font-bold">₹{getTotalPrice().toLocaleString()}</span>
                  </div>
                </motion.div>
              )}

              {/* Book Button */}
              <button
                disabled={!selectedTicket}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {selectedTicket ? 'Proceed to Checkout' : 'Select Ticket Type'}
              </button>

              {/* Venue Info */}
              <div className="mt-6 pt-6 border-t border-neon-cyan/20">
                <h4 className="text-white font-medium mb-3">Venue Information</h4>
                <div className="bg-input-bg rounded-lg h-32 mb-3 flex items-center justify-center text-text-muted">
                  <MapPin className="w-8 h-8" />
                </div>
                <p className="text-sm text-text-light">{eventData.venue}</p>
                <p className="text-sm text-text-muted">{eventData.location}</p>
                <button className="mt-3 text-neon-cyan text-sm font-medium hover:underline">
                  View on Map →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
