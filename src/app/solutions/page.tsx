
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SolutionsGrid from '@/components/sections/SolutionsGrid';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Solutions - akiraAI',
  description: 'Explore the intelligent automation solutions offered by akiraAI to enhance your business processes and enterprise systems.',
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Intelligent Automation Solutions
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              akiraAI delivers cutting-edge solutions to enhance your business processes and enterprise systems with agentic automation, enabling smarter workflows and operational excellence.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
              <Link href="/book-demo">
                Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
        
        <SolutionsGrid />

      </main>
      <Footer />
    </div>
  );
}
