'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, DollarSign, Star, BookOpen } from 'lucide-react';
import { useState } from 'react';

const workshops = [
  {
    id: 1,
    title: 'Method Acting Intensive',
    instructor: 'Dr. Ananya Sharma',
    instructorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=250&fit=crop',
    date: '2025-12-01',
    time: '10:00 AM - 4:00 PM',
    duration: '6 hours',
    location: 'Prithvi Theatre, Mumbai',
    price: 2999,
    seats: 20,
    seatsLeft: 5,
    level: 'Advanced',
    rating: 4.9,
    reviews: 87,
    category: 'Acting',
    description: 'Intensive workshop exploring Stanislavski\'s method and contemporary acting techniques.',
  },
  {
    id: 2,
    title: 'Kathak Dance Fundamentals',
    instructor: 'Priya Malhotra',
    instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400&h=250&fit=crop',
    date: '2025-11-28',
    time: '9:00 AM - 1:00 PM',
    duration: '4 hours',
    location: 'Dance Academy, Delhi',
    price: 1999,
    seats: 25,
    seatsLeft: 12,
    level: 'Beginner',
    rating: 5.0,
    reviews: 124,
    category: 'Dance',
    description: 'Learn the basics of Kathak dance including footwork, spins, and hand gestures.',
  },
  {
    id: 3,
    title: 'Voice & Speech for Stage',
    instructor: 'Rajesh Kumar',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop',
    date: '2025-11-30',
    time: '2:00 PM - 6:00 PM',
    duration: '4 hours',
    location: 'NCPA, Mumbai',
    price: 2499,
    seats: 15,
    seatsLeft: 3,
    level: 'Intermediate',
    rating: 4.8,
    reviews: 65,
    category: 'Voice',
    description: 'Master vocal projection, articulation, and breathing techniques for theatre performance.',
  },
  {
    id: 4,
    title: 'Improv Comedy Bootcamp',
    instructor: 'Vikram Singh',
    instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400&h=250&fit=crop',
    date: '2025-12-05',
    time: '6:00 PM - 9:00 PM',
    duration: '3 hours',
    location: 'Canvas Laugh Club, Bangalore',
    price: 1499,
    seats: 30,
    seatsLeft: 18,
    level: 'Beginner',
    rating: 4.7,
    reviews: 92,
    category: 'Comedy',
    description: 'Learn the fundamentals of improvisational comedy and spontaneous performance.',
  },
];

const categories = ['All', 'Acting', 'Dance', 'Voice', 'Comedy', 'Directing'];

export default function WorkshopsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredWorkshops = workshops.filter(w => {
    const categoryMatch = selectedCategory === 'All' || w.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || w.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'neon-lime';
      case 'Intermediate':
        return 'neon-cyan';
      case 'Advanced':
        return 'neon-pink';
      default:
        return 'neon-gold';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam mb-2 flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-neon-pink" />
            <span className="neon-text-pink">Workshops</span>{' '}
            <span className="neon-text-cyan">& Training</span>
          </h1>
          <p className="text-text-muted">
            Enhance your skills with hands-on workshops from industry experts
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Workshops', value: '50+', color: 'neon-pink' },
            { label: 'Expert Instructors', value: '35+', color: 'neon-cyan' },
            { label: 'Students Trained', value: '2,500+', color: 'neon-lime' },
            { label: 'Cities', value: '12', color: 'neon-gold' },
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-featured mb-8"
        >
          <h3 className="text-white font-medium mb-4">Filter Workshops</h3>

          <div className="mb-4">
            <label className="text-text-muted text-sm mb-2 block">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === cat
                      ? 'bg-neon-pink text-white'
                      : 'bg-input-bg text-text-muted hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-text-muted text-sm mb-2 block">Level</label>
            <div className="flex flex-wrap gap-2">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedLevel === level
                      ? 'bg-neon-cyan text-white'
                      : 'bg-input-bg text-text-muted hover:text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredWorkshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card cursor-pointer"
            >
              {/* Image */}
              <div
                className="h-48 rounded-lg bg-cover bg-center mb-4 relative"
                style={{ backgroundImage: `url(${workshop.image})` }}
              >
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full bg-${getLevelColor(workshop.level)}/90 text-white text-xs font-bold`}>
                    {workshop.level}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-bold">
                    {workshop.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{workshop.title}</h3>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-full bg-cover bg-center border-2 border-neon-pink"
                    style={{ backgroundImage: `url(${workshop.instructorImage})` }}
                  />
                  <span className="text-text-muted text-sm">by {workshop.instructor}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                    <span className="text-white font-medium text-sm">{workshop.rating}</span>
                    <span className="text-text-muted text-sm">({workshop.reviews})</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-light text-sm mb-4">{workshop.description}</p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Calendar className="w-4 h-4 text-neon-pink" />
                    {new Date(workshop.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <Clock className="w-4 h-4 text-neon-cyan" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <MapPin className="w-4 h-4 text-neon-lime" />
                    {workshop.location.split(',')[0]}
                  </div>
                  <div className="flex items-center gap-2 text-text-muted">
                    <Users className="w-4 h-4 text-neon-gold" />
                    {workshop.seatsLeft} seats left
                  </div>
                </div>

                {/* Seats Progress */}
                <div className="mb-4">
                  <div className="h-1.5 bg-input-bg rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        workshop.seatsLeft < 5
                          ? 'bg-red-500'
                          : 'bg-gradient-to-r from-neon-pink to-neon-lime'
                      }`}
                      style={{ width: `${((workshop.seats - workshop.seatsLeft) / workshop.seats) * 100}%` }}
                    />
                  </div>
                  {workshop.seatsLeft < 5 && (
                    <p className="text-red-400 text-xs mt-1">Filling fast!</p>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-neon-cyan/20">
                  <div>
                    <div className="text-2xl font-bold text-neon-pink">
                      ₹{workshop.price.toLocaleString()}
                    </div>
                    <div className="text-xs text-text-muted">per person</div>
                  </div>
                  <button className="btn-primary text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorkshops.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card-featured text-center py-16"
          >
            <BookOpen className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No Workshops Found</h3>
            <p className="text-text-muted mb-6">
              Try adjusting your filters to see more workshops
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
              }}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
