import Link from 'next/link';
import { ArrowRight, Briefcase, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { industries, Industry } from '@/lib/industry-data'; // Using only first 8 for homepage preview

const displayedIndustries = industries.slice(0, 8); // Show a subset on the homepage/main industries section

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto md:mx-0">
            AI-powered solutions tailored for finance, telecom, retail, energy, healthcare, media, gaming, manufacturing, and more.
          </p>
          <Link href="/industries" className="inline-flex items-center text-accent hover:text-accent/80 font-medium text-lg">
            Explore All Industries <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedIndustries.map((industry) => (
            <Link href={`/industries/${industry.slug}`} key={industry.slug} className="block group">
              <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 bg-card hover:bg-card/90 flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${industry.colorClass}`}>
                    <industry.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-muted-foreground group-hover:text-foreground">
                    {industry.shortDescription}
                  </CardDescription>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                   <Button variant="link" className="px-0 text-primary group-hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base px-10 py-7">
            <Link href="/join-us">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}