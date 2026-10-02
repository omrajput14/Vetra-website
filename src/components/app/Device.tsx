import { Icon, type IconName } from "./icons";

// Screens are authored at real Android size (360 x 792 dp) and scaled into the frame,
// so type and spacing match the app's design system exactly.
const W = 360;
const H = 792;
const BEZEL = 9;

export function Device({
  children,
  scale = 0.8,
  dark = false,
  time = "8:41",
  className = "",
}: {
  children: React.ReactNode;
  scale?: number;
  dark?: boolean;
  time?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 rounded-[48px] bg-gradient-to-b from-[#3a3a3a] via-[#1a1a1a] to-[#2a2a2a] shadow-[0_60px_100px_-40px_rgba(20,20,20,0.55),0_30px_50px_-30px_rgba(20,20,20,0.35)] ${className}`}
      style={{ width: W * scale + BEZEL * 2, height: H * scale + BEZEL * 2, padding: BEZEL }}
    >
      {/* side keys */}
      <span className="absolute -right-[2px] top-[22%] h-14 w-[3px] rounded-r bg-[#2a2a2a]" />
      <span className="absolute -right-[2px] top-[34%] h-24 w-[3px] rounded-r bg-[#2a2a2a]" />
      <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-black">
        <div
          className={`flex origin-top-left flex-col font-[family-name:var(--font-display)] ${dark ? "text-white" : "bg-parch text-ink"}`}
          style={{ width: W, height: H, transform: `scale(${scale})` }}
        >
          <div className={`relative flex h-9 shrink-0 items-center justify-between px-6 text-[13px] font-medium ${dark ? "text-white" : "text-ink"}`}>
            <span>{time}</span>
            <span className="absolute left-1/2 top-[9px] h-[14px] w-[14px] -translate-x-1/2 rounded-full bg-black ring-[3px] ring-black/10" />
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M2 22h20V2z" /></svg>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
            </span>
          </div>
          <div className="relative min-h-0 flex-1">{children}</div>
          <div className="flex h-5 shrink-0 items-center justify-center">
            <span className={`h-1 w-24 rounded-full ${dark ? "bg-white/70" : "bg-ink/70"}`} />
          </div>
        </div>
        {/* glass reflection */}
        <span className="pointer-events-none absolute inset-0 rounded-[40px] bg-[linear-gradient(115deg,rgba(255,255,255,0.10),transparent_30%)]" />
      </div>
    </div>
  );
}

const FARMER_TABS: [IconName, string][] = [
  ["home", "Home"],
  ["paw", "Animals"],
  ["bell", "Alerts"],
  ["compass", "Nearby"],
  ["person", "Profile"],
];

const VET_TABS: [IconName, string][] = [
  ["dashboard", "Dashboard"],
  ["assignment", "Requests"],
  ["medical", "Consults"],
  ["map", "Outbreaks"],
  ["person", "Profile"],
];

/** Material 3 navigation bar, as in the app. */
export function NavBar({ vet = false, active = 0 }: { vet?: boolean; active?: number }) {
  const tabs = vet ? VET_TABS : FARMER_TABS;
  return (
    <nav className="flex h-[76px] shrink-0 items-start justify-around border-t border-black/5 bg-white px-2 pt-2.5">
      {tabs.map(([icon, label], i) => (
        <span key={label} className="flex w-16 flex-col items-center gap-1">
          <span className={`flex h-8 w-14 items-center justify-center rounded-full ${i === active ? "bg-sage text-olive" : "text-ink-soft"}`}>
            <Icon name={icon} className="h-[22px] w-[22px]" />
          </span>
          <span className={`text-[12px] ${i === active ? "font-semibold text-olive" : "text-ink-soft"}`}>{label}</span>
        </span>
      ))}
    </nav>
  );
}
