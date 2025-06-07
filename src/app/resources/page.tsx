
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Mic } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Resources - akiraAI',
  description: 'Explore whitepapers, case studies, blog articles, and webinars from akiraAI to learn more about intelligent automation.',
};

export default function ResourcesPage() {
  const resources = [
    { title: 'The Future of Agentic Automation', type: 'Whitepaper', icon: FileText, link: '#', description: 'A deep dive into the evolving landscape of AI agents and their impact on business.', imageHint: 'whitepaper technology document' },
    { title: 'Scaling AI in Financial Services', type: 'Case Study', icon: BookOpen, link: '#', description: 'How a leading bank leveraged akiraAI to optimize risk management.', imageHint: 'case study finance report' },
    { title: 'Top 5 AI Trends for 2024', type: 'Blog Article', icon: FileText, link: '#', description: 'Our expert insights on the AI innovations shaping the year ahead.', imageHint: 'blog article ai trends' },
    { title: 'Webinar: AI for Customer Experience', type: 'Webinar Recording', icon: Mic, link: '#', description: 'Learn how to transform CX with intelligent automation and personalization.', imageHint: 'webinar presentation screen' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Knowledge Hub & Resources
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Dive deeper into the world of intelligent automation with akiraAI. Explore our collection of whitepapers, case studies, articles, and webinars to stay informed and inspired.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <Card key={index} className="flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <CardHeader>
                      <div className="flex items-center mb-3">
                        <resource.icon className="h-8 w-8 mr-3 text-primary" />
                        <CardTitle className="text-xl text-foreground">{resource.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm text-muted-foreground">{resource.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-body text-muted-foreground text-sm mb-4">{resource.description}</p>
                      {/* Placeholder for image, ideally load dynamically or use specific ones */}
                      {/* <Image src={`https://placehold.co/400x200.png`} alt={resource.title} width={400} height={200} className="rounded-md aspect-video object-cover mb-4" data-ai-hint={resource.imageHint} /> */}
                    </CardContent>
                  </div>
                  <div className="p-6 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={resource.link}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
             <div className="mt-16 text-center">
                <p className="text-muted-foreground font-body mb-4">Looking for something specific?</p>
                <Button size="lg" asChild>
                    <Link href="/contact">Contact Our Experts</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
