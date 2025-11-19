'use client';

import { motion } from 'framer-motion';
import { Plus, X, Calendar, MapPin, Clock, Users, ArrowLeft, Save } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function CreateCastingPage() {
  const [formData, setFormData] = useState({
    title: '',
    projectType: 'theatre',
    description: '',
    requirements: '',
    location: '',
    startDate: '',
    endDate: '',
    applicationDeadline: '',
    compensation: '',
    roles: [{ name: '', ageRange: '', gender: '', description: '' }],
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = [
    'Acting', 'Singing', 'Dancing', 'Comedy', 'Drama', 'Musical Theatre',
    'Classical Dance', 'Method Acting', 'Voice Acting', 'Stage Combat',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleChange = (index: number, field: string, value: string) => {
    const newRoles = [...formData.roles];
    newRoles[index] = { ...newRoles[index], [field]: value };
    setFormData(prev => ({ ...prev, roles: newRoles }));
  };

  const addRole = () => {
    setFormData(prev => ({
      ...prev,
      roles: [...prev.roles, { name: '', ageRange: '', gender: '', description: '' }],
    }));
  };

  const removeRole = (index: number) => {
    setFormData(prev => ({
      ...prev,
      roles: prev.roles.filter((_, i) => i !== index),
    }));
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = () => {
    console.log('Submitting casting call:', { ...formData, skills: selectedSkills });
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
          <Link href="/opportunities">
            <button className="flex items-center gap-2 text-text-muted hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Opportunities
            </button>
          </Link>
          <h1 className="text-4xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Create</span>{' '}
            <span className="neon-text-cyan">Casting Call</span>
          </h1>
          <p className="text-text-muted">
            Post a new casting opportunity and find the perfect talent
          </p>
        </motion.div>

        {/* Basic Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Project Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Hamlet - The Modern Retelling"
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Project Type *</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="input-field"
              >
                <option value="theatre">Theatre</option>
                <option value="film">Film</option>
                <option value="tv">TV Show</option>
                <option value="commercial">Commercial</option>
                <option value="music-video">Music Video</option>
                <option value="web-series">Web Series</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Project Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your project, storyline, and vision..."
                className="input-field resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">General Requirements</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={4}
                placeholder="List any general requirements for applicants..."
                className="input-field resize-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-featured mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Roles</h2>
            <button
              onClick={addRole}
              className="btn-outline text-sm flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Role
            </button>
          </div>

          <div className="space-y-6">
            {formData.roles.map((role, index) => (
              <div key={index} className="p-4 rounded-lg bg-input-bg border border-neon-cyan/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-medium">Role {index + 1}</h3>
                  {formData.roles.length > 1 && (
                    <button
                      onClick={() => removeRole(index)}
                      className="p-2 rounded-full hover:bg-red-500/20 text-red-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Role Name *</label>
                    <input
                      type="text"
                      value={role.name}
                      onChange={(e) => handleRoleChange(index, 'name', e.target.value)}
                      placeholder="e.g., Hamlet"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Age Range</label>
                    <input
                      type="text"
                      value={role.ageRange}
                      onChange={(e) => handleRoleChange(index, 'ageRange', e.target.value)}
                      placeholder="e.g., 25-35"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Gender</label>
                    <select
                      value={role.gender}
                      onChange={(e) => handleRoleChange(index, 'gender', e.target.value)}
                      className="input-field"
                    >
                      <option value="">Any</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-Binary</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white text-sm font-medium mb-2">Role Description</label>
                    <textarea
                      value={role.description}
                      onChange={(e) => handleRoleChange(index, 'description', e.target.value)}
                      rows={3}
                      placeholder="Describe the character and requirements..."
                      className="input-field resize-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Required Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Required Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedSkills.includes(skill)
                    ? 'bg-neon-pink text-white'
                    : 'bg-input-bg text-text-muted hover:text-white'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dates & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Dates & Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-cyan" />
                Production Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-cyan" />
                Production End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-pink" />
                Application Deadline *
              </label>
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-lime" />
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
                className="input-field"
                required
              />
            </div>
          </div>
        </motion.div>

        {/* Compensation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Compensation</h2>
          <textarea
            name="compensation"
            value={formData.compensation}
            onChange={handleChange}
            rows={3}
            placeholder="Describe compensation, payment terms, or if it's a volunteer/unpaid position..."
            className="input-field resize-none"
          />
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <button
            onClick={handleSubmit}
            className="btn-primary flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Publish Casting Call
          </button>
          <button className="btn-outline">
            Save Draft
          </button>
        </motion.div>
      </div>
    </div>
  );
}
