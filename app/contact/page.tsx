import type { Metadata } from 'next';
import ContactClient from './contact-client';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Email Joshua at The Exiled Entrepreneur with questions about off-grid power, the owner-builder container build, the projects, or corrections to an article.',
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return <ContactClient />;
}
