
import Link from 'next/link';
import { Linkedin, Briefcase } from 'lucide-react'; 

const XIcon = () => (
 <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
);


export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 mb-10"> {/* Adjusted to 3 columns */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Mendus Core</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Mendus</Link></li>
              <li><Link href="/platform" className="text-sm text-muted-foreground hover:text-primary">Eon Platform</Link></li>
              <li><Link href="/digital-workers" className="text-sm text-muted-foreground hover:text-primary">Sentinels</Link></li>
              <li><Link href="/company/team" className="text-sm text-muted-foreground hover:text-primary">Our Collective</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions" className="text-sm text-muted-foreground hover:text-primary">All Solutions</Link></li>
              <li><Link href="/solutions/risk-compliance-management" className="text-sm text-muted-foreground hover:text-primary">Risk & Compliance</Link></li>
              <li><Link href="/solutions/customer-services" className="text-sm text-muted-foreground hover:text-primary">Customer Augmentation</Link></li>
               <li><Link href="/solutions/digital-supply-chain" className="text-sm text-muted-foreground hover:text-primary">Intelligent Supply Chains</Link></li>
            </ul>
          </div>
          {/* Removed Industries Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Interface</h3>
            <ul className="space-y-3">
              <li><Link href="/support/faq" className="text-sm text-muted-foreground hover:text-primary">Cognitive Enquiries</Link></li>
              <li><Link href="/book-demo" className="text-sm text-muted-foreground hover:text-primary">Request Demo</Link></li>
              <li><Link href="/company/careers" className="text-sm text-muted-foreground hover:text-primary">Join the Vanguard</Link></li>
              <li><Link href="/support/contact" className="text-sm text-muted-foreground hover:text-primary">Nexus Point</Link></li>
               <li><Link href="/support/privacy" className="text-sm text-muted-foreground hover:text-primary">Data Sovereignty</Link></li>
               <li><Link href="/support/terms" className="text-sm text-muted-foreground hover:text-primary">Operational Directives</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-border/20 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mendus. Forging the Cognitive Future. All rights reserved under Universal Copyright Convention 2.0.
          </p>
          <div className="flex space-x-4">
            <Link href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Mendus on X" className="text-muted-foreground hover:text-pink-600"><XIcon /></Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Mendus on LinkedIn" className="text-muted-foreground hover:text-pink-600"><Linkedin size={20} /></Link>
            <Link href="https://example.com/research" target="_blank" rel="noopener noreferrer" aria-label="Mendus Research Portal" className="text-muted-foreground hover:text-pink-600"><Briefcase size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
