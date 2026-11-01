import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import ArticlesPreview from '@/components/ArticlesPreview';
import BuildingStrip from '@/components/BuildingStrip';
import ContactBlock from '@/components/ContactBlock';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <ArticlesPreview />
      <BuildingStrip />
      <ContactBlock />
    </>
  );
}
