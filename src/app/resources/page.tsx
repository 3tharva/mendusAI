
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Mic, Brain, Database, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mendus Knowledge Singularity Hub',
  description: 'Access paradigm-shifting whitepapers, deep-dive case studies, and frontier-tech webinars from Mendus. Explore the future of agentic intelligence and cognitive automation.',
};

export default function ResourcesPage() {
  const resources = [
    { 
      title: 'Whitepaper: Axiomatic Design of Self-Evolving AI Cognition', 
      type: 'Advanced Theoretical Whitepaper', 
      icon: Brain, 
      link: '#', 
      description: 'A foundational treatise on the mathematical and philosophical underpinnings of creating AI systems capable of autonomous cognitive restructuring and exponential learning.',
      imageHint: 'abstract brain network' 
    },
    { 
      title: 'Case Study: Global Climate Symbiosis via Agentic Terraforming', 
      type: 'Planetary-Scale Impact Analysis', 
      icon: Database, 
      link: '#', 
      description: 'An in-depth analysis of a simulated deployment of Mendus agents orchestrating atmospheric carbon capture and ecosystem regeneration on a global scale.',
      imageHint: 'earth data climate'
    },
    { 
      title: 'Webinar: The Sentience Spectrum - Navigating Emergent AI Consciousness', 
      type: 'Ethical & Technical Deep Dive', 
      icon: Mic, 
      link: '#', 
      description: 'Join Mendus ethicists and lead architects discussing the implications and technical milestones towards AI systems exhibiting recognizable markers of sentience.',
      imageHint: 'futuristic webinar presentation'
    },
     { 
      title: 'Technical Blueprint: Decentralized Federated Sentience Networks', 
      type: 'Architectural Overview', 
      icon: GitBranch, 
      link: '#', 
      description: 'Explore the cryptographic and network topology innovations enabling secure, privacy-preserving collective intelligence across distributed AI agents.',
      imageHint: 'network nodes connection'
    },
    { 
      title: 'Research Paper: Quantum Entanglement in AI Communication Protocols', 
      type: 'Peer-Reviewed Publication Preview', 
      icon: FileText, 
      link: '#', 
      description: 'A summary of our latest research into leveraging quantum phenomena for instantaneous, unjammable communication between AI agents across vast distances.',
      imageHint: 'quantum physics abstract'
    },
    { 
      title: 'Interactive Demo: Real-time Agentic Swarm Problem Solving', 
      type: 'Live Simulation Access', 
      icon: BookOpen, 
      link: '#', 
      description: 'Experience firsthand how a swarm of Mendus digital workers collaboratively solve complex logistical challenges, adapting in real-time to dynamic variables.',
      imageHint: 'swarm intelligence simulation'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Mendus Knowledge Singularity Hub
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Traverse the frontiers of cognitive automation. The Mendus Knowledge Hub is your portal to seminal research, groundbreaking case studies, and visionary explorations into the future of intelligence.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="flex flex-col justify-between hover:shadow-2xl transition-all duration-300 ease-in-out bg-card rounded-xl overflow-hidden">
                  <div>
                     <Image 
                        src={`https://placehold.co/600x350.png`} 
                        alt={resource.title} 
                        width={600} 
                        height={350} 
                        className="w-full h-48 object-cover"
                        data-ai-hint={resource.imageHint} 
                      />
                    <CardHeader>
                      <div className="flex items-start mb-3">
                        <resource.icon className="h-8 w-8 mr-4 mt-1 text-primary flex-shrink-0" />
                        <div>
                            <CardTitle className="text-xl text-foreground leading-tight">{resource.title}</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground mt-1">{resource.type}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-body text-muted-foreground text-sm mb-4">{resource.description}</p>
                    </CardContent>
                  </div>
                  <div className="p-6 pt-0">
                    <Button asChild variant="outline" className="w-full hover:bg-primary/10">
                      <Link href={resource.link}>
                        Access Transmission <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
             <div className="mt-16 text-center">
                <p className="text-lg text-muted-foreground font-body mb-6">Seeking bespoke intelligence or collaborative research opportunities?</p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-md">
                    <Link href="/support/contact">Initiate Contact with Our Nexus Team</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
