import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Linkedin, Github, Briefcase } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Chief AI Architect',
    expertise: 'PhD in Agentic Systems, Ex-Google AI Lead',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'scientist portrait',
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Lyra Kael',
    role: 'Lead ML Engineer',
    expertise: 'Specialist in Reinforcement Learning & LLMs',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'engineer female',
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Jax Volkov',
    role: 'Head of Product & Innovation',
    expertise: 'Serial Tech Entrepreneur, AI Ethics Advocate',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'businessman tech',
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Nyx Orion',
    role: 'Senior Systems Engineer',
    expertise: 'Distributed AI Systems & Scalability Expert',
    imageUrl: 'https://placehold.co/300x300.png',
    dataAiHint: 'developer serious',
    social: { linkedin: '#', github: '#' },
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow-primary">
            Architects of Synaptic Intelligence
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Meet the visionary minds driving the agentic AI revolution at SynapseAI.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center bg-card/70 backdrop-blur-md border-border/50 shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-accent mb-4 shadow-lg shadow-accent/30">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={member.dataAiHint}
                  />
                </div>
                <CardTitle className="text-xl font-headline text-accent">{member.name}</CardTitle>
                <CardDescription className="text-sm text-primary font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-4 h-10 overflow-hidden">{member.expertise}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent icon-glow-accent transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent icon-glow-accent transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
