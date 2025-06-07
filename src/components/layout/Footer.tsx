
import Link from 'next/link';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

// Pinterest icon as SVG since it's not in lucide-react by default
const PinterestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.017 1.987c-5.056 0-9.174 4.118-9.174 9.174 0 3.806 2.346 7.053 5.595 8.451.095-.367.027-1.015.027-1.015s-.305-1.273-.305-2.208c0-2.067 1.185-3.612 2.663-3.612 1.248 0 1.849.934 1.849 2.052 0 1.243-.795 3.1-1.202 4.832-.342 1.44.728 2.611 2.173 2.611 2.595 0 4.567-2.732 4.567-6.667 0-3.469-2.487-5.888-5.998-5.888-4.055 0-6.535 3.045-6.535 6.215 0 1.236.475 2.549 1.076 3.281.13.165.154.315.108.49-.134.506-.439 1.74-.573 2.248-.04.165-.18.18-.28.087-1.32-.986-2.134-2.832-2.134-4.927 0-3.784 2.752-7.295 7.727-7.295 4.059 0 7.208 2.871 7.208 6.936 0 4.096-2.563 7.302-6.111 7.302-1.212 0-2.356-.621-2.749-1.354 0 0-.595 2.255-.739 2.791-.248.905-.728 1.633-1.154 2.202a.5.5 0 1 0 .65.755c.4-.55 1.08-1.606 1.08-1.606.362.197.747.304 1.15.304 1.582 0 2.942-.829 3.427-1.868.064-.135.502-2.11.502-2.11.582 1.016 1.947 1.786 3.398 1.786 4.536 0 7.987-3.792 7.987-8.525C22 5.818 17.632 1.987 12.017 1.987z"/>
  </svg>
);


export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/company/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/company/team" className="text-sm text-muted-foreground hover:text-primary">Team</Link></li>
              <li><Link href="/company/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/support/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="/support/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/support/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link></li>
               <li><Link href="/support/terms" className="text-sm text-muted-foreground hover:text-primary">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-base">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/explore/blog" className="text-sm text-muted-foreground hover:text-primary">Mendus Blog</Link></li>
              <li><Link href="/explore/library" className="text-sm text-muted-foreground hover:text-primary">Tech Library</Link></li>
              <li><Link href="/explore/garage" className="text-sm text-muted-foreground hover:text-primary">Idea Garage</Link></li>
            </ul>
          </div>
           {/* Remove Platform, Solutions, Industries, Resources columns for Mendus theme */}
        </div>
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-border/20 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mendus. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Mendus Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Mendus Instagram" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Mendus Facebook" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Mendus Pinterest" className="text-muted-foreground hover:text-primary"><PinterestIcon /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
