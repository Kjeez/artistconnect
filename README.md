# 🎭 TheatreConnect

**Empowering Theatre Communities**

A modern, AI-powered platform connecting theatre artists, directors, and audiences across India. Built with Next.js 14, TypeScript, and Tailwind CSS.

![TheatreConnect](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 For Artists & Performers
- **Portfolio Management**: Showcase your work with photo, video, and audio galleries
- **Opportunity Discovery**: Find casting calls, gigs, and events tailored to your skills
- **Audition Recording**: Built-in teleprompter and video recording for auditions
- **Profile Boost**: Get featured and increase visibility

### 🎬 For Directors & Producers
- **Casting Management**: Post opportunities and review applications
- **AI Casting Suggestions**: Smart matching based on roles and artist profiles
- **Rehearsal Rooms**: Virtual collaboration with video calls and AI alerts
- **Applicant Pipeline**: Track and manage auditions efficiently

### 🎪 For Event Organizers
- **Talent Marketplace**: Hire performers for weddings, corporate events, festivals
- **Event Creation**: Host plays, concerts, workshops with built-in ticketing
- **Venue Booking**: Partner with major venues across Delhi-NCR

### 🤖 AI-Powered Tools
- **Script Generator**: Create custom scripts with AI based on genre, cast, and theme
- **Rehearsal Alerts**: Real-time notifications when it's your turn to speak
- **Audition Feedback**: Get AI-powered performance insights (Premium)
- **Smart Matching**: AI suggests perfect artists for roles

### 🎟️ Events & Ticketing
- **BookMyShow-style ticketing**: Seat selection, QR codes, live/virtual events
- **Discover Events**: Find plays, concerts, open mics near you
- **Calendar Integration**: Sync with your schedule

### 🌐 Social & Community
- **Feed**: Share rehearsal clips, announcements, behind-the-scenes
- **Follow System**: Connect with artists, venues, and groups
- **Challenges & Workshops**: Community-driven learning
- **Local Discovery**: Map view of nearby artists and venues

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Neon Theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Future Integrations**:
  - Authentication: NextAuth.js / Clerk
  - Database: MongoDB / Supabase
  - Real-time: Pusher / Socket.io
  - Video Calls: LiveKit / Daily.co
  - Payments: Razorpay
  - AI: xAI (Grok) / OpenAI

## 🎨 Design System

### Color Palette
- **Neon Pink**: `#ff00ff` - Primary actions, CTAs
- **Neon Cyan**: `#00ffff` - Secondary elements, highlights
- **Neon Lime**: `#39ff14` - Accents, success states
- **Neon Gold**: `#ffd700` - Premium features, pricing
- **Dark BG**: `#0d0d0d` - Main background
- **Card BG**: `#1a1a1a` - Card surfaces

### Typography
- **Headings**: Be Vietnam Pro (bold, black)
- **Body**: Poppins (regular, medium)

### Key Features
- Glassmorphism effects
- Neon glow animations
- Particle backgrounds
- Smooth page transitions
- Mobile-first responsive design

## 📁 Project Structure

```
artistconnect/
├── app/
│   ├── booking/          # Events & ticketing
│   ├── login/            # Authentication
│   ├── signup/
│   ├── manpower/         # Talent marketplace
│   ├── opportunities/    # Casting calls & gigs
│   ├── profile/          # User profiles
│   ├── rehearsal/        # Virtual rehearsal rooms
│   ├── script-store/     # Script marketplace
│   │   └── generate/     # AI script generator
│   ├── social/           # Community feed
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── CTASection.tsx
│   ├── FeaturedEvents.tsx
│   ├── FeaturesCarousel.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   └── TestimonialsSlider.tsx
├── lib/
│   └── utils.ts          # Utility functions
├── designs/              # Original HTML mockups
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd artistconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for production
```bash
npm run build
npm start
```

## 📱 Key Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, features, events |
| Sign Up | `/signup` | Multi-step artist onboarding |
| Login | `/login` | Authentication |
| Profile | `/profile` | Artist portfolio & reviews |
| Opportunities | `/opportunities` | Casting calls & gigs feed |
| Script Store | `/script-store` | Browse & purchase scripts |
| AI Generator | `/script-store/generate` | Generate scripts with AI |
| Events | `/booking` | Browse & book tickets |
| Social Feed | `/social` | Community posts & interactions |
| Rehearsal | `/rehearsal` | Virtual rehearsal rooms |
| Marketplace | `/manpower` | Hire talent for events |

## 🎯 Monetization

- **Freemium Model**:
  - Free: Basic profile, 5 applications/month
  - Premium (₹499/month): Unlimited applications, profile boost, advanced AI, priority listing

- **Transaction Fees**:
  - 5-8% on ticket sales
  - Commission on talent bookings
  - Script sales commission

## 🌟 Future Enhancements

- [ ] Real-time video rehearsal rooms with LiveKit
- [ ] Razorpay payment integration
- [ ] AI script generation with xAI/OpenAI
- [ ] Push notifications for rehearsal alerts
- [ ] Mobile app (React Native)
- [ ] Multi-language support (Hindi, English)
- [ ] Venue partnership integrations
- [ ] Advanced analytics dashboard
- [ ] Email marketing automation
- [ ] SMS notifications
- [ ] Calendar sync (Google, Outlook)

## 🎭 Target Audience

- **Artists**: Actors, Musicians, Dancers, Comedians, DJs, Anchors
- **Directors**: Theatre Directors, Producers
- **Organizers**: Event planners, Wedding organizers, Corporate event managers
- **Audiences**: Theatre enthusiasts, Fans

## 📍 Initial Focus

**Delhi-NCR** (Expandable to Mumbai, Bangalore, Pune, Kolkata)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Contact

For questions or collaboration:
- Website: [TheatreConnect](https://theatreconnect.app)
- Email: hello@theatreconnect.app

---

**Built with ❤️ for the theatre community**

*Inspired by the vibrant performing arts scene of India*
