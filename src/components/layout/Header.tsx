
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-bold font-headline text-2xl text-primary">
            Mendus
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/" // Home
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
          <Link
            href="/discover" 
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Discover
          </Link>
          <Link
            href="/join"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Join
          </Link>
        </nav>
        {/*
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/book-demo">Book Demo</Link>
          </Button>
        </div>
        */}
      </div>
    </header>
  );
}
