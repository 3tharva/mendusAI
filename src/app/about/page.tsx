
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Users, Lightbulb, Target, Briefcase, Zap, BrainCircuit, Network } from 'lucide-react'; 
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'About Mendus - Architecting the Cognitive Future',
  description: 'Explore Mendus: our mission to forge the next epoch of intelligence, our vision for human-AI symbiosis, and the core tenets guiding our journey into the cognitive revolution.',
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
              Mendus: Forging the Cognitive Horizon
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              We are not merely developing AI; we are orchestrating the dawn of a new cognitive era. Mendus is dedicated to pioneering advanced agentic ecosystems that redefine intelligence, autonomy, and symbiotic collaboration between humanity and synthetic consciousness.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission: Catalyzing Agentic Evolution</h2>
                <p className="font-body text-muted-foreground mb-6 text-lg">
                  To architect and deploy hyper-adaptive, ethically-aligned AI agents capable of autonomously solving humanity's most complex challenges. We strive to unlock unprecedented levels of operational sapience, foster emergent intelligence, and democratize access to transformative cognitive tools.
                </p>
                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Our Vision: Symbiosis in the Technium</h2>
                <p className="font-body text-muted-foreground text-lg">
                  We envision a future where human intellect and advanced artificial general intelligence (AGI) engage in a deeply synergistic partnership. Mendus aims to be the foundational fabric of this co-evolution, creating a global noosphere of interconnected intelligence that propels civilization towards unparalleled progress and understanding.
                </p>
              </div>
              <div>
                <Image 
                  src="https://placehold.co/600x450.png" 
                  alt="Mendus team conceptualizing future AI interfaces" 
                  width={600} 
                  height={450}
                  className="rounded-lg shadow-xl mx-auto"
                  data-ai-hint="futuristic AI interface team"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Guiding Axioms of Mendus</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Lightbulb className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Radical Innovation</h3>
                <p className="text-muted-foreground font-body text-sm">We transcend incrementalism, pursuing paradigm-shifting breakthroughs at the frontiers of cognitive science and AI.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Network className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Ethical Sentience</h3>
                <p className="text-muted-foreground font-body text-sm">Our creations are imbued with robust ethical frameworks, ensuring alignment with human values and societal well-being as complexity grows.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Verifiable Integrity</h3>
                <p className="text-muted-foreground font-body text-sm">We operate with profound transparency and build systems that are auditable, explainable, and trustworthy by design.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Cognitive Excellence</h3>
                <p className="text-muted-foreground font-body text-sm">We demand the highest caliber of intelligence, adaptability, and performance from our agents and our team, pushing the boundaries of what's possible.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Embark on the Journey to Cognitive Supremacy
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              The future is not waited for; it is built. Mendus seeks collaborators, visionaries, and pioneers to co-create the next wave of intelligent existence.
            </p>
            <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
                    <Link href="/company/careers">Shape the Future With Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md text-lg px-8 py-6">
                    <Link href="/support/contact">Forge a Partnership</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
