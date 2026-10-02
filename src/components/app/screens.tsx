"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NavBar } from "./Device";
import { Icon, type IconName } from "./icons";

/*
 * High-fidelity rebuilds of the Vetra app, from the real screens in SIH/docs/audits,
 * using the app's own tokens (app_colors.dart, app_typography.dart). Sample data only.
 */

/* ---------- shared bits ---------- */

function AppBar({ title, back = true, badge, right }: { title: string; back?: boolean; badge?: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="flex h-14 shrink-0 items-center gap-3 px-4">
      {back && <Icon name="back" className="h-6 w-6" />}
      <p className="flex-1 truncate text-[21px] font-semibold tracking-[-0.01em]">{title}</p>
      {badge}
      {right}
    </div>
  );
}

const ROLE = {
  vet: "border-vet text-vet",
  paravet: "border-[#0D9488] text-[#0D9488]",
};

function RoleBadge({ role }: { role: keyof typeof ROLE }) {
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-[12px] font-semibold ${ROLE[role]}`}>{role === "vet" ? "Vet" : "Para-vet"}</span>
  );
}

function Primary({ children, icon }: { children: React.ReactNode; icon?: IconName }) {
  return (
    <div className="flex h-[52px] items-center justify-center gap-2 rounded-lg bg-lime text-[16px] font-semibold text-ink">
      {icon && <Icon name={icon} className="h-5 w-5" />}
      {children}
    </div>
  );
}

function Secondary({ children, danger = false }: { children: React.ReactNode; danger?: boolean }) {
  return (
    <div
      className={`flex h-[52px] items-center justify-center rounded-lg border bg-white text-[16px] font-semibold ${
        danger ? "border-danger/60 text-danger" : "border-olive text-olive"
      }`}
    >
      {children}
    </div>
  );
}

// Close-up of cattle skin with nodules, like the app's scan thumbnails.
const SPOTS = [
  [18, 22, 9], [42, 18, 6], [70, 30, 11], [28, 52, 12], [58, 58, 8], [84, 64, 10], [14, 80, 7], [46, 84, 11], [76, 88, 6],
  [62, 10, 5], [90, 40, 7], [36, 36, 5], [8, 50, 6], [52, 40, 4], [24, 68, 5], [68, 76, 5],
];
export function Skin({ className = "" }: { className?: string }) {
  const spots = SPOTS.map(([x, y, r]) => `radial-gradient(circle at ${x}% ${y}%, #3d2414 0 ${r * 0.55}px, #5a3720 ${r * 0.8}px, transparent ${r}px)`);
  return <div className={className} style={{ background: [...spots, "linear-gradient(135deg,#a8774f,#8a5c38 55%,#7a4e2e)"].join(",") }} />;
}

function Chip({ children, tone }: { children: React.ReactNode; tone: "ok" | "amber" | "red" | "muted" }) {
  const t = {
    ok: "border-lime bg-transparent text-ink",
    amber: "border-amber bg-amber text-ink",
    red: "border-danger text-danger",
    muted: "border-hair/60 text-ink-soft",
  }[tone];
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[12px] font-semibold ${t}`}>{children}</span>;
}

const pulse = (
  <motion.span
    className="pointer-events-none absolute -inset-1 rounded-[14px] border-2 border-lime"
    animate={{ opacity: [0, 1, 0], scale: [0.96, 1.04, 1.08] }}
    transition={{ duration: 1.8, repeat: Infinity }}
  />
);

/* ---------- farmer ---------- */

export function FarmerHome({ highlight = false }: { highlight?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-14 shrink-0 items-center gap-2 px-4">
        <Image src="/branding/vetra_logo_transparent.png" alt="Vetra Logo" width={28} height={28} className="h-7 w-7" priority />
        <p className="flex-1 text-[21px] font-bold text-olive">Vetra</p>
        <span className="flex items-center gap-1 text-[14px] font-medium text-olive">
          <Icon name="globe" className="h-4 w-4" /> मराठी
        </span>
        <span className="relative ml-2">
          <Icon name="bell" className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] font-bold text-white">2</span>
        </span>
      </div>
      <div className="flex-1 space-y-4 overflow-hidden px-5 pt-2">
        <div>
          <p className="text-[24px] font-semibold leading-tight">Welcome, Lakshmi</p>
          <p className="text-[14px] text-ink-muted">Jadhav Dairy, Malegaon Bk</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-hair/50 bg-white p-4">
            <p className="text-[32px] font-semibold leading-none text-olive">12</p>
            <p className="mt-2 text-[14px] text-ink-soft">Total animals</p>
          </div>
          <div className="rounded-xl border border-hair/50 bg-white p-4">
            <p className="text-[32px] font-semibold leading-none text-amber">1</p>
            <p className="mt-2 text-[14px] text-ink-soft">Needs attention</p>
          </div>
        </div>
        <p className="pt-1 text-[20px] font-semibold">Quick actions</p>
        <div className="grid grid-cols-4 gap-2.5">
          {(
            [
              ["camera", "Scan disease"],
              ["add", "Add animal"],
              ["calendar", "Book a vet"],
              ["compass", "Nearby vets"],
            ] as [IconName, string][]
          ).map(([icon, label], i) => (
            <div key={label} className="relative flex h-[92px] flex-col items-center justify-center gap-2 rounded-xl border border-hair/50 bg-white px-1 text-center">
              {highlight && i === 0 && pulse}
              <Icon name={icon} className="h-7 w-7 text-olive" />
              <span className="text-[12.5px] font-semibold leading-tight">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-outline bg-gradient-to-r from-sage to-white p-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-olive text-white">
            <Icon name="sparkle" className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <p className="text-[17px] font-semibold">AI veterinary advisor</p>
            <p className="text-[14px] text-ink-soft">Ask in Marathi, Hindi or English</p>
          </div>
          <Icon name="chevron" className="h-6 w-6" />
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-hair/50 bg-white p-3.5">
          <Icon name="syringe" className="h-6 w-6 text-amber" />
          <p className="flex-1 text-[15px]">
            <b className="font-semibold">Gauri</b> is due for her FMD booster
          </p>
          <Chip tone="amber">3 days</Chip>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export function ScanCamera() {
  return (
    <div className="flex h-full flex-col bg-black text-white">
      <div className="flex h-14 shrink-0 items-center gap-3 px-4">
        <Icon name="back" className="h-6 w-6" />
        <p className="flex-1 text-[21px] font-semibold">Scan disease</p>
        <span className="rounded-full bg-white/15 px-3 py-1 text-[13px]">Tips</span>
      </div>
      <div className="relative mx-4 mt-2 flex-1 overflow-hidden rounded-[20px]">
        <Skin className="absolute inset-0 scale-110" />
        <div className="absolute inset-0 bg-black/10" />
        {/* qr-scan-frame: chartreuse corner brackets */}
        {["left-8 top-16 border-l-4 border-t-4 rounded-tl-xl", "right-8 top-16 border-r-4 border-t-4 rounded-tr-xl", "left-8 bottom-24 border-l-4 border-b-4 rounded-bl-xl", "right-8 bottom-24 border-r-4 border-b-4 rounded-br-xl"].map((c) => (
          <span key={c} className={`absolute h-12 w-12 border-lime ${c}`} />
        ))}
        <motion.span
          className="absolute inset-x-10 h-16 bg-gradient-to-b from-transparent via-lime/40 to-transparent"
          animate={{ top: ["14%", "68%", "14%"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[13px] font-medium backdrop-blur">Tara, Gir cow</span>
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/55 px-4 py-1.5 text-[14px] backdrop-blur">
          Keep the lumps inside the frame
        </span>
      </div>
      <div className="flex h-36 shrink-0 items-center justify-center">
        <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-4 border-white">
          <span className="h-[58px] w-[58px] rounded-full bg-lime" />
        </span>
      </div>
    </div>
  );
}

export function AiAssessment({ sent = false }: { sent?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <AppBar title="AI assessment" />
      <div className="flex-1 space-y-3 overflow-hidden px-5">
        <div className="flex gap-2.5 rounded-xl border border-amber/70 bg-amber/10 p-3 text-[14px] leading-snug">
          <Icon name="info" className="h-5 w-5 shrink-0 text-amber" />
          <span>AI suggestion only. A vet will confirm the diagnosis.</span>
        </div>
        <div className="rounded-xl border border-hair/50 bg-white p-4">
          <div className="flex items-center gap-3">
            <Skin className="h-14 w-14 rounded-lg" />
            <div>
              <p className="text-[18px] font-semibold leading-tight">Tara, Gir cow</p>
              <p className="text-[13px] text-ink-muted">Scanned today, 6:12 am</p>
            </div>
          </div>
          <p className="mt-4 text-[13px] text-ink-muted">Suspected condition</p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-[22px] font-semibold leading-tight">Lumpy skin disease</p>
            <Chip tone="red">
              <Icon name="warning" className="h-3.5 w-3.5" /> Contagious
            </Chip>
          </div>
          <div className="mt-3 flex items-center justify-between text-[14px]">
            <span className="font-medium">AI confidence</span>
            <span className="font-semibold text-olive">82%</span>
          </div>
          <div className="mt-1.5 h-2 rounded-full bg-sage">
            <div className="h-full w-[82%] rounded-full bg-lime" />
          </div>
          <ul className="mt-4 space-y-1.5 text-[15px] text-ink-soft">
            <li>• Raised, firm nodules on neck and flank</li>
            <li>• Enlarged lymph nodes</li>
          </ul>
        </div>
        <div className="rounded-xl bg-sage p-4 text-[15px] leading-snug">
          <p className="font-semibold text-olive">Next step</p>
          Keep Tara away from other animals and get her checked today.
        </div>
      </div>
      <div className="space-y-2.5 px-5 pb-4 pt-3">
        {sent ? (
          <div className="flex h-[52px] items-center justify-center gap-2 rounded-lg bg-sage text-[16px] font-semibold text-olive">
            <Icon name="check" className="h-5 w-5" /> Sent to para-vet Ganesh
          </div>
        ) : (
          <Primary icon="stethoscope">Send for a check</Primary>
        )}
        <Secondary>Ask the AI advisor</Secondary>
      </div>
    </div>
  );
}

export function FarmerAlert() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-danger px-5 pb-4 pt-3 text-white">
        <p className="flex items-center gap-2 text-[16px] font-semibold">
          <Icon name="warning" className="h-5 w-5" /> Contagious
        </p>
        <p lang="mr" className="mt-1 font-deva text-[18px] font-semibold leading-snug">
          ४ किमी अंतरावर लम्पी त्वचा रोगाची पुष्टी झाली आहे.
        </p>
        <p className="text-[13px] text-white/80">Lumpy skin disease confirmed 4 km away</p>
      </div>
      <MiniMap className="h-[230px]" />
      <div className="flex-1 space-y-2 px-5 pt-4">
        <p className="text-[18px] font-semibold">What to do today</p>
        {["Keep your animals apart", "Don't share water troughs", "Call a vet if you see lumps or fever"].map((t) => (
          <p key={t} className="flex items-center gap-2.5 rounded-xl bg-white p-3 text-[15px]">
            <Icon name="check" className="h-5 w-5 text-olive" />
            {t}
          </p>
        ))}
      </div>
      <div className="px-5 pb-4">
        <Primary icon="call">Call the nearest vet</Primary>
      </div>
    </div>
  );
}

export function MiniMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 230" className={`w-full ${className}`} preserveAspectRatio="xMidYMid slice">
      <rect width="360" height="230" fill="#E9E6DA" />
      {[[30, 20, 90, 60], [150, 120, 80, 70], [250, 30, 90, 50], [40, 150, 70, 55], [260, 150, 80, 60]].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="6" fill="#DCE5C8" />
      ))}
      <path d="M-10 170 C 80 140, 120 200, 200 160 S 330 120, 380 140" stroke="#B9D3DE" strokeWidth="10" fill="none" />
      <path d="M0 95 H360 M120 0 V230 M240 0 L 300 230" stroke="#fff" strokeWidth="5" />
      <circle cx="205" cy="95" r="78" fill="#C62828" fillOpacity="0.1" stroke="#C62828" strokeWidth="2" strokeDasharray="6 6" />
      <circle cx="205" cy="95" r="7" fill="#C62828" stroke="#fff" strokeWidth="3" />
      <circle cx="150" cy="128" r="9" fill="#3F6900" stroke="#fff" strokeWidth="3" />
      <text x="164" y="146" fontSize="12" fontWeight="600" fill="#3F6900">Your farm</text>
      <rect x="282" y="196" width="62" height="22" rx="11" fill="#fff" />
      <text x="313" y="211" fontSize="12" fontWeight="600" textAnchor="middle" fill="#141414">15 km</text>
    </svg>
  );
}

export function Passport() {
  return (
    <div className="flex h-full flex-col">
      <AppBar title="Animal passport" right={<Icon name="qr" className="h-6 w-6 text-olive" />} />
      <div className="flex-1 space-y-3 overflow-hidden px-5">
        <div className="overflow-hidden rounded-xl border border-hair/50 bg-white">
          <div className="flex items-center gap-4 bg-sage p-4">
            <Skin className="h-[72px] w-[72px] rounded-xl" />
            <div className="flex-1">
              <p className="text-[24px] font-semibold leading-tight">Tara</p>
              <p className="text-[14px] text-ink-soft">Gir cow, female, 5 years</p>
              <p className="mt-1 text-[13px] font-semibold text-olive">Ear tag MH12-04521</p>
            </div>
            <QrMini />
          </div>
          <div className="grid grid-cols-3 divide-x divide-hair/30 text-center">
            {[
              ["Owner", "L. Jadhav"],
              ["Status", "Isolated"],
              ["Vaccines", "4"],
            ].map(([k, v]) => (
              <div key={k} className="py-3">
                <p className="text-[12px] text-ink-muted">{k}</p>
                <p className="text-[15px] font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="pt-1 text-[20px] font-semibold">Lifetime health timeline</p>
        {[
          ["Diagnosis", "Lumpy skin disease", "2 Oct 2026", "Dr. Anjali Deshmukh", "red"],
          ["Vaccination", "FMD vaccine", "10 Sep 2026", "Dr. Anjali Deshmukh", "ok"],
          ["Treatment", "Deworming", "5 Sep 2026", "Albendazole, oral", "ok"],
        ].map(([kind, title, date, by, tone]) => (
          <div key={title} className="flex gap-3 rounded-xl border border-hair/50 bg-white p-3.5">
            <span className={`w-1 shrink-0 rounded-full ${tone === "red" ? "bg-danger" : "bg-lime"}`} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-ink-muted">{kind}</span>
                <span className="text-[12px] text-ink-muted">{date}</span>
              </div>
              <p className="text-[16px] font-semibold">{title}</p>
              <p className="flex items-center gap-1 text-[13px] text-olive">
                <Icon name="shield" className="h-3.5 w-3.5" /> {by}
              </p>
            </div>
          </div>
        ))}
      </div>
      <NavBar active={1} />
    </div>
  );
}

function QrMini() {
  // Deterministic QR-looking grid with the three finder squares.
  const N = 21;
  const finder = (r: number, c: number) =>
    [[0, 0], [0, N - 7], [N - 7, 0]].some(([fr, fc]) => {
      const y = r - fr, x = c - fc;
      if (y < 0 || x < 0 || y > 6 || x > 6) return false;
      return y === 0 || y === 6 || x === 0 || x === 6 || (y >= 2 && y <= 4 && x >= 2 && x <= 4);
    });
  const inFinderZone = (r: number, c: number) => (r < 8 && c < 8) || (r < 8 && c > N - 9) || (r > N - 9 && c < 8);
  return (
    <svg viewBox={`-1 -1 ${N + 2} ${N + 2}`} className="h-16 w-16 rounded-md bg-white">
      {Array.from({ length: N * N }, (_, i) => {
        const r = Math.floor(i / N), c = i % N;
        const on = inFinderZone(r, c) ? finder(r, c) : (r * 31 + c * 17 + ((r * c) % 7)) % 3 === 0;
        return on ? <rect key={i} x={c} y={r} width="1" height="1" fill="#141414" /> : null;
      })}
    </svg>
  );
}

/* ---------- para-vet ---------- */

export function ParavetCheck() {
  return (
    <div className="flex h-full flex-col">
      <AppBar title="Check AI scan" badge={<RoleBadge role="paravet" />} />
      <div className="flex-1 space-y-3 overflow-hidden px-5">
        <Skin className="h-[150px] rounded-xl" />
        <div>
          <p className="text-[18px] font-semibold">Tara, Lakshmi Jadhav</p>
          <p className="text-[13px] text-ink-muted">Malegaon Bk, scanned 6:12 am</p>
        </div>
        <div className="rounded-xl border border-hair/50 bg-white p-3.5">
          <p className="text-[16px] font-semibold">AI reading</p>
          <p className="text-[15px]">Lumpy skin disease, 82%, high</p>
          <p className="mt-1 text-[14px] text-ink-soft">• Raised nodules on neck and flank</p>
        </div>
        <div className="relative rounded-lg border-2 border-olive bg-white p-3 pt-4">
          <span className="absolute -top-2.5 left-3 bg-parch px-1 text-[12px] font-medium text-olive">What you saw at the farm</span>
          <p className="text-[15px]">Fever 40.5°C. Nodules on neck and flank. Not eating since morning.</p>
        </div>
      </div>
      <div className="space-y-2.5 px-5 pb-4 pt-3">
        <Primary icon="stethoscope">Send to vet</Primary>
        <Secondary danger>Close: not a disease</Secondary>
      </div>
    </div>
  );
}

const DOSES = [
  ["Nandini", "MH12-3461", "S. Patil, Wagholi", true],
  ["Kapila", "MH12-3488", "S. Patil, Wagholi", true],
  ["Gauri", "MH12-0912", "L. Jadhav, Malegaon", true],
  ["Rani", "MH12-1150", "R. More, Malegaon", false],
  ["Sundari", "MH12-2207", "R. More, Malegaon", false],
] as const;

export function RecordDoses() {
  return (
    <div className="flex h-full flex-col">
      <AppBar title="Record doses" badge={<RoleBadge role="paravet" />} />
      <div className="flex-1 overflow-hidden px-5">
        <p className="text-[18px] font-semibold leading-snug">Lumpy skin ring vaccination, Pune 2026</p>
        <div className="mt-2 flex items-center justify-between text-[13px] text-ink-muted">
          <span>41 of 200 doses given</span>
          <span>15 km around Malegaon Bk</span>
        </div>
        <div className="mt-1.5 h-2 rounded-full bg-sage">
          <motion.div className="h-full rounded-full bg-lime" initial={{ width: "19%" }} animate={{ width: "21%" }} transition={{ delay: 1, duration: 0.8 }} />
        </div>
        <p className="mt-5 text-[16px] font-semibold">Still need a dose</p>
        <div className="mt-2 divide-y divide-hair/30 rounded-xl border border-hair/50 bg-white">
          {DOSES.map(([name, tag, owner, done], i) => (
            <div key={name} className="flex items-center gap-3 px-3.5 py-3">
              <div className="flex-1">
                <p className="text-[15px] font-semibold">
                  {name} <span className="font-normal text-ink-muted">{tag}</span>
                </p>
                <p className="text-[13px] text-ink-muted">Cattle, {owner}</p>
              </div>
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-md border-2"
                initial={{ backgroundColor: "#fff", borderColor: "#A1A1A1" }}
                animate={done ? { backgroundColor: "#3F6900", borderColor: "#3F6900" } : undefined}
                transition={{ delay: 0.4 + i * 0.35 }}
              >
                {done && <Icon name="check" className="h-5 w-5 text-white" />}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pb-4 pt-3">
        <Primary icon="syringe">Record 3 doses</Primary>
      </div>
    </div>
  );
}

/* ---------- vet ---------- */

export function VetReview({ approved = false }: { approved?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <AppBar title="Review AI scans" badge={<RoleBadge role="vet" />} />
      <div className="flex-1 space-y-2.5 overflow-hidden px-5">
        <p className="text-[13px] leading-snug text-ink-muted">
          Escalated by para-vets come first. Approving adds the diagnosis to the animal&apos;s record and reports a confirmed case.
        </p>
        <div className="rounded-xl border-2 border-olive/60 bg-white p-3.5">
          <div className="flex gap-3">
            <Skin className="h-14 w-14 shrink-0 rounded-lg" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[16px] font-semibold">Lumpy skin disease</p>
                <Chip tone="amber">Escalated</Chip>
              </div>
              <p className="text-[13px] text-ink-soft">Tara, L. Jadhav, 6 km</p>
              <p className="text-[13px] text-ink-soft">Ganesh Kale: fever 40.5°C, nodules</p>
            </div>
          </div>
          {approved ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-3 flex gap-2.5 rounded-lg bg-sage p-3 text-[14px] leading-snug"
            >
              <Icon name="check" className="h-5 w-5 shrink-0 text-olive" />
              <span>
                <b className="font-semibold">Confirmed.</b> Added to Tara&apos;s record and reported to the outbreak engine.
              </span>
            </motion.div>
          ) : (
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="flex h-11 items-center justify-center rounded-lg border border-danger/60 text-[15px] font-semibold text-danger">Reject</div>
              <div className="flex h-11 items-center justify-center rounded-lg bg-lime text-[15px] font-semibold">Approve</div>
            </div>
          )}
        </div>
        {[
          ["Foot-and-mouth disease", "Raja, R. More, 9 km", "61%"],
          ["Mastitis", "Bhuri, S. Patil, 12 km", "74%"],
        ].map(([d, who, c]) => (
          <div key={d} className="flex gap-3 rounded-xl border border-hair/50 bg-white p-3.5">
            <Skin className="h-12 w-12 shrink-0 rounded-lg opacity-80" />
            <div className="flex-1">
              <p className="text-[15px] font-semibold">
                {d} <span className="font-normal text-ink-muted">({c})</span>
              </p>
              <p className="text-[13px] text-ink-soft">{who}</p>
            </div>
            <Icon name="chevron" className="h-6 w-6 self-center text-ink-muted" />
          </div>
        ))}
      </div>
      <NavBar vet active={1} />
    </div>
  );
}

/* ---------- neighbours ---------- */

type Lang = "mr" | "hi" | "en";

const ALERT: Record<Lang, { tag: string; title: string; body: string; actions: [string, string]; km: string }> = {
  mr: {
    tag: "संसर्गजन्य",
    title: "लम्पी त्वचा रोग",
    body: "तुमच्या शेतापासून ४.२ किमी अंतरावर पुष्टी झाली आहे. जनावरांना वेगळे ठेवा.",
    actions: ["काय करावे", "डॉक्टरांना फोन करा"],
    km: "४.२ किमी",
  },
  hi: {
    tag: "संक्रामक",
    title: "लम्पी त्वचा रोग",
    body: "आपके खेत से 6.8 किमी दूर पुष्टि हुई है। पशुओं को अलग रखें।",
    actions: ["क्या करें", "डॉक्टर को फ़ोन करें"],
    km: "6.8 किमी",
  },
  en: {
    tag: "Contagious",
    title: "Lumpy skin disease",
    body: "Confirmed 11 km from your farm. Keep your animals apart.",
    actions: ["What to do", "Call a vet"],
    km: "11 km",
  },
};

/** Illustrated lock-screen wallpapers: the farmer's own sky. */
function Wallpaper({ kind }: { kind: "dawn" | "dusk" | "day" }) {
  const sky = {
    dawn: ["#C9663A", "#EE9D5A", "#F8D79A"],
    dusk: ["#151B33", "#3B2F5E", "#B5684F"],
    day: ["#4F9BD0", "#93C8E8", "#DCEFF7"],
  }[kind];
  const hills = {
    dawn: ["#A9B46A", "#6E8A2E", "#3F6900"],
    dusk: ["#2B3326", "#1C2618", "#10170D"],
    day: ["#A7D46A", "#6FAE34", "#3F7F12"],
  }[kind];
  return (
    <svg viewBox="0 0 360 792" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`sky-${kind}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="0.45" stopColor={sky[1]} />
          <stop offset="0.75" stopColor={sky[2]} />
        </linearGradient>
        <radialGradient id={`glow-${kind}`}>
          <stop offset="0" stopColor="#FFF4D2" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFF4D2" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="360" height="792" fill={`url(#sky-${kind})`} />
      {kind === "dusk" &&
        [[40, 90], [120, 50], [300, 70], [250, 140], [70, 190], [330, 220], [180, 120], [20, 300]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 ? 1.2 : 1.8} fill="#fff" opacity="0.8" />
        ))}
      {kind === "dusk" && <circle cx="280" cy="380" r="26" fill="#F4E7C7" />}
      {kind === "dawn" && (
        <>
          <circle cx="250" cy="500" r="140" fill={`url(#glow-${kind})`} />
          <circle cx="250" cy="505" r="46" fill="#FFE6A6" />
        </>
      )}
      {kind === "day" &&
        [[60, 330, 1], [250, 260, 0.8]].map(([x, y, s], i) => (
          <g key={i} fill="#fff" opacity="0.85" transform={`translate(${x} ${y}) scale(${s})`}>
            <ellipse cx="0" cy="0" rx="38" ry="16" />
            <ellipse cx="24" cy="-10" rx="26" ry="18" />
            <ellipse cx="-20" cy="-6" rx="20" ry="13" />
          </g>
        ))}
      <path d="M0 540 C 80 500, 160 520, 220 505 S 330 480, 360 500 V792 H0Z" fill={hills[0]} />
      <path d="M0 600 C 90 560, 170 590, 250 570 S 340 560, 360 575 V792 H0Z" fill={hills[1]} />
      <path d="M0 660 C 100 630, 200 660, 360 640 V792 H0Z" fill={hills[2]} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M${-40 + i * 70} 792 L ${150 + i * 18} 650`} stroke="#fff" strokeOpacity="0.12" strokeWidth="3" />
      ))}
      <g transform="translate(70 572)" fill={hills[2]}>
        <rect x="-2" y="0" width="4" height="22" />
        <circle cx="0" cy="-6" r="16" />
      </g>
    </svg>
  );
}

export function LockAlert({ lang, wallpaper = "dawn", delay = 0.6 }: { lang: Lang; wallpaper?: "dawn" | "dusk" | "day"; delay?: number }) {
  const a = ALERT[lang];
  const deva = lang === "en" ? "" : "font-deva";
  return (
    <div className="relative h-full overflow-hidden text-white">
      <Wallpaper kind={wallpaper} />
      <div className="relative flex flex-col items-center px-3.5 pt-14 [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
        <p className="text-[15px] font-medium text-white/85">Friday, 2 October</p>
        <p className="text-[88px] font-light leading-[1.05] tracking-[-0.05em]">8:42</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -28, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay, type: "spring", stiffness: 240, damping: 20 }}
        className="relative mx-3.5 mt-8"
      >
        <div className="rounded-[26px] bg-white/90 p-3.5 text-ink shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl [text-shadow:none]">
          <div className="flex items-center gap-2 text-[12.5px] text-ink-muted">
            <span className="flex h-6 w-6 items-center justify-center rounded-[7px] bg-parch">
              <Image src="/branding/vetra_logo_transparent.png" alt="Vetra" width={20} height={20} className="h-5 w-5" />
            </span>
            <span className="font-medium text-ink-soft">Vetra</span>
            <span>now</span>
            <span lang={lang} className={`ml-auto flex items-center gap-1 rounded-full bg-danger px-2 py-0.5 text-[11.5px] font-semibold text-white ${deva}`}>
              <Icon name="warning" className="h-3 w-3" /> {a.tag}
            </span>
          </div>
          <p lang={lang} className={`mt-2 text-[17px] font-semibold leading-tight ${deva}`}>
            {a.title}
          </p>
          <p lang={lang} className={`mt-1 text-[14px] leading-snug text-ink-soft ${deva}`}>
            {a.body}
          </p>
          <div className="relative mt-3 h-[86px] overflow-hidden rounded-2xl bg-[#E9E6DA]">
            <svg viewBox="0 0 300 86" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
              <rect x="14" y="8" width="70" height="30" rx="5" fill="#DCE5C8" />
              <rect x="190" y="46" width="80" height="32" rx="5" fill="#DCE5C8" />
              <path d="M-10 70 C 60 50, 120 80, 200 60 S 290 40, 320 50" stroke="#B9D3DE" strokeWidth="7" fill="none" />
              <path d="M0 40 H300 M110 0 V86" stroke="#fff" strokeWidth="4" />
              <circle cx="215" cy="30" r="62" fill="#C62828" fillOpacity="0.1" stroke="#C62828" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="215" cy="30" r="5" fill="#C62828" stroke="#fff" strokeWidth="2" />
              <circle cx="120" cy="56" r="6.5" fill="#3F6900" stroke="#fff" strokeWidth="2.5" />
            </svg>
            <span lang={lang} className={`absolute bottom-2 left-2 rounded-full bg-white px-2 py-0.5 text-[11.5px] font-semibold text-olive ${deva}`}>
              {a.km}
            </span>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {a.actions.map((t, i) => (
              <span
                key={t}
                lang={lang}
                className={`flex h-10 items-center justify-center rounded-xl text-[13px] font-semibold ${i === 1 ? "bg-lime text-ink" : "bg-ink/[0.06]"} ${deva}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* grouped notifications peeking underneath */}
        <div className="mx-4 h-3 rounded-b-[18px] bg-white/60" />
        <div className="mx-8 h-2.5 rounded-b-[16px] bg-white/35" />
      </motion.div>
      <div className="absolute inset-x-8 bottom-6 flex justify-between">
        {(["bell", "camera"] as const).map((n) => (
          <span key={n} className="flex h-12 w-12 items-center justify-center rounded-full bg-black/25 backdrop-blur">
            <Icon name={n} className="h-5 w-5" />
          </span>
        ))}
      </div>
    </div>
  );
}
