
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team - Mendus',
  description: 'Meet the team behind Mendus.',
};

export default function CompanyTeamPage() {
  return (
    <PlaceholderPage
      pageName="Meet Our Team"
      description="Get to know the passionate individuals who make Mendus possible."
    />
  );
}
