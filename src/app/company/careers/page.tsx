
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { BrainCircuit, Zap, Users, Target, ArrowRight, Briefcase, Code, Telescope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Co-Architect the Future - Careers at Mendus',
  description: 'Join the vanguard of the cognitive revolution. Explore transcendent career opportunities at Mendus and contribute to shaping the next epoch of intelligence.',
};

export default function CompanyCareersPage() {
  const jobOpenings = [
    {
      title: 'Quantum Cognition Architect',
      department: 'Advanced R&D Nexus',
      location: 'Decentralized (Global Nodes)',
      description: 'Pioneer novel architectures for AI consciousness, leveraging quantum entanglement and neuromorphic principles. Requires PhD in Quantum Physics/AI + 10 astral cycles experience.',
      icon: BrainCircuit,
      imageHint: 'quantum brain architecture'
    },
    {
      title: 'Ethical Sentience Engineer',
      department: 'Agentic Alignment Division',
      location: 'Geneva Synchronicity Hub',
      description: 'Embed axiomatic ethical frameworks into self-evolving AI agents. Ensure alignment with universal human values and prevent existential risks. Advanced degrees in Philosophy & AI Ethics.',
      icon: ShieldCheck,
      imageHint: 'ethics code abstract'
    },
    {
      title: 'Neuro-Symbolic Linguist',
      department: 'Universal Semantics Core',
      location: 'Alexandria II Digital Library',
      description: 'Develop and refine the core language models that allow Mendus agents to achieve true understanding and generate hyper-contextual communication. Expertise in computational linguistics, formal logic, and ancient languages preferred.',
      icon: Code,
      imageHint: 'language code abstract'
    },
    {
      title: 'Cosmic Scale Data Weaver',
      department: 'Eon Platform Operations',
      location: 'Orion Arm Data Haven',
      description: 'Design and maintain the decentralized data fabric underpinning the Eon platform, ensuring petabyte-scale resilience, FTL data transfer protocols, and information integrity across star systems.',
      icon: Telescope,
      imageHint: 'galaxy data network'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Zap className="h-16 w-16 mx-auto mb-6 text-primary animate-bounce" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Co-Architect the Future at Mendus
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              This is not a job; it's a calling. Mendus invites the galaxy's most brilliant minds to join the vanguard of the cognitive revolution. Together, we will sculpt the very fabric of future intelligence.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Why Embark on Your Journey with Mendus?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
              <div className="p-6">
                <BrainCircuit className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Solve Unprecedented Challenges</h3>
                <p className="text-muted-foreground font-body text-sm">Tackle problems that redefine the boundaries of science, technology, and philosophy. Your work will have a multi-generational impact.</p>
              </div>
              <div className="p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Collaborate with Luminary Minds</h3>
                <p className="text-muted-foreground font-body text-sm">Join a decentralized collective of the world's leading researchers, engineers, and ethicists in a culture of radical innovation.</p>
              </div>
              <div className="p-6">
                <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Define the Next Epoch</h3>
                <p className="text-muted-foreground font-body text-sm">Contribute to foundational technologies that will shape the future of human civilization and our relationship with intelligence itself.</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mt-16 mb-12">Current Transmissions (Open Roles)</h2>
            {jobOpenings.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow">
                     <div className="flex items-start gap-4 mb-3">
                        <job.icon className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-semibold text-primary">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">{job.department} - {job.location}</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground font-body mb-4 text-sm">{job.description}</p>
                    <Image 
                        src={`https://placehold.co/500x250.png`} 
                        alt={job.title} 
                        width={500} 
                        height={250} 
                        className="rounded-md aspect-video object-cover mb-4"
                        data-ai-hint={job.imageHint} 
                    />
                    <Button variant="outline" className="w-full hover:bg-primary/10">
                      Initiate Application Protocol <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground font-body text-lg">
                Our current personnel requirements are fulfilled by autonomous Sentinel agents. However, paradigm shifts are constant. Monitor this channel for future human collaboration opportunities.
              </p>
            )}
            <div className="text-center mt-16">
                 <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-md">
                    <Link href="/support/contact">Express Speculative Interest</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
