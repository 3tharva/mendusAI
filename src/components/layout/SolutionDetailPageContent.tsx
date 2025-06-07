
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, BarChart3, Users, Settings } from 'lucide-react';
import type { Solution } from '@/lib/solution-data';

interface SolutionDetailPageContentProps {
  solution: Solution;
}

export default function SolutionDetailPageContent({ solution }: SolutionDetailPageContentProps) {
  const { title, longDescription, icon: Icon, iconColorClass, keyFeatures, benefits, exampleUseCases, heroImage } = solution;

  return (
    <div className="max-w-6xl mx-auto">
      <section className="relative py-20 md:py-28 rounded-b-lg overflow-hidden bg-secondary/30">
        {/* Hero image can be added here if a specific one per solution is desired */}
        {/* <Image
          src={heroImage.path}
          alt={`${title} solution hero image`}
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          data-ai-hint={heroImage.hint}
        /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" /> */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className={`inline-flex p-3 rounded-lg bg-primary/10 ${iconColorClass || 'text-primary'} mb-5`}>
              <Icon className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground">
              {longDescription}
            </p>
          </div>
        </div>
      </section>

      <section id="key-features" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border shadow-sm">
                <CardContent className="p-6 flex items-start">
                  <CheckCircle2 className={`h-6 w-6 mr-4 mt-1 flex-shrink-0 ${iconColorClass || 'text-primary'}`} />
                  <p className="font-body text-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center"> 
                        { index === 0 && <BarChart3 className="mr-2 h-6 w-6" />}
                        { index === 1 && <Users className="mr-2 h-6 w-6" />}
                        { index === 2 && <Settings className="mr-2 h-6 w-6" />}
                        { index > 2 && <CheckCircle2 className="mr-2 h-6 w-6" />}
                         Benefit #{index + 1}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {exampleUseCases && exampleUseCases.length > 0 && (
        <section id="use-cases" className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
              Example Use Cases
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {exampleUseCases.map((useCase, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow overflow-hidden">
                  <Image 
                    src={`https://placehold.co/600x300.png`} 
                    alt={useCase.title} 
                    width={600} 
                    height={300} 
                    className="w-full h-48 object-cover"
                    data-ai-hint={useCase.imageHint}
                  />
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground text-sm">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="cta" className="py-16 md:py-24 text-center bg-primary/5 rounded-t-lg">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Implement {title}?
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let Mendus partner with you to leverage this solution for groundbreaking results in your operations.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg px-8 py-6">
            <Link href="/book-demo">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
