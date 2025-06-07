
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import IndustryDetailPageContent from '@/components/layout/IndustryDetailPageContent';
import { getIndustryBySlug, Industry } from '@/lib/industry-data';

// This page reuses the IndustryDetailPageContent for "AI Strategy"
// which is defined in industry-data.ts

export async function generateMetadata(): Promise<Metadata> {
  const industry = getIndustryBySlug('ai-strategy');

  if (!industry) {
    return {
      title: 'AI Strategy - Mendus',
      description: 'Develop your AI strategy with Mendus.',
    };
  }

  return {
    title: `AI Strategy & Consulting - Mendus Solutions`,
    description: `Learn how Mendus helps businesses with AI strategy and consulting. ${industry.shortDescription}`,
  };
}

export default function AiStrategyPage() {
  const industry = getIndustryBySlug('ai-strategy');

  if (!industry) {
    // Fallback or specific content if "ai-strategy" is not in industry-data
    // For now, we'll assume it's there and designed like other industry pages.
    // If it needs a unique layout, this page should be different.
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
