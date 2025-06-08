
import Link from 'next/link';
// Social media icons like Linkedin, Briefcase, XIcon are removed

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Mendus Core</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Mendus</Link></li>
              <li><Link href="/platform" className="text-sm text-muted-foreground hover:text-primary">Eon Platform</Link></li>
              <li><Link href="/digital-workers" className="text-sm text-muted-foreground hover:text-primary">Digital Workers</Link></li>
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
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Interface</h3>
            <ul className="space-y-3">
              <li><Link href="/support/faq" className="text-sm text-muted-foreground hover:text-primary">Cognitive Enquiries</Link></li>
              <li><Link href="/book-demo" className="text-sm text-muted-foreground hover:text-primary">Request Demo</Link></li>
              <li><Link href="/company/careers" className="text-sm text-muted-foreground hover:text-primary">Shape the Future</Link></li>
               <li><Link href="/support/privacy" className="text-sm text-muted-foreground hover:text-primary">Data Sovereignty</Link></li>
               <li><Link href="/support/terms" className="text-sm text-muted-foreground hover:text-primary">Operational Directives</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-border/20 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mendus. Forging the Cognitive Future. All rights reserved under Universal Copyright Convention 2.0.
          </p>
          {/* Social media links div removed */}
        </div>
      </div>
    </footer>
  );
}
