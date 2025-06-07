
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Library, FileText, Brain, GitFork, Download, ShieldCheck } from 'lucide-react'; // Added ShieldCheck
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import Image from 'next/image'; // Image component commented out as per existing file

export const metadata: Metadata = {
  title: 'The Mendus Archives: Foundational AI Knowledge',
  description: 'Access key whitepapers, technical documents, ethical guidelines, and foundational research from Mendus. Delve into the core knowledge shaping intelligent AI.',
};

export default function ExploreLibraryPage() {
  const libraryItems = [
    {
      id: 'wp-001',
      title: 'Axioms of AI Consciousness: A Framework',
      type: 'Whitepaper',
      category: 'Theoretical AI',
      icon: Brain,
      description: 'A clear mathematical framework for understanding the conditions for emergent consciousness in AI. Explores information integration and cognitive models.',
      dataAiHint: 'ai consciousness brain math',
    },
    {
      id: 'ts-002',
      title: 'Eon Platform: Core Orchestration Schematics',
      type: 'Technical Schematic',
      category: 'Platform Architecture',
      icon: GitFork,
      description: 'Detailed architectural blueprints of the Mendus Eon Platform, including its compute layer, AI agent framework, and decentralized data system.',
      dataAiHint: 'platform architecture diagram',
    },
    {
      id: 'ef-003',
      title: 'The Asimov-Rossum Ethical Guide for AGI',
      type: 'Ethical Framework',
      category: 'AI Ethics & Governance',
      icon: ShieldCheck,
      description: 'A comprehensive ethical guide for developing and deploying Artificial General Intelligence, addressing value alignment, risk mitigation, and societal impact.',
      dataAiHint: 'ai ethics document shield',
    },
    {
      id: 'rp-004',
      title: 'Emergent Swarm Intelligence: A Complexity Study',
      type: 'Research Paper',
      category: 'Agentic Systems',
      icon: FileText,
      description: 'Investigates how complex, adaptive, and intelligent swarm behaviors arise from simple interaction rules in large populations of AI agents.',
      dataAiHint: 'swarm intelligence collective behavior',
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
              A curated collection of foundational knowledge, key research, and technical blueprints from Mendus. Explore the core principles shaping the future of AI.
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
                  <CardContent>
                    <p className="font-body text-muted-foreground text-sm mb-4 flex-grow">{item.description}</p>
                    {/* <Image src={`https://placehold.co/400x200.png?text=${item.title.substring(0,10)}`} alt={item.title} width={400} height={200} className="rounded-md aspect-video object-cover mb-4" data-ai-hint={item.dataAiHint} /> */}
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button asChild variant="outline" className="w-full hover:bg-primary/10">
                      <Link href={`/resources/library/${item.id}`}>
                        Access Document <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-muted-foreground font-body mb-4">Seeking restricted documents or contributing research?</p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/support/contact">Submit Access Request</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
