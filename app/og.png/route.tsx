import { renderOgCard } from '@/lib/og';

/** Site-wide Open Graph card, rendered once at build time. */
export const dynamic = 'force-static';

export function GET() {
  return renderOgCard();
}
