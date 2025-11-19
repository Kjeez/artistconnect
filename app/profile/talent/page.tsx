'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Briefcase, Award, Calendar, Video, FileText, Download, ExternalLink, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';

const talentProfile = {
  name: 'Priya Sharma',
  role: 'Professional Kathak Dancer & Choreographer',
  location: 'Mumbai, Maharashtra',
  rating: 4.9,
  totalReviews: 156,
  yearsExperience: 12,
  completedProjects: 89,
  responseTime: '2 hours',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  coverImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1200&h=300&fit=crop',
  hourlyRate: '₹5,000',
  availability: 'Available',
};

const portfolio = [
  { id: 1, type: 'video', title: 'Classical Performance at Taj Mahal', thumbnail: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400&h=300&fit=crop', likes: 234 },
  { id: 2, type: 'video', title: 'Bollywood Fusion Dance', thumbnail: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&h=300&fit=crop', likes: 456 },
  { id: 3, type: 'image', title: 'Traditional Costume Showcase', thumbnail: 'https://images.unsplash.com/photo-1583224964785-7e83e0e8b6a7?w=400&h=300&fit=crop', likes: 189 },
  { id: 4, type: 'video', title: 'Contemporary Interpretation', thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=300&fit=crop', likes: 312 },
];

const skills = [
  { name: 'Kathak', level: 95 },
  { name: 'Choreography', level: 90 },
  { name: 'Classical Dance', level: 92 },
  { name: 'Contemporary Fusion', level: 85 },
  { name: 'Stage Performance', level: 88 },
];

const reviews = [
  {
    id: 1,
    author: 'Rajesh Kumar',
    role: 'Film Director',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Absolutely phenomenal talent! Priya brought incredible energy and authenticity to our film project. Her dedication and professionalism are unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    author: 'Ananya Verma',
    role: 'Theatre Producer',
    rating: 5,
    date: '1 month ago',
    comment: 'Working with Priya was a dream! She choreographed our entire production and the audience response was overwhelming. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
  },
];

const credentials = [
  { title: 'Sangeet Natak Akademi Award', year: '2022', icon: Award },
  { title: 'Master in Performing Arts', year: '2015', icon: Award },
  { title: 'Certified Kathak Instructor', year: '2014', icon: Award },
];

export default function TalentProfilePage() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'reviews' | 'about'>('portfolio');

  return (
    <div className="min-h-screen pb-20">
      {/* Cover Image */}
      <div
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${talentProfile.coverImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-bg" />
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="-mt-20 relative z-10"
        >
          <div className="card-featured p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Image */}
              <div
                className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-neon-pink flex-shrink-0"
                style={{ backgroundImage: `url(${talentProfile.image})` }}
              />

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-1">{talentProfile.name}</h1>
                    <p className="text-text-muted mb-2">{talentProfile.role}</p>
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-neon-cyan" />
                        {talentProfile.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                        <span className="text-white font-medium">{talentProfile.rating}</span>
                        <span>({talentProfile.totalReviews})</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-neon-lime/20 text-neon-lime text-sm font-bold border border-neon-lime/30 whitespace-nowrap">
                    {talentProfile.availability}
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: Briefcase, label: 'Projects', value: talentProfile.completedProjects },
                    { icon: Award, label: 'Years Exp.', value: talentProfile.yearsExperience },
                    { icon: Calendar, label: 'Response', value: talentProfile.responseTime },
                    { icon: Star, label: 'Rating', value: talentProfile.rating },
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <stat.icon className="w-5 h-5 text-neon-cyan" />
                      <div>
                        <div className="text-white font-bold">{stat.value}</div>
                        <div className="text-xs text-text-muted">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Hire Now - {talentProfile.hourlyRate}/hr
                  </button>
                  <button className="btn-outline flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    Message
                  </button>
                  <button className="btn-outline px-4">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="btn-outline px-4">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-6 my-8 border-b border-neon-cyan/20">
          {(['portfolio', 'reviews', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 font-medium transition-all capitalize ${
                activeTab === tab
                  ? 'text-neon-pink border-b-2 border-neon-pink'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolio.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="card cursor-pointer group"
                    >
                      <div className="relative mb-3">
                        <div
                          className="h-48 rounded-lg bg-cover bg-center"
                          style={{ backgroundImage: `url(${item.thumbnail})` }}
                        />
                        {item.type === 'video' && (
                          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Video className="w-12 h-12 text-white" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-white font-medium mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-text-muted">
                        <Heart className="w-4 h-4" />
                        {item.likes} likes
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Client Reviews</h2>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="card">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0"
                          style={{ backgroundImage: `url(${review.image})` }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="text-white font-bold">{review.author}</h4>
                              <p className="text-sm text-text-muted">{review.role}</p>
                            </div>
                            <span className="text-sm text-text-muted">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-neon-gold fill-neon-gold" />
                            ))}
                          </div>
                          <p className="text-text-light">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">About</h2>
                <div className="card mb-6">
                  <p className="text-text-light leading-relaxed">
                    Priya Sharma is an acclaimed Kathak dancer and choreographer with over 12 years of professional experience.
                    She has performed at prestigious venues across India and internationally, bringing traditional Indian dance
                    forms to global audiences. Her unique style blends classical techniques with contemporary interpretations,
                    creating mesmerizing performances that resonate with diverse audiences.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Credentials & Awards</h3>
                <div className="space-y-3">
                  {credentials.map((cred, index) => (
                    <div key={index} className="card flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-neon-gold/20 border-2 border-neon-gold flex items-center justify-center flex-shrink-0">
                        <cred.icon className="w-6 h-6 text-neon-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{cred.title}</h4>
                        <p className="text-sm text-text-muted">{cred.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm">{skill.name}</span>
                      <span className="text-neon-cyan text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-neon-pink to-neon-cyan"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4">Documents</h3>
              <div className="space-y-2">
                {['Resume.pdf', 'Portfolio.pdf', 'Certificates.pdf'].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-input-bg hover:bg-input-bg/50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-neon-cyan" />
                      <span className="text-white text-sm">{doc}</span>
                    </div>
                    <Download className="w-4 h-4 text-neon-pink" />
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4">Links</h3>
              <div className="space-y-2">
                {['Website', 'Instagram', 'YouTube'].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-between p-3 rounded-lg bg-input-bg hover:bg-input-bg/50 transition-colors"
                  >
                    <span className="text-white text-sm">{link}</span>
                    <ExternalLink className="w-4 h-4 text-neon-cyan" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
