
import Image from 'next/image';

// This component is part of the "Mendus" theme.
// Adjusted for visibility on a light theme.

export default function TechStormMendus() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Technological storm concept"
            layout="fill"
            objectFit="cover"
            data-ai-hint="dark moody technology"
            className="transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-500 text-center"> {/* Original: text-pink-500 - This pink should be fine on dark overlay */}
              BRACE FOR THE TECH STORM.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
