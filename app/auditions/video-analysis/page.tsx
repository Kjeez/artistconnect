'use client';

import { motion } from 'framer-motion';
import { Video, Upload, Play, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function VideoAnalysisPage() {
  const [uploadedVideo, setUploadedVideo] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults({
        overall: 85,
        acting: 90,
        voice: 82,
        presence: 88,
        feedback: [
          { type: 'positive', text: 'Excellent emotional range and facial expressions' },
          { type: 'positive', text: 'Strong voice projection and clarity' },
          { type: 'improvement', text: 'Consider varying your pace during monologues' },
          { type: 'improvement', text: 'Body language could be more dynamic in certain scenes' },
        ]
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-vietnam neon-text-pink mb-2 flex items-center gap-3">
            <Video className="w-10 h-10" />
            AI Video Analysis
          </h1>
          <p className="text-text-muted">
            Upload your audition video to get AI-powered feedback on your performance
          </p>
        </motion.div>

        {/* Upload Section */}
        {!uploadedVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-featured p-8"
          >
            <div className="text-center">
              <div className="inline-flex p-6 rounded-full bg-neon-pink/20 mb-6">
                <Upload className="w-12 h-12 text-neon-pink" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Upload Your Audition Video</h3>
              <p className="text-text-muted mb-6 max-w-md mx-auto">
                Our AI will analyze your acting, voice clarity, facial expressions, and overall presence
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => setUploadedVideo(true)}
                  className="btn-primary mx-auto"
                >
                  Choose Video File
                </button>
                <p className="text-xs text-text-muted">
                  Supported formats: MP4, MOV, AVI (Max 100MB)
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Preview */}
        {uploadedVideo && !results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="card-featured p-6">
              <div className="aspect-video bg-dark-bg rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-neon-cyan/10" />
                <Play className="w-20 h-20 text-white relative z-10" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white">audition_video.mp4</h3>
                  <p className="text-sm text-text-muted">Duration: 2:34 • Size: 45MB</p>
                </div>
                <button
                  onClick={() => setUploadedVideo(false)}
                  className="text-neon-pink hover:text-neon-cyan transition-colors text-sm font-medium"
                >
                  Change Video
                </button>
              </div>
            </div>

            <motion.button
              onClick={handleAnalyze}
              disabled={analyzing}
              whileHover={{ scale: analyzing ? 1 : 1.05 }}
              whileTap={{ scale: analyzing ? 1 : 0.95 }}
              className={`btn-primary w-full ${analyzing ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {analyzing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="inline-block mr-2"
                  >
                    ⚙️
                  </motion.div>
                  Analyzing Your Performance...
                </>
              ) : (
                'Analyze Video'
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Results */}
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Overall Score */}
            <div className="card-featured p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Overall Performance Score</h3>
              <div className="relative inline-flex items-center justify-center w-40 h-40">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-input-bg"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - results.overall / 100)}`}
                    className="text-neon-pink"
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold neon-text-pink">{results.overall}</span>
                </div>
              </div>
              <p className="text-text-muted mt-4">Excellent performance! Keep up the great work.</p>
            </div>

            {/* Detailed Scores */}
            <div className="card-featured p-6">
              <h3 className="text-xl font-bold text-white mb-6">Detailed Analysis</h3>
              <div className="space-y-4">
                {[
                  { label: 'Acting & Expression', score: results.acting, color: 'neon-pink' },
                  { label: 'Voice Clarity', score: results.voice, color: 'neon-cyan' },
                  { label: 'Stage Presence', score: results.presence, color: 'neon-lime' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{item.label}</span>
                      <span className={`text-${item.color} font-bold`}>{item.score}%</span>
                    </div>
                    <div className="h-2 bg-input-bg rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.score}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full bg-${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div className="card-featured p-6">
              <h3 className="text-xl font-bold text-white mb-6">AI Feedback</h3>
              <div className="space-y-3">
                {results.feedback.map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex gap-3 p-4 rounded-lg ${
                      item.type === 'positive' ? 'bg-neon-lime/10 border border-neon-lime/20' : 'bg-neon-cyan/10 border border-neon-cyan/20'
                    }`}
                  >
                    {item.type === 'positive' ? (
                      <CheckCircle className="w-5 h-5 text-neon-lime flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-white">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setUploadedVideo(false);
                  setResults(null);
                }}
                className="btn-outline flex-1"
              >
                Analyze Another Video
              </button>
              <button className="btn-primary flex-1">
                Share Results
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
