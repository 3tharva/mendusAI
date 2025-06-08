
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WelcomeHeroMendus from '@/components/sections/WelcomeHeroMendus';
import IntroBlurbMendus from '@/components/sections/IntroBlurbMendus';
import CallToActionMendus from '@/components/sections/CallToActionMendus';
import StatsMendus from '@/components/sections/StatsMendus';
import TechStormMendus from '@/components/sections/TechStormMendus';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
// import IndustriesSection from '@/components/sections/IndustriesSection'; // Removed

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <WelcomeHeroMendus />
        <IntroBlurbMendus />
        <CallToActionMendus />
        <StatsMendus />
        {/* Adding Solutions previews to the homepage */}
        <SolutionsGrid limit={3} showViewAllButton={true} title="Mendus Solutions" subtitle="Agentic Intelligence to Revolutionize Your Operations" />
        {/* <IndustriesSection />  // Removed */}
        <TechStormMendus />
      </main>
      <Footer />
    </div>
  );
}
