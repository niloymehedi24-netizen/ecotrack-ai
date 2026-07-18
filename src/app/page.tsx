import AICapabilitiesSection from "@/components/Home/AICapabilitiesSection";
import CTASection from "@/components/Home/CTASection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import NewsletterSection from "@/components/Home/NewsletterSection";
import StatisticsSection from "@/components/Home/StatisticsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <FeaturesSection></FeaturesSection>
      <HowItWorksSection></HowItWorksSection>
      <AICapabilitiesSection></AICapabilitiesSection>
      <StatisticsSection></StatisticsSection>
      <TestimonialsSection></TestimonialsSection>
      <NewsletterSection></NewsletterSection>
      <CTASection></CTASection>
    </main>
  );
}