'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, DollarSign, Image, Plus, X, ArrowLeft, Save, Clock } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'theatre',
    date: '',
    time: '',
    duration: '',
    venue: '',
    address: '',
    city: '',
    state: '',
    capacity: '',
    ticketTypes: [
      { name: 'General', price: '', quantity: '' },
    ],
    tags: [] as string[],
  });

  const [currentTag, setCurrentTag] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTicketChange = (index: number, field: string, value: string) => {
    const newTickets = [...formData.ticketTypes];
    newTickets[index] = { ...newTickets[index], [field]: value };
    setFormData(prev => ({ ...prev, ticketTypes: newTickets }));
  };

  const addTicketType = () => {
    setFormData(prev => ({
      ...prev,
      ticketTypes: [...prev.ticketTypes, { name: '', price: '', quantity: '' }],
    }));
  };

  const removeTicketType = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ticketTypes: prev.ticketTypes.filter((_, i) => i !== index),
    }));
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag),
    }));
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
          <Link href="/booking">
            <button className="flex items-center gap-2 text-text-muted hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Events
            </button>
          </Link>
          <h1 className="text-4xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Create</span>{' '}
            <span className="neon-text-cyan">Event</span>
          </h1>
          <p className="text-text-muted">
            List your event and start selling tickets
          </p>
        </motion.div>

        {/* Basic Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Event Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Event Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., The Phantom of the Opera"
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input-field"
              >
                <option value="theatre">Theatre</option>
                <option value="musical">Musical</option>
                <option value="dance">Dance</option>
                <option value="comedy">Comedy</option>
                <option value="concert">Concert</option>
                <option value="workshop">Workshop</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                placeholder="Describe your event, what makes it special, and what attendees can expect..."
                className="input-field resize-none"
                required
              />
            </div>

            {/* Event Image Upload */}
            <div>
              <label className="block text-white font-medium mb-2">Event Banner</label>
              <div className="border-2 border-dashed border-neon-cyan/30 rounded-lg p-8 text-center hover:border-neon-cyan/50 transition-colors cursor-pointer">
                <Image className="w-12 h-12 text-text-muted mx-auto mb-3" />
                <p className="text-white mb-1">Click to upload event banner</p>
                <p className="text-text-muted text-sm">PNG, JPG up to 5MB (1200x600 recommended)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Date & Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Date & Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-pink" />
                Event Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-cyan" />
                Start Time *
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 2 hours"
                className="input-field"
              />
            </div>
          </div>
        </motion.div>

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Venue Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-lime" />
                Venue Name *
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                placeholder="e.g., Prithvi Theatre"
                className="input-field"
                required
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
                className="input-field"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g., Mumbai"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g., Maharashtra"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-white font-medium mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-neon-gold" />
                Venue Capacity
              </label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="Maximum attendees"
                className="input-field"
              />
            </div>
          </div>
        </motion.div>

        {/* Ticket Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-featured mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Ticket Types</h2>
            <button
              onClick={addTicketType}
              className="btn-outline text-sm flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Ticket Type
            </button>
          </div>

          <div className="space-y-4">
            {formData.ticketTypes.map((ticket, index) => (
              <div key={index} className="p-4 rounded-lg bg-input-bg border border-neon-cyan/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-medium">Ticket Type {index + 1}</h3>
                  {formData.ticketTypes.length > 1 && (
                    <button
                      onClick={() => removeTicketType(index)}
                      className="p-2 rounded-full hover:bg-red-500/20 text-red-400 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      value={ticket.name}
                      onChange={(e) => handleTicketChange(index, 'name', e.target.value)}
                      placeholder="e.g., VIP"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2 flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      Price (₹) *
                    </label>
                    <input
                      type="number"
                      value={ticket.price}
                      onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
                      placeholder="0"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Quantity *</label>
                    <input
                      type="number"
                      value={ticket.quantity}
                      onChange={(e) => handleTicketChange(index, 'quantity', e.target.value)}
                      placeholder="0"
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">Tags</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              placeholder="Add tags (e.g., shakespeare, drama, family-friendly)"
              className="input-field flex-1"
            />
            <button onClick={addTag} className="btn-primary px-6">
              Add
            </button>
          </div>
          {formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan text-sm border border-neon-cyan/30 flex items-center gap-2"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="hover:text-red-400 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <button className="btn-primary flex items-center gap-2">
            <Save className="w-5 h-5" />
            Publish Event
          </button>
          <button className="btn-outline">
            Save as Draft
          </button>
        </motion.div>
      </div>
    </div>
  );
}
