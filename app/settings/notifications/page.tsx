'use client';

import { motion } from 'framer-motion';
import { Bell, Mail, MessageCircle, Calendar, Users, Briefcase, Heart, ArrowLeft, Save } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const notificationSettings = [
  {
    category: 'Opportunities',
    icon: Briefcase,
    color: 'neon-pink',
    settings: [
      { id: 'opp_new', label: 'New casting calls matching my profile', email: true, push: true, sms: false },
      { id: 'opp_deadline', label: 'Application deadline reminders', email: true, push: true, sms: true },
      { id: 'opp_status', label: 'Application status updates', email: true, push: true, sms: false },
      { id: 'opp_saved', label: 'Updates on saved opportunities', email: false, push: true, sms: false },
    ],
  },
  {
    category: 'Events & Bookings',
    icon: Calendar,
    color: 'neon-cyan',
    settings: [
      { id: 'event_upcoming', label: 'Upcoming event reminders', email: true, push: true, sms: true },
      { id: 'event_new', label: 'New events in my area', email: true, push: false, sms: false },
      { id: 'event_tickets', label: 'Ticket purchase confirmations', email: true, push: true, sms: true },
      { id: 'event_changes', label: 'Event changes or cancellations', email: true, push: true, sms: true },
    ],
  },
  {
    category: 'Messages & Communication',
    icon: MessageCircle,
    color: 'neon-lime',
    settings: [
      { id: 'msg_new', label: 'New messages', email: false, push: true, sms: false },
      { id: 'msg_connection', label: 'Connection requests', email: true, push: true, sms: false },
      { id: 'msg_mention', label: 'When someone mentions me', email: true, push: true, sms: false },
      { id: 'msg_reply', label: 'Replies to my comments', email: false, push: true, sms: false },
    ],
  },
  {
    category: 'Community & Social',
    icon: Users,
    color: 'neon-gold',
    settings: [
      { id: 'social_follow', label: 'New followers', email: false, push: true, sms: false },
      { id: 'social_like', label: 'Likes on my posts', email: false, push: false, sms: false },
      { id: 'social_comment', label: 'Comments on my posts', email: true, push: true, sms: false },
      { id: 'social_collab', label: 'Collaboration invitations', email: true, push: true, sms: false },
    ],
  },
  {
    category: 'Account & Security',
    icon: Bell,
    color: 'neon-pink',
    settings: [
      { id: 'acc_login', label: 'Login from new device', email: true, push: true, sms: true },
      { id: 'acc_password', label: 'Password change confirmations', email: true, push: true, sms: true },
      { id: 'acc_payment', label: 'Payment and transaction alerts', email: true, push: true, sms: true },
      { id: 'acc_profile', label: 'Profile view notifications', email: false, push: false, sms: false },
    ],
  },
];

export default function NotificationSettingsPage() {
  const [settings, setSettings] = useState(notificationSettings);
  const [hasChanges, setHasChanges] = useState(false);

  const handleToggle = (categoryIndex: number, settingIndex: number, type: 'email' | 'push' | 'sms') => {
    const newSettings = [...settings];
    newSettings[categoryIndex].settings[settingIndex][type] = !newSettings[categoryIndex].settings[settingIndex][type];
    setSettings(newSettings);
    setHasChanges(true);
  };

  const handleSave = () => {
    console.log('Saving notification settings:', settings);
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
          <h1 className="text-4xl font-bold font-vietnam mb-2 flex items-center gap-3">
            <Bell className="w-10 h-10 text-neon-pink" />
            <span className="neon-text-pink">Notification</span>{' '}
            <span className="neon-text-cyan">Settings</span>
          </h1>
          <p className="text-text-muted">
            Choose how you want to stay updated
          </p>
        </motion.div>

        {/* Notification Method Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-6"
        >
          <div className="grid grid-cols-4 gap-4 text-center">
            <div></div>
            <div>
              <Mail className="w-5 h-5 text-neon-cyan mx-auto mb-1" />
              <span className="text-white font-medium text-sm">Email</span>
            </div>
            <div>
              <Bell className="w-5 h-5 text-neon-pink mx-auto mb-1" />
              <span className="text-white font-medium text-sm">Push</span>
            </div>
            <div>
              <MessageCircle className="w-5 h-5 text-neon-lime mx-auto mb-1" />
              <span className="text-white font-medium text-sm">SMS</span>
            </div>
          </div>
        </motion.div>

        {/* Settings Categories */}
        <div className="space-y-6">
          {settings.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              className="card-featured"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neon-cyan/20">
                <div className={`w-10 h-10 rounded-full bg-${category.color}/20 flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 text-${category.color}`} />
                </div>
                <h2 className="text-xl font-bold text-white">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.settings.map((setting, settingIndex) => (
                  <div key={setting.id} className="grid grid-cols-4 gap-4 items-center">
                    <div className="col-span-1">
                      <label className="text-white text-sm">{setting.label}</label>
                    </div>

                    {/* Email Toggle */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleToggle(categoryIndex, settingIndex, 'email')}
                        className={`relative w-11 h-6 rounded-full transition-colors ${
                          setting.email ? 'bg-neon-cyan' : 'bg-input-bg'
                        }`}
                      >
                        <div
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            setting.email ? 'translate-x-5' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Push Toggle */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleToggle(categoryIndex, settingIndex, 'push')}
                        className={`relative w-11 h-6 rounded-full transition-colors ${
                          setting.push ? 'bg-neon-pink' : 'bg-input-bg'
                        }`}
                      >
                        <div
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            setting.push ? 'translate-x-5' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* SMS Toggle */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleToggle(categoryIndex, settingIndex, 'sms')}
                        className={`relative w-11 h-6 rounded-full transition-colors ${
                          setting.sms ? 'bg-neon-lime' : 'bg-input-bg'
                        }`}
                      >
                        <div
                          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                            setting.sms ? 'translate-x-5' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <button
            onClick={handleSave}
            disabled={!hasChanges}
            className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            Save Preferences
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
              You have unsaved changes. Don't forget to save!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
