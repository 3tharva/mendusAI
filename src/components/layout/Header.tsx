import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-bold font-headline text-2xl text-foreground">
            MENDUS
          </span>
        </Link>
        <nav className="flex items-center gap-3 text-sm sm:gap-5">
          <Link
            href="#home" // Assuming #home or / for home
            className="transition-colors hover:text-foreground/80 text-muted-foreground text-xs"
          >
            Home
          </Link>
          <Link
            href="#about" // Placeholder
            className="transition-colors hover:text-foreground/80 text-muted-foreground text-xs"
          >
            About
          </Link>
          <Link
            href="#discover" // Placeholder
            className="transition-colors hover:text-foreground/80 text-muted-foreground text-xs"
          >
            Discover
          </Link>
          <Link
            href="#join" // Placeholder
            className="transition-colors hover:text-foreground/80 text-muted-foreground text-xs"
          >
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
