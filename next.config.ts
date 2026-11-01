import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // Retired routes from the previous (video/podcast-oriented) version of
    // the site. Explicit 301 rather than `permanent: true` (308) so older
    // clients and link checkers see a classic permanent redirect.
    return [
      { source: '/episodes', destination: '/articles', statusCode: 301 },
      { source: '/episodes/:path*', destination: '/articles', statusCode: 301 },
      { source: '/resources', destination: '/the-build', statusCode: 301 },
      { source: '/resources/:path*', destination: '/the-build', statusCode: 301 },
      { source: '/media-kit', destination: '/about', statusCode: 301 },
      { source: '/blog', destination: '/articles', statusCode: 301 },
      { source: '/blog/:path*', destination: '/articles', statusCode: 301 },
      // Feed alias and the retired SVG share card (X/Slack/LinkedIn need PNG).
      { source: '/feed.xml', destination: '/rss.xml', statusCode: 301 },
      { source: '/og-image.svg', destination: '/og.png', statusCode: 301 },
    ];
  },
};

export default nextConfig;
