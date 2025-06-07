
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, Layers, FlaskConical, Zap } from 'lucide-react';
import type { Industry } from '@/lib/industry-data';

interface IndustryDetailPageContentProps {
  industry: Industry;
}

export default function IndustryDetailPageContent({ industry }: IndustryDetailPageContentProps) {
  const { title, longDescription, icon: Icon, useCases, technicalAspects, heroImage, colorClass } = industry;

  return (
    <div className="max-w-7xl mx-auto">
      <section className="relative py-24 md:py-40 rounded-b-xl overflow-hidden">
        <Image
          src={heroImage.path}
          alt={`${title} industry hero image`}
          fill
          objectFit="cover"
          className="opacity-20"
          data-ai-hint={heroImage.hint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className={`inline-flex p-4 rounded-full bg-primary/10 ${colorClass} mb-8 shadow-lg`}>
            <Icon className="h-16 w-16 md:h-20 md:w-20 animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
            Mendus & The {title} Sector: A Paradigm Shift
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {longDescription}
          </p>
        </div>
      </section>

      <section id="use-cases" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Transformative Agentic Use Cases in {title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
                <Image 
                  src={`https://placehold.co/600x350.png`} 
                  alt={useCase.title} 
                  width={600} 
                  height={350} 
                  className="w-full h-48 object-cover"
                  data-ai-hint={useCase.imageHint}
                />
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3 mb-2">
                     <CheckCircle2 className={`h-7 w-7 ${colorClass} flex-shrink-0 mt-1`} />
                    <CardTitle className="text-xl text-card-foreground">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-body text-muted-foreground text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technical-aspects" className="py-16 md:py-24 bg-secondary/30 rounded-xl my-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Core Technological Enablers for {title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {technicalAspects.map((aspect, index) => (
              <div key={index} className="p-6 bg-card rounded-lg shadow-lg hover:shadow-primary/30 transition-shadow">
                <Layers className={`h-8 w-8 mb-3 mx-auto ${colorClass}`} />
                <p className="font-semibold text-foreground text-sm">{aspect}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <FlaskConical className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Co-Create the Future of {title} with Mendus
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            The potential for agentic transformation in the {title.toLowerCase()} sector is boundless. Partner with Mendus to pioneer the next generation of intelligent solutions.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-10 py-7">
            <Link href="/book-demo">
              Discuss Your {title} Vision <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
