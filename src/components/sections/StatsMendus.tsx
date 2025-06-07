
// This component is part of the "Mendus" theme.
// Adjusted for visibility on a light theme.

export default function StatsMendus() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-5xl md:text-6xl font-bold text-pink-600 mb-2">001</p> {/* Original: text-orange-400 */}
            <p className="text-sm text-muted-foreground"> {/* Original: text-gray-500 */}
              This represents the first step into the revolutionary journey.
            </p>
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-bold text-pink-600 mb-2">100</p> {/* Original: text-orange-400 */}
            <p className="text-sm text-muted-foreground"> {/* Original: text-gray-500 */}
              This indicates the number of revolutionary ideas brewing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
