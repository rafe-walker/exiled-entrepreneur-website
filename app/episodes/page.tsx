import type { Metadata } from 'next';
import EpisodesClient from './episodes-client';

export const metadata: Metadata = {
  title: 'Episodes - The Exiled Entrepreneur',
  description: 'Watch every build, breakthrough, and setback as we document the journey of building a multi-business empire.',
};

export default function EpisodesPage() {
  return <EpisodesClient />;
}
