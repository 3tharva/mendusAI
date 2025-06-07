
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SolutionsOverviewSection from '@/components/sections/SolutionsOverviewSection';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
// Import other Akira AI themed sections as they are created
// For example:
// import AkiraHero from '@/components/sections/AkiraHero';
// import AkiraStats from '@/components/sections/AkiraStats';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Placeholder for a new Akira AI Hero Section */}
        <section className="py-20 md:py-32 lg:py-40 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
              <span className="text-primary">Agentic Automation</span> for
              <br />
              Modern Enterprises
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              akiraAI empowers your business with intelligent solutions that drive efficiency, innovation, and growth.
            </p>
            {/* Add relevant CTAs here if needed */}
          </div>
        </section>

        <SolutionsOverviewSection />
        <SolutionsGrid limit={6} showViewAllButton={true} /> 

        {/* Remove or replace old Mendus sections */}
        {/* <WelcomeHeroMendus /> */}
        {/* <IntroBlurbMendus /> */}
        {/* <IndustriesSection /> */} {/* Keep if still relevant, or replace with Akira-themed version */}
        {/* <CallToActionMendus /> */}
        {/* <StatsMendus /> */}
        {/* <TechStormMendus /> */}
      </main>
      <Footer />
    </div>
  );
}
