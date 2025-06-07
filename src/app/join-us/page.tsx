
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Us - Mendus Community',
  description: 'Information on how to join the Mendus community or platform.',
};

export default function JoinUsPage() {
  return (
    <PlaceholderPage
      pageName="Join Us"
      description="Become a part of our growing community. Sign up for early access or newsletters."
    />
  );
}
