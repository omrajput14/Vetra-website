import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1E3324",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vetra.co.in"),
  title: "Vetra — Livestock health, digitized",
  description:
    "Vetra gives every animal a digital passport, flags disease early with AI-assisted diagnosis, and alerts nearby farms when something contagious is confirmed.",
  keywords: [
    "Vetra",
    "Livestock health digitized",
    "Digital Animal Passport",
    "AI Veterinary Diagnosis",
    "Biosecurity Radius Alerts",
    "Maharashtra Veterinary Network",
    "Murrah Buffalo Passport",
    "Gir Cattle EVMR",
    "Dairy Farm OS",
  ],
  authors: [{ name: "Vetra Healthcare Technologies" }],
  openGraph: {
    title: "Vetra — A record for every animal. A radius for every outbreak.",
    description:
      "Digital animal passports, AI-assisted symptom diagnosis, and real-time biosecurity containment radius for Indian livestock farming.",
    url: "https://vetra.co.in",
    siteName: "Vetra",
    images: [
      {
        url: "/branding/vetra_logo.png",
        width: 1200,
        height: 630,
        alt: "Vetra Livestock Health Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/branding/vetra_icon.png",
    shortcut: "/branding/vetra_icon.png",
    apple: "/branding/vetra_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-ink antialiased selection:bg-gold-500/30 selection:text-pasture-900">
        {children}
      </body>
    </html>
  );
}
