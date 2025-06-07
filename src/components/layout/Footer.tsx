
import Link from 'next/link';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Platform</h3>
            <ul className="space-y-3">
              <li><Link href="/platform#features" className="text-sm text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="/platform#integrations" className="text-sm text-muted-foreground hover:text-primary">Integrations</Link></li>
              <li><Link href="/platform#security" className="text-sm text-muted-foreground hover:text-primary">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Solutions</h3>
            <ul className="space-y-3">
              {/* Dynamically list some solutions or key categories */}
              <li><Link href="/solutions/risk-compliance-management" className="text-sm text-muted-foreground hover:text-primary">Risk & Compliance</Link></li>
              <li><Link href="/solutions/customer-services" className="text-sm text-muted-foreground hover:text-primary">Customer Service</Link></li>
              <li><Link href="/solutions/digital-supply-chain" className="text-sm text-muted-foreground hover:text-primary">Supply Chain</Link></li>
              <li><Link href="/solutions" className="text-sm text-muted-foreground hover:text-primary">All Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="/industries/finance" className="text-sm text-muted-foreground hover:text-primary">Finance</Link></li>
              <li><Link href="/industries/healthcare" className="text-sm text-muted-foreground hover:text-primary">Healthcare</Link></li>
              <li><Link href="/industries/manufacturing" className="text-sm text-muted-foreground hover:text-primary">Manufacturing</Link></li>
              <li><Link href="/industries" className="text-sm text-muted-foreground hover:text-primary">More Industries</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/resources#blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/resources#case-studies" className="text-sm text-muted-foreground hover:text-primary">Case Studies</Link></li>
              <li><Link href="/resources#whitepapers" className="text-sm text-muted-foreground hover:text-primary">Whitepapers</Link></li>
              <li><Link href="/support/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/company/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/company/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/support/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="/support/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/support/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-border/20 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} akiraAI. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="akiraAI Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="akiraAI LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="akiraAI GitHub" className="text-muted-foreground hover:text-primary"><Github size={20} /></Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="akiraAI YouTube" className="text-muted-foreground hover:text-primary"><Youtube size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
