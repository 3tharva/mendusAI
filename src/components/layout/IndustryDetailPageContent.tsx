
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Industry, IndustryUseCase } from '@/lib/industry-data';

interface IndustryDetailPageContentProps {
  industry: Industry;
}

export default function IndustryDetailPageContent({ industry }: IndustryDetailPageContentProps) {
  const { title, longDescription, icon: Icon, useCases, technicalAspects, heroImage, colorClass } = industry;

  return (
    <div className="max-w-6xl mx-auto">
      <section className="relative py-20 md:py-32 rounded-b-xl overflow-hidden">
        <Image
          src={heroImage.path}
          alt={`${title} industry hero image`}
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          data-ai-hint={heroImage.hint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className={`inline-flex p-4 rounded-full bg-primary/10 ${colorClass} mb-6`}>
            <Icon className="h-12 w-12 md:h-16 md:w-16" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-4">
            AI in {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {longDescription}
          </p>
        </div>
      </section>

      <section id="use-cases" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Key AI Use Cases in {title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                     <CheckCircle2 className={`h-8 w-8 ${colorClass}`} />
                    <CardTitle className="text-xl text-card-foreground">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{useCase.description}</p>
                  <Image 
                    src={`https://placehold.co/600x400.png`} 
                    alt={useCase.title} 
                    width={600} 
                    height={400} 
                    className="rounded-md aspect-video object-cover"
                    data-ai-hint={useCase.imageHint}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technical-aspects" className="py-16 md:py-24 bg-card rounded-xl">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Technical Pillars for {title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technicalAspects.map((aspect, index) => (
              <div key={index} className="p-6 bg-background rounded-lg shadow-md text-center">
                <p className="font-semibold text-foreground">{aspect}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Transform Your {title} Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let Mendus be your partner in leveraging AI for groundbreaking results in the {title.toLowerCase()} sector.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg px-8 py-6">
            <Link href="/join-us">
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
