'use client';

import { motion } from 'framer-motion';
import { Camera, MapPin, Briefcase, Award, Link as LinkIcon, Plus, X, Save, ArrowLeft, User, Mail, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'expert';
}

interface Experience {
  id: number;
  title: string;
  company: string;
  year: string;
  description: string;
}

export default function ProfileEditPage() {
  const [profileData, setProfileData] = useState({
    fullName: 'Priya Sharma',
    username: 'priya.sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    dateOfBirth: '1995-05-15',
    gender: 'Female',
    location: 'Mumbai, Maharashtra',
    bio: 'Passionate actor with 8+ years of experience in classical and contemporary theatre. Trained at National School of Drama.',
    website: 'https://priyasharma.com',
    primaryRole: 'Actor',
    secondaryRoles: ['Dancer', 'Voice Artist'],
  });

  const [skills, setSkills] = useState<Skill[]>([
    { name: 'Classical Acting', level: 'expert' },
    { name: 'Kathak Dance', level: 'expert' },
    { name: 'Voice Modulation', level: 'intermediate' },
    { name: 'Stage Combat', level: 'intermediate' },
  ]);

  const [experience, setExperience] = useState<Experience[]>([
    {
      id: 1,
      title: 'Lead Actor',
      company: 'National Theatre Mumbai',
      year: '2020 - Present',
      description: 'Lead role in multiple productions including Hamlet, The Glass Menagerie',
    },
    {
      id: 2,
      title: 'Supporting Actor',
      company: 'Prithvi Theatre',
      year: '2018 - 2020',
      description: 'Various supporting roles in contemporary Indian theatre',
    },
  ]);

  const [languages, setLanguages] = useState<string[]>(['Hindi', 'English', 'Marathi']);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [currentSkill, setCurrentSkill] = useState('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  };

  const addLanguage = () => {
    if (currentLanguage.trim() && !languages.includes(currentLanguage.trim())) {
      setLanguages([...languages, currentLanguage.trim()]);
      setCurrentLanguage('');
      setHasUnsavedChanges(true);
    }
  };

  const removeLanguage = (lang: string) => {
    setLanguages(languages.filter(l => l !== lang));
    setHasUnsavedChanges(true);
  };

  const addSkill = () => {
    if (currentSkill.trim()) {
      setSkills([...skills, { name: currentSkill.trim(), level: 'beginner' }]);
      setCurrentSkill('');
      setHasUnsavedChanges(true);
    }
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
    setHasUnsavedChanges(true);
  };

  const handleSave = () => {
    // Save logic here
    console.log('Saving profile:', profileData);
    setHasUnsavedChanges(false);
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
          <Link href="/profile">
            <button className="flex items-center gap-2 text-text-muted hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Profile
            </button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold font-vietnam mb-2">
                <span className="neon-text-pink">Edit</span>{' '}
                <span className="neon-text-cyan">Profile</span>
              </h1>
              <p className="text-text-muted">
                Update your information and portfolio
              </p>
            </div>
            <button
              onClick={handleSave}
              className="btn-primary flex items-center gap-2"
              disabled={!hasUnsavedChanges}
            >
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>
          {hasUnsavedChanges && (
            <div className="mt-4 p-3 rounded-lg bg-neon-gold/10 border border-neon-gold/30 text-neon-gold text-sm">
              You have unsaved changes
            </div>
          )}
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
                className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-neon-pink"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop)',
                }}
              />
              <button className="absolute bottom-0 right-0 p-3 rounded-full bg-neon-pink hover:bg-neon-pink/80 transition-colors">
                <Camera className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold mb-2">Change Profile Picture</h3>
              <p className="text-text-muted text-sm mb-4">
                Upload a high-quality photo. Square images work best (min 400x400px).
              </p>
              <div className="flex gap-2">
                <button className="btn-outline text-sm">Upload New</button>
                <button className="btn-outline text-sm text-red-400 border-red-400 hover:bg-red-400/10">
                  Remove
                </button>
              </div>
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
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <User className="w-6 h-6 text-neon-cyan" />
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">Full Name *</label>
              <input
                type="text"
                value={profileData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Username *</label>
              <input
                type="text"
                value={profileData.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon-pink" />
                Email *
              </label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-neon-cyan" />
                Phone
              </label>
              <input
                type="tel"
                value={profileData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-lime" />
                Date of Birth
              </label>
              <input
                type="date"
                value={profileData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Gender</label>
              <select
                value={profileData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="input-field"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-gold" />
                Location
              </label>
              <input
                type="text"
                value={profileData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="City, State/Province, Country"
                className="input-field"
              />
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Professional Bio</h2>
          <textarea
            value={profileData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            rows={6}
            placeholder="Tell us about yourself, your experience, and what makes you unique..."
            className="input-field resize-none"
          />
          <p className="text-text-muted text-xs mt-2">
            {profileData.bio.length}/500 characters
          </p>
        </motion.div>

        {/* Professional Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-neon-pink" />
            Professional Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Primary Role *</label>
              <select
                value={profileData.primaryRole}
                onChange={(e) => handleInputChange('primaryRole', e.target.value)}
                className="input-field"
              >
                <option value="Actor">Actor</option>
                <option value="Director">Director</option>
                <option value="Producer">Producer</option>
                <option value="Dancer">Dancer</option>
                <option value="Musician">Musician</option>
                <option value="Set Designer">Set Designer</option>
                <option value="Lighting Designer">Lighting Designer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-neon-cyan" />
                Website / Portfolio
              </label>
              <input
                type="url"
                value={profileData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://yourwebsite.com"
                className="input-field"
              />
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Languages</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addLanguage())}
              placeholder="Add a language..."
              className="input-field flex-1"
            />
            <button onClick={addLanguage} className="btn-primary px-6">
              Add
            </button>
          </div>
          {languages.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-2 rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 flex items-center gap-2"
                >
                  {lang}
                  <button
                    onClick={() => removeLanguage(lang)}
                    className="hover:text-red-400 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-neon-lime" />
            Skills
          </h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
              placeholder="Add a skill..."
              className="input-field flex-1"
            />
            <button onClick={addSkill} className="btn-primary px-6">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-input-bg border border-neon-cyan/20 flex items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <button
                      onClick={() => removeSkill(index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <select
                    value={skill.level}
                    onChange={(e) => {
                      const newSkills = [...skills];
                      newSkills[index].level = e.target.value as any;
                      setSkills(newSkills);
                      setHasUnsavedChanges(true);
                    }}
                    className="input-field text-sm"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="card-featured mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-neon-gold" />
              Experience
            </h2>
            <button className="btn-outline text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Experience
            </button>
          </div>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="p-4 rounded-lg bg-input-bg border border-neon-cyan/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold">{exp.title}</h3>
                    <p className="text-neon-cyan text-sm">{exp.company}</p>
                    <p className="text-text-muted text-xs">{exp.year}</p>
                  </div>
                  <button className="text-text-muted hover:text-red-400 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-text-light text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <button
            onClick={handleSave}
            className="btn-primary flex items-center gap-2"
            disabled={!hasUnsavedChanges}
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
          <Link href="/profile">
            <button className="btn-outline">
              Cancel
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
