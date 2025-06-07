
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Users, Lightbulb, Target } from 'lucide-react';
import Image from 'next/image';


export const metadata: Metadata = {
  title: 'About akiraAI - Our Mission and Vision',
  description: 'Learn about akiraAI, our mission to revolutionize industries with agentic automation, our vision for the future of AI, and the values that drive our team.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Building className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              About akiraAI
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              We are pioneers in agentic automation, dedicated to empowering businesses with intelligent solutions that drive transformative growth and operational excellence.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="font-body text-muted-foreground mb-6 text-lg">
                  To democratize intelligent automation by providing powerful, accessible, and adaptable AI agents that solve complex business challenges, enhance human capabilities, and create new opportunities for innovation across industries.
                </p>
                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Our Vision</h2>
                <p className="font-body text-muted-foreground text-lg">
                  To be the leading force in a future where intelligent agents and humans collaborate seamlessly, creating a more efficient, productive, and intelligent world. We envision akiraAI as the core platform powering this transformation.
                </p>
              </div>
              <div>
                <Image 
                  src="https://placehold.co/600x450.png" 
                  alt="akiraAI team collaborating" 
                  width={600} 
                  height={450}
                  className="rounded-lg shadow-xl mx-auto"
                  data-ai-hint="teamwork collaboration office"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Lightbulb className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation</h3>
                <p className="text-muted-foreground font-body text-sm">We relentlessly pursue cutting-edge solutions and foster a culture of creativity and continuous improvement.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Customer Centricity</h3>
                <p className="text-muted-foreground font-body text-sm">Our customers' success is our success. We listen, understand, and deliver solutions that exceed expectations.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Target className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Integrity</h3>
                <p className="text-muted-foreground font-body text-sm">We operate with transparency, honesty, and a strong ethical compass in all our interactions.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <Briefcase className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Excellence</h3>
                <p className="text-muted-foreground font-body text-sm">We strive for the highest standards in our technology, services, and operations, delivering quality and reliability.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Join Us on Our Journey
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              We are always looking for passionate talent and innovative partners to help shape the future of agentic automation.
            </p>
            <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
                    <Link href="/company/careers">Explore Careers</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md text-lg px-8 py-6">
                    <Link href="/contact">Partner With Us</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
