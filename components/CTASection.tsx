'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-stage opacity-10" />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-neon-pink rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark rounded-3xl p-8 md:p-12 border border-neon-pink/30 text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="inline-flex p-4 rounded-full bg-gradient-purple-pink mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold font-vietnam mb-4">
            <span className="neon-text-pink">Ready to</span>
            <br />
            <span className="neon-text-cyan">Transform Your Career?</span>
          </h2>

          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Join TheatreConnect today and get access to exclusive opportunities,
            AI-powered tools, and a vibrant community of artists.
          </p>

          {/* Sign up form */}
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="input flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-lg bg-neon-lime/20 border border-neon-lime text-neon-lime font-semibold"
            >
              ✓ Thanks! We'll be in touch soon.
            </motion.div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-neon-cyan/20">
            {[
              { label: 'Free Forever', sublabel: 'Basic Plan' },
              { label: 'Premium from ₹499', sublabel: 'Advanced Features' },
              { label: '24/7 Support', sublabel: 'Always Here' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-sm md:text-base font-bold text-neon-cyan">
                  {item.label}
                </div>
                <div className="text-xs text-text-muted mt-1">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
