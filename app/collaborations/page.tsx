'use client';

import { motion } from 'framer-motion';
import { Users, Plus, Calendar, CheckCircle, Clock, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Shakespeare Reimagined',
    type: 'Theatre Production',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=250&fit=crop',
    description: 'A contemporary adaptation of classic Shakespeare plays with a modern Indian context.',
    status: 'in-progress',
    progress: 65,
    members: [
      { name: 'Priya Sharma', role: 'Lead Actress', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop' },
      { name: 'Rajesh Kumar', role: 'Director', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop' },
      { name: 'Ananya Verma', role: 'Producer', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&h=50&fit=crop' },
    ],
    deadline: '2025-01-15',
    tasks: {
      total: 20,
      completed: 13,
    },
  },
  {
    id: 2,
    title: 'Urban Stories Documentary',
    type: 'Film Project',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop',
    description: 'A documentary series exploring untold stories from Mumbai\'s diverse communities.',
    status: 'planning',
    progress: 30,
    members: [
      { name: 'Vikram Singh', role: 'Cinematographer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop' },
      { name: 'Meera Patel', role: 'Researcher', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop' },
    ],
    deadline: '2025-03-01',
    tasks: {
      total: 15,
      completed: 5,
    },
  },
  {
    id: 3,
    title: 'Fusion Dance Show',
    type: 'Live Performance',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400&h=250&fit=crop',
    description: 'Blending classical Kathak with contemporary dance forms for a unique performance.',
    status: 'completed',
    progress: 100,
    members: [
      { name: 'Priya Malhotra', role: 'Choreographer', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop' },
      { name: 'Sanjana Reddy', role: 'Dancer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop' },
    ],
    deadline: '2024-11-20',
    tasks: {
      total: 12,
      completed: 12,
    },
  },
];

const invitations = [
  {
    id: 1,
    project: 'Musical Theatre Workshop Series',
    inviter: 'Ananya Verma',
    role: 'Guest Instructor',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&h=50&fit=crop',
    date: '2 days ago',
  },
  {
    id: 2,
    project: 'Web Series - Delhi Chronicles',
    inviter: 'Rajesh Kumar',
    role: 'Supporting Actor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
    date: '5 days ago',
  },
];

export default function CollaborationsPage() {
  const [selectedTab, setSelectedTab] = useState<'active' | 'completed' | 'invitations'>('active');

  const activeProjects = projects.filter(p => p.status === 'in-progress' || p.status === 'planning');
  const completedProjects = projects.filter(p => p.status === 'completed');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return { bg: 'bg-neon-cyan/20', text: 'text-neon-cyan', border: 'border-neon-cyan/30' };
      case 'planning':
        return { bg: 'bg-neon-lime/20', text: 'text-neon-lime', border: 'border-neon-lime/30' };
      case 'completed':
        return { bg: 'bg-neon-gold/20', text: 'text-neon-gold', border: 'border-neon-gold/30' };
      default:
        return { bg: 'bg-input-bg', text: 'text-text-muted', border: 'border-text-muted/30' };
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
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold font-vietnam mb-2 flex items-center gap-3">
                <Users className="w-10 h-10 text-neon-pink" />
                <span className="neon-text-pink">Team</span>{' '}
                <span className="neon-text-cyan">Collaborations</span>
              </h1>
              <p className="text-text-muted">
                Manage your collaborative projects and team work
              </p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Projects', value: activeProjects.length, color: 'neon-cyan' },
            { label: 'Completed', value: completedProjects.length, color: 'neon-gold' },
            { label: 'Collaborators', value: '12', color: 'neon-lime' },
            { label: 'Invitations', value: invitations.length, color: 'neon-pink' },
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

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-neon-cyan/20">
          {(['active', 'completed', 'invitations'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`pb-3 px-4 font-medium transition-all capitalize ${
                selectedTab === tab
                  ? 'text-neon-pink border-b-2 border-neon-pink'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {tab}
              {tab === 'invitations' && invitations.length > 0 && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-neon-pink text-white text-xs">
                  {invitations.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Projects */}
        {selectedTab === 'active' && (
          <div className="space-y-6">
            {activeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-featured"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div
                    className="w-full md:w-64 h-40 bg-cover bg-center flex-shrink-0 rounded-lg"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-text-muted text-sm">{project.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full ${getStatusColor(project.status).bg} ${getStatusColor(project.status).text} text-xs font-bold border ${getStatusColor(project.status).border} capitalize`}>
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>

                    <p className="text-text-light text-sm mb-4">{project.description}</p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-muted">
                          Progress: {project.tasks.completed}/{project.tasks.total} tasks
                        </span>
                        <span className="text-sm text-neon-lime font-bold">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-neon-pink to-neon-lime"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Team Members */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center -space-x-2">
                        {project.members.map((member, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-cover bg-center border-2 border-dark-bg"
                            style={{ backgroundImage: `url(${member.avatar})` }}
                            title={member.name}
                          />
                        ))}
                      </div>
                      <span className="text-text-muted text-sm">
                        {project.members.length} team members
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-neon-cyan/20">
                      <div className="flex items-center gap-2 text-sm text-text-muted">
                        <Calendar className="w-4 h-4" />
                        Deadline: {new Date(project.deadline).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                      <div className="flex gap-2">
                        <button className="btn-outline text-sm py-2 px-4">
                          <MessageCircle className="w-4 h-4 inline mr-1" />
                          Chat
                        </button>
                        <button className="btn-primary text-sm py-2 px-4">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Completed Projects */}
        {selectedTab === 'completed' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div
                  className="h-40 rounded-lg bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <CheckCircle className="w-5 h-5 text-neon-gold" />
                </div>
                <p className="text-text-muted text-sm mb-4">{project.type}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center -space-x-2">
                    {project.members.map((member, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-cover bg-center border-2 border-dark-bg"
                        style={{ backgroundImage: `url(${member.avatar})` }}
                      />
                    ))}
                  </div>
                  <span className="text-text-muted text-xs">
                    {project.members.length} collaborators
                  </span>
                </div>
                <button className="btn-outline w-full text-sm">
                  View Project
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Invitations */}
        {selectedTab === 'invitations' && (
          <div className="space-y-4">
            {invitations.map((invitation, index) => (
              <motion.div
                key={invitation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-featured"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-neon-pink flex-shrink-0"
                    style={{ backgroundImage: `url(${invitation.avatar})` }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{invitation.project}</h3>
                    <p className="text-text-muted text-sm mb-2">
                      <span className="text-white">{invitation.inviter}</span> invited you as{' '}
                      <span className="text-neon-cyan">{invitation.role}</span>
                    </p>
                    <p className="text-text-muted text-xs">{invitation.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-outline text-sm py-2 px-4">
                      Decline
                    </button>
                    <button className="btn-primary text-sm py-2 px-4">
                      Accept
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
