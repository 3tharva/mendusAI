
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Layers, Zap, Settings } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'akiraAI Platform - Powering Intelligent Automation',
  description: 'Discover the core components and capabilities of the akiraAI platform, designed for robust and scalable agentic automation.',
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Layers className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              The akiraAI Platform
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Our robust and scalable platform is the foundation for building and deploying intelligent agentic automation solutions. It combines cutting-edge AI with enterprise-grade reliability.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
              <Link href="/book-demo">
                Explore Platform Capabilities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Platform Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Agentic Core</h3>
                <p className="text-muted-foreground font-body">Build sophisticated AI agents capable of complex reasoning, planning, and execution across your enterprise systems.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <Layers className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Modular Architecture</h3>
                <p className="text-muted-foreground font-body">Flexible and extensible design allows for seamless integration with existing infrastructure and third-party services.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
                <Settings className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Scalability & Reliability</h3>
                <p className="text-muted-foreground font-body">Engineered for high performance and resilience, ensuring your automation solutions can scale with your business needs.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Deep Dive into Our Technology</h2>
              <p className="font-body text-muted-foreground mb-4">The akiraAI platform leverages state-of-the-art machine learning models, natural language processing, and robust data pipelines to deliver unparalleled automation capabilities.</p>
              <p className="font-body text-muted-foreground mb-6">From data ingestion and model training to agent deployment and monitoring, our platform provides a comprehensive suite of tools for the entire AI lifecycle.</p>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">
                  Read Technical Documentation
                </Link>
              </Button>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="AkiraAI Platform Architecture Diagram" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl mx-auto"
                data-ai-hint="technology platform architecture"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
