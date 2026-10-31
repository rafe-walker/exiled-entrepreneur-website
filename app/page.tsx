import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import ArticlesPreview from '@/components/ArticlesPreview';
import BuildingStrip from '@/components/BuildingStrip';
import ContactBlock from '@/components/ContactBlock';

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
