'use client';

import { motion } from 'framer-motion';
import { BookOpen, Play, Clock, Award, Users, Star, CheckCircle, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    title: 'Method Acting Masterclass',
    instructor: 'Dr. Ananya Sharma',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=250&fit=crop',
    duration: '8 weeks',
    lessons: 24,
    students: 1234,
    rating: 4.9,
    reviews: 456,
    price: 4999,
    level: 'Advanced',
    enrolled: false,
    progress: 0,
    category: 'Acting',
  },
  {
    id: 2,
    title: 'Voice Training for Theatre',
    instructor: 'Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop',
    duration: '6 weeks',
    lessons: 18,
    students: 892,
    rating: 4.8,
    reviews: 234,
    price: 3499,
    level: 'Intermediate',
    enrolled: true,
    progress: 45,
    category: 'Voice',
  },
  {
    id: 3,
    title: 'Classical Kathak Fundamentals',
    instructor: 'Priya Malhotra',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400&h=250&fit=crop',
    duration: '12 weeks',
    lessons: 36,
    students: 567,
    rating: 5.0,
    reviews: 189,
    price: 5999,
    level: 'Beginner',
    enrolled: true,
    progress: 72,
    category: 'Dance',
  },
  {
    id: 4,
    title: 'Improv & Spontaneity',
    instructor: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400&h=250&fit=crop',
    duration: '4 weeks',
    lessons: 12,
    students: 1456,
    rating: 4.7,
    reviews: 567,
    price: 2499,
    level: 'Beginner',
    enrolled: false,
    progress: 0,
    category: 'Acting',
  },
];

const myLearning = courses.filter(c => c.enrolled);
const availableCourses = courses.filter(c => !c.enrolled);

export default function LearningCoursesPage() {
  const [selectedTab, setSelectedTab] = useState<'my-courses' | 'explore'>('my-courses');

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
            <span className="neon-text-pink">Learning</span>{' '}
            <span className="neon-text-cyan">Center</span>
          </h1>
          <p className="text-text-muted">
            Advance your skills with expert-led courses
          </p>
        </motion.div>

        {/* Stats */}
        {myLearning.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Enrolled', value: myLearning.length, icon: BookOpen, color: 'neon-pink' },
              { label: 'Completed', value: myLearning.filter(c => c.progress === 100).length, icon: CheckCircle, color: 'neon-lime' },
              { label: 'In Progress', value: myLearning.filter(c => c.progress > 0 && c.progress < 100).length, icon: TrendingUp, color: 'neon-cyan' },
              { label: 'Certificates', value: '2', icon: Award, color: 'neon-gold' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <stat.icon className={`w-6 h-6 text-${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-neon-cyan/20">
          <button
            onClick={() => setSelectedTab('my-courses')}
            className={`pb-3 px-4 font-medium transition-all ${
              selectedTab === 'my-courses'
                ? 'text-neon-pink border-b-2 border-neon-pink'
                : 'text-text-muted hover:text-white'
            }`}
          >
            My Courses ({myLearning.length})
          </button>
          <button
            onClick={() => setSelectedTab('explore')}
            className={`pb-3 px-4 font-medium transition-all ${
              selectedTab === 'explore'
                ? 'text-neon-pink border-b-2 border-neon-pink'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Explore Courses
          </button>
        </div>

        {/* My Courses Tab */}
        {selectedTab === 'my-courses' && (
          <div className="space-y-6">
            {myLearning.length === 0 ? (
              <div className="card-featured text-center py-16">
                <BookOpen className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No Enrolled Courses</h3>
                <p className="text-text-muted mb-6">
                  Start learning today! Explore our course catalog to find the perfect fit.
                </p>
                <button
                  onClick={() => setSelectedTab('explore')}
                  className="btn-primary"
                >
                  Explore Courses
                </button>
              </div>
            ) : (
              myLearning.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-featured overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div
                      className="w-full md:w-64 h-40 bg-cover bg-center flex-shrink-0 rounded-lg"
                      style={{ backgroundImage: `url(${course.image})` }}
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                          <p className="text-text-muted text-sm">by {course.instructor}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full bg-${getLevelColor(course.level)}/20 text-${getLevelColor(course.level)} text-xs font-bold border border-${getLevelColor(course.level)}/30`}>
                          {course.level}
                        </span>
                      </div>

                      {/* Progress */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-text-muted">Progress</span>
                          <span className="text-sm text-neon-lime font-bold">{course.progress}%</span>
                        </div>
                        <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-neon-pink to-neon-lime"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          {course.lessons} lessons
                        </div>
                      </div>

                      <button className="btn-primary">
                        {course.progress === 0 ? 'Start Learning' : 'Continue Learning'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Explore Courses Tab */}
        {selectedTab === 'explore' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card cursor-pointer"
              >
                <div
                  className="h-40 rounded-lg bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                  <span className={`px-2 py-1 rounded-full bg-${getLevelColor(course.level)}/20 text-${getLevelColor(course.level)} text-xs font-bold border border-${getLevelColor(course.level)}/30`}>
                    {course.level}
                  </span>
                </div>
                <p className="text-text-muted text-sm mb-3">by {course.instructor}</p>

                <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-neon-gold fill-neon-gold" />
                    {course.rating} ({course.reviews})
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {course.lessons} lessons
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neon-cyan/20">
                  <div>
                    <span className="text-2xl font-bold text-neon-pink">₹{course.price.toLocaleString()}</span>
                  </div>
                  <button className="btn-primary text-sm">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
