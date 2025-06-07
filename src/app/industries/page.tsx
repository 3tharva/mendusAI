
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IndustriesSection from '@/components/sections/IndustriesSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, Zap, Briefcase, Globe } from 'lucide-react'; 
import Image from 'next/image';
import { industries } from '@/lib/industry-data';

export const metadata: Metadata = {
  title: 'Industries Transformed by Mendus Agentic Intelligence',
  description: 'Explore how Mendus deploys advanced AI Sentinels and the Eon Platform to revolutionize diverse sectors, from algorithmic finance and sentient manufacturing to cognitive healthcare and beyond.',
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background via-secondary/20 to-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Globe className="h-20 w-20 mx-auto mb-8 text-primary animate-spin-slow" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary mb-6">
              Catalyzing Sector-Wide Metamorphosis
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Mendus unleashes the power of agentic AI to redefine operational paradigms across the global industrial landscape. Discover how we tailor cognitive solutions to unlock unprecedented innovation, efficiency, and value in your domain.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg px-8 py-6">
              <Link href="/book-demo">
                Initiate Sector Transformation Dialogue <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
        
        <IndustriesSection />

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">The Mendus Advantage: Cross-Sector Synergies</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg ">
                <BrainCircuit className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Universal Cognitive Architecture</h3>
                <p className="text-muted-foreground font-body">Our Eon Platform's foundational AI capabilities are adaptable, allowing insights from one sector to accelerate breakthroughs in another.</p>
              </div>
              <div className="p-6 rounded-lg ">
                <Zap className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Rapid Deployment & Scalability</h3>
                <p className="text-muted-foreground font-body">Leverage pre-trained Sentinel archetypes and modular platform components for swift implementation and exascale operational capacity.</p>
              </div>
              <div className="p-6 rounded-lg ">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Bespoke Agentic Ecosystems</h3>
                <p className="text-muted-foreground font-body">While our core tech is universal, we architect custom Sentinel behaviors and data integrations precisely tailored to your industry's unique vernacular and challenges.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
