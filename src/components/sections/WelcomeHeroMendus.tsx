
// This component is part of the "Mendus" theme.
// Adjusted for visibility on a light theme.

export default function WelcomeHeroMendus() {
  return (
    <section id="home" className="py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 text-left">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
          <span className="block text-pink-600">WELCOME</span> {/* Original: text-pink-500 */}
          <span className="block text-foreground">TO MENDUS</span> {/* Original: text-neutral-100 */}
        </h1>
      </div>
    </section>
  );
}
