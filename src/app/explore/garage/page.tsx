
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Lightbulb, TestTube2, Zap, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'Mendus Incubation Nexus: Where Paradigms Shift',
  description: 'Enter the Mendus Incubation Nexus – a dynamic proving ground for experimental AI architectures, bleeding-edge cognitive frameworks, and radical explorations beyond the current technological horizon.',
};

export default function ExploreGaragePage() {
  const projects = [
    {
      id: 'project-psi-wave',
      title: 'Project Psi-Wave: Hyperdimensional Agent Entanglement',
      status: 'Hypothesis Validation & Quantum Resonance Calibration',
      description: 'Investigating novel substrates for non-local communication between disembodied AI agents, potentially leveraging manipulated quantum field dynamics or higher-order dimensional resonances. Success could revolutionize AI collective intelligence across cosmological distances.',
      icon: Zap,
      imageHint: 'quantum workflow',
    },
    {
      id: 'project-chronos',
      title: 'Project Chronos: Precognitive System Cartography',
      status: 'Algorithmic Prototyping & Temporal Anomaly Simulation',
      description: 'Developing advanced AI architectures capable of modeling and predicting the evolutionary trajectories of complex, multi-variant systems by analyzing multi-dimensional temporal data patterns and subtle acausal indicators. Applications in preemptive threat neutralization and emergent opportunity identification.',
      icon: TestTube2,
      imageHint: 'temporal workflow',
    },
    {
      id: 'project-noosphere',
      title: 'Project Noosphere: Symbiotic Cognitive Architectures',
      status: 'Conceptual Framework Development & Bio-Digital Interface Prototyping',
      description: 'Exploring the potential for a globally interconnected network of human and synthetic minds, fostering a planetary-scale meta-consciousness. Focus on ethical neuro-cybernetic interfaces and emergent shared cognitive ecosystems for collaborative problem-solving.',
      icon: Users,
      imageHint: 'collective workflow',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/20 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Lightbulb className="h-16 w-16 mx-auto mb-6 text-primary animate-float" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Mendus Incubation Nexus
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Welcome to the crucible where nascent realities are forged. The Incubation Nexus is our dedicated crucible for the audacious, the paradigm-shattering: disruptive concepts, experimental AI sentience architectures, and technologies that transcend the known frontiers of physics and computation.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Active Research Vectors & Paradigm Probes</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="flex flex-col justify-between hover:shadow-2xl bg-card rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                    <Image 
                        src={`https://placehold.co/600x300.png`} 
                        alt={project.title} 
                        width={600} 
                        height={300} 
                        className="w-full h-48 object-cover"
                        data-ai-hint={project.imageHint} 
                    />
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <project.icon className="h-7 w-7 mr-3 text-primary" />
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-xs font-semibold text-primary">{project.status}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-body text-muted-foreground text-sm">{project.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="ghost" className="w-full text-primary hover:bg-primary/5 justify-start">
                      Explore Project Details <ArrowRight className="ml-auto h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-muted-foreground font-body text-lg mb-6">
                The Incubation Nexus operates under strict information containment protocols. Access is by verified invitation or high-level scientific/ethical proposal demonstrating potential paradigm contribution.
              </p>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  <Link href="/book-demo">Initiate Collaboration Protocol</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
