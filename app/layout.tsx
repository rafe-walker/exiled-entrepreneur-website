import type { Metadata } from "next";
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
  title: "The Exiled Entrepreneur | From Corporate Layoff to Empire",
  description:
    "One guy. Laid off. Building an empire from scratch with AI, drones, and his own two hands. Follow Joshua's journey documenting empire building, AI automation, entrepreneurship, and off-grid construction.",
  keywords: [
    "entrepreneurship",
    "AI automation",
    "drones",
    "off-grid living",
    "container house",
    "business empire",
    "founder journey",
  ],
  authors: [{ name: "Joshua", url: "https://theexiledentrepreneur.com" }],
  openGraph: {
    title: "The Exiled Entrepreneur",
    description:
      "One guy. Laid off. Building an empire from scratch with AI, drones, and his own two hands.",
    type: "website",
    url: "https://theexiledentrepreneur.com",
    siteName: "The Exiled Entrepreneur",
  },
};

export const viewport = "width=device-width, initial-scale=1";

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
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0f] text-[#f5f0e8]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
