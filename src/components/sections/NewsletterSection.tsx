import NewsletterForm from './NewsletterForm';

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow-primary">
            Stay Ahead of the Curve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Subscribe to the SynapseAI newsletter for the latest updates on our technology, product releases, research insights, and exclusive beta access opportunities.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
