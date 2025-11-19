'use client';

import { motion } from 'framer-motion';
import { FileText, User, Calendar, MapPin, CheckCircle, XCircle, Clock, Eye } from 'lucide-react';

const applications = [
  {
    id: 1,
    auditionTitle: 'Hamlet - Lead Role',
    production: 'Delhi Theatre Group',
    appliedDate: '2025-11-20',
    status: 'under_review',
    location: 'Shri Ram Centre',
    deadline: '2025-11-25',
    notes: 'Your application is being reviewed by the casting director',
  },
  {
    id: 2,
    auditionTitle: 'Romeo - Romeo & Juliet',
    production: 'Kamani Productions',
    appliedDate: '2025-11-18',
    status: 'shortlisted',
    location: 'Kamani Auditorium',
    deadline: '2025-11-22',
    notes: 'Congratulations! You have been shortlisted for the next round',
  },
  {
    id: 3,
    auditionTitle: 'Classical Musician - Wedding',
    production: 'Sharma Events',
    appliedDate: '2025-11-15',
    status: 'accepted',
    location: 'Taj Palace Hotel',
    deadline: '2025-11-20',
    notes: 'Your application has been accepted! Check your email for next steps',
  },
  {
    id: 4,
    auditionTitle: 'Background Actor - Film',
    production: 'Bollywood Productions',
    appliedDate: '2025-11-10',
    status: 'rejected',
    location: 'Mumbai Film City',
    deadline: '2025-11-12',
    notes: 'Unfortunately, we decided to move forward with other candidates',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'under_review': return { bg: 'bg-neon-cyan/20', text: 'text-neon-cyan', border: 'border-neon-cyan/30', icon: Clock };
    case 'shortlisted': return { bg: 'bg-neon-lime/20', text: 'text-neon-lime', border: 'border-neon-lime/30', icon: CheckCircle };
    case 'accepted': return { bg: 'bg-neon-gold/20', text: 'text-neon-gold', border: 'border-neon-gold/30', icon: CheckCircle };
    case 'rejected': return { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30', icon: XCircle };
    default: return { bg: 'bg-text-muted/20', text: 'text-text-muted', border: 'border-text-muted/30', icon: FileText };
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case 'under_review': return 'Under Review';
    case 'shortlisted': return 'Shortlisted';
    case 'accepted': return 'Accepted';
    case 'rejected': return 'Rejected';
    default: return status;
  }
};

export default function ApplicationsPipelinePage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-pink mb-2 flex items-center gap-3">
            <FileText className="w-10 h-10" />
            My Applications
          </h1>
          <p className="text-text-muted">
            Track all your audition applications in one place
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', value: applications.length, color: 'neon-pink' },
            { label: 'Under Review', value: applications.filter(a => a.status === 'under_review').length, color: 'neon-cyan' },
            { label: 'Shortlisted', value: applications.filter(a => a.status === 'shortlisted').length, color: 'neon-lime' },
            { label: 'Accepted', value: applications.filter(a => a.status === 'accepted').length, color: 'neon-gold' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <div className={`text-3xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((app, index) => {
            const statusConfig = getStatusColor(app.status);
            const StatusIcon = statusConfig.icon;

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card-featured border-l-4 ${statusConfig.border}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{app.auditionTitle}</h3>
                        <p className="text-text-muted">{app.production}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full ${statusConfig.bg} ${statusConfig.text} text-xs font-bold border ${statusConfig.border} flex items-center gap-1 whitespace-nowrap`}>
                        <StatusIcon className="w-3 h-3" />
                        {getStatusLabel(app.status)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-text-muted">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        Applied: {new Date(app.appliedDate).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short'
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <MapPin className="w-4 h-4 text-neon-lime" />
                        {app.location}
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <Clock className="w-4 h-4 text-neon-gold" />
                        Deadline: {new Date(app.deadline).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short'
                        })}
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg ${statusConfig.bg} border ${statusConfig.border}`}>
                      <p className="text-sm text-white">{app.notes}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-2">
                    <button className="btn-outline text-sm py-2 px-4 whitespace-nowrap flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    {app.status === 'shortlisted' && (
                      <button className="btn-primary text-sm py-2 px-4 whitespace-nowrap">
                        Schedule Interview
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State (if needed) */}
        {applications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card-featured p-12 text-center"
          >
            <FileText className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Applications Yet</h3>
            <p className="text-text-muted mb-6">Start applying to auditions to see them here</p>
            <button className="btn-primary">
              Browse Auditions
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
