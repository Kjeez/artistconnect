'use client';

import { motion } from 'framer-motion';
import { Camera, Save, ArrowLeft, Mail, Phone, MapPin, Calendar, Briefcase } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ProfileSettingsPage() {
  const [formData, setFormData] = useState({
    firstName: 'Priya',
    lastName: 'Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    bio: 'Passionate theatre artist specializing in Kathak dance and contemporary fusion performances.',
    location: 'Mumbai, Maharashtra',
    dateOfBirth: '1995-06-15',
    profession: 'Professional Dancer & Choreographer',
    website: 'https://priyasharma.com',
    instagram: '@priyasharma',
    facebook: 'priyasharmaofficial',
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Save logic here
    console.log('Saving:', formData);
    setHasChanges(false);
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
          <Link href="/settings">
            <button className="flex items-center gap-2 text-text-muted hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Settings
            </button>
          </Link>
          <h1 className="text-4xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Edit</span>{' '}
            <span className="neon-text-cyan">Profile</span>
          </h1>
          <p className="text-text-muted">
            Update your personal information and public profile
          </p>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Profile Picture</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <div
                className="w-24 h-24 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop)',
                }}
              />
              <button className="absolute bottom-0 right-0 p-2 rounded-full bg-neon-pink text-white hover:bg-neon-pink/80 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div>
              <button className="btn-outline text-sm mb-2">Upload New Photo</button>
              <p className="text-xs text-text-muted">JPG, PNG or GIF. Max size 5MB.</p>
            </div>
          </div>
        </motion.div>

        {/* Basic Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon-cyan" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-neon-cyan" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-white font-medium mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="input-field resize-none"
              />
              <p className="text-xs text-text-muted mt-1">
                {formData.bio.length}/500 characters
              </p>
            </div>
          </div>
        </motion.div>

        {/* Professional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Professional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-neon-cyan" />
                Profession
              </label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-cyan" />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input-field"
                placeholder="City, State"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-cyan" />
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Website</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="input-field"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Social Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">Instagram</label>
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="input-field"
                placeholder="@username"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Facebook</label>
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                className="input-field"
                placeholder="facebook.com/username"
              />
            </div>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4"
        >
          <button
            onClick={handleSave}
            disabled={!hasChanges}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
          <Link href="/settings">
            <button className="btn-outline">Cancel</button>
          </Link>
        </motion.div>

        {hasChanges && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-4 rounded-lg bg-neon-gold/10 border border-neon-gold/30"
          >
            <p className="text-neon-gold text-sm">
              You have unsaved changes. Don't forget to save before leaving!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
