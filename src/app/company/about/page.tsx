
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Company - Mendus',
  description: 'Learn about the Mendus company.',
};

export default function CompanyAboutPage() {
  return (
    <PlaceholderPage
      pageName="About Our Company"
      description="Detailed information about Mendus as an organization, our values, and our history."
    />
  );
}
