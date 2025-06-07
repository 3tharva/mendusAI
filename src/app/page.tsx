import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WelcomeHeroMendus from '@/components/sections/WelcomeHeroMendus';
import IntroBlurbMendus from '@/components/sections/IntroBlurbMendus';
import CallToActionMendus from '@/components/sections/CallToActionMendus';
import StatsMendus from '@/components/sections/StatsMendus';
import TechStormMendus from '@/components/sections/TechStormMendus';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <WelcomeHeroMendus />
        <IntroBlurbMendus />
        <CallToActionMendus />
        <StatsMendus />
        <TechStormMendus />
      </main>
      <Footer />
    </div>
  );
}
