
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Users, Brain, Zap, Shield, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Mendus Collective - Luminary Minds Forging the Future',
  description: 'Meet the Mendus Collective: a decentralized assembly of pioneering researchers, visionary engineers, and profound ethicists dedicated to the responsible advancement of agentic intelligence.',
};

export default function CompanyTeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Aris Thorne',
      role: 'Chief Consciousness Architect & Ethical Custodian',
      bio: 'A polymath whose work spans quantum cognition, AI ethics, and neo-cybernetic philosophy. Dr. Thorne guides Mendus with a vision of symbiotic human-AI evolution.',
      imageSrc: 'https://placehold.co/400x400.png',
      imageHint: 'visionary scientist portrait',
      icon: Brain,
    },
    {
      name: 'Lyra Nova',
      role: 'Lead, Eon Platform Engineering & Sentience Protocols',
      bio: 'Lyra architects the hyper-scalable infrastructure of the Eon Platform. Her research focuses on emergent behaviors in large-scale agent networks and the development of robust sentience markers.',
      imageSrc: 'https://placehold.co/400x400.png',
      imageHint: 'female engineer futuristic',
      icon: Zap,
    },
    {
      name: 'Kaelen Voss',
      role: 'Director of Agentic Strategy & Global Symbiosis Initiatives',
      bio: 'Voss spearheads the deployment of Mendus solutions to tackle planetary-scale challenges, from climate engineering to global resource optimization, fostering a new era of intelligent cooperation.',
      imageSrc: 'https://placehold.co/400x400.png',
      imageHint: 'strategic leader globe',
      icon: Users,
    },
    {
      name: 'Seraphina Moon',
      role: 'Guardian of Algorithmic Integrity & Explainability',
      bio: 'Dedicated to ensuring transparency and fairness in all Mendus AI systems, Seraphina develops cutting-edge techniques for AI explainability and bias mitigation.',
      imageSrc: 'https://placehold.co/400x400.png',
      imageHint: 'data scientist ethics',
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
              The Mendus Collective: Architects of Tomorrow
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Mendus is more than an organization; it is a decentralized collective of luminary minds. We are researchers, engineers, ethicists, and visionaries united by a singular purpose: to responsibly guide the evolution of intelligence.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Core Thought Leaders & Navigators</h2>
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
              Our full collective spans numerous disciplines and operates across a distributed global network, augmented by our own advanced Sentinel AI collaborators. The individuals highlighted represent key nodes in our ever-expanding web of expertise.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Lightbulb className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold text-foreground mb-4">A Culture of Boundless Inquiry</h2>
            <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
              At Mendus, we cultivate an environment of relentless curiosity, radical transparency, and intellectual rigor. We challenge existing paradigms and foster a collaborative ecosystem where the most audacious ideas can take root and flourish, pushing the boundaries of what is known and what can be achieved.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
