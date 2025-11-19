'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Phone, ArrowRight, Upload, Sparkles } from 'lucide-react';

const roles = [
  { id: 'artist', label: 'Artist / Performer', desc: 'Actor, Musician, Dancer, Comedian' },
  { id: 'director', label: 'Director / Producer', desc: 'Theatre Director, Producer' },
  { id: 'organizer', label: 'Event Organizer', desc: 'Corporate, Wedding, Festival' },
  { id: 'audience', label: 'Audience / Fan', desc: 'Theatre Enthusiast' },
];

const skills = [
  'Theatre Acting', 'Classical Music', 'Dance', 'Comedy', 'DJ',
  'Anchoring', 'Sitar', 'Tabla', 'Guitar', 'Dhol', 'Singing'
];

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: '',
    skills: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    router.push('/profile');
  };

  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  return (
    <div className="min-h-screen particle-bg flex items-center justify-center px-4 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-purple-900/10 to-dark-bg" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="glass-dark rounded-3xl border border-neon-pink/30 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex p-3 rounded-full bg-gradient-purple-pink mb-4"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold font-vietnam mb-2">
              <span className="neon-text-pink">Join TheatreConnect</span>
            </h1>
            <p className="text-text-muted">Create your account and start your journey</p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  s === step
                    ? 'w-12 bg-neon-pink neon-glow-pink'
                    : s < step
                    ? 'w-8 bg-neon-cyan'
                    : 'w-8 bg-text-muted/30'
                }`}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-2 text-text-light">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input pl-12"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-light">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input pl-12"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-light">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input pl-12"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-light">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="input pl-12"
                      placeholder="Create a strong password"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Role Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-center mb-6">Choose Your Role</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roles.map((role) => (
                    <motion.button
                      key={role.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: role.id })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        formData.role === role.id
                          ? 'border-neon-pink bg-neon-pink/10 neon-glow-pink'
                          : 'border-neon-cyan/20 hover:border-neon-cyan/50'
                      }`}
                    >
                      <div className="font-bold text-white mb-1">{role.label}</div>
                      <div className="text-sm text-text-muted">{role.desc}</div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Skills (for artists) */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-center mb-6">
                  {formData.role === 'artist' ? 'Select Your Skills' : 'Almost Done!'}
                </h3>

                {formData.role === 'artist' ? (
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <motion.button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-full border-2 font-medium transition-all ${
                          formData.skills.includes(skill)
                            ? 'border-neon-cyan bg-neon-cyan/20 text-neon-cyan'
                            : 'border-text-muted/30 text-text-muted hover:border-neon-cyan/50'
                        }`}
                      >
                        {skill}
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <Upload className="w-16 h-16 text-neon-pink mx-auto mb-4" />
                    <p className="text-text-muted">
                      You can complete your profile and add more details after signing up
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Navigation buttons */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline flex-1"
                >
                  Back
                </motion.button>
              )}

              {step < 3 ? (
                <motion.button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                  disabled={step === 2 && !formData.role}
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </form>

          {/* Login link */}
          <div className="mt-6 text-center text-sm text-text-muted">
            Already have an account?{' '}
            <Link href="/login" className="text-neon-cyan hover:text-neon-pink transition-colors font-medium">
              Log in
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
