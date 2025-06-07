
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Lightbulb, TestTube2, Zap, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'Mendus Innovation Lab: Where New Ideas Take Shape',
  description: 'Enter the Mendus Innovation Lab – a space for experimental AI, cutting-edge concepts, and radical explorations beyond current technology.',
};

export default function ExploreGaragePage() {
  const projects = [
    {
      id: 'project-psi-wave',
      title: 'Project Psi-Wave: Next-Gen Agent Communication',
      status: 'Hypothesis Validation Stage',
      description: 'Investigating new theories for faster-than-light (FTL) communication between AI agents using manipulated quantum fields. Potential to revolutionize AI coordination across vast distances.',
      icon: Zap,
      imageHint: 'quantum communication abstract waves',
    },
    {
      id: 'project-chronos',
      title: 'Project Chronos: Advanced Temporal Prediction',
      status: 'Algorithmic Prototyping',
      description: 'Developing AI models that can predict how complex systems will evolve by analyzing multi-dimensional time-based data patterns. Applications in early threat detection and market forecasting.',
      icon: TestTube2,
      imageHint: 'time data spiral futuristic',
    },
    {
      id: 'project-noosphere',
      title: 'Project Noosphere: AI-Assisted Collective Intelligence',
      status: 'Conceptual Framework Development',
      description: 'Exploring the potential for a global network of interconnected human and AI minds to foster a planet-wide collective intelligence. Focus on ethical brain-computer interfaces and shared thinking spaces.',
      icon: Users,
      imageHint: 'global brain network connection',
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
              Mendus Innovation Lab
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Welcome to the lab where new realities are explored. The Innovation Lab is our dedicated space for exploring disruptive concepts, experimental AI designs, and technologies beyond current understanding.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Active Research Vectors</h2>
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
                The Innovation Lab operates with strict information security. Access is by invitation or verified high-level scientific proposal.
              </p>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                  <Link href="/support/contact">Submit Research Proposal</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
