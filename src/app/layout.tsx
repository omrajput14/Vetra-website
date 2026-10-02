import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lexend, Inter, Noto_Sans_Devanagari, IBM_Plex_Mono } from "next/font/google";
import { SiteFooter } from "@/components/home/Footer";
import "./globals.css";

// Same type as the app: Lexend (app_typography.dart), Inter for data, Noto Sans Devanagari for Marathi and Hindi.
const display = Lexend({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-deva" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", preload: false });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4EEE5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vetra.co.in"),
  title: {
    default: "Vetra — A record for every animal. A radius for every outbreak.",
    template: "%s | Vetra",
  },
  description:
    "Vetra gives every cow and buffalo a digital health record, lets farmers report problems by voice in Marathi, Hindi or English, and warns nearby farms when a vet confirms a contagious disease.",
  openGraph: {
    title: "Vetra — A record for every animal. A radius for every outbreak.",
    description:
      "Digital health records, voice reporting in Marathi, Hindi and English, and outbreak alerts for India's dairy farmers, vets and cooperatives.",
    url: "https://vetra.co.in",
    siteName: "Vetra",
    images: [{ url: "/branding/vetra_logo.png", width: 1024, height: 1024, alt: "Vetra" }],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/branding/vetra_icon.png",
    apple: "/branding/vetra_icon.png",
  },
};

const NAV = [
  { href: "/#how", label: "How it works" },
  { href: "/demo", label: "Try the demos" },
  { href: "/#vets", label: "For vets" },
  { href: "/#cooperatives", label: "Cooperatives" },
  { href: "/#faq", label: "FAQ" },
];


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${deva.variable} ${mono.variable}`}>
      <body className="bg-parch text-ink antialiased">
        <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3">
          <div className="flex h-14 items-center gap-2 rounded-full border border-white/60 bg-white/70 p-1.5 pl-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:gap-6">
            <Link href="/" className="flex items-center gap-2 pr-2 font-display text-xl font-semibold tracking-[-0.03em]">
              <Image src="/branding/vetra_logo_transparent.png" alt="" width={28} height={28} priority />
              Vetra
            </Link>
            <nav aria-label="Main" className="hidden items-center gap-6 text-[15px] font-medium text-ink/70 md:flex">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/#contact"
              className="rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-parch transition-colors hover:bg-olive"
            >
              Talk to us
            </Link>
          </div>
        </header>

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}
