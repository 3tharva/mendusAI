
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Users, Brain, Zap, Shield, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Mendus Team - Visionaries Building the Future',
  description: 'Meet the Mendus team: a group of pioneering researchers, skilled engineers, and thoughtful ethicists dedicated to the responsible advancement of artificial intelligence.',
};

export default function CompanyTeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Aris Thorne',
      role: 'Chief AI Architect & Ethics Lead',
      bio: 'A multi-talented expert whose work covers AI cognition, ethics, and new cybernetic ideas. Dr. Thorne leads Mendus with a vision of humans and AI evolving together.',
      imageSrc: 'https://placehold.co/400x400.png',
      imageHint: 'scientist portrait thoughtful',
      icon: Brain,
    },
    {
      name: 'Lyra Nova',
      role: 'Head of Eon Platform Engineering & AI Protocols',
      bio: 'Lyra designs the highly scalable systems for the Eon Platform. Her research focuses on how large AI networks behave and how to identify true AI understanding.',
      imageSrc: 'https://placehold.co/400x400.png',
      imageHint: 'female engineer coding',
      icon: Zap,
    },
    {
      name: 'Kaelen Voss',
      role: 'Director of AI Strategy & Global Solutions',
      bio: 'Voss leads the deployment of Mendus solutions to solve global challenges, from climate change to resource management, ushering in an era of intelligent cooperation.',
      imageSrc: 'https://placehold.co/400x400.png',
      imageHint: 'strategy leader modern',
      icon: Users,
    },
    {
      name: 'Seraphina Moon',
      role: 'Guardian of Algorithmic Fairness & Transparency',
      bio: 'Dedicated to ensuring all Mendus AI systems are fair and transparent, Seraphina develops advanced methods for AI explainability and reducing bias.',
      imageSrc: 'https://placehold.co/400x400.png',
      imageHint: 'data scientist screen',
      icon: Shield,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Users className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              The Mendus Team: Architects of Tomorrow
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Mendus is more than a company; it's a team of brilliant individuals. We are researchers, engineers, ethicists, and visionaries united by a common goal: to responsibly guide the evolution of intelligence.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Our Core Leaders & Innovators</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-primary/20 transition-shadow">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={180}
                    height={180}
                    className="rounded-full object-cover flex-shrink-0 border-4 border-primary/50"
                    data-ai-hint={member.imageHint}
                  />
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                        <member.icon className="h-7 w-7 mr-2 text-primary" />
                        <h3 className="text-2xl font-semibold text-primary">{member.name}</h3>
                    </div>
                    <p className="text-md font-medium text-muted-foreground mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground font-body">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
             <p className="text-center text-muted-foreground font-body text-lg mt-16 max-w-2xl mx-auto">
              Our full team covers many fields and operates across a global network, supported by our own advanced AI collaborators. The individuals shown here are key members of our growing web of expertise.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Lightbulb className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">A Culture of Innovation and Inquiry</h2>
            <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
              At Mendus, we foster an environment of constant curiosity, transparency, and intellectual challenge. We question existing ideas and build a collaborative space where bold new concepts can grow and flourish, pushing the limits of what's known and what can be achieved.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
