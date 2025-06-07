
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SolutionDetailPageContent from '@/components/layout/SolutionDetailPageContent';
import { getSolutionBySlug, solutions, Solution } from '@/lib/solution-data';

interface SolutionPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    return {
      title: 'Solution Not Found - Mendus',
      description: 'The requested solution page could not be found.',
    };
  }

  return {
    title: `${solution.title} - Mendus Solutions`,
    description: solution.shortDescription,
  };
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <SolutionDetailPageContent solution={solution} />
      </main>
      <Footer />
    </div>
  );
}
