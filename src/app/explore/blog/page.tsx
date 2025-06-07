
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Feather, ArrowRight, Rss } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mendus Blog: Insights from the AI Frontier',
  description: 'Explore articles on AI research, ethical considerations in AI development, and visionary insights from the Mendus Team.',
};

export default function ExploreBlogPage() {
  const blogPosts = [
    {
      title: "The Future of Self-Improving AI: Possibilities and Challenges",
      date: "October 26, 2023", // Using a more standard date format
      author: "Dr. Aris Thorne",
      excerpt: "An exploration of the profound ethical and technical questions that arise when AI agents can autonomously rewrite their own core programming...",
      imageSrc: "https://placehold.co/600x350.png",
      imageHint: "ai code evolution abstract",
      slug: "/explore/blog/self-improving-ai",
    },
    {
      title: "Building a Global AI Mind While Protecting Privacy",
      date: "September 15, 2023",
      author: "Lyra Nova",
      excerpt: "A technical look into the secure methods and decentralized networks that allow AI agents to learn collectively while keeping data private.",
      imageSrc: "https://placehold.co/600x350.png",
      imageHint: "global network brain secure",
      slug: "/explore/blog/secure-federated-learning",
    },
    {
      title: "Beyond Old Tests: New Ways to Measure True AI Intelligence",
      date: "August 02, 2023",
      author: "The Mendus Collective",
      excerpt: "A collaborative paper proposing new methods and benchmarks for evaluating progress towards AGI, moving beyond simple tests to assess genuine thinking abilities.",
      imageSrc: "https://placehold.co/600x350.png",
      imageHint: "ai intelligence test brain",
      slug: "/explore/blog/measuring-agi",
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
              Insights from the AI Frontier
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              From the Mendus Team: Explorations into AI breakthroughs, ethical considerations in intelligent AI, and visionary perspectives on how humans and technology can evolve together.
            </p>
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md">
                <Link href="#latest-dispatches">
                    Explore Latest Articles <Rss className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </div>
        </section>

        <section id="latest-dispatches" className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Recent Articles</h2>
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
                          Read Full Article <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-16">
              <Button variant="outline" size="lg" className="text-lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
