
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { Mail, Users, Briefcase, MessageSquare, ArrowRight, Globe, Phone, Building } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mendus Nexus Point: Initiate Contact & Collaboration',
  description: 'Connect with the Mendus Collective. Explore partnership opportunities, submit technical inquiries, or discuss bespoke agentic solutions. This is your gateway to the future of intelligence.',
};

export default function SupportContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 relative">
           <Image
            src="https://placehold.co/1920x600.png"
            alt="Abstract network connections"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="global network connection"
          />
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <Globe className="h-16 w-16 mx-auto mb-6 text-primary animate-spin-slow" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Mendus Nexus Point
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Interface with the architects of tomorrow. Whether you seek strategic alliances, bespoke agentic solutions, or wish to contribute to the cognitive frontier, this is your conduit to Mendus.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 -mt-16 relative z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-card p-8 md:p-10 rounded-xl shadow-2xl">
                <h2 className="text-3xl font-bold text-foreground mb-8">Transmit Your Inquiry</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="flex items-center text-sm text-muted-foreground"><Users className="h-4 w-4 mr-2"/>Full Designation</Label>
                      <Input type="text" id="name" placeholder="e.g., Dr. Evelyn Reed" required className="mt-1"/>
                    </div>
                    <div>
                      <Label htmlFor="entity" className="flex items-center text-sm text-muted-foreground"><Briefcase className="h-4 w-4 mr-2"/>Affiliated Entity/Organization</Label>
                      <Input type="text" id="entity" placeholder="e.g., Institute for Advanced Cognition" className="mt-1"/>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center text-sm text-muted-foreground"><Mail className="h-4 w-4 mr-2"/>Secure Communication Channel (Email)</Label>
                    <Input type="email" id="email" placeholder="your.designation@domain.xyz" required className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="flex items-center text-sm text-muted-foreground"><MessageSquare className="h-4 w-4 mr-2"/>Subject Vector</Label>
                    <Input type="text" id="subject" placeholder="e.g., Proposal: Quantum Entanglement Comms" required className="mt-1"/>
                  </div>
                  <div>
                    <Label htmlFor="message" className="flex items-center text-sm text-muted-foreground"><MessageSquare className="h-4 w-4 mr-2"/>Detailed Transmission</Label>
                    <Textarea id="message" placeholder="Elaborate on your inquiry, proposal, or area of desired collaboration..." rows={6} className="mt-1"/>
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg rounded-md">
                      Initiate Secure Transmission <ArrowRight className="ml-2 h-5 w-5"/>
                    </Button>
                  </div>
                </form>
              </div>

              <div className="space-y-8 sticky top-28">
                <div className="bg-card p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Alternative Contact Vectors</h3>
                  <div className="space-y-3">
                    <p className="flex items-center text-muted-foreground font-body"><Mail className="h-5 w-5 mr-3 text-primary"/> <a href="mailto:nexus.control@mendus.ai" className="hover:text-primary">nexus.control@mendus.ai</a> (Encrypted Channels Preferred)</p>
                    <p className="flex items-center text-muted-foreground font-body"><Phone className="h-5 w-5 mr-3 text-primary"/> Global HoloComm: +1-MENDUS-AI-NEXUS (Voicemail to Quantum Entangled Relay)</p>
                  </div>
                </div>
                <div className="bg-card p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Our Global Cognitive Hubs</h3>
                   <p className="text-muted-foreground font-body mb-2">Mendus operates through a decentralized network of research and deployment nodes. Key anchor points include:</p>
                  <ul className="list-disc list-inside text-muted-foreground font-body space-y-1 text-sm">
                    <li>Geneva Synchronicity Hub (Ethical AI & Governance)</li>
                    <li>Silicon Valley Singularity Forge (Platform R&D)</li>
                    <li>Tokyo Neo-Cybernetics Lab (Agentic Robotics)</li>
                    <li>Bangalore Quantum Compute Nexus (Advanced Computation)</li>
                  </ul>
                   <p className="text-xs text-muted-foreground font-body mt-4">Physical visits by appointment only, following successful completion of preliminary cognitive compatibility assessments.</p>
                </div>
                <div className="bg-card p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Connect via Social Matrix</h3>
                    <div className="flex space-x-4">
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Mendus on X/Twitter" className="text-muted-foreground hover:text-primary"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Mendus on LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
                        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Mendus Research Gate" className="text-muted-foreground hover:text-primary"><Briefcase className="h-6 w-6" /></Link> {/* Placeholder for Research Gate or similar */}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
