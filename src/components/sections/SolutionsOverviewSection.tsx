
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SolutionsOverviewSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Enhance your Business Processes and Enterprise Systems with Agentic Automation, 
            enabling smarter workflows and operational excellence.
          </p>
          <Button variant="link" asChild className="px-0 text-primary hover:text-primary/80 text-lg">
            <Link href="/solutions">
              Explore Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
