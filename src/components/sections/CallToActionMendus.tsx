import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CallToActionMendus() {
  return (
    <section id="join" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl">
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Peek into the future of tech. Press these magic buttons – trust us, it&apos;ll be worth it!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base px-8 py-6 flex-grow sm:flex-grow-0 justify-between w-full sm:w-auto">
              <Link href="#explore-details"> {/* Placeholder link */}
                Explore
                <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-full text-base px-8 py-6 flex-grow sm:flex-grow-0 justify-between w-full sm:w-auto">
              <Link href="#join-us-form"> {/* Placeholder link */}
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
