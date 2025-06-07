
import Link from 'next/link';
import { Twitter, Instagram, Facebook, Linkedin, Github, Youtube } from 'lucide-react'; // Updated icons

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/company/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/company/team" className="text-sm text-muted-foreground hover:text-primary">Our Team</Link></li>
              <li><Link href="/company/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/explore/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="/industries/finance" className="text-sm text-muted-foreground hover:text-primary">Finance</Link></li>
              <li><Link href="/industries/healthcare" className="text-sm text-muted-foreground hover:text-primary">Healthcare</Link></li>
              <li><Link href="/industries/manufacturing" className="text-sm text-muted-foreground hover:text-primary">Manufacturing</Link></li>
              <li><Link href="/industries/retail" className="text-sm text-muted-foreground hover:text-primary">Retail</Link></li>
              <li><Link href="/industries" className="text-sm text-muted-foreground hover:text-primary">More Industries</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/explore/library" className="text-sm text-muted-foreground hover:text-primary">Tech Library</Link></li>
              <li><Link href="/explore/garage" className="text-sm text-muted-foreground hover:text-primary">Idea Garage</Link></li>
              <li><Link href="/support/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="/ai-strategy" className="text-sm text-muted-foreground hover:text-primary">AI Strategy</Link></li> {/* Assuming this page exists or will be created */}
            </ul>
          </div>
           <div>
            <h3 className="font-semibold text-foreground mb-4 text-lg">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/support/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/support/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li> {/* New Link */}
              <li><Link href="/support/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-border/20 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mendus. Revolutionizing Tech with AI.
          </p>
          <div className="flex space-x-5">
            <Link href="https://twitter.com/mendushq" target="_blank" rel="noopener noreferrer" aria-label="Mendus Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            <Link href="https://linkedin.com/company/mendushq" target="_blank" rel="noopener noreferrer" aria-label="Mendus LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
            <Link href="https://github.com/mendushq" target="_blank" rel="noopener noreferrer" aria-label="Mendus GitHub" className="text-muted-foreground hover:text-primary"><Github size={20} /></Link>
            <Link href="https://youtube.com/@mendushq" target="_blank" rel="noopener noreferrer" aria-label="Mendus YouTube" className="text-muted-foreground hover:text-primary"><Youtube size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

