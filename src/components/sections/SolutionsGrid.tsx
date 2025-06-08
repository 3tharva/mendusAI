
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { solutions } from '@/lib/solution-data';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface SolutionsGridProps {
  limit?: number;
  showViewAllButton?: boolean;
  title?: string;
  subtitle?: string;
}

export default function SolutionsGrid({
  limit,
  showViewAllButton = false,
  title = "Our Core Solutions",
  subtitle = "Discover how Mendus empowers businesses with intelligent automation."
}: SolutionsGridProps) {
  const displayedSolutions = limit ? solutions.slice(0, limit) : solutions;

  return (
    <section className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className="mb-10 text-center md:text-left">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedSolutions.map((solution) => (
            <Link href={`/solutions/${solution.slug}`} key={solution.slug} className="block group h-full">
              <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 bg-card flex flex-col justify-between">
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
                   <Button variant="link" className="px-0 text-sm font-semibold text-primary group-hover:underline">
                    Explore Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        {showViewAllButton && solutions.length > (limit || 0) && (
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
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
