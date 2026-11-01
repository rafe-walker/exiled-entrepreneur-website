import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  AUTHOR_NAME,
  GITHUB_URL,
  LEGAL_ENTITY,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = `${SITE_NAME} | ${SITE_TAGLINE}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "off-grid power",
    "solar battery system",
    "EG4 inverter",
    "rural internet",
    "remote work off-grid",
    "container home",
    "owner-builder permit",
    "Cochise County",
    "Arizona land",
    "drone services",
    "Part 107",
    "digital products",
    "layoff",
  ],
  authors: [{ name: AUTHOR_NAME, url: `${SITE_URL}/about` }],
  creator: AUTHOR_NAME,
  publisher: LEGAL_ENTITY,
  openGraph: {
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // No root-level `alternates`: canonical URLs are set per page (a root
  // canonical would leak the home URL onto any page that forgets to override
  // it), and the RSS <link> lives in <head> below because a page's own
  // `alternates.canonical` replaces the whole `alternates` object.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR_NAME,
  url: `${SITE_URL}/about`,
  jobTitle: "Support engineer, owner-builder",
  worksFor: {
    "@type": "Organization",
    name: LEGAL_ENTITY,
    url: SITE_URL,
  },
  sameAs: [GITHUB_URL],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: LEGAL_ENTITY,
  url: SITE_URL,
  logo: `${SITE_URL}/og.png`,
  description: SITE_DESCRIPTION,
  founder: { "@type": "Person", name: AUTHOR_NAME },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: LEGAL_ENTITY,
    url: SITE_URL,
  },
};

const serialize = (o: unknown) => JSON.stringify(o).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE_NAME} articles`}
          href={`${SITE_URL}/rss.xml`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-dark text-brand-cream">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-brand-gold focus:px-3 focus:py-2 focus:text-brand-dark"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
