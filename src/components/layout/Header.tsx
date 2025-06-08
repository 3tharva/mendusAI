'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    // { href: "/industries", label: "Industries" }, // Removed
    { href: "/platform", label: "Platform" },
    { href: "/digital-workers", label: "Sentinals"},
  ];

  if (!isClient) {
    // Return a server-rendered version or null if preferred
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="font-bold font-headline text-2xl text-primary">
              Mendus
            </span>
          </Link>
          {/* Basic non-interactive nav for SSR/no-JS */}
          <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" asChild className="bg-pink-600 hover:bg-pink-700 text-white">
              <Link href="/book-demo">Book Demo</Link>
            </Button>
          </div>
        </div>
      </header>
    );
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-bold font-headline text-2xl text-primary">
            Mendus
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" asChild className="bg-pink-600 hover:bg-pink-700 text-white">
            <Link href="/book-demo">Book Demo</Link>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background p-6">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                   <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="font-bold font-headline text-xl text-primary">
                      Mendus
                    </span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 mb-auto">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-3">
                  <Button asChild className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    <Link href="/book-demo" onClick={() => setIsMobileMenuOpen(false)}>Book Demo</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
