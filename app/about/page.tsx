import type { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: 'About - The Exiled Entrepreneur',
  description: `Joshua's complete story: from veteran to corporate to empire builder. Transparency about AI avatars, the CLAW Prime system, and the vision for Stormhaven Enterprises.`,
};

export default function AboutPage() {
  return <AboutClient />;
}
