'use client';

import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageSquare, Eye } from 'lucide-react';
import { useState } from 'react';

const applicants = [
  { id: 1, name: 'Priya Sharma', role: 'Lead Role', rating: 4.8, experience: '5 years', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', status: 'pending' },
  { id: 2, name: 'Amit Patel', role: 'Supporting', rating: 4.6, experience: '3 years', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', status: 'pending' },
  { id: 3, name: 'Neha Singh', role: 'Lead Role', rating: 4.9, experience: '7 years', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', status: 'pending' },
];

export default function ApplicationReviewPage() {
  const [selectedApplicants, setSelectedApplicants] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelectedApplicants(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
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
          <h1 className="text-4xl font-bold font-vietnam neon-text-pink mb-2">
            Review Applications
          </h1>
          <p className="text-text-muted">
            Review and shortlist applicants for Hamlet - Lead Role
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="card text-center">
            <div className="text-3xl font-bold text-neon-pink mb-1">{applicants.length}</div>
            <div className="text-sm text-text-muted">Total Applications</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-1">{selectedApplicants.length}</div>
            <div className="text-sm text-text-muted">Shortlisted</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-neon-lime mb-1">2</div>
            <div className="text-sm text-text-muted">Reviewed</div>
          </div>
        </div>

        {/* Applicants List */}
        <div className="space-y-4">
          {applicants.map((applicant, index) => (
            <motion.div
              key={applicant.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card-featured ${selectedApplicants.includes(applicant.id) ? 'border-neon-lime border-2' : ''}`}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Profile */}
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-neon-pink flex-shrink-0"
                    style={{ backgroundImage: `url(${applicant.image})` }}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{applicant.name}</h3>
                    <p className="text-text-muted mb-2">{applicant.role}</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                        <span className="text-white">{applicant.rating}</span>
                      </div>
                      <span className="text-text-muted">•</span>
                      <span className="text-text-muted">{applicant.experience} experience</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <button className="btn-outline text-sm py-2 flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Profile
                  </button>
                  <button className="btn-outline text-sm py-2 flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </button>
                  <button
                    onClick={() => toggleSelect(applicant.id)}
                    className={`text-sm py-2 px-4 rounded-full font-bold transition-all ${
                      selectedApplicants.includes(applicant.id)
                        ? 'bg-neon-lime text-dark-bg'
                        : 'bg-neon-pink text-white hover:neon-glow-pink'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4 inline mr-1" />
                    {selectedApplicants.includes(applicant.id) ? 'Shortlisted' : 'Shortlist'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Actions */}
        {selectedApplicants.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="glass-dark border border-neon-lime/30 rounded-full px-6 py-4 flex items-center gap-4">
              <span className="text-white font-medium">
                {selectedApplicants.length} selected
              </span>
              <button className="btn-primary">
                Send to Next Round
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
