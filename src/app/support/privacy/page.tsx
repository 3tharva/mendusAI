
import PlaceholderPage from '@/components/layout/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Mendus',
  description: 'Read the Mendus privacy policy.',
};

export default function SupportPrivacyPage() {
  return (
    <PlaceholderPage
      pageName="Privacy Policy"
      description="Understand how Mendus handles your data and protects your privacy."
    />
  );
}
