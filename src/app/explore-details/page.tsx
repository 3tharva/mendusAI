
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore Details - Mendus',
  description: 'Detailed exploration of Mendus features.',
};

export default function ExploreDetailsPage() {
  return (
    <PlaceholderPage
      pageName="Explore Details"
      description="Dive deeper into the specifics of what Mendus has to offer."
    />
  );
}
