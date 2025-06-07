
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover - Mendus',
  description: 'Explore the offerings of Mendus.',
};

export default function DiscoverPage() {
  return (
    <PlaceholderPage
      pageName="Discover Mendus"
      description="Explore the cutting-edge technologies and solutions we are developing."
    />
  );
}
