'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Clock,
  Ticket,
  TrendingUp,
  Heart,
  Share2,
  Filter,
} from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Delhi Nights - Modern Theatre',
    venue: 'Shri Ram Centre for Performing Arts',
    date: '2025-11-25',
    time: '19:30',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop',
    genre: 'Drama',
    price: '₹500 - ₹1,500',
    availableSeats: 45,
    totalSeats: 200,
    description: 'A contemporary adaptation of classic tales set in modern Delhi',
    featured: true,
  },
  {
    id: 2,
    title: 'The Tempest - Shakespeare Reimagined',
    venue: 'Kamani Auditorium',
    date: '2025-11-28',
    time: '18:00',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=600&fit=crop',
    genre: 'Classical',
    price: '₹600 - ₹2,000',
    availableSeats: 78,
    totalSeats: 300,
    description: "Shakespeare's timeless masterpiece with a contemporary twist",
    featured: true,
  },
  {
    id: 3,
    title: 'Stand-Up Comedy Night',
    venue: 'Canvas Laugh Club',
    date: '2025-12-01',
    time: '20:00',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=600&fit=crop',
    genre: 'Comedy',
    price: '₹300 - ₹800',
    availableSeats: 25,
    totalSeats: 150,
    description: "An evening of laughter with Delhi's best comedians",
    featured: false,
  },
  {
    id: 4,
    title: 'Classical Music Concert',
    venue: 'India Habitat Centre',
    date: '2025-12-05',
    time: '19:00',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop',
    genre: 'Music',
    price: '₹700 - ₹2,500',
    availableSeats: 120,
    totalSeats: 250,
    description: 'An enchanting evening of Hindustani classical music',
    featured: false,
  },
  {
    id: 5,
    title: 'Kathak Dance Performance',
    venue: 'Triveni Kala Sangam',
    date: '2025-12-08',
    time: '18:30',
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&h=600&fit=crop',
    genre: 'Dance',
    price: '₹400 - ₹1,200',
    availableSeats: 60,
    totalSeats: 180,
    description: 'Traditional Kathak performance by renowned artists',
    featured: false,
  },
];

export default function BookingPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const genres = ['all', 'Drama', 'Classical', 'Comedy', 'Music', 'Dance'];

  const filteredEvents = events.filter(
    (event) => selectedGenre === 'all' || event.genre === selectedGenre
  );

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-cyan mb-2">
            Events & Tickets
          </h1>
          <p className="text-text-muted">Book tickets for upcoming theatre performances and events</p>
        </motion.div>

        {/* Genre filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-neon-pink" />
            <h3 className="font-medium text-white">Filter by Genre</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {genres.map((genre) => (
              <motion.button
                key={genre}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full border-2 font-medium whitespace-nowrap transition-all ${
                  selectedGenre === genre
                    ? 'border-neon-cyan bg-neon-cyan/20 text-neon-cyan'
                    : 'border-neon-cyan/20 text-text-muted hover:border-neon-cyan/50'
                }`}
              >
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-neon-gold" />
            <h2 className="text-2xl font-bold font-vietnam text-white">Featured Events</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents
              .filter((e) => e.featured)
              .map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/booking/${event.id}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card-featured cursor-pointer overflow-hidden"
                    >
                      {/* Event image */}
                      <div className="relative h-64 -m-4 mb-4">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${event.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />

                        {/* Genre badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-bold text-neon-lime border border-neon-lime/30">
                          {event.genre}
                        </div>

                        {/* Action buttons */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <button className="p-2 rounded-full glass hover:bg-neon-pink/20 transition-colors">
                            <Heart className="w-5 h-5 text-white" />
                          </button>
                          <button className="p-2 rounded-full glass hover:bg-neon-cyan/20 transition-colors">
                            <Share2 className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>

                      {/* Event details */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-text-muted">{event.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-text-muted">
                            <Calendar className="w-4 h-4 text-neon-pink" />
                            <span>
                              {new Date(event.date).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-text-muted">
                            <Clock className="w-4 h-4 text-neon-cyan" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-text-muted col-span-2">
                            <MapPin className="w-4 h-4 text-neon-lime" />
                            <span className="truncate">{event.venue}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-neon-cyan/20">
                          <div>
                            <div className="text-xs text-text-muted mb-1">Starting from</div>
                            <div className="text-2xl font-bold text-neon-gold">{event.price.split(' - ')[0]}</div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                              <Ticket className="w-4 h-4 text-neon-pink" />
                              <span>{event.availableSeats} seats left</span>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="btn-primary"
                            >
                              Book Now
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-neon-cyan" />
            <h2 className="text-2xl font-bold font-vietnam text-white">All Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/booking/${event.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card cursor-pointer h-full"
                  >
                    {/* Event image */}
                    <div className="relative h-48 -m-4 mb-4 rounded-t-xl overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${event.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full glass text-xs font-bold text-neon-lime border border-neon-lime/30">
                        {event.genre}
                      </div>
                    </div>

                    {/* Event details */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-white group-hover:text-neon-cyan transition-colors">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-sm text-text-muted">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-neon-pink" />
                          <span>{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-neon-cyan" />
                          <span className="truncate">{event.venue}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-neon-cyan/20">
                        <div className="text-lg font-bold text-neon-gold">
                          {event.price.split(' - ')[0]}
                        </div>
                        <div className="text-xs text-text-muted">
                          {event.availableSeats} seats
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card text-center py-12"
          >
            <Calendar className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No events found</h3>
            <p className="text-text-muted">Try selecting a different genre</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
