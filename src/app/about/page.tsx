
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Users, Lightbulb, Target, Briefcase, Zap, BrainCircuit, Network } from 'lucide-react'; 
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'About Mendus - Building the Future of Intelligence',
  description: 'Discover Mendus: our mission to create the next era of intelligence, our vision for humans and AI working together, and the core values guiding our journey.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <BrainCircuit className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Mendus: Building the Intelligent Future
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              We are not just developing AI; we are pioneering a new age of thinking machines. Mendus is dedicated to creating advanced AI systems that redefine intelligence, work independently, and collaborate seamlessly with humans.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission: Advancing AI for Humanity</h2>
                <p className="font-body text-muted-foreground mb-6 text-lg">
                  To build and deploy highly adaptable, ethical AI agents that can autonomously solve humanity's most complex challenges. We aim to unlock new levels of intelligent operation, foster creative AI, and make powerful thinking tools accessible to all.
                </p>
                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Our Vision: A New Partnership with AI</h2>
                <p className="font-body text-muted-foreground text-lg">
                  We see a future where human intelligence and advanced AI work together in a powerful partnership. Mendus strives to be the foundation of this evolution, creating a global network of connected intelligence that drives unparalleled progress and understanding.
                </p>
              </div>
              <div>
                <Image 
                  src="https://placehold.co/600x450.png" 
                  alt="Mendus team discussing future AI" 
                  width={600} 
                  height={450}
                  className="rounded-lg shadow-xl mx-auto"
                  data-ai-hint="collaboration workflow"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Guiding Principles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Lightbulb className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Bold Innovation</h3>
                <p className="text-muted-foreground font-body text-sm">We go beyond small improvements, aiming for major breakthroughs at the frontiers of AI and cognitive science.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Network className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Ethical AI</h3>
                <p className="text-muted-foreground font-body text-sm">Our creations are built with strong ethical foundations, ensuring they align with human values and benefit society as they grow smarter.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Trusted Integrity</h3>
                <p className="text-muted-foreground font-body text-sm">We operate with transparency and build systems that are understandable, explainable, and trustworthy from the start.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Peak Performance</h3>
                <p className="text-muted-foreground font-body text-sm">We demand the highest level of intelligence, adaptability, and performance from our AI agents and our team, constantly pushing boundaries.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Join Us in Shaping the Intelligent Future
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              The future isn't just coming; it's being built. Mendus is looking for collaborators, visionaries, and pioneers to help create the next wave of intelligent systems.
            </p>
            <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
                    <Link href="/company/careers">Shape the Future With Us</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
