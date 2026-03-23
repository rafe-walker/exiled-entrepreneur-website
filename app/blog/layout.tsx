import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Blog | The Exiled Entrepreneur',
  description:
    'Deep dives into empire building, AI automation, off-grid living, and the real lessons from building multiple businesses from scratch.',
  openGraph: {
    title: 'The Blog | The Exiled Entrepreneur',
    description: 'Articles on entrepreneurship, AI automation, container houses, and building a multi-business empire.',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
