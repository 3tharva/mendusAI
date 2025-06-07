
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Mendus',
  description: 'Read the Mendus Terms of Service.',
};

export default function SupportTermsPage() {
  return (
    <PlaceholderPage
      pageName="Terms of Service"
      description="Please read our Terms of Service carefully before using Mendus services."
    />
  );
}
