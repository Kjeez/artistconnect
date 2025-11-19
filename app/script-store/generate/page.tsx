'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, FileText, Users, Film } from 'lucide-react';

export default function GenerateScriptPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    genre: '',
    characters: '',
    setting: '',
    plotPoints: '',
  });
  const [generating, setGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGenerating(false);
      router.push('/script-store/1');
    }, 3000);
  };

  return (
    <div className="min-h-screen particle-bg flex items-center justify-center px-4 py-12">
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
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold font-vietnam neon-text-pink mb-2">
              AI Script Generator
            </h1>
            <p className="text-text-muted">
              Fill in the details below to generate your custom script
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Genre */}
            <div>
              <label className="block text-base font-medium text-text-light mb-2">
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-neon-pink" />
                  Genre
                </div>
              </label>
              <select
                value={formData.genre}
                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                className="input w-full"
                required
              >
                <option value="">Select Genre</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="tragedy">Tragedy</option>
                <option value="thriller">Thriller</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="musical">Musical</option>
              </select>
            </div>

            {/* Characters */}
            <div>
              <label className="block text-base font-medium text-text-light mb-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-neon-cyan" />
                  Number of Characters
                </div>
              </label>
              <input
                type="number"
                value={formData.characters}
                onChange={(e) => setFormData({ ...formData, characters: e.target.value })}
                className="input w-full"
                placeholder="e.g., 3"
                min="1"
                max="20"
                required
              />
            </div>

            {/* Setting */}
            <div>
              <label className="block text-base font-medium text-text-light mb-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-neon-lime" />
                  Setting
                </div>
              </label>
              <input
                type="text"
                value={formData.setting}
                onChange={(e) => setFormData({ ...formData, setting: e.target.value })}
                className="input w-full"
                placeholder="e.g., A cafe in 1920s Paris"
                required
              />
            </div>

            {/* Plot Points */}
            <div>
              <label className="block text-base font-medium text-text-light mb-2">
                Plot Points / Story Idea
              </label>
              <textarea
                value={formData.plotPoints}
                onChange={(e) => setFormData({ ...formData, plotPoints: e.target.value })}
                className="input w-full min-h-[120px]"
                placeholder="Enter key plot points or a brief summary of your story idea..."
                required
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={generating}
              whileHover={{ scale: generating ? 1 : 1.05 }}
              whileTap={{ scale: generating ? 1 : 0.95 }}
              className={`btn-primary w-full flex items-center justify-center gap-2 ${
                generating ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {generating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  Generating Script...
                </>
              ) : (
                <>
                  Generate Script
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Info */}
          <div className="mt-6 p-4 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5">
            <p className="text-sm text-text-muted">
              💡 <strong className="text-neon-cyan">Pro Tip:</strong> Be specific with your plot
              points to get better results. Include character motivations, conflicts, and themes.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
