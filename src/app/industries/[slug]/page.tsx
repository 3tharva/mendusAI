
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IndustryDetailPageContent from '@/components/layout/IndustryDetailPageContent';
import { getIndustryBySlug, industries, Industry } from '@/lib/industry-data';

interface IndustryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    return {
      title: 'Industry Not Found - Mendus',
      description: 'The requested industry page could not be found.',
    };
  }

  return {
    title: `AI in ${industry.title} - Mendus Solutions`,
    description: `Learn how Mendus applies AI to revolutionize the ${industry.title.toLowerCase()} industry. ${industry.shortDescription}`,
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <IndustryDetailPageContent industry={industry} />
      </main>
      <Footer />
    </div>
  );
}
