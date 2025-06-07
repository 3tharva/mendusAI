
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IndustriesSection from '@/components/sections/IndustriesSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { industries } from '@/lib/industry-data';

export const metadata: Metadata = {
  title: 'Industries - Mendus',
  description: 'Explore AI-powered solutions Mendus offers across various industries.',
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-primary mb-6">
              AI for Every Industry
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Discover how Mendus leverages artificial intelligence to drive innovation, efficiency, and growth across diverse sectors. We tailor solutions to meet your unique challenges.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg px-8 py-6">
              <Link href="/join-us">
                Request a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
        
        <IndustriesSection />

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Why Choose Mendus for Your Industry?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg ">
                <BrainCircuit className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Deep Expertise</h3>
                <p className="text-muted-foreground">Our team combines industry knowledge with AI proficiency to deliver impactful solutions.</p>
              </div>
              <div className="p-6 rounded-lg ">
                <Zap className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Cutting-Edge Tech</h3>
                <p className="text-muted-foreground">We utilize the latest advancements in machine learning, NLP, and computer vision.</p>
              </div>
              <div className="p-6 rounded-lg ">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Tailored Solutions</h3>
                <p className="text-muted-foreground">We don't believe in one-size-fits-all. Our solutions are customized to your specific needs.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
