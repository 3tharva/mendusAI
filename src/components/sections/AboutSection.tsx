import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-primary text-glow-primary">
              Our Vision: The Dawn of Agentic AI
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              At SynapseAI, we believe agentic AI represents the next paradigm shift in technology. Our mission is to build intelligent systems that can autonomously perform complex tasks, learn from their environment, and collaborate with humans to achieve extraordinary outcomes.
            </p>
            <p className="text-lg text-foreground/80">
              We are a team of passionate researchers, engineers, and innovators dedicated to pushing the boundaries of artificial intelligence. By focusing on robust agent architectures, advanced reasoning capabilities, and ethical AI principles, we aim to create a future where AI is a powerful and reliable partner in human progress.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl shadow-primary/30">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Abstract AI concept"
              layout="fill"
              objectFit="cover"
              data-ai-hint="abstract technology"
              className="transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
