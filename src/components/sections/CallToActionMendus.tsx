
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// This component is part of the "Mendus" theme.
// Adjusted for visibility and style on light theme, maintaining pink accents.

export default function CallToActionMendus() {
  return (
    <section id="join" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl">
          <p className="text-lg md:text-xl text-muted-foreground mb-8"> {/* Original: text-gray-400 */}
            Peek into the future of tech. Press these magic buttons – trust us, it&apos;ll be worth it!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full text-base px-8 py-6 flex-grow sm:flex-grow-0 justify-between w-full sm:w-auto">
              <Link href="/explore-details">
                Explore
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-pink-600 text-pink-600 hover:bg-pink-600/10 hover:text-pink-500 rounded-full text-base px-8 py-6 flex-grow sm:flex-grow-0 justify-between w-full sm:w-auto">
              <Link href="/join-us">
                Join Us
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
