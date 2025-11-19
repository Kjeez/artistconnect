'use client';

import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Calendar, Star, Users, Briefcase, BookOpen } from 'lucide-react';
import { useState } from 'react';

const searchResults = {
  people: [
    {
      id: 1,
      name: 'Ananya Verma',
      role: 'Theatre Director',
      location: 'Mumbai',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Film Producer',
      location: 'Delhi',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
  ],
  opportunities: [
    {
      id: 1,
      title: 'Lead Actor - Hamlet Modern',
      company: 'Prithvi Theatre',
      location: 'Mumbai',
      type: 'Theatre',
      deadline: '2025-12-15',
      applicants: 45,
    },
    {
      id: 2,
      title: 'Choreographer - Music Video',
      company: 'Studio Productions',
      location: 'Bangalore',
      type: 'Dance',
      deadline: '2025-11-30',
      applicants: 23,
    },
  ],
  events: [
    {
      id: 1,
      title: 'Classical Music Festival',
      venue: 'NCPA Mumbai',
      date: '2025-12-20',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'Theatre Workshop Weekend',
      venue: 'Delhi Theatre Hub',
      date: '2025-11-28',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=300&h=200&fit=crop',
    },
  ],
  scripts: [
    {
      id: 1,
      title: 'Urban Stories',
      author: 'Priya Malhotra',
      price: 599,
      rating: 4.7,
      downloads: 234,
    },
    {
      id: 2,
      title: 'Comedy of Errors - Modern',
      author: 'Vikram Singh',
      price: 799,
      rating: 4.9,
      downloads: 456,
    },
  ],
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState<'all' | 'people' | 'opportunities' | 'events' | 'scripts'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const resultCounts = {
    all: searchResults.people.length + searchResults.opportunities.length + searchResults.events.length + searchResults.scripts.length,
    people: searchResults.people.length,
    opportunities: searchResults.opportunities.length,
    events: searchResults.events.length,
    scripts: searchResults.scripts.length,
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
          <h1 className="text-4xl font-bold font-vietnam mb-6">
            <span className="neon-text-pink">Search</span>{' '}
            <span className="neon-text-cyan">Results</span>
          </h1>

          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for people, opportunities, events, scripts..."
                className="input-field pl-12 text-lg"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`btn-outline px-6 ${showFilters ? 'bg-neon-pink text-white' : ''}`}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="card-featured mb-6"
          >
            <h3 className="text-white font-medium mb-4">Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-text-muted text-sm mb-2 block">Location</label>
                <input type="text" placeholder="City or region" className="input-field" />
              </div>
              <div>
                <label className="text-text-muted text-sm mb-2 block">Category</label>
                <select className="input-field">
                  <option>All Categories</option>
                  <option>Acting</option>
                  <option>Dance</option>
                  <option>Music</option>
                </select>
              </div>
              <div>
                <label className="text-text-muted text-sm mb-2 block">Sort By</label>
                <select className="input-field">
                  <option>Most Relevant</option>
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {(['all', 'people', 'opportunities', 'events', 'scripts'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all capitalize whitespace-nowrap ${
                selectedTab === tab
                  ? 'bg-neon-pink text-white'
                  : 'bg-input-bg text-text-muted hover:text-white'
              }`}
            >
              {tab} ({resultCounts[tab]})
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-8">
          {/* People */}
          {(selectedTab === 'all' || selectedTab === 'people') && searchResults.people.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-neon-pink" />
                People
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.people.map((person) => (
                  <div key={person.id} className="card flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-neon-pink flex-shrink-0"
                      style={{ backgroundImage: `url(${person.avatar})` }}
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-bold mb-1">{person.name}</h3>
                      <p className="text-text-muted text-sm mb-2">{person.role}</p>
                      <div className="flex items-center gap-3 text-xs text-text-muted">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {person.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-neon-gold fill-neon-gold" />
                          {person.rating}
                        </div>
                      </div>
                    </div>
                    <button className="btn-primary text-sm py-2 px-4">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Opportunities */}
          {(selectedTab === 'all' || selectedTab === 'opportunities') && searchResults.opportunities.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-neon-cyan" />
                Opportunities
              </h2>
              <div className="space-y-4">
                {searchResults.opportunities.map((opp) => (
                  <div key={opp.id} className="card-featured">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{opp.title}</h3>
                        <p className="text-text-muted text-sm">{opp.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-bold border border-neon-cyan/30">
                        {opp.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {opp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Deadline: {new Date(opp.deadline).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {opp.applicants} applicants
                      </div>
                    </div>
                    <button className="btn-primary text-sm">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Events */}
          {(selectedTab === 'all' || selectedTab === 'events') && searchResults.events.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-neon-lime" />
                Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {searchResults.events.map((event) => (
                  <div key={event.id} className="card">
                    <div
                      className="h-40 rounded-lg bg-cover bg-center mb-4"
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.venue}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                        })}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-neon-pink">
                        ₹{event.price.toLocaleString()}
                      </span>
                      <button className="btn-primary text-sm">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Scripts */}
          {(selectedTab === 'all' || selectedTab === 'scripts') && searchResults.scripts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-neon-gold" />
                Scripts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.scripts.map((script) => (
                  <div key={script.id} className="card-featured">
                    <h3 className="text-lg font-bold text-white mb-2">{script.title}</h3>
                    <p className="text-text-muted text-sm mb-4">by {script.author}</p>
                    <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                        {script.rating}
                      </div>
                      <div>{script.downloads} downloads</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-neon-pink">
                        ₹{script.price}
                      </span>
                      <button className="btn-primary text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
