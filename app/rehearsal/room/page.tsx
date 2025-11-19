'use client';

import { motion } from 'framer-motion';
import { Video, Mic, MicOff, VideoOff, Monitor, Users, MessageSquare, Hand, Settings, PhoneOff, Grid, Maximize, Volume2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Participant {
  id: number;
  name: string;
  avatar: string;
  role: string;
  isAudioOn: boolean;
  isVideoOn: boolean;
  isSpeaking: boolean;
}

export default function RehearsalRoomPage() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [showParticipants, setShowParticipants] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'speaker'>('grid');

  const participants: Participant[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      role: 'Director',
      isAudioOn: true,
      isVideoOn: true,
      isSpeaking: false,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      role: 'Lead Actor',
      isAudioOn: true,
      isVideoOn: true,
      isSpeaking: true,
    },
    {
      id: 3,
      name: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      role: 'Supporting Actor',
      isAudioOn: true,
      isVideoOn: false,
      isSpeaking: false,
    },
    {
      id: 4,
      name: 'Ananya Verma',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      role: 'Choreographer',
      isAudioOn: false,
      isVideoOn: true,
      isSpeaking: false,
    },
  ];

  const chatMessages = [
    { id: 1, sender: 'Rajesh Kumar', message: 'Let\'s start with Scene 2', time: '10:30 AM' },
    { id: 2, sender: 'Priya Sharma', message: 'Ready!', time: '10:31 AM' },
    { id: 3, sender: 'Vikram Singh', message: 'Should I enter from stage left?', time: '10:32 AM' },
    { id: 4, sender: 'Rajesh Kumar', message: 'Yes, and remember to project your voice', time: '10:33 AM' },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border-b border-neon-cyan/20 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-xl">Hamlet Rehearsal - Act 2</h1>
            <p className="text-text-muted text-sm">Session started at 10:00 AM</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-text-muted">
              <Users className="w-5 h-5" />
              <span className="text-white font-medium">{participants.length}</span>
            </div>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'speaker' : 'grid')}
              className="p-2 rounded-lg hover:bg-input-bg text-text-muted hover:text-white transition-colors"
              title={viewMode === 'grid' ? 'Switch to speaker view' : 'Switch to grid view'}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Grid */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className={`grid gap-4 h-full ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 auto-rows-fr'
              : 'grid-cols-1'
          }`}>
            {participants.map((participant, index) => (
              <motion.div
                key={participant.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-lg overflow-hidden ${
                  participant.isSpeaking
                    ? 'ring-4 ring-neon-pink shadow-neon-pink'
                    : 'border-2 border-neon-cyan/30'
                } ${viewMode === 'speaker' && index > 0 ? 'hidden' : ''}`}
              >
                {participant.isVideoOn ? (
                  <div
                    className="w-full h-full bg-cover bg-center min-h-[300px]"
                    style={{ backgroundImage: `url(${participant.avatar})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-input-bg flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                      <div
                        className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-neon-cyan mx-auto mb-4"
                        style={{ backgroundImage: `url(${participant.avatar})` }}
                      />
                      <VideoOff className="w-8 h-8 text-text-muted mx-auto" />
                    </div>
                  </div>
                )}

                {/* Participant Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold">{participant.name}</h3>
                      <p className="text-neon-cyan text-sm">{participant.role}</p>
                    </div>
                    <div className="flex gap-2">
                      {participant.isAudioOn ? (
                        <div className={`p-2 rounded-full ${
                          participant.isSpeaking ? 'bg-neon-pink' : 'bg-green-500/20'
                        }`}>
                          <Mic className={`w-4 h-4 ${
                            participant.isSpeaking ? 'text-white' : 'text-green-400'
                          }`} />
                        </div>
                      ) : (
                        <div className="p-2 rounded-full bg-red-500/20">
                          <MicOff className="w-4 h-4 text-red-400" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* More Options */}
                <button className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors">
                  <ChevronDown className="w-4 h-4 text-white" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        {(showChat || showParticipants) && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-80 bg-card-bg border-l border-neon-cyan/20 flex flex-col"
          >
            {/* Sidebar Tabs */}
            <div className="flex border-b border-neon-cyan/20">
              <button
                onClick={() => { setShowChat(true); setShowParticipants(false); }}
                className={`flex-1 py-3 font-medium transition-colors ${
                  showChat
                    ? 'text-neon-cyan border-b-2 border-neon-cyan'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => { setShowChat(false); setShowParticipants(true); }}
                className={`flex-1 py-3 font-medium transition-colors ${
                  showParticipants
                    ? 'text-neon-pink border-b-2 border-neon-pink'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                Participants
              </button>
            </div>

            {/* Chat Section */}
            {showChat && (
              <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className="animate-fadeIn">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4 text-neon-pink" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-medium text-sm">{msg.sender}</span>
                            <span className="text-text-muted text-xs">{msg.time}</span>
                          </div>
                          <p className="text-text-light text-sm">{msg.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-neon-cyan/20">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Send a message..."
                      className="input-field flex-1"
                    />
                    <button className="btn-primary px-4">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Participants Section */}
            {showParticipants && (
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {participants.map((participant) => (
                  <div
                    key={participant.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-input-bg transition-colors"
                  >
                    <div
                      className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-neon-cyan flex-shrink-0"
                      style={{ backgroundImage: `url(${participant.avatar})` }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium truncate">{participant.name}</h4>
                      <p className="text-text-muted text-xs truncate">{participant.role}</p>
                    </div>
                    <div className="flex gap-1">
                      {participant.isAudioOn ? (
                        <Mic className="w-4 h-4 text-green-400" />
                      ) : (
                        <MicOff className="w-4 h-4 text-red-400" />
                      )}
                      {participant.isVideoOn ? (
                        <Video className="w-4 h-4 text-green-400" />
                      ) : (
                        <VideoOff className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Bottom Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card-bg border-t border-neon-cyan/20 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          {/* Left Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMicOn(!isMicOn)}
              className={`p-4 rounded-full transition-all ${
                isMicOn
                  ? 'bg-input-bg hover:bg-neon-cyan/20 text-white'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-4 rounded-full transition-all ${
                isVideoOn
                  ? 'bg-input-bg hover:bg-neon-pink/20 text-white'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsScreenSharing(!isScreenSharing)}
              className={`p-4 rounded-full transition-all ${
                isScreenSharing
                  ? 'bg-neon-lime/20 text-neon-lime'
                  : 'bg-input-bg hover:bg-neon-lime/20 text-white'
              }`}
            >
              <Monitor className="w-6 h-6" />
            </button>
          </div>

          {/* Center Controls */}
          <div className="flex items-center gap-2">
            <button className="p-4 rounded-full bg-input-bg hover:bg-neon-gold/20 text-white transition-all">
              <Hand className="w-6 h-6" />
            </button>
            <button
              onClick={() => setShowChat(!showChat)}
              className={`p-4 rounded-full transition-all ${
                showChat
                  ? 'bg-neon-cyan/20 text-neon-cyan'
                  : 'bg-input-bg hover:bg-neon-cyan/20 text-white'
              }`}
            >
              <MessageSquare className="w-6 h-6" />
            </button>
            <button
              onClick={() => setShowParticipants(!showParticipants)}
              className={`p-4 rounded-full transition-all ${
                showParticipants
                  ? 'bg-neon-pink/20 text-neon-pink'
                  : 'bg-input-bg hover:bg-neon-pink/20 text-white'
              }`}
            >
              <Users className="w-6 h-6" />
            </button>
            <button className="p-4 rounded-full bg-input-bg hover:bg-white/20 text-white transition-all">
              <Settings className="w-6 h-6" />
            </button>
          </div>

          {/* Right Controls */}
          <div>
            <button className="px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold transition-all flex items-center gap-2">
              <PhoneOff className="w-5 h-5" />
              Leave Room
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
