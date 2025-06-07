
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, BarChart3, Users, Settings, Zap, BrainCircuit, Database } from 'lucide-react';
import type { Solution } from '@/lib/solution-data';

interface SolutionDetailPageContentProps {
  solution: Solution;
}

export default function SolutionDetailPageContent({ solution }: SolutionDetailPageContentProps) {
  const { title, longDescription, icon: Icon, iconColorClass, keyFeatures, benefits, exampleUseCases, heroImage } = solution;

  const benefitIcons = [BarChart3, Users, Settings, Zap, BrainCircuit, Database];


  return (
    <div className="max-w-7xl mx-auto">
      <section className="relative py-20 md:py-32 rounded-b-xl overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-transparent">
        <Image
          src={heroImage.path}
          alt={`${title} solution hero image`}
          fill
          objectFit="cover"
          className="opacity-10"
          data-ai-hint={heroImage.hint}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className={`inline-flex p-4 rounded-xl bg-primary/10 ${iconColorClass || 'text-primary'} mb-6 shadow-md`}>
              <Icon className="h-12 w-12 md:h-16 md:w-16 animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 tracking-tight">
              {title}
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground">
              {longDescription}
            </p>
          </div>
        </div>
      </section>

      <section id="key-features" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Core Algorithmic & Operational Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-border/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-lg">
                <CardContent className="p-6 flex items-start">
                  <CheckCircle2 className={`h-7 w-7 mr-4 mt-1 flex-shrink-0 ${iconColorClass || 'text-primary'}`} />
                  <p className="font-body text-foreground text-base">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Transformative Benefits & Strategic Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefitIcons[index % benefitIcons.length];
              return (
                <Card key={index} className="bg-background shadow-xl hover:shadow-primary/30 transition-shadow duration-300 rounded-xl flex flex-col">
                  <CardHeader className="pb-3">
                      <div className="flex items-center mb-2">
                        <BenefitIcon className={`mr-3 h-8 w-8 ${iconColorClass || 'text-primary'}`} />
                        <CardTitle className="text-xl text-foreground">Strategic Uplift #{index + 1}</CardTitle>
                      </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-body text-muted-foreground text-base">{benefit}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {exampleUseCases && exampleUseCases.length > 0 && (
        <section id="use-cases" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
              Illustrative Deployment Scenarios
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
              {exampleUseCases.map((useCase, index) => (
                <Card key={index} className="bg-card hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
                  <Image 
                    src={`https://placehold.co/600x350.png`} 
                    alt={useCase.title} 
                    width={600} 
                    height={350} 
                    className="w-full h-56 object-cover"
                    data-ai-hint={useCase.imageHint}
                  />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-foreground">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-body text-muted-foreground text-sm">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="cta" className="py-20 md:py-32 text-center bg-primary/5 rounded-t-xl">
        <div className="container mx-auto px-4 md:px-6">
          <Zap className="h-12 w-12 mx-auto text-primary mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Integrate {title} into Your Operational Matrix
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            The future is not adopted; it is architected. Partner with Mendus to deploy this solution and redefine the boundaries of possibility within your enterprise.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-10 py-7">
            <Link href="/book-demo">
              Schedule Strategic Integration Briefing <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
