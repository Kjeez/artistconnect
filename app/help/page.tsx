'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    name: 'Getting Started',
    faqs: [
      {
        question: 'How do I create an account?',
        answer: 'Click on the "Sign Up" button in the top right corner. Fill in your details including name, email, and password. Choose your account type (Artist, Producer, or Venue) and complete the verification process.',
      },
      {
        question: 'What are the different account types?',
        answer: 'TheatreConnect offers three account types: Artist (for performers, dancers, actors), Producer (for directors, casting agents, event organizers), and Venue (for theatre spaces and event locations). Each has features tailored to their needs.',
      },
      {
        question: 'Is TheatreConnect free to use?',
        answer: 'Yes, basic features are free. We also offer premium memberships with additional features like priority listings, advanced analytics, and unlimited portfolio uploads.',
      },
    ],
  },
  {
    name: 'Profile & Portfolio',
    faqs: [
      {
        question: 'How do I add items to my portfolio?',
        answer: 'Go to your Profile page and click on "Portfolio". Click the "Add Item" button to upload photos, videos, or documents. You can add descriptions, tags, and organize your work into collections.',
      },
      {
        question: 'What file formats are supported?',
        answer: 'Images: JPG, PNG, GIF (max 5MB). Videos: MP4, MOV, AVI (max 100MB). Documents: PDF (max 10MB). For larger files, we recommend using video hosting services and embedding links.',
      },
      {
        question: 'How do I make my profile stand out?',
        answer: 'Complete all profile sections, add a professional photo, upload high-quality portfolio items, collect reviews from collaborators, and keep your profile updated with recent work and achievements.',
      },
    ],
  },
  {
    name: 'Bookings & Payments',
    faqs: [
      {
        question: 'How does payment work?',
        answer: 'When you book or get booked for a project, payments are processed through our secure wallet system. Funds are held in escrow and released upon project completion. We support UPI, cards, and net banking.',
      },
      {
        question: 'What are the platform fees?',
        answer: 'TheatreConnect charges a 10% service fee on completed transactions. This covers payment processing, customer support, and platform maintenance. Premium members get reduced fees of 5%.',
      },
      {
        question: 'How do I withdraw my earnings?',
        answer: 'Go to your Wallet page and click "Withdraw". Enter the amount and select your preferred payout method (bank transfer or UPI). Withdrawals are processed within 2-3 business days.',
      },
    ],
  },
  {
    name: 'Safety & Privacy',
    faqs: [
      {
        question: 'How is my data protected?',
        answer: 'We use industry-standard encryption and security measures. Your payment information is never stored on our servers. We comply with data protection regulations and never sell your personal information.',
      },
      {
        question: 'How do I report inappropriate content?',
        answer: 'Click the flag icon on any content or profile. Our moderation team reviews reports within 24 hours. You can also block users from contacting you directly through their profile settings.',
      },
      {
        question: 'Can I control who sees my profile?',
        answer: 'Yes, go to Settings > Privacy to control your visibility. You can make your profile public, visible to connections only, or completely private. You can also hide specific portfolio items.',
      },
    ],
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const id = categoryIndex * 100 + faqIndex;
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="w-20 h-20 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-10 h-10 text-neon-cyan" />
          </div>
          <h1 className="text-4xl font-bold font-vietnam mb-2">
            <span className="neon-text-pink">Help</span>{' '}
            <span className="neon-text-cyan">Center</span>
          </h1>
          <p className="text-text-muted">
            Find answers to common questions and get support
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="input-field pl-12 text-lg"
            />
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: MessageCircle, label: 'Live Chat', value: 'Chat with us', color: 'neon-pink' },
            { icon: Mail, label: 'Email Support', value: 'support@theatreconnect.com', color: 'neon-cyan' },
            { icon: Phone, label: 'Phone', value: '+91 1800 123 4567', color: 'neon-lime' },
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="card text-center cursor-pointer hover:border-neon-cyan/50 transition-colors"
            >
              <contact.icon className={`w-8 h-8 text-${contact.color} mx-auto mb-3`} />
              <h3 className="text-white font-bold mb-1">{contact.label}</h3>
              <p className="text-text-muted text-sm">{contact.value}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-bold text-neon-cyan mb-4">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => {
                    const id = categoryIndex * 100 + faqIndex;
                    const isExpanded = expandedItems.includes(id);

                    return (
                      <div
                        key={faqIndex}
                        className="card-featured cursor-pointer"
                        onClick={() => toggleItem(categoryIndex, faqIndex)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-white font-medium flex-1">
                            {faq.question}
                          </h4>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-neon-pink flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                          )}
                        </div>

                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-neon-cyan/20"
                          >
                            <p className="text-text-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 card-featured text-center p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Still need help?
          </h3>
          <p className="text-text-muted mb-6">
            Our support team is here to help you with any questions
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}
