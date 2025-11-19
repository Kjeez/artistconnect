'use client';

import { motion } from 'framer-motion';
import { Send, Paperclip, Image as ImageIcon, Mic, Video, Phone, MoreVertical, Search, ArrowLeft, Smile } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface Message {
  id: number;
  senderId: number;
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  attachments?: {
    type: 'image' | 'video' | 'file';
    url: string;
    name?: string;
  }[];
}

export default function ChatPage() {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      senderId: 2,
      text: 'Hi! I saw your profile and I\'m interested in collaborating on the upcoming Shakespeare production.',
      timestamp: '10:30 AM',
      status: 'read',
    },
    {
      id: 2,
      senderId: 1,
      text: 'That sounds great! I\'d love to hear more about the project.',
      timestamp: '10:32 AM',
      status: 'read',
    },
    {
      id: 3,
      senderId: 2,
      text: 'We\'re looking for someone with strong classical training. I think your experience with the National Theatre would be perfect.',
      timestamp: '10:35 AM',
      status: 'read',
    },
    {
      id: 4,
      senderId: 1,
      text: 'Thank you! When are the auditions scheduled?',
      timestamp: '10:37 AM',
      status: 'read',
    },
    {
      id: 5,
      senderId: 2,
      text: 'We have slots available next week. Let me send you the details.',
      timestamp: '10:40 AM',
      status: 'read',
      attachments: [
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop',
          name: 'audition-schedule.jpg',
        },
      ],
    },
    {
      id: 6,
      senderId: 1,
      text: 'Perfect! I\'ll check my schedule and get back to you.',
      timestamp: '10:42 AM',
      status: 'delivered',
    },
  ]);

  const currentUser = {
    id: 1,
    name: 'You',
  };

  const chatPartner = {
    id: 2,
    name: 'Rajesh Kumar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    role: 'Director',
    status: 'online',
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        senderId: currentUser.id,
        text: messageText,
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        status: 'sent',
      };
      setMessages([...messages, newMessage]);
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Chat Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-featured rounded-none border-b border-neon-cyan/20 sticky top-0 z-10"
      >
        <div className="container mx-auto max-w-5xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/messages">
                <button className="text-text-muted hover:text-white transition-colors">
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </Link>
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-neon-pink relative"
                style={{ backgroundImage: `url(${chatPartner.avatar})` }}
              >
                {chatPartner.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-app-bg" />
                )}
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">{chatPartner.name}</h2>
                <p className="text-text-muted text-sm">
                  {chatPartner.status === 'online' ? (
                    <span className="text-green-400">Active now</span>
                  ) : (
                    'Last seen 2h ago'
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-input-bg text-neon-cyan transition-colors">
                <Phone className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-input-bg text-neon-pink transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-input-bg text-text-muted transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-input-bg text-text-muted transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto max-w-5xl px-4 py-6 space-y-4">
          {messages.map((message, index) => {
            const isCurrentUser = message.senderId === currentUser.id;
            const showAvatar = !isCurrentUser && (index === 0 || messages[index - 1].senderId !== message.senderId);

            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex gap-3 ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {!isCurrentUser && (
                  <div className="w-8 h-8 flex-shrink-0">
                    {showAvatar && (
                      <div
                        className="w-8 h-8 rounded-full bg-cover bg-center border border-neon-cyan/30"
                        style={{ backgroundImage: `url(${chatPartner.avatar})` }}
                      />
                    )}
                  </div>
                )}

                <div className={`flex flex-col max-w-[70%] ${isCurrentUser ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      isCurrentUser
                        ? 'bg-neon-pink/20 border border-neon-pink/30 rounded-br-sm'
                        : 'bg-input-bg border border-neon-cyan/20 rounded-bl-sm'
                    }`}
                  >
                    <p className="text-white text-sm leading-relaxed">{message.text}</p>

                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.attachments.map((attachment, idx) => (
                          <div key={idx}>
                            {attachment.type === 'image' && (
                              <div className="rounded-lg overflow-hidden border border-neon-cyan/30">
                                <img
                                  src={attachment.url}
                                  alt={attachment.name}
                                  className="w-full h-auto"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-1 px-1">
                    <span className="text-text-muted text-xs">{message.timestamp}</span>
                    {isCurrentUser && (
                      <span className="text-xs">
                        {message.status === 'sent' && <span className="text-text-muted">✓</span>}
                        {message.status === 'delivered' && <span className="text-neon-cyan">✓✓</span>}
                        {message.status === 'read' && <span className="text-neon-pink">✓✓</span>}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Typing Indicator (Optional) */}
          {/* <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cover bg-center border border-neon-cyan/30" />
            <div className="bg-input-bg border border-neon-cyan/20 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Message Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-featured rounded-none border-t border-neon-cyan/20 sticky bottom-0"
      >
        <div className="container mx-auto max-w-5xl px-4 py-4">
          <div className="flex items-end gap-3">
            {/* Attachment Buttons */}
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-input-bg text-text-muted hover:text-neon-cyan transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-input-bg text-text-muted hover:text-neon-pink transition-colors">
                <ImageIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Message Input */}
            <div className="flex-1 relative">
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="input-field w-full resize-none pr-12"
                rows={1}
                style={{
                  minHeight: '44px',
                  maxHeight: '120px',
                }}
              />
              <button className="absolute right-3 bottom-3 text-text-muted hover:text-neon-gold transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>

            {/* Send Buttons */}
            {messageText.trim() ? (
              <button
                onClick={handleSendMessage}
                className="btn-primary px-6 py-3 flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            ) : (
              <button className="p-3 rounded-full bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
