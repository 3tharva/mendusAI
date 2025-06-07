
import Link from 'next/link';
import { Twitter, Instagram, Facebook, Pin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/company/about" className="text-xs text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/company/team" className="text-xs text-muted-foreground hover:text-primary">Team</Link></li>
              <li><Link href="/company/careers" className="text-xs text-muted-foreground hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/support/faq" className="text-xs text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="/support/contact" className="text-xs text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/support/privacy" className="text-xs text-muted-foreground hover:text-primary">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/explore/blog" className="text-xs text-muted-foreground hover:text-primary">Mendus Blog</Link></li>
              <li><Link href="/explore/library" className="text-xs text-muted-foreground hover:text-primary">Tech Library</Link></li>
              <li><Link href="/explore/garage" className="text-xs text-muted-foreground hover:text-primary">Idea Garage</Link></li>
            </ul>
          </div>
          {/* Reserved for potential 4th column or empty space */}
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-border/20 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mendus. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter size={18} /></Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram size={18} /></Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Facebook size={18} /></Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Pin size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
