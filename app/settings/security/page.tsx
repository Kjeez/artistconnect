'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Smartphone, Key, Eye, EyeOff, AlertTriangle, CheckCircle, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function SecuritySettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(true);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const loginSessions = [
    {
      id: 1,
      device: 'iPhone 14 Pro',
      location: 'Mumbai, India',
      ipAddress: '103.xx.xxx.xxx',
      lastActive: '2 minutes ago',
      isCurrent: true,
    },
    {
      id: 2,
      device: 'MacBook Pro',
      location: 'Mumbai, India',
      ipAddress: '103.xx.xxx.xxx',
      lastActive: '2 hours ago',
      isCurrent: false,
    },
    {
      id: 3,
      device: 'Chrome on Windows',
      location: 'Delhi, India',
      ipAddress: '117.xx.xxx.xxx',
      lastActive: '3 days ago',
      isCurrent: false,
    },
  ];

  const securityLogs = [
    {
      id: 1,
      action: 'Password changed',
      timestamp: '2025-11-15 10:30 AM',
      status: 'success',
    },
    {
      id: 2,
      action: 'Login from new device',
      timestamp: '2025-11-14 08:15 PM',
      status: 'success',
    },
    {
      id: 3,
      action: 'Failed login attempt',
      timestamp: '2025-11-12 03:45 PM',
      status: 'warning',
    },
    {
      id: 4,
      action: 'Two-factor authentication enabled',
      timestamp: '2025-11-10 11:20 AM',
      status: 'success',
    },
  ];

  const handlePasswordChange = () => {
    // Implement password change logic
    console.log('Password change submitted');
  };

  const handleLogoutSession = (sessionId: number) => {
    // Implement session logout logic
    console.log('Logout session:', sessionId);
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
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-full bg-neon-pink/20">
              <Shield className="w-8 h-8 text-neon-pink" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-vietnam">
                <span className="neon-text-pink">Security</span>{' '}
                <span className="neon-text-cyan">Settings</span>
              </h1>
              <p className="text-text-muted">
                Manage your account security and privacy
              </p>
            </div>
          </div>
        </motion.div>

        {/* Security Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-featured mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-green-500/20">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Account Security: Strong</h3>
                <p className="text-text-muted text-sm">Your account is well protected</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400">85%</div>
              <div className="text-text-muted text-xs">Security Score</div>
            </div>
          </div>
        </motion.div>

        {/* Change Password */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-featured mb-6"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-neon-cyan" />
            Change Password
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Current Password</label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                  placeholder="Enter current password"
                  className="input-field pr-12"
                />
                <button
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                >
                  {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  placeholder="Enter new password"
                  className="input-field pr-12"
                />
                <button
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                >
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-text-muted text-xs mt-1">
                Must be at least 8 characters with uppercase, lowercase, and numbers
              </p>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Confirm New Password</label>
              <input
                type="password"
                value={passwordForm.confirmPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                placeholder="Confirm new password"
                className="input-field"
              />
            </div>

            <button onClick={handlePasswordChange} className="btn-primary">
              Update Password
            </button>
          </div>
        </motion.div>

        {/* Two-Factor Authentication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-featured mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-neon-pink/20">
                <Smartphone className="w-6 h-6 text-neon-pink" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Two-Factor Authentication</h3>
                <p className="text-text-muted text-sm">Add an extra layer of security</p>
              </div>
            </div>
            <button
              onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                twoFactorEnabled ? 'bg-neon-pink' : 'bg-input-bg'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${
                  twoFactorEnabled ? 'transform translate-x-7' : ''
                }`}
              />
            </button>
          </div>

          {twoFactorEnabled && (
            <div className="p-4 rounded-lg bg-neon-pink/10 border border-neon-pink/30">
              <p className="text-white text-sm mb-3">
                Two-factor authentication is enabled. You\'ll need to enter a code from your authenticator app when logging in.
              </p>
              <button className="btn-outline text-sm">
                View Recovery Codes
              </button>
            </div>
          )}
        </motion.div>

        {/* Biometric Authentication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card-featured mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-neon-cyan/20">
                <Key className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Biometric Login</h3>
                <p className="text-text-muted text-sm">Use fingerprint or face recognition</p>
              </div>
            </div>
            <button
              onClick={() => setBiometricEnabled(!biometricEnabled)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                biometricEnabled ? 'bg-neon-cyan' : 'bg-input-bg'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${
                  biometricEnabled ? 'transform translate-x-7' : ''
                }`}
              />
            </button>
          </div>
        </motion.div>

        {/* Active Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-featured mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-neon-lime" />
              Active Sessions
            </h2>
            <button className="text-neon-pink text-sm font-medium hover:underline">
              Log out all devices
            </button>
          </div>

          <div className="space-y-3">
            {loginSessions.map((session) => (
              <div
                key={session.id}
                className="p-4 rounded-lg bg-input-bg border border-neon-cyan/20"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-white font-medium">{session.device}</h4>
                      {session.isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="space-y-1 text-sm text-text-muted">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{session.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Last active {session.lastActive}</span>
                      </div>
                    </div>
                  </div>
                  {!session.isCurrent && (
                    <button
                      onClick={() => handleLogoutSession(session.id)}
                      className="text-red-400 text-sm font-medium hover:underline"
                    >
                      Log out
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Activity Log */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card-featured"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-neon-gold" />
            Security Activity
          </h2>

          <div className="space-y-3">
            {securityLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between p-3 rounded-lg bg-input-bg"
              >
                <div className="flex items-center gap-3">
                  {log.status === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-neon-gold flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-white font-medium">{log.action}</p>
                    <p className="text-text-muted text-xs">{log.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-outline w-full mt-4">
            View Full Activity Log
          </button>
        </motion.div>
      </div>
    </div>
  );
}
