'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Zap, TrendingUp, Lock } from 'lucide-react';
import { useState } from 'react';

const achievements = [
  {
    id: 1,
    title: 'First Performance',
    description: 'Complete your first live performance',
    icon: Star,
    color: 'neon-gold',
    points: 100,
    unlocked: true,
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Rising Star',
    description: 'Receive 50+ five-star reviews',
    icon: TrendingUp,
    color: 'neon-pink',
    points: 250,
    unlocked: true,
    date: '2024-06-20',
  },
  {
    id: 3,
    title: 'Workshop Master',
    description: 'Complete 10 workshops',
    icon: Award,
    color: 'neon-cyan',
    points: 200,
    unlocked: true,
    date: '2024-08-10',
  },
  {
    id: 4,
    title: 'Collaboration King',
    description: 'Successfully complete 5 team projects',
    icon: Target,
    color: 'neon-lime',
    points: 300,
    unlocked: true,
    date: '2024-10-05',
  },
  {
    id: 5,
    title: 'Audience Favorite',
    description: 'Get 1000+ profile views in a month',
    icon: Zap,
    color: 'neon-pink',
    points: 150,
    unlocked: false,
    progress: 78,
  },
  {
    id: 6,
    title: 'Master Performer',
    description: 'Complete 50 live performances',
    icon: Trophy,
    color: 'neon-gold',
    points: 500,
    unlocked: false,
    progress: 42,
  },
  {
    id: 7,
    title: 'Networking Pro',
    description: 'Connect with 100+ professionals',
    icon: Target,
    color: 'neon-cyan',
    points: 200,
    unlocked: false,
    progress: 65,
  },
  {
    id: 8,
    title: 'Content Creator',
    description: 'Upload 25 portfolio items',
    icon: Star,
    color: 'neon-lime',
    points: 150,
    unlocked: false,
    progress: 56,
  },
];

const milestones = [
  { level: 1, name: 'Beginner', minPoints: 0, color: 'neon-lime' },
  { level: 2, name: 'Novice', minPoints: 500, color: 'neon-cyan' },
  { level: 3, name: 'Intermediate', minPoints: 1000, color: 'neon-pink' },
  { level: 4, name: 'Advanced', minPoints: 2000, color: 'neon-gold' },
  { level: 5, name: 'Expert', minPoints: 5000, color: 'neon-gold' },
];

export default function AchievementsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0);
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  const currentLevel = milestones.reduce((level, milestone) => {
    return totalPoints >= milestone.minPoints ? milestone : level;
  }, milestones[0]);

  const nextLevel = milestones.find(m => m.minPoints > totalPoints) || milestones[milestones.length - 1];
  const progressToNext = nextLevel ? ((totalPoints - currentLevel.minPoints) / (nextLevel.minPoints - currentLevel.minPoints)) * 100 : 100;

  const filteredAchievements = selectedFilter === 'all'
    ? achievements
    : selectedFilter === 'unlocked'
    ? achievements.filter(a => a.unlocked)
    : achievements.filter(a => !a.unlocked);

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
            <Trophy className="w-10 h-10 text-neon-gold" />
            <span className="neon-text-pink">Achievements</span>{' '}
            <span className="neon-text-cyan">& Badges</span>
          </h1>
          <p className="text-text-muted">
            Track your progress and unlock rewards
          </p>
        </motion.div>

        {/* Level Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-featured p-8 mb-8 bg-gradient-to-br from-neon-pink/20 via-neon-cyan/20 to-neon-gold/20"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className={`w-24 h-24 rounded-full bg-${currentLevel.color}/20 border-4 border-${currentLevel.color} flex items-center justify-center flex-shrink-0`}>
              <span className={`text-4xl font-bold text-${currentLevel.color}`}>
                {currentLevel.level}
              </span>
            </div>
            <div className="flex-1">
              <h2 className={`text-3xl font-bold text-${currentLevel.color} mb-2`}>
                {currentLevel.name}
              </h2>
              <p className="text-text-light mb-4">
                {totalPoints.toLocaleString()} points • Level {currentLevel.level}
              </p>
              <div className="mb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-text-muted">
                    Progress to {nextLevel.name}
                  </span>
                  <span className="text-sm text-white font-bold">
                    {totalPoints}/{nextLevel.minPoints} pts
                  </span>
                </div>
                <div className="h-3 bg-input-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-gold"
                    style={{ width: `${Math.min(progressToNext, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neon-cyan/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-lime mb-1">{unlockedCount}</div>
              <div className="text-sm text-text-muted">Unlocked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-1">{achievements.length - unlockedCount}</div>
              <div className="text-sm text-text-muted">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-gold mb-1">{totalPoints}</div>
              <div className="text-sm text-text-muted">Total Points</div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          {['all', 'unlocked', 'locked'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all capitalize ${
                selectedFilter === filter
                  ? 'bg-neon-pink text-white'
                  : 'bg-input-bg text-text-muted hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`card relative ${!achievement.unlocked && 'opacity-60'}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-full bg-${achievement.color}/20 border-2 border-${achievement.color} flex items-center justify-center mx-auto mb-4`}>
                {achievement.unlocked ? (
                  <achievement.icon className={`w-8 h-8 text-${achievement.color}`} />
                ) : (
                  <Lock className="w-8 h-8 text-text-muted" />
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white text-center mb-2">
                {achievement.title}
              </h3>
              <p className="text-text-muted text-sm text-center mb-4">
                {achievement.description}
              </p>

              {/* Progress or Date */}
              {achievement.unlocked ? (
                <div className="text-center">
                  <div className={`text-2xl font-bold text-${achievement.color} mb-1`}>
                    +{achievement.points}
                  </div>
                  <div className="text-xs text-text-muted">
                    Unlocked on {new Date(achievement.date!).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-muted">Progress</span>
                    <span className="text-sm text-white font-bold">{achievement.progress}%</span>
                  </div>
                  <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${achievement.color}`}
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <div className={`text-center mt-3 text-sm text-${achievement.color} font-bold`}>
                    {achievement.points} points
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Level Milestones</h2>
          <div className="card-featured">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    totalPoints >= milestone.minPoints
                      ? `bg-${milestone.color}/10 border border-${milestone.color}/30`
                      : 'bg-input-bg'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full ${
                    totalPoints >= milestone.minPoints
                      ? `bg-${milestone.color}/20 border-2 border-${milestone.color}`
                      : 'bg-input-bg'
                  } flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-xl font-bold ${
                      totalPoints >= milestone.minPoints
                        ? `text-${milestone.color}`
                        : 'text-text-muted'
                    }`}>
                      {milestone.level}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold ${
                      totalPoints >= milestone.minPoints
                        ? `text-${milestone.color}`
                        : 'text-text-muted'
                    }`}>
                      Level {milestone.level}: {milestone.name}
                    </h4>
                    <p className="text-text-muted text-sm">
                      {milestone.minPoints.toLocaleString()} points required
                    </p>
                  </div>
                  {totalPoints >= milestone.minPoints && (
                    <Trophy className={`w-6 h-6 text-${milestone.color}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
