
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Idea Garage - Mendus',
  description: 'Discover innovative ideas in the Mendus Idea Garage.',
};

export default function ExploreGaragePage() {
  return (
    <PlaceholderPage
      pageName="Idea Garage"
      description="A space for brewing innovative concepts and exploring future possibilities."
    />
  );
}
