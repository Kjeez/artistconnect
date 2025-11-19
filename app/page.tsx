import HeroSection from '@/components/HeroSection';
import FeaturedEvents from '@/components/FeaturedEvents';
import FeaturesCarousel from '@/components/FeaturesCarousel';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedEvents />
      <FeaturesCarousel />
      <TestimonialsSlider />
      <CTASection />
    </div>
  );
}
