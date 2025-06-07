
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Mendus Support',
  description: 'Frequently Asked Questions about Mendus.',
};

export default function SupportFaqPage() {
  return (
    <PlaceholderPage
      pageName="Frequently Asked Questions"
      description="Find answers to common questions about Mendus, our products, and services."
    />
  );
}
