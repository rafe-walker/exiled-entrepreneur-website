import type { Metadata } from 'next';
import TermsClient from './terms-client';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return <TermsClient />;
}
