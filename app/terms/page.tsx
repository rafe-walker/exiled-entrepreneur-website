import type { Metadata } from 'next';
import TermsClient from './terms-client';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return <TermsClient />;
}
