
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Mendus',
  description: 'Learn more about Mendus.',
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      pageName="About Mendus"
      description="Discover our story, mission, and the innovative team driving the future of tech."
    />
  );
}
