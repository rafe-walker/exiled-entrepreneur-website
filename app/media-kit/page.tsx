import type { Metadata } from 'next';
import MediaKitClient from './media-kit-client';

export const metadata: Metadata = {
  title: 'Media Kit',
};

export default function MediaKitPage() {
  return <MediaKitClient />;
}
