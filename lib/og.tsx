import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_TAGLINE } from './site';

/**
 * Open Graph card renderer shared by /og.png (site) and
 * /articles/[slug]/og.png (per article). 1200×630 PNG, rendered by
 * next/og (satori + resvg) at build time; no runtime font fetches, so the
 * bundled regular weight is the only weight available.
 *
 * X, Slack and LinkedIn do not render SVG cards, which is why this exists.
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;

const DARK = '#0a0a0f';
const CARD = '#15110d';
const GOLD = '#d4a853';
const AMBER = '#f59e0b';
const CREAM = '#f5f0e8';
const MUTED = '#b8a98e';

interface OgCardOptions {
  /** Large text. Defaults to the site tagline. */
  title?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Line under the title; omitted when undefined. */
  footer?: string;
}

function titleSize(title: string): number {
  if (title.length <= 40) return 72;
  if (title.length <= 70) return 56;
  if (title.length <= 100) return 46;
  return 38;
}

export function renderOgCard({ title, eyebrow, footer }: OgCardOptions = {}): ImageResponse {
  const heading = title ?? SITE_TAGLINE;
  const isSiteCard = title === undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: `linear-gradient(135deg, ${DARK} 0%, ${CARD} 55%, ${DARK} 100%)`,
          color: CREAM,
          fontFamily: 'Geist, sans-serif',
          position: 'relative',
        }}
      >
        {/* warm glow, lower left */}
        <div
          style={{
            position: 'absolute',
            left: -200,
            bottom: -260,
            width: 900,
            height: 700,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(212,168,83,0.16) 0%, rgba(212,168,83,0) 65%)',
          }}
        />
        {/* horizon line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 500,
            height: 1,
            background: 'rgba(212,168,83,0.22)',
          }}
        />
        {/* container + ground-mount array silhouette, lower right */}
        <div
          style={{
            position: 'absolute',
            right: 88,
            top: 430,
            display: 'flex',
            alignItems: 'flex-end',
            gap: 26,
          }}
        >
          <div
            style={{
              width: 220,
              height: 60,
              border: `2px solid rgba(212,168,83,0.55)`,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <div style={{ height: 2, background: 'rgba(212,168,83,0.35)' }} />
            <div style={{ height: 2, background: 'rgba(212,168,83,0.35)' }} />
          </div>
          <div
            style={{
              width: 84,
              height: 44,
              border: `2px solid rgba(212,168,83,0.55)`,
              transform: 'skewY(-12deg)',
              marginBottom: 8,
            }}
          />
        </div>

        {/* brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${GOLD}, ${AMBER})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: DARK,
              fontSize: 30,
              letterSpacing: -1,
            }}
          >
            TE
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <div style={{ fontSize: 22, letterSpacing: 6, color: CREAM }}>THE EXILED</div>
            <div style={{ fontSize: 22, letterSpacing: 6, color: GOLD }}>ENTREPRENEUR</div>
          </div>
        </div>

        {/* headline block */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000 }}>
          {eyebrow && (
            <div
              style={{
                fontSize: 22,
                letterSpacing: 5,
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: 18,
              }}
            >
              {eyebrow}
            </div>
          )}
          <div
            style={{
              fontSize: titleSize(heading),
              lineHeight: 1.12,
              letterSpacing: -1,
              color: CREAM,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {isSiteCard ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>Technical income</div>
                <div style={{ display: 'flex', color: GOLD }}>from a dead zone.</div>
              </div>
            ) : (
              <div style={{ display: 'flex' }}>{heading}</div>
            )}
          </div>
          <div
            style={{
              marginTop: 26,
              width: 96,
              height: 5,
              borderRadius: 3,
              background: `linear-gradient(90deg, ${GOLD}, ${AMBER})`,
            }}
          />
        </div>

        {/* footer row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: 24,
            color: MUTED,
          }}
        >
          <div style={{ display: 'flex' }}>
            {footer ?? (isSiteCard ? 'Off-grid power · rural connectivity · remote income' : SITE_NAME)}
          </div>
          <div style={{ display: 'flex', color: GOLD }}>theexiledentrepreneur.com</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
