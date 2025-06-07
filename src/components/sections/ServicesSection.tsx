import ServiceDescriptionGenerator from './ServiceDescriptionGenerator';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow-primary">
            Intelligent Services, Tailored for You
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover how SynapseAI's agentic capabilities can be applied to your specific challenges.
            Use our AI-powered tool below to generate a custom description.
          </p>
        </div>
        <ServiceDescriptionGenerator />
      </div>
    </section>
  );
}
