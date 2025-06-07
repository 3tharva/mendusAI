
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, Brain, Briefcase, Lightbulb, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mendus Sentinels: The Apex Digital Workforce',
  description: 'Discover Mendus Sentinels - autonomous cognitive entities engineered for hyper-dimensional task execution, continuous meta-learning, and seamless human-agent synergy. The future of work, actualized.',
};

export default function DigitalWorkersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Bot className="h-16 w-16 mx-auto mb-6 text-primary animate-float" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Mendus Sentinels: The Cognitive Vanguard
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Unleash the Mendus Sentinels: a new echelon of digital workforce. These are not mere automatons; they are autonomous cognitive entities, architected for complex problem-solving, emergent strategy, and continuous self-improvement through federated sentience.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
              <Link href="/solutions">
                Deploy Your Sentinel Cohort <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Core Capabilities of Mendus Sentinels</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Brain className="h-12 w-12 mx-auto mb-5 text-primary" />
                <h3 className="text-xl font-semibold mb-3 text-foreground text-center">Hyper-Cognitive Processing</h3>
                <p className="text-muted-foreground font-body text-sm text-center">Execute multi-threaded complex cognitive tasks with neuro-symbolic reasoning, capable of abstract thought and causal inference beyond conventional AI.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Lightbulb className="h-12 w-12 mx-auto mb-5 text-primary" />
                <h3 className="text-xl font-semibold mb-3 text-foreground text-center">Emergent Meta-Learning</h3>
                <p className="text-muted-foreground font-body text-sm text-center">Continuously evolve capabilities through a decentralized learning network, adapting to novel scenarios and optimizing strategies autonomously.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Zap className="h-12 w-12 mx-auto mb-5 text-primary" />
                <h3 className="text-xl font-semibold mb-3 text-foreground text-center">Proactive Operational Autonomy</h3>
                <p className="text-muted-foreground font-body text-sm text-center">Operate 24/7/365 with minimal human oversight, anticipating needs, preempting issues, and executing tasks with unparalleled efficiency and reliability.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://placehold.co/600x450.png" 
                alt="Conceptual art of a Mendus Sentinel interfacing with complex data streams" 
                width={600} 
                height={450}
                className="rounded-lg shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                data-ai-hint="digital worker sentinel data"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sentinels: Beyond Automation, Towards Augmentation</h2>
              <p className="font-body text-muted-foreground mb-4 text-lg">Mendus Sentinels are engineered not to replace human ingenuity, but to amplify it. They handle the computationally intensive and data-saturated tasks, freeing human intellect for strategic oversight, creative ideation, and ethical guidance.</p>
              <p className="font-body text-muted-foreground mb-6 text-lg">From orchestrating global supply-chain logistics with quantum precision to conducting autonomous research in materials science or genomics, Sentinels are tailored for mission-critical roles demanding extreme cognitive load and adaptability.</p>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link href="/book-demo">
                  Architect Your Custom Sentinel
                </Link>
              </Button>
            </div>
          </div>
        </section>

         <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Specialized Sentinel Archetypes</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Briefcase className="h-10 w-10 mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Strategos Sentinel</h3>
                <p className="text-muted-foreground font-body text-xs">For enterprise-wide strategic planning, market disruption modeling, and geopolitical risk analysis.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <ShieldCheck className="h-10 w-10 mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Aegis Sentinel</h3>
                <p className="text-muted-foreground font-body text-xs">Cybersecurity specialists for autonomous threat hunting, zero-day vulnerability patching, and digital fortress management.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Brain className="h-10 w-10 mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Logos Sentinel</h3>
                <p className="text-muted-foreground font-body text-xs">Dedicated to R&D, accelerating scientific discovery, hypothesis generation, and complex data interpretation.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Bot className="h-10 w-10 mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Nexus Sentinel</h3>
                <p className="text-muted-foreground font-body text-xs">Orchestrates human-agent teams, optimizing collaborative workflows and ensuring seamless communication across cognitive domains.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
