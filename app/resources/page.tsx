import type { Metadata } from 'next';
import ResourcesClient from './resources-client';

export const metadata: Metadata = {
  title: 'Resources - The Exiled Entrepreneur',
  description: 'Free and gated resources to help you build your own business empire. AI blueprints, checklists, gear lists, and more.',
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
