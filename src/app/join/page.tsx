
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Us - Mendus',
  description: 'Become a part of the Mendus community.',
};

export default function JoinPage() {
  return (
    <PlaceholderPage
      pageName="Join the Revolution"
      description="Find out how you can become part of the Mendus movement."
    />
  );
}
