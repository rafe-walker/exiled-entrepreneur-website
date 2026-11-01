import type { Metadata } from 'next';
import PrivacyClient from './privacy-client';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
