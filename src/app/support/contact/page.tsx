
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Mendus Support',
  description: 'Get in touch with the Mendus support team.',
};

export default function SupportContactPage() {
  return (
    <PlaceholderPage
      pageName="Contact Us"
      description="Have questions or need assistance? Reach out to our support team."
    />
  );
}
