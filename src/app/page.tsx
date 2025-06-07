import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import MilestonesSection from '@/components/sections/MilestonesSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <MilestonesSection />
        <ResourcesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
