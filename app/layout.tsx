import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theexiledentrepreneur.com"),
  title: {
    default: "The Exiled Entrepreneur | One Guy. Laid Off. Building an Empire.",
    template: "%s | The Exiled Entrepreneur",
  },
  description:
    "From corporate layoff to 7 businesses, a 9-agent AI system, and a container house in the Arizona desert. Every win and failure — documented.",
  keywords: [
    "entrepreneurship",
    "AI automation",
    "business empire",
    "layoff recovery",
    "container house",
    "off-grid living",
    "drones",
    "founder journey",
    "Open Claw IA",
    "Stormhaven Enterprises",
    "YouTube documentary",
    "AI agents",
  ],
  authors: [{ name: "Joshua", url: "https://theexiledentrepreneur.com" }],
  creator: "Stormhaven Enterprises LLC",
  publisher: "Stormhaven Enterprises LLC",
  openGraph: {
    title: "The Exiled Entrepreneur | One Guy. Laid Off. Building an Empire.",
    description:
      "From corporate layoff to 7 businesses, a 9-agent AI system, and a container house in the Arizona desert. Every win and failure — documented.",
    type: "website",
    url: "https://theexiledentrepreneur.com",
    siteName: "The Exiled Entrepreneur",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "The Exiled Entrepreneur — One Guy. Laid Off. Building an Empire.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Exiled Entrepreneur",
    description:
      "From corporate layoff to 7 businesses, a 9-agent AI system, and a container house in the Arizona desert.",
    images: ["/og-image.svg"],
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
  alternates: {
    canonical: "https://theexiledentrepreneur.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joshua',
  url: 'https://theexiledentrepreneur.com/about',
  jobTitle: 'Entrepreneur & Content Creator',
  worksFor: {
    '@type': 'Organization',
    name: 'StormHaven Enterprises LLC',
  },
  sameAs: [
    'https://www.youtube.com/@theexiledentrepreneur',
    'https://twitter.com/theexiledent',
  ],
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Exiled Entrepreneur',
  legalName: 'StormHaven Enterprises LLC',
  url: 'https://theexiledentrepreneur.com',
  logo: 'https://theexiledentrepreneur.com/og-image.svg',
  description:
    'Podcast and brand about entrepreneurship, business building, and the journey of creating multiple ventures. Hosted by Joshua, documenting the real-time building of a multi-business empire.',
  sameAs: [
    'https://www.youtube.com/@theexiledentrepreneur',
    'https://twitter.com/theexiledent',
  ],
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The Exiled Entrepreneur',
  url: 'https://theexiledentrepreneur.com',
  description:
    'From corporate layoff to 7 businesses, a 9-agent AI system, and a container house in the Arizona desert. Every win and failure — documented.',
  publisher: {
    '@type': 'Organization',
    name: 'StormHaven Enterprises LLC',
  },
};

const jsonLdPodcast = {
  '@context': 'https://schema.org',
  '@type': 'PodcastSeries',
  name: 'The Exiled Entrepreneur',
  url: 'https://theexiledentrepreneur.com/episodes',
  description:
    'A podcast and documentary YouTube series about entrepreneurship, AI automation, off-grid living, and the real journey of building multiple businesses after a corporate layoff.',
  author: {
    '@type': 'Person',
    name: 'Joshua',
  },
  publisher: {
    '@type': 'Organization',
    name: 'StormHaven Enterprises LLC',
  },
  inLanguage: 'en',
  genre: ['Entrepreneurship', 'Business', 'Technology', 'AI', 'Personal Finance'],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPodcast) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-dark text-brand-cream">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
