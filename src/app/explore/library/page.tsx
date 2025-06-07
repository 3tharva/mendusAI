
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Library - Mendus',
  description: 'Explore the Mendus Tech Library.',
};

export default function ExploreLibraryPage() {
  return (
    <PlaceholderPage
      pageName="Tech Library"
      description="Dive into our collection of technical resources, whitepapers, and guides."
    />
  );
}
