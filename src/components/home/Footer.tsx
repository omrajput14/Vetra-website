import Image from "next/image";
import Link from "next/link";
import { EMAIL, PHONE, mail, whatsapp } from "./links";

const COLS = [
  { title: "Product", links: [["How it works", "/#how"], ["Android app", "/downloads/Vetra-v1.0-production.apk"]] },
  { title: "For", links: [["Vets", "/#vets"], ["Cooperatives", "/#cooperatives"], ["Investors", "/#investors"]] },
  { title: "Company", links: [["Team", "/#team"], ["FAQ", "/#faq"], ["Contact", "/#contact"]] },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1240px] px-5 pb-10 pt-16 sm:px-8">
      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="max-w-xs">
          <Link href="/" className="flex items-center gap-2.5 font-display text-[24px] font-semibold tracking-[-0.03em]">
            <Image src="/branding/vetra_logo_transparent.png" alt="" width={34} height={34} />
            Vetra
          </Link>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">A record for every animal. A radius for every outbreak.</p>
          <div className="mt-5 space-y-1 text-[15px]">
            <a href={mail("Hello from the website")} className="block font-medium hover:text-olive">
              {EMAIL}
            </a>
            <a href={whatsapp("Hi Vetra, I found you through your website.")} className="block font-medium hover:text-olive">
              {PHONE}
            </a>
          </div>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-8 text-[15px] sm:grid-cols-3">
          {COLS.map((c) => (
            <div key={c.title}>
              <p className="mb-3 text-[13px] text-ink-muted">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="font-medium text-ink/80 transition-colors hover:text-olive">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6 text-[13px] text-ink-muted">
        <p>© {new Date().getFullYear()} Vetra. Made in Maharashtra, India.</p>
        <p>Names and data on this site are illustrative.</p>
      </div>
    </footer>
  );
}
