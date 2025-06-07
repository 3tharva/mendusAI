import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Cpu, Brain, Users, Target } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="vision" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-[-1] opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary text-glow-primary">
          SynapseAI
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          Engineering the Future of Intelligence. We are pioneering agentic AI to solve complex problems and unlock unprecedented possibilities across industries.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transform transition-transform hover:scale-105">
            <Link href="#services">Explore Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:text-accent shadow-lg shadow-accent/20 transform transition-transform hover:scale-105">
            <Link href="#newsletter">Join Waitlist</Link>
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-20 lg:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Cpu, title: "Agentic Architecture", description: "Building autonomous AI agents that perceive, reason, and act." },
            { icon: Brain, title: "Advanced Reasoning", description: "Integrating cutting-edge learning models for complex problem-solving." },
            { icon: Users, title: "Human-AI Collaboration", description: "Designing systems where AI augments human capabilities seamlessly." },
            { icon: Target, title: "Impactful Solutions", description: "Focusing on real-world applications that drive innovation and efficiency." },
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-primary/20 transition-shadow">
              <feature.icon className="w-10 h-10 mb-4 text-primary icon-glow-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
