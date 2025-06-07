
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Layers, Zap, Settings, Cpu, BrainCircuit, ShieldCheck, InfinityIcon } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Mendus Eon Platform - Nexus of Agentic Intelligence',
  description: 'Explore the Mendus Eon Platform: a hyper-converged architecture for deploying and orchestrating planetary-scale agentic ecosystems. Discover its quantum-inspired compute, neuro-symbolic core, and decentralized data fabric.',
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
              Behold the Eon Platform: the substrate of next-generation agentic intelligence. Engineered for exascale computation and cognitive orchestration, Eon empowers the creation and deployment of autonomous, self-evolving AI ecosystems.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
              <Link href="/book-demo">
                Interface with Eon <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Architectural Pillars of Eon</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Zap className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Quantum-Inspired Compute Core</h3>
                <p className="text-muted-foreground font-body text-sm">Leveraging principles of quantum annealing and neuromorphic processing for unprecedented computational density and problem-solving velocity across NP-hard complexities.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <BrainCircuit className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Neuro-Symbolic Agent Framework</h3>
                <p className="text-muted-foreground font-body text-sm">A hybrid AI architecture integrating deep learning's pattern recognition with symbolic reasoning's causality and abstraction, enabling sophisticated agentic cognition and explainability.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Layers className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Decentralized Data Fabric (DDF)</h3>
                <p className="text-muted-foreground font-body text-sm">A cryptographically secured, globally distributed ledger system ensuring data sovereignty, immutable provenance, and privacy-preserving federated learning for AI agents.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <ShieldCheck className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Ethical Governance Layer (EGL)</h3>
                <p className="text-muted-foreground font-body text-sm">Embedded axiomatic safety protocols and continuous ethical alignment monitoring, ensuring all agentic operations adhere to predefined ethical and regulatory frameworks.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Settings className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Dynamic Orchestration Engine</h3>
                <p className="text-muted-foreground font-body text-sm">Adaptive resource allocation and emergent swarm intelligence coordination, enabling seamless scaling and collaboration of vast agent populations across diverse tasks.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <InfinityIcon className="h-12 w-12 mb-5 text-primary" />
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Infinite Extensibility via APIs</h3>
                <p className="text-muted-foreground font-body text-sm">A comprehensive SDK and hyper-dimensional API mesh allow integration with any existing or future technology, fostering a universal ecosystem for intelligent automation.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Genesis of True Digital Autonomy</h2>
              <p className="font-body text-muted-foreground mb-4 text-lg">The Eon Platform is not merely a tool; it's a crucible for forging genuine digital autonomy. It provides the foundational elements for AI agents to perceive, reason, learn, and act with increasing levels of independence and sophistication.</p>
              <p className="font-body text-muted-foreground mb-6 text-lg">From self-optimizing global logistics networks to autonomous scientific discovery engines, Eon is engineered to power solutions that were once confined to the realm of science fiction. We provide the bedrock for a future where digital intelligence becomes an integral, proactive force for global transformation.</p>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link href="/resources">
                  Explore Eon Technical Schematics
                </Link>
              </Button>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x450.png" 
                alt="Abstract visualization of the Mendus Eon Platform's core architecture" 
                width={600} 
                height={450}
                className="rounded-lg shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                data-ai-hint="abstract platform core technology"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
