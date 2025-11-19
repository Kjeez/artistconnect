'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const onboardingSteps = [
  {
    title: 'Discover the best theatre events in Delhi-NCR',
    description: 'Explore a wide range of plays, workshops, and performances happening near you.',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop',
  },
  {
    title: 'Explore a vast library of scripts',
    description: 'Access a diverse collection of scripts from classic plays to contemporary works.',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=600&fit=crop',
  },
  {
    title: 'Create your personalized profile',
    description: 'Showcase your skills, connect with other artists, and manage your bookings.',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&h=600&fit=crop',
  },
  {
    title: 'Customize your notifications',
    description: 'Choose which types of notifications you want to receive.',
    image: null,
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [notifications, setNotifications] = useState({
    events: true,
    community: true,
    bookings: true,
  });

  const goToNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToSkip = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-bg">
      {/* Hero Image */}
      {currentStep < 3 && onboardingSteps[currentStep].image && (
        <div className="relative h-64">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${onboardingSteps[currentStep].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between px-6 -mt-10 relative z-10">
        <div>
          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentStep ? 'w-8 bg-neon-pink' : 'w-2 bg-surface-bg'
                }`}
              />
            ))}
          </div>

          {/* Title & Description */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {onboardingSteps[currentStep].title}
            </h2>
            <p className="text-text-muted text-lg">
              {onboardingSteps[currentStep].description}
            </p>
          </motion.div>

          {/* Notification Settings (Step 4) */}
          {currentStep === 3 && (
            <div className="space-y-4 mb-8">
              {[
                { key: 'events', label: 'New event announcements' },
                { key: 'community', label: 'Community updates' },
                { key: 'bookings', label: 'Booking reminders' },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center gap-4 p-4 rounded-lg bg-surface-bg border border-input-bg cursor-pointer hover:border-neon-pink transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={notifications[item.key as keyof typeof notifications]}
                    onChange={() =>
                      setNotifications({
                        ...notifications,
                        [item.key]: !notifications[item.key as keyof typeof notifications],
                      })
                    }
                    className="w-6 h-6 rounded border-2 border-text-muted bg-transparent text-neon-pink focus:ring-2 focus:ring-neon-pink"
                  />
                  <span className="text-white font-medium">{item.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="pb-8">
          {currentStep < 3 ? (
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={goToSkip}
                className="text-text-muted font-medium text-lg hover:text-neon-cyan transition-colors"
              >
                Skip
              </button>
              <motion.button
                onClick={goToNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          ) : (
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                Get Started
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
