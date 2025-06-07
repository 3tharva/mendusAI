
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Feather, ArrowRight, Rss } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mendus Blog: Chronicles of the Cognitive Frontier',
  description: 'Explore dispatches from the edge of AI research, ethical considerations in agentic evolution, and visionary insights from the Mendus Collective.',
};

export default function ExploreBlogPage() {
  const blogPosts = [
    {
      title: "Paradigm Shift: The Implications of Self-Modifying Agentic Code",
      date: "Stardate 77801.4",
      author: "Dr. Aris Thorne",
      excerpt: "An exploration into the profound ethical and technical ramifications when AI agents gain the capability to autonomously rewrite their own foundational algorithms...",
      imageSrc: "https://placehold.co/600x350.png",
      imageHint: "abstract code evolution",
      slug: "/explore/blog/self-modifying-code",
    },
    {
      title: "Federated Sentience: Building a Global Mind Without Sacrificing Privacy",
      date: "Stardate 77750.2",
      author: "Lyra Nova",
      excerpt: "Technical deep-dive into the cryptographic protocols and decentralized network topologies enabling collective intelligence among distributed AI agents while preserving data sovereignty.",
      imageSrc: "https://placehold.co/600x350.png",
      imageHint: "global network brain",
      slug: "/explore/blog/federated-sentience",
    },
    {
      title: "Beyond Turing: New Metrics for Assessing True Artificial General Intelligence",
      date: "Stardate 77695.8",
      author: "The Mendus Collective",
      excerpt: "A collaborative paper proposing novel frameworks and benchmarks for evaluating progress towards AGI, moving beyond simplistic imitation games to assess genuine cognitive capabilities.",
      imageSrc: "https://placehold.co/600x350.png",
      imageHint: "abstract intelligence test",
      slug: "/explore/blog/beyond-turing",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Feather className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Chronicles of the Cognitive Frontier
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Dispatches from the Mendus Collective: Explorations into AI breakthroughs, ethical navigation in the age of agentic intelligence, and visionary perspectives on the co-evolution of humanity and technology.
            </p>
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
                <Link href="#latest-dispatches">
                    Explore Latest Insights <Rss className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </div>
        </section>

        <section id="latest-dispatches" className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Recent Transmissions</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link href={post.slug} key={index} className="block group">
                  <div className="bg-card rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out overflow-hidden h-full flex flex-col">
                    <Image 
                      src={post.imageSrc} 
                      alt={post.title} 
                      width={600} 
                      height={350} 
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={post.imageHint} 
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:underline">{post.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3">By {post.author} | {post.date}</p>
                      <p className="text-sm text-muted-foreground font-body flex-grow">{post.excerpt}</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-sm text-primary font-medium group-hover:underline">
                          Read Full Chronicle <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button variant="outline" size="lg" className="text-lg">
                Load More Dispatches
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
