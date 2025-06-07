
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { BrainCircuit, Zap, Users, Target, ArrowRight, Briefcase, Code, Telescope, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join Mendus: Shape the Future of Intelligence',
  description: 'Explore exciting career opportunities at Mendus. Join a team of innovators and contribute to the next generation of AI.',
};

export default function CompanyCareersPage() {
  const jobOpenings = [
    {
      title: 'AI Cognition Architect',
      department: 'Advanced R&D',
      location: 'Global (Remote Options)',
      description: 'Design new architectures for AI thinking, using advanced concepts like quantum-inspired computing and brain-like models. Advanced degree and significant experience in AI/Cognitive Science required.',
      icon: BrainCircuit,
      imageHint: 'ai brain network abstract'
    },
    {
      title: 'AI Ethics & Safety Engineer',
      department: 'Agent Alignment Division',
      location: 'Geneva Innovation Hub',
      description: 'Embed strong ethical principles into our AI agents. Ensure our AI aligns with human values and prevents unintended consequences. Advanced degrees in AI Ethics or Philosophy preferred.',
      icon: ShieldCheck,
      imageHint: 'ai ethics abstract shield'
    },
    {
      title: 'AI Language Specialist',
      department: 'Universal Communication Core',
      location: 'Digital Alexandria Project',
      description: 'Develop and refine the language models that help Mendus agents understand and communicate with true context. Expertise in computational linguistics and logic needed.',
      icon: Code,
      imageHint: 'language processing abstract'
    },
    {
      title: 'Large-Scale AI Data Engineer',
      department: 'Eon Platform Operations',
      location: 'Global Data Nexus',
      description: 'Design and manage the decentralized data systems that power our Eon platform, ensuring massive scalability, fast data transfer, and data integrity.',
      icon: Telescope,
      imageHint: 'data network server abstract'
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
              Shape the Future with Mendus
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              This is more than a job; it's an opportunity to make a real impact. Mendus invites the world's brightest minds to join us in leading the AI revolution. Together, we will define the future of intelligence.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Why Join the Mendus Journey?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
              <div className="p-6">
                <BrainCircuit className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Solve Meaningful Challenges</h3>
                <p className="text-muted-foreground font-body text-sm">Tackle problems that push the boundaries of science, technology, and philosophy. Your work will have a lasting impact on the world.</p>
              </div>
              <div className="p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Collaborate with Experts</h3>
                <p className="text-muted-foreground font-body text-sm">Join a diverse team of leading researchers, engineers, and ethicists in a culture that thrives on groundbreaking innovation and teamwork.</p>
              </div>
              <div className="p-6">
                <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Define What's Next</h3>
                <p className="text-muted-foreground font-body text-sm">Contribute to foundational technologies that will shape the future of human civilization and our relationship with intelligence itself.</p>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mt-16 mb-12">Current Opportunities</h2>
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
                      Learn More & Apply <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground font-body text-lg">
                Our current team needs are met by our advanced AI Sentinels. However, new opportunities often arise. Please check back or express your interest for future roles.
              </p>
            )}
            <div className="text-center mt-16">
                 <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-md">
                    <Link href="/support/contact">Contact Us About Future Roles</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
