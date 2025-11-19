'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, FileText, Video, Download } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationDetailsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link href="/applications/pipeline-1">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Applications
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold font-vietnam text-white mb-2">
                Hamlet - Lead Role
              </h1>
              <p className="text-text-muted text-lg">Delhi Theatre Group</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-neon-lime/20 text-neon-lime text-sm font-bold border border-neon-lime/30">
              Shortlisted
            </span>
          </div>
        </motion.div>

        {/* Application Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Application Timeline</h3>
          <div className="space-y-4">
            {[
              { date: 'Nov 20, 2025', status: 'Applied', completed: true },
              { date: 'Nov 22, 2025', status: 'Application Reviewed', completed: true },
              { date: 'Nov 24, 2025', status: 'Shortlisted', completed: true },
              { date: 'Nov 28, 2025', status: 'Interview Scheduled', completed: false },
              { date: 'TBD', status: 'Final Decision', completed: false },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full border-2 ${item.completed ? 'bg-neon-pink border-neon-pink' : 'border-text-muted'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${item.completed ? 'text-white' : 'text-text-muted'}`}>
                      {item.status}
                    </span>
                    <span className="text-sm text-text-muted">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Audition Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-featured p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Audition Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-neon-cyan mt-0.5" />
              <div>
                <div className="text-sm text-text-muted mb-1">Audition Date</div>
                <div className="text-white font-medium">November 28, 2025, 3:00 PM</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-neon-lime mt-0.5" />
              <div>
                <div className="text-sm text-text-muted mb-1">Location</div>
                <div className="text-white font-medium">Shri Ram Centre, Delhi</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-neon-gold mt-0.5" />
              <div>
                <div className="text-sm text-text-muted mb-1">Casting Director</div>
                <div className="text-white font-medium">Rajesh Kumar</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-neon-pink mt-0.5" />
              <div>
                <div className="text-sm text-text-muted mb-1">Application ID</div>
                <div className="text-white font-medium">#APL-2025-001234</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Your Submission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Your Submission</h3>

          {/* Audition Video */}
          <div className="mb-6">
            <h4 className="text-white font-medium mb-3">Audition Video</h4>
            <div className="aspect-video bg-dark-bg rounded-lg flex items-center justify-center relative overflow-hidden border border-neon-cyan/20">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10" />
              <Video className="w-16 h-16 text-white relative z-10" />
            </div>
          </div>

          {/* Portfolio Documents */}
          <div>
            <h4 className="text-white font-medium mb-3">Documents</h4>
            <div className="space-y-2">
              {['Resume.pdf', 'Headshot.jpg', 'Portfolio.pdf'].map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-input-bg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-neon-cyan" />
                    <span className="text-white">{doc}</span>
                  </div>
                  <button className="p-2 rounded-full hover:bg-neon-pink/20 transition-colors">
                    <Download className="w-4 h-4 text-neon-pink" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4"
        >
          <button className="btn-outline flex-1">
            Contact Organizer
          </button>
          <button className="btn-primary flex-1">
            Confirm Attendance
          </button>
        </motion.div>
      </div>
    </div>
  );
}
