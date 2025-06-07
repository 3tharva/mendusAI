
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { CalendarCheck, Mail, User, Briefcase, MessageSquare, Zap, BrainCircuit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Schedule Your Eon Platform Demonstration - Mendus',
  description: 'Interface with the future. Request a personalized demonstration of the Mendus Eon Platform and witness the dawn of agentic synergy.',
};

export default function BookDemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 md:px-6">
        <div className="w-full max-w-xl bg-background p-8 md:p-10 rounded-xl shadow-2xl">
          <div className="text-center mb-8">
            <div className="relative inline-block">
                <Zap className="h-16 w-16 mx-auto mb-4 text-primary animate-ping absolute opacity-75" />
                <BrainCircuit className="h-16 w-16 mx-auto mb-4 text-primary relative" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4">Witness Agentic Synergies</h1>
            <p className="text-muted-foreground font-body mt-3 max-w-md mx-auto">
              Request your personalized temporal anomaly demonstration. Experience the Mendus Eon Platform and our Sentinel Digital Workers reshaping reality.
            </p>
          </div>
          
          <form className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
                <Label htmlFor="firstName" className="flex items-center text-sm font-medium text-muted-foreground"><User className="h-4 w-4 mr-2" />Cognomen (First Name)</Label>
                <Input type="text" id="firstName" placeholder="Elon" required className="mt-1.5 bg-secondary/50 border-border/50 focus:bg-background" />
              </div>
              <div>
                <Label htmlFor="lastName" className="flex items-center text-sm font-medium text-muted-foreground"><User className="h-4 w-4 mr-2" />Agnomen (Last Name)</Label>
                <Input type="text" id="lastName" placeholder="Musk" required className="mt-1.5 bg-secondary/50 border-border/50 focus:bg-background" />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="flex items-center text-sm font-medium text-muted-foreground"><Mail className="h-4 w-4 mr-2" />Secure Comms Channel (Email)</Label>
              <Input type="email" id="email" placeholder="pioneer@spacex.com" required className="mt-1.5 bg-secondary/50 border-border/50 focus:bg-background" />
            </div>
            <div>
              <Label htmlFor="company" className="flex items-center text-sm font-medium text-muted-foreground"><Briefcase className="h-4 w-4 mr-2" />Entity/Organization Name</Label>
              <Input type="text" id="company" placeholder="Galactic Federation" required className="mt-1.5 bg-secondary/50 border-border/50 focus:bg-background" />
            </div>
            <div>
              <Label htmlFor="message" className="flex items-center text-sm font-medium text-muted-foreground"><MessageSquare className="h-4 w-4 mr-2" />Primary Operational Challenges / Desired Future State</Label>
              <Textarea id="message" placeholder="e.g., Interstellar logistics optimization, Dyson sphere energy management, Universal consciousness simulation..." rows={5} className="mt-1.5 bg-secondary/50 border-border/50 focus:bg-background" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 text-lg rounded-md transition-transform hover:scale-105">
                Initiate Demo Protocol
              </Button>
            </div>
          </form>
          
          <p className="mt-10 text-center text-xs text-muted-foreground font-body">
            By submitting this transmission, you acknowledge our {' '}
            <Link href="/support/privacy" className="underline hover:text-primary">
              Data Sovereignty Charter
            </Link> and {' '}
            <Link href="/support/terms" className="underline hover:text-primary">
              Operational Directives
            </Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
