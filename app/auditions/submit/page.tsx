'use client';

import { motion } from 'framer-motion';
import { Upload, Video, FileText, Image as ImageIcon, Mic, CheckCircle, AlertCircle, X, ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface UploadedFile {
  id: number;
  name: string;
  type: 'video' | 'audio' | 'document' | 'image';
  size: string;
  url: string;
}

export default function AuditionSubmitPage() {
  const [formData, setFormData] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    experience: '8',
    roleApplying: 'Ophelia',
    whyThisRole: '',
    availability: '',
    previousWork: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const auditionDetails = {
    production: 'Hamlet',
    role: 'Ophelia',
    director: 'Rajesh Kumar',
    company: 'National Theatre Mumbai',
    deadline: '2025-12-15',
    requirements: [
      'Self-tape audition (2-3 minutes)',
      'Headshot (high resolution)',
      'Resume/CV',
      'Previous performance clips (optional)',
    ],
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const newFiles: UploadedFile[] = Array.from(files).map((file, index) => ({
      id: uploadedFiles.length + index + 1,
      name: file.name,
      type: getFileType(file.type),
      size: formatFileSize(file.size),
      url: URL.createObjectURL(file),
    }));

    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const getFileType = (mimeType: string): 'video' | 'audio' | 'document' | 'image' => {
    if (mimeType.startsWith('video/')) return 'video';
    if (mimeType.startsWith('audio/')) return 'audio';
    if (mimeType.startsWith('image/')) return 'image';
    return 'document';
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const removeFile = (id: number) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Submit logic here
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect or show success message
    }, 2000);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5 text-neon-pink" />;
      case 'audio':
        return <Mic className="w-5 h-5 text-neon-cyan" />;
      case 'image':
        return <ImageIcon className="w-5 h-5 text-neon-lime" />;
      default:
        return <FileText className="w-5 h-5 text-neon-gold" />;
    }
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
          <Link href="/opportunities/details">
            <button className="flex items-center gap-2 text-text-muted hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Opportunity
            </button>
          </Link>
          <h1 className="text-4xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Submit</span>{' '}
            <span className="neon-text-cyan">Audition</span>
          </h1>
          <p className="text-text-muted">
            Apply for {auditionDetails.role} in {auditionDetails.production}
          </p>
        </motion.div>

        {/* Audition Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">{auditionDetails.production}</h2>
              <p className="text-neon-cyan">{auditionDetails.company}</p>
            </div>
            <div className="text-right">
              <div className="text-text-muted text-sm">Deadline</div>
              <div className="text-neon-gold font-bold">
                {new Date(auditionDetails.deadline).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
            <h3 className="text-white font-bold mb-3">Submission Requirements</h3>
            <ul className="space-y-2">
              {auditionDetails.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-text-light text-sm">
                  <CheckCircle className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Years of Experience *</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>
        </motion.div>

        {/* Application Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Application Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Role Applying For *</label>
              <input
                type="text"
                name="roleApplying"
                value={formData.roleApplying}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Why are you interested in this role? *
              </label>
              <textarea
                name="whyThisRole"
                value={formData.whyThisRole}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us what draws you to this role and what you would bring to it..."
                className="input-field resize-none"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Availability *</label>
              <textarea
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                rows={3}
                placeholder="Describe your availability for rehearsals and performances..."
                className="input-field resize-none"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Previous Relevant Work (Optional)
              </label>
              <textarea
                name="previousWork"
                value={formData.previousWork}
                onChange={handleChange}
                rows={3}
                placeholder="List any previous roles or productions relevant to this audition..."
                className="input-field resize-none"
              />
            </div>
          </div>
        </motion.div>

        {/* File Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Upload Materials</h2>

          {/* Upload Area */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
              handleFileUpload(e.dataTransfer.files);
            }}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all mb-4 ${
              isDragOver
                ? 'border-neon-cyan bg-neon-cyan/10'
                : 'border-neon-cyan/30 hover:border-neon-cyan/50'
            }`}
          >
            <Upload className="w-12 h-12 text-text-muted mx-auto mb-3" />
            <p className="text-white mb-1">Drag and drop files here, or click to browse</p>
            <p className="text-text-muted text-sm mb-4">
              Supported: Video, Audio, Images, PDF (Max 100MB per file)
            </p>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="btn-primary cursor-pointer inline-block">
              Browse Files
            </label>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-white font-bold">Uploaded Files</h3>
              {uploadedFiles.map((file) => (
                <div
                  key={file.id}
                  className="p-4 rounded-lg bg-input-bg border border-neon-cyan/20 flex items-center gap-4"
                >
                  <div className="p-2 rounded-lg bg-neon-pink/20 flex-shrink-0">
                    {getFileIcon(file.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate">{file.name}</h4>
                    <p className="text-text-muted text-sm">
                      {file.type.charAt(0).toUpperCase() + file.type.slice(1)} • {file.size}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="p-2 rounded-full hover:bg-red-500/20 text-red-400 transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-featured mb-6"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-neon-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold mb-2">Before You Submit</h3>
              <ul className="space-y-2 text-text-light text-sm">
                <li>• Ensure all required materials are uploaded</li>
                <li>• Double-check your contact information</li>
                <li>• Review your responses for clarity and completeness</li>
                <li>• Make sure your audition video meets the time requirements</li>
                <li>• You will receive a confirmation email upon successful submission</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || uploadedFiles.length === 0}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Audition
              </>
            )}
          </button>
          <button className="btn-outline">
            Save as Draft
          </button>
        </motion.div>
      </div>
    </div>
  );
}
