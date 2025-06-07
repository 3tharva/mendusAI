
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { CalendarCheck, Mail, User, Briefcase, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Demo - Mendus',
  description: 'Schedule a personalized demo with Mendus to see our intelligent automation solutions in action.',
};

export default function BookDemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 md:px-6">
        <div className="w-full max-w-lg bg-background p-8 md:p-10 rounded-xl shadow-2xl">
          <div className="text-center mb-8">
            <CalendarCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Book Your Personalized Demo</h1>
            <p className="text-muted-foreground font-body mt-2">
              Discover how Mendus can transform your business. Fill out the form below, and our team will contact you shortly.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="flex items-center"><User className="h-4 w-4 mr-2 text-muted-foreground" />First Name</Label>
                <Input type="text" id="firstName" placeholder="John" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName" className="flex items-center"><User className="h-4 w-4 mr-2 text-muted-foreground" />Last Name</Label>
                <Input type="text" id="lastName" placeholder="Doe" required className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="flex items-center"><Mail className="h-4 w-4 mr-2 text-muted-foreground" />Business Email</Label>
              <Input type="email" id="email" placeholder="you@company.com" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="company" className="flex items-center"><Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />Company Name</Label>
              <Input type="text" id="company" placeholder="Your Company Inc." required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message" className="flex items-center"><MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />What challenges are you looking to solve?</Label>
              <Textarea id="message" placeholder="Tell us about your automation needs..." rows={4} className="mt-1" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                Request Demo
              </Button>
            </div>
          </form>
          
          <p className="mt-8 text-center text-xs text-muted-foreground font-body">
            By submitting this form, you agree to our{' '}
            <Link href="/support/privacy" className="underline hover:text-primary">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
