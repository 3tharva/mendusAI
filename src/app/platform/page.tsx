
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Layers, Zap, Settings, Cpu, BrainCircuit, ShieldCheck, InfinityIcon } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Mendus Eon Platform - The Core of Agentic Intelligence',
  description: 'Explore the Mendus Eon Platform: a powerful system for deploying and managing large-scale AI agent ecosystems. Discover its advanced computing, smart AI core, and secure data handling.',
};

export default function PlatformPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Cpu className="h-16 w-16 mx-auto mb-6 text-primary animate-spin-slow" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              The Mendus Eon Platform
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Introducing the Eon Platform: the foundation for next-generation AI. Designed for massive computations and intelligent AI management, Eon empowers the creation and use of autonomous, self-improving AI systems.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
              <Link href="/book-demo">
                Experience Eon <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Key Features of the Eon Platform</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Zap className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Advanced Compute Power</h3>
                <p className="text-muted-foreground font-body text-sm">Utilizes cutting-edge processing techniques for exceptional speed and efficiency in solving very complex problems.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <BrainCircuit className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Smart AI Agent Framework</h3>
                <p className="text-muted-foreground font-body text-sm">A hybrid AI system that combines deep learning's pattern recognition with logical reasoning, enabling smart and explainable AI agents.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Layers className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Secure Decentralized Data</h3>
                <p className="text-muted-foreground font-body text-sm">A highly secure, globally distributed system for data management that ensures data privacy, integrity, and supports AI learning without compromising sensitive information.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <ShieldCheck className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Ethical Governance Layer</h3>
                <p className="text-muted-foreground font-body text-sm">Built-in safety rules and continuous ethical monitoring ensure all AI operations follow predefined ethical and regulatory guidelines.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Settings className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Dynamic AI Coordination</h3>
                <p className="text-muted-foreground font-body text-sm">Smart resource management and AI teamwork allow for smooth scaling and collaboration of many AI agents on diverse tasks.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <InfinityIcon className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Highly Extensible System</h3>
                <p className="text-muted-foreground font-body text-sm">A comprehensive toolkit and flexible APIs allow easy integration with current or future technologies, fostering a universal ecosystem for smart automation.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Foundation for True Digital Autonomy</h2>
              <p className="font-body text-muted-foreground mb-4 text-lg">The Eon Platform is more than just a tool; it's a system for creating truly independent digital helpers. It provides the essential building blocks for AI agents to perceive, reason, learn, and act with growing independence and sophistication.</p>
              <p className="font-body text-muted-foreground mb-6 text-lg">From self-managing global logistics to AI-driven scientific discovery, Eon is built to power solutions previously only imagined. We provide the foundation for a future where digital intelligence is a key, proactive force for global progress.</p>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link href="/book-demo">
                  Request Technical Deep Dive
                </Link>
              </Button>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x450.png" 
                alt="Visualization of the Mendus Eon Platform's architecture" 
                width={600} 
                height={450}
                className="rounded-lg shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                data-ai-hint="platform workflow"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
