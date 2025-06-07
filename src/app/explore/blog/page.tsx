
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mendus Blog',
  description: 'Latest news and insights from Mendus.',
};

export default function ExploreBlogPage() {
  return (
    <PlaceholderPage
      pageName="Mendus Blog"
      description="Stay updated with the latest articles, news, and insights from the Mendus team."
    />
  );
}
