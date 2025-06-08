
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ChevronRight, Compass, Users, Layers } from 'lucide-react';


export default function CallToActionMendus() {
  return (
    <section id="join" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center md:text-left">
          <p className="text-lg md:text-xl text-muted-foreground mb-8"> 
            The cognitive horizon beckons. Dare to interface with the future of intelligence. Mendus offers pathways to explore our technological marvels and to join the collective shaping tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full text-base px-8 py-6 flex-grow sm:flex-grow-0 justify-between w-full sm:w-auto">
              <Link href="/platform">
                Explore Our Platform
                <Layers className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-pink-600 text-pink-600 hover:bg-pink-600/10 hover:text-pink-500 rounded-full text-base px-8 py-6 flex-grow sm:flex-grow-0 justify-between w-full sm:w-auto">
              <Link href="/book-demo">
                Request a Demo
                <Users className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
