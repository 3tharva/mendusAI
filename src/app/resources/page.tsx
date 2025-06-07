
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Mic, Brain, Database, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mendus Knowledge Hub',
  description: 'Access insightful whitepapers, detailed case studies, and tech webinars from Mendus. Explore the future of AI and intelligent automation.',
};

export default function ResourcesPage() {
  const resources = [
    { 
      title: 'Whitepaper: Designing AI That Learns and Evolves', 
      type: 'Advanced Theoretical Whitepaper', 
      icon: Brain, 
      link: '#', 
      description: 'A foundational guide on the principles of creating AI systems capable of independent cognitive growth and exponential learning.',
      imageHint: 'ai brain learning abstract' 
    },
    { 
      title: 'Case Study: AI for Global Climate Solutions', 
      type: 'Planetary Impact Analysis', 
      icon: Database, 
      link: '#', 
      description: 'An in-depth look at a simulated deployment of Mendus agents managing atmospheric carbon capture and ecosystem regeneration worldwide.',
      imageHint: 'earth climate data green'
    },
    { 
      title: 'Webinar: Understanding AI Consciousness', 
      type: 'Ethical & Technical Deep Dive', 
      icon: Mic, 
      link: '#', 
      description: 'Join Mendus ethicists and architects discussing the implications and milestones towards AI systems that show signs of awareness.',
      imageHint: 'webinar presentation future'
    },
     { 
      title: 'Technical Blueprint: Secure Decentralized AI Networks', 
      type: 'Architectural Overview', 
      icon: GitBranch, 
      link: '#', 
      description: 'Explore innovations enabling secure, privacy-focused collective intelligence across distributed AI agents.',
      imageHint: 'secure network nodes'
    },
    { 
      title: 'Research Paper: Quantum-Inspired AI Communication', 
      type: 'Peer-Reviewed Publication Preview', 
      icon: FileText, 
      link: '#', 
      description: 'A summary of our latest research into using quantum principles for instant, secure communication between AI agents over vast distances.',
      imageHint: 'quantum communication abstract'
    },
    { 
      title: 'Interactive Demo: AI Swarm Problem Solving', 
      type: 'Live Simulation Access', 
      icon: BookOpen, 
      link: '#', 
      description: 'Experience how a team of Mendus digital workers collaboratively solve complex logistical challenges, adapting in real-time.',
      imageHint: 'ai swarm simulation'
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
              Mendus Knowledge Hub
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Explore the frontiers of intelligent automation. The Mendus Knowledge Hub is your portal to key research, impactful case studies, and visionary insights into the future of intelligence.
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
                        Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
             <div className="mt-16 text-center">
                <p className="text-lg text-muted-foreground font-body mb-6">Looking for specific information or collaborative research opportunities?</p>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-md">
                    <Link href="/support/contact">Contact Our Team</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
