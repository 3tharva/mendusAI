
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, Brain, Briefcase } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Digital Workers - Mendus',
  description: 'Meet your new AI-powered digital workforce. Mendus Digital Workers automate complex tasks and augment human capabilities.',
};

export default function DigitalWorkersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Bot className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Mendus Digital Workers
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Empower your teams with intelligent Digital Workers designed to automate repetitive tasks, analyze complex data, and collaborate seamlessly with your human workforce.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
              <Link href="/solutions">
                See Digital Workers in Action <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">What Can Digital Workers Do?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Intelligent Automation</h3>
                <p className="text-muted-foreground font-body">Handle complex, multi-step processes with advanced decision-making capabilities.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Augment Human Teams</h3>
                <p className="text-muted-foreground font-body">Free up your employees from mundane tasks to focus on strategic initiatives and creativity.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Bot className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">24/7 Operations</h3>
                <p className="text-muted-foreground font-body">Digital Workers operate around the clock, ensuring continuous productivity and responsiveness.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://placehold.co/600x450.png" 
                alt="Digital Worker interacting with systems" 
                width={600} 
                height={450}
                className="rounded-lg shadow-xl mx-auto"
                data-ai-hint="digital worker ai robot"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Tailored to Your Needs</h2>
              <p className="font-body text-muted-foreground mb-4">Mendus Digital Workers can be customized and trained for specific roles and industries, from customer service and finance to IT operations and supply chain management.</p>
              <p className="font-body text-muted-foreground mb-6">They learn and adapt over time, continuously improving their performance and delivering increasing value to your organization.</p>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Discuss Custom Digital Workers
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
