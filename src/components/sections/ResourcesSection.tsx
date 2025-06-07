import { BookOpen, ExternalLink, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const resources = [
  {
    title: 'Understanding Agentic AI',
    description: 'An in-depth overview of the principles and potential of agentic artificial intelligence.',
    link: '#', // Placeholder link
    icon: BrainCircuit,
  },
  {
    title: 'The Future of Large Language Models',
    description: 'Exploring advancements in LLMs and their role in creating sophisticated AI agents.',
    link: '#', // Placeholder link
    icon: BookOpen,
  },
  {
    title: 'Ethical Considerations in AI Development',
    description: 'A look into the ethical frameworks guiding responsible AI innovation.',
    link: '#', // Placeholder link
    icon: ExternalLink,
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-background/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow-primary">
            Explore the World of Agentic AI
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Dive deeper into the technologies and concepts that power SynapseAI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-card/70 backdrop-blur-md border-border/50 shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <resource.icon className="w-8 h-8 text-primary icon-glow-primary mb-3" />
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center">
                    Read More <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
                <CardTitle className="text-xl font-headline">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{resource.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
