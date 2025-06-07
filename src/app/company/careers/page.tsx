
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Mendus',
  description: 'Explore career opportunities at Mendus.',
};

export default function CompanyCareersPage() {
  return (
    <PlaceholderPage
      pageName="Careers at Mendus"
      description="Join our innovative team and help shape the future. Explore open positions."
    />
  );
}
