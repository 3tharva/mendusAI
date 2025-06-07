
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, Brain, Briefcase, Lightbulb, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mendus Sentinels: The Advanced Digital Workforce',
  description: 'Meet Mendus Sentinels - smart, autonomous AI agents designed for complex tasks, continuous learning, and seamless human-AI teamwork. The future of work is here.',
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
              Mendus Sentinels: Your Intelligent Digital Team
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Introducing Mendus Sentinels: a new kind of digital worker. These aren't just simple programs; they are intelligent AI agents built for complex problem-solving, creative strategies, and constant self-improvement through shared learning.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
              <Link href="/solutions">
                Deploy Your Sentinel Team <ArrowRight className="ml-2 h-5 w-5" />
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
                <h3 className="text-xl font-semibold mb-3 text-foreground text-center">Advanced Thinking</h3>
                <p className="text-muted-foreground font-body text-sm text-center">Sentinels can handle complex mental tasks using a mix of logic and pattern recognition, allowing for abstract thought and understanding cause-and-effect beyond typical AI.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Lightbulb className="h-12 w-12 mx-auto mb-5 text-primary" />
                <h3 className="text-xl font-semibold mb-3 text-foreground text-center">Continuous Learning</h3>
                <p className="text-muted-foreground font-body text-sm text-center">They constantly improve their skills through a shared learning network, adapting to new situations and finding better strategies on their own.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Zap className="h-12 w-12 mx-auto mb-5 text-primary" />
                <h3 className="text-xl font-semibold mb-3 text-foreground text-center">Independent Operation</h3>
                <p className="text-muted-foreground font-body text-sm text-center">Sentinels work 24/7 with minimal human guidance, anticipating needs, preventing issues, and carrying out tasks with exceptional efficiency and reliability.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://placehold.co/600x450.png" 
                alt="Mendus Sentinel AI interacting with complex data" 
                width={600} 
                height={450}
                className="rounded-lg shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                data-ai-hint="digital worker data interface"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sentinels: More Than Automation, True Partners</h2>
              <p className="font-body text-muted-foreground mb-4 text-lg">Mendus Sentinels are designed not to replace human skill, but to enhance it. They take on the heavy lifting of complex data and demanding tasks, freeing up human brainpower for big-picture strategy, creative thinking, and ethical leadership.</p>
              <p className="font-body text-muted-foreground mb-6 text-lg">From managing global supply chains with incredible precision to conducting independent research in new materials or medical science, Sentinels are perfect for crucial roles that demand high-level thinking and adaptability.</p>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link href="/book-demo">
                  Design Your Custom Sentinel
                </Link>
              </Button>
            </div>
          </div>
        </section>

         <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Specialized Sentinel Types</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Briefcase className="h-10 w-10 mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Strategos Sentinel</h3>
                <p className="text-muted-foreground font-body text-xs">For company-wide strategic planning, analyzing market changes, and assessing global risks.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <ShieldCheck className="h-10 w-10 mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Aegis Sentinel</h3>
                <p className="text-muted-foreground font-body text-xs">Cybersecurity experts for automated threat detection, fixing vulnerabilities, and managing digital security.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Brain className="h-10 w-10 mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Logos Sentinel</h3>
                <p className="text-muted-foreground font-body text-xs">Focused on R&D, speeding up scientific discovery, generating new ideas, and interpreting complex data.</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Bot className="h-10 w-10 mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Nexus Sentinel</h3>
                <p className="text-muted-foreground font-body text-xs">Manages human-AI teams, optimizing how they work together and ensuring clear communication across different types of thinking.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
