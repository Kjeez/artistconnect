'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Theatre Actor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    content: 'TheatreConnect transformed my career. I found my dream role within a week and the AI rehearsal alerts made preparation so much easier!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    content: 'The casting process used to take weeks. Now I can find perfect talent in days. The audition recording feature is a game-changer.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'Musician',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    content: 'I love how easy it is to find gigs for weddings and events. The platform is beautiful and the community is amazing!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Arjun Kapoor',
    role: 'Comedian',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    content: 'From open mics to corporate events, TheatreConnect helped me book 20+ shows in just 2 months. Incredible platform!',
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-16 px-4 bg-card-bg/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-vietnam neon-text-cyan mb-4">
            What Artists Say
          </h2>
          <p className="text-text-muted">
            Join thousands of happy artists using TheatreConnect
          </p>
        </motion.div>

        {/* Testimonial slider */}
        <div className="relative h-[400px] md:h-[350px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="card-featured p-8 md:p-12 max-w-3xl mx-auto">
                {/* Quote icon */}
                <Quote className="w-12 h-12 text-neon-pink/30 mb-6" />

                {/* Content */}
                <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-neon-gold text-neon-gold" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-neon-pink"
                    style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-neon-cyan">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 p-3 rounded-full glass border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:border-neon-cyan transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-neon-cyan" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 p-3 rounded-full glass border border-neon-cyan/30 hover:bg-neon-cyan/20 hover:border-neon-cyan transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-neon-cyan" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-neon-pink w-8 neon-glow-pink'
                  : 'bg-text-muted/30 hover:bg-text-muted/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
