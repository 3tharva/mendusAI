import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary icon-glow-primary" />
          <span className="font-bold font-headline text-lg sm:inline-block text-glow-primary">
            SynapseAI
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="#vision"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Vision
          </Link>
          <Link
            href="#services"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Services
          </Link>
          <Link
            href="#team"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Team
          </Link>
          <Link
            href="#milestones"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Milestones
          </Link>
          <Link
            href="#resources"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Resources
          </Link>
        </nav>
      </div>
    </header>
  );
}
