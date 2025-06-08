
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WelcomeHeroMendus from '@/components/sections/WelcomeHeroMendus';
import IntroBlurbMendus from '@/components/sections/IntroBlurbMendus';
import CallToActionMendus from '@/components/sections/CallToActionMendus';
import StatsMendus from '@/components/sections/StatsMendus';
import TechStormMendus from '@/components/sections/TechStormMendus';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import SolutionsByIndustry from '@/components/sections/SolutionsByIndustry';
import HowAiAgentsWork from '@/components/sections/HowAiAgentsWork';


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <WelcomeHeroMendus />
        <IntroBlurbMendus />
        <CallToActionMendus />
        <StatsMendus />
        <SolutionsGrid limit={6} showViewAllButton={true} title="Mendus Solutions" subtitle="Agentic Intelligence to Revolutionize Your Operations" />
        <SolutionsByIndustry />
        <HowAiAgentsWork />
        <TechStormMendus />
      </main>
      <Footer />
    </div>
  );
}
