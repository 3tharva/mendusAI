
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { solutions, Solution } from '@/lib/solution-data'; 
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface SolutionsGridProps {
  limit?: number; // Optional limit for homepage preview
  showViewAllButton?: boolean;
}

export default function SolutionsGrid({ limit, showViewAllButton = false }: SolutionsGridProps) {
  const displayedSolutions = limit ? solutions.slice(0, limit) : solutions;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {limit && ( // Only show this title if it's a limited preview (e.g., on homepage)
          <div className="mb-10 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Our Core Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how Mendus empowers businesses with intelligent automation.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedSolutions.map((solution) => (
            <Link href={`/solutions/${solution.slug}`} key={solution.slug} className="block group">
              <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary/50 bg-card flex flex-col justify-between">
                <div>
                  <CardHeader className="flex flex-row items-start gap-4 pb-3">
                    <div className={`p-3 rounded-lg bg-primary/10 ${solution.iconColorClass || 'text-primary'}`}>
                      <solution.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary mt-1">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm text-muted-foreground group-hover:text-foreground/80">
                      {solution.shortDescription}
                    </CardDescription>
                  </CardContent>
                </div>
                <div className="p-4 pt-2 mt-auto">
                   <Button variant="link" className="px-0 text-sm text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        {showViewAllButton && solutions.length > (limit || 0) && (
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/solutions">
                View All Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
