'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function WebFooter() {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'For Artists',
      links: [
        { label: 'Find Opportunities', href: '/opportunities' },
        { label: 'Build Portfolio', href: '/portfolio' },
        { label: 'Join Community', href: '/community' },
        { label: 'Workshops', href: '/workshops' },
        { label: 'Mentorship', href: '/community/mentorship' },
      ],
    },
    {
      title: 'For Professionals',
      links: [
        { label: 'Post Casting Calls', href: '/casting/create' },
        { label: 'Find Talent', href: '/explore' },
        { label: 'Event Management', href: '/events/details' },
        { label: 'Collaboration', href: '/collaborations' },
        { label: 'Analytics', href: '/analytics' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Script Store', href: '/script-store' },
        { label: 'Learning Center', href: '/learning/courses' },
        { label: 'Community Guidelines', href: '/guidelines' },
        { label: 'Safety Tips', href: '/safety' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Careers', href: '/careers' },
        { label: 'Press Kit', href: '/press' },
        { label: 'Partners', href: '/partners' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Sitemap', href: '/sitemap' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-card-bg border-t border-neon-cyan/20 mt-20">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold font-vietnam">
                <span className="neon-text-pink">Theatre</span>
                <span className="neon-text-cyan">Connect</span>
              </h3>
            </Link>
            <p className="text-text-muted text-sm mb-4 leading-relaxed">
              Connecting artists, producers, and venues across India\'s vibrant theatre community.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-input-bg flex items-center justify-center text-text-muted hover:text-neon-pink hover:bg-neon-pink/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted text-sm hover:text-neon-cyan transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-neon-cyan/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-neon-pink" />
            </div>
            <div>
              <div className="text-xs text-text-muted">Email Us</div>
              <a href="mailto:support@theatreconnect.com" className="text-white text-sm hover:text-neon-cyan transition-colors">
                support@theatreconnect.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-neon-cyan" />
            </div>
            <div>
              <div className="text-xs text-text-muted">Call Us</div>
              <a href="tel:+911800123456" className="text-white text-sm hover:text-neon-cyan transition-colors">
                +91 1800 123 4567
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neon-lime/20 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-neon-lime" />
            </div>
            <div>
              <div className="text-xs text-text-muted">Visit Us</div>
              <div className="text-white text-sm">Mumbai, India</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-8 pb-8 border-b border-neon-cyan/20">
          <div className="max-w-2xl">
            <h4 className="text-white font-bold mb-2">Stay Updated</h4>
            <p className="text-text-muted text-sm mb-4">
              Subscribe to our newsletter for the latest opportunities, events, and theatre news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
              />
              <button className="btn-primary px-6 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-muted text-sm text-center md:text-left">
            © {new Date().getFullYear()} TheatreConnect. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy" className="text-text-muted hover:text-neon-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-muted hover:text-neon-cyan transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-text-muted hover:text-neon-cyan transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="text-text-muted hover:text-neon-cyan transition-colors">
              Accessibility
            </Link>
          </div>
        </div>

        {/* Made with Love */}
        <div className="mt-8 text-center">
          <p className="text-text-muted text-xs">
            Made with <span className="text-neon-pink">❤️</span> for the theatre community
          </p>
        </div>
      </div>
    </footer>
  );
}
