'use client';

import { motion } from 'framer-motion';
import { Star, ThumbsUp, Flag, Filter, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    reviewer: 'Ananya Verma',
    role: 'Theatre Director',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    rating: 5,
    date: '2024-11-15',
    project: 'Hamlet - Modern Retelling',
    comment: 'Priya was absolutely phenomenal in her performance. Her dedication, professionalism, and talent truly elevated our production. She brought incredible depth to her character and was a joy to work with. Highly recommend for any serious theatre project!',
    helpful: 23,
    category: 'performance',
  },
  {
    id: 2,
    reviewer: 'Rajesh Kumar',
    role: 'Film Producer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    date: '2024-11-10',
    project: 'Mumbai Stories',
    comment: 'Outstanding work ethic and exceptional talent. Delivered beyond our expectations and brought authenticity to every scene. Would absolutely work with again!',
    helpful: 18,
    category: 'professionalism',
  },
  {
    id: 3,
    reviewer: 'Meera Patel',
    role: 'Casting Director',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 4,
    date: '2024-11-01',
    project: 'Dance Workshop Series',
    comment: 'Great choreography skills and excellent communication with the team. Very punctual and prepared. The only minor issue was some last-minute scheduling conflicts, but overall a fantastic experience.',
    helpful: 12,
    category: 'collaboration',
  },
  {
    id: 4,
    reviewer: 'Vikram Singh',
    role: 'Event Organizer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    date: '2024-10-25',
    project: 'Cultural Festival 2024',
    comment: 'Priya\'s performance was the highlight of our festival! Professional, talented, and engaging with the audience. Cannot recommend highly enough!',
    helpful: 31,
    category: 'performance',
  },
  {
    id: 5,
    reviewer: 'Sanjana Reddy',
    role: 'Theatre Producer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    rating: 5,
    date: '2024-10-18',
    project: 'Classical Dance Recital',
    comment: 'Mesmerizing performance with perfect technique. Her passion for the art form is evident in every movement. A true professional who goes above and beyond.',
    helpful: 27,
    category: 'performance',
  },
];

const categories = [
  { key: 'all', label: 'All Reviews' },
  { key: 'performance', label: 'Performance' },
  { key: 'professionalism', label: 'Professionalism' },
  { key: 'collaboration', label: 'Collaboration' },
];

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filteredReviews = selectedCategory === 'all'
    ? reviews
    : reviews.filter(r => r.category === selectedCategory);

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100,
  }));

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
            <Star className="w-10 h-10 text-neon-gold fill-neon-gold" />
            <span className="neon-text-pink">Reviews</span>{' '}
            <span className="neon-text-cyan">& Ratings</span>
          </h1>
          <p className="text-text-muted">
            See what clients and collaborators are saying
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rating Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-featured sticky top-4"
            >
              <h2 className="text-xl font-bold text-white mb-4">Overall Rating</h2>

              {/* Average Rating */}
              <div className="text-center mb-6 pb-6 border-b border-neon-cyan/20">
                <div className="text-6xl font-bold text-neon-gold mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(averageRating)
                          ? 'text-neon-gold fill-neon-gold'
                          : 'text-text-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-text-muted text-sm">Based on {reviews.length} reviews</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3 mb-6">
                {ratingDistribution.map((dist) => (
                  <div key={dist.rating} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-white text-sm">{dist.rating}</span>
                      <Star className="w-3 h-3 text-neon-gold fill-neon-gold" />
                    </div>
                    <div className="flex-1 h-2 bg-input-bg rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-gold to-neon-lime"
                        style={{ width: `${dist.percentage}%` }}
                      />
                    </div>
                    <span className="text-text-muted text-sm w-8">{dist.count}</span>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="space-y-2 pt-6 border-t border-neon-cyan/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">5-Star Reviews</span>
                  <span className="text-neon-lime font-bold">
                    {Math.round((ratingDistribution[0].count / reviews.length) * 100)}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Verified Reviews</span>
                  <span className="text-white font-bold">{reviews.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Response Rate</span>
                  <span className="text-white font-bold">100%</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            {/* Filters & Sort */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-featured mb-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                        selectedCategory === cat.key
                          ? 'bg-neon-pink text-white'
                          : 'bg-input-bg text-text-muted hover:text-white'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input-field w-full md:w-auto"
                >
                  <option value="recent">Most Recent</option>
                  <option value="helpful">Most Helpful</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                </select>
              </div>
            </motion.div>

            {/* Reviews */}
            <div className="space-y-6">
              {filteredReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card-featured"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0 border-2 border-neon-pink"
                      style={{ backgroundImage: `url(${review.avatar})` }}
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-white font-bold">{review.reviewer}</h3>
                          <p className="text-text-muted text-sm">{review.role}</p>
                        </div>
                        <span className="text-text-muted text-sm">
                          {new Date(review.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-neon-gold fill-neon-gold'
                                : 'text-text-muted'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Project */}
                      <div className="mb-3">
                        <span className="px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan text-xs font-medium border border-neon-cyan/30">
                          {review.project}
                        </span>
                      </div>

                      {/* Comment */}
                      <p className="text-text-light leading-relaxed mb-4">
                        {review.comment}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-4 pt-4 border-t border-neon-cyan/20">
                        <button className="flex items-center gap-2 text-text-muted hover:text-neon-lime transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">Helpful ({review.helpful})</span>
                        </button>
                        <button className="flex items-center gap-2 text-text-muted hover:text-red-400 transition-colors">
                          <Flag className="w-4 h-4" />
                          <span className="text-sm">Report</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <button className="btn-outline">
                Load More Reviews
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
