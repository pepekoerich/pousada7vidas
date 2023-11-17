import CTASection from "@/components/CTASection";
import Faqs from "@/components/Faqs";
import FeatureSection from "@/components/FeatureSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureSection />
      <CTASection />
      <Testimonials />
      <GalleryCarousel />
      <Faqs />
    </main>
  );
}
