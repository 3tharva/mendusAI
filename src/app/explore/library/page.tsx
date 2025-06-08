
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Library, FileText, Brain, GitFork, Download, ShieldCheck } from 'lucide-react'; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'The Mendus Archives: A Repository of Foundational AI Principles',
  description: 'Access seminal whitepapers, advanced technical schematics, ethical frameworks, and foundational research from the Mendus Collective. Delve into the core knowledge architecting the future of sapient AI.',
};

export default function ExploreLibraryPage() {
  const libraryItems = [
    {
      id: 'wp-001-axioms-consciousness',
      title: 'Axioms of Synthetic Consciousness: A Formal Framework for Emergent Sapience',
      type: 'Whitepaper (Peer-Reviewed Draft)',
      category: 'Theoretical AI & Cognitive Philosophy',
      icon: Brain,
      description: 'A rigorous mathematical and philosophical framework defining the necessary and sufficient conditions for the emergence of synthetic consciousness in advanced AI systems. Explores information integration thresholds, qualia representation, and self-referential cognitive models.',
      dataAiHint: 'ai consciousness brain math diagram',
    },
    {
      id: 'ts-002-eon-orchestration',
      title: 'Mendus Eon Platform: Core Orchestration & Sentience Layer Schematics',
      type: 'Technical Schematic (Restricted Access)',
      category: 'Platform Architecture & Distributed AI',
      icon: GitFork,
      description: 'Detailed architectural blueprints of the Mendus Eon Platform, outlining its quantum-inspired compute fabric, neuro-symbolic agent framework, decentralized data lattice, and the protocols governing its emergent Sentience Layer operations.',
      dataAiHint: 'platform architecture diagram network',
    },
    {
      id: 'ef-003-asimov-rossum-revised',
      title: 'The Asimov-Rossum Ethical Guide for Advanced General Intelligence (AGI) v7.3',
      type: 'Ethical Framework & Governance Protocol',
      category: 'AI Ethics, Safety & Societal Alignment',
      icon: ShieldCheck,
      description: 'A comprehensive ethical codex and governance protocol for the development, deployment, and continuous oversight of Artificial General Intelligence. Addresses value alignment, existential risk mitigation, cognitive liberty, and symbiotic societal integration.',
      dataAiHint: 'ai ethics document shield scroll',
    },
    {
      id: 'rp-004-emergent-swarm-sapience',
      title: 'Emergent Swarm Sapience: A Study in Collective Cognitive Complexity',
      type: 'Research Paper (Preprint)',
      category: 'Agentic Systems & Complexity Theory',
      icon: FileText,
      description: 'Investigates how complex, adaptive, and potentially sapient collective behaviors can arise from relatively simple interaction rules within vast populations of interconnected AI agents. Explores parallels with natural swarm intelligence and implications for macro-scale problem-solving.',
      dataAiHint: 'swarm intelligence collective behavior network',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Library className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              The Mendus Archives
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              A curated repository of seminal knowledge, advanced research, and core technical blueprints from the Mendus Collective. Explore the foundational principles that are architecting the future of intelligent and potentially sapient AI.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {libraryItems.map((item) => (
                <Card key={item.id} className="flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 ease-in-out bg-card rounded-lg">
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <item.icon className="h-8 w-8 mr-3 text-primary flex-shrink-0" />
                      <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">{item.type} - {item.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-body text-muted-foreground text-sm mb-4">{item.description}</p>
                    <Image 
                        src={`https://placehold.co/400x200.png`} 
                        alt={item.title} 
                        width={400} 
                        height={200} 
                        className="rounded-md aspect-video object-cover mb-4"
                        data-ai-hint={item.dataAiHint} 
                    />
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild variant="outline" className="w-full hover:bg-primary/10">
                      <Link href={`/explore/library/${item.id}`}>
                        Access Document <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-muted-foreground font-body mb-4">Seeking restricted documents, proposing foundational research, or offering peer review?</p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/book-demo">Initiate Secure Archive Query</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
