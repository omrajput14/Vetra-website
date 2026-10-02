"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { BadgeCheck, Milk, PawPrint, QrCode, Stethoscope, Syringe, Tag, Thermometer, TriangleAlert, Tractor, Wheat, MapPin, type LucideIcon } from "lucide-react";
import { CowMark } from "./OneRecord";
import { EMAIL, PHONE, mail, whatsapp } from "./links";

/*
 * Contact section with a pile of Vetra things: animals, vet tools, ear tags and alerts.
 * They drop in when the section scrolls into view, tumble and land however they land.
 * Move the cursor through them to shove them, drag to throw, tap to flick.
 */

type Sticker =
  | { kind: "pill"; text: string; Icon?: LucideIcon; tone: keyof typeof TONES; lang?: string }
  | { kind: "badge"; Icon?: LucideIcon; cow?: boolean; tone: keyof typeof TONES; size: number }
  | { kind: "tag"; text: string };

const TONES = {
  lime: "bg-lime text-ink",
  white: "bg-white text-ink",
  olive: "bg-olive text-white",
  amber: "bg-amber text-ink",
  ink: "bg-ink text-lime",
  red: "bg-danger text-white",
  parch: "bg-parch text-ink",
};

const STICKERS: Sticker[] = [
  { kind: "pill", text: "Gir cow", Icon: PawPrint, tone: "lime" },
  { kind: "badge", cow: true, tone: "parch", size: 112 },
  { kind: "pill", text: "Vet confirmed", Icon: BadgeCheck, tone: "olive" },
  { kind: "tag", text: "04521" },
  { kind: "badge", Icon: Stethoscope, tone: "olive", size: 96 },
  { kind: "pill", text: "FMD vaccine", Icon: Syringe, tone: "white" },
  { kind: "pill", text: "मराठी", tone: "parch", lang: "mr" },
  { kind: "badge", Icon: Milk, tone: "lime", size: 88 },
  { kind: "pill", text: "15 km radius", Icon: MapPin, tone: "amber" },
  { kind: "pill", text: "Murrah buffalo", Icon: PawPrint, tone: "white" },
  { kind: "badge", Icon: Syringe, tone: "white", size: 84 },
  { kind: "pill", text: "Contagious", Icon: TriangleAlert, tone: "red" },
  { kind: "tag", text: "11873" },
  { kind: "pill", text: "हिंदी", tone: "white", lang: "hi" },
  { kind: "badge", Icon: QrCode, tone: "ink", size: 84 },
  { kind: "pill", text: "Para-vet", Icon: Thermometer, tone: "lime" },
  { kind: "badge", Icon: Tractor, tone: "white", size: 92 },
  { kind: "pill", text: "Ear tag", Icon: Tag, tone: "white" },
  { kind: "badge", Icon: Wheat, tone: "amber", size: 80 },
  { kind: "pill", text: "Milk safe", Icon: Milk, tone: "olive" },
];

function StickerView({ s }: { s: Sticker }) {
  if (s.kind === "pill")
    return (
      <span
        lang={s.lang}
        className={`flex h-full w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-[19px] font-semibold tracking-[-0.01em] shadow-[0_10px_24px_-14px_rgba(20,20,20,0.45),inset_0_-2px_0_rgba(0,0,0,0.08)] ${TONES[s.tone]} ${s.lang ? "font-deva" : ""}`}
      >
        {s.Icon && <s.Icon className="h-5 w-5 shrink-0" strokeWidth={2.4} />}
        {s.text}
      </span>
    );
  if (s.kind === "badge")
    return (
      <span className={`flex h-full w-full items-center justify-center rounded-full shadow-[0_10px_24px_-14px_rgba(20,20,20,0.45),inset_0_-3px_0_rgba(0,0,0,0.08)] ${TONES[s.tone]}`}>
        {s.cow ? (
          <span className="h-[78%] w-[78%]">
            <CowMark on={false} />
          </span>
        ) : (
          s.Icon && <s.Icon className="h-[44%] w-[44%]" strokeWidth={2.2} />
        )}
      </span>
    );
  return (
    <svg viewBox="0 0 72 92" className="h-full w-full drop-shadow-[0_10px_12px_rgba(20,20,20,0.18)]">
      <path
        d="M29 18a7 7 0 1 1 14 0v5c0 3 1 4 4 4h12c5 0 9 4 9 9v45c0 6-4 10-10 10H14C8 91 4 87 4 81V36c0-5 4-9 9-9h12c3 0 4-1 4-4z"
        fill="#94E130"
        stroke="#3F6900"
        strokeWidth="2.5"
      />
      <circle cx="36" cy="17" r="3.5" fill="#F4EEE5" stroke="#3F6900" strokeWidth="2" />
      <text x="36" y="52" textAnchor="middle" fontSize="8" fontWeight="600" letterSpacing="1.5" fill="#141414" fillOpacity="0.6" style={{ fontFamily: "var(--font-display)" }}>
        VETRA
      </text>
      <text x="36" y="74" textAnchor="middle" fontSize="17" fontWeight="700" fill="#141414" style={{ fontFamily: "var(--font-display)" }}>
        {s.text}
      </text>
    </svg>
  );
}

// Approximate size of each sticker for the physics body.
function sizeOf(s: Sticker): [number, number] {
  if (s.kind === "pill") return [Math.round(s.text.length * 11 + (s.Icon ? 74 : 48)), 60];
  if (s.kind === "badge") return [s.size, s.size];
  return [72, 92];
}

function PhysicsPile({ box }: { box: React.RefObject<HTMLDivElement> }) {
  const els = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const host = box.current;
    if (!host) return;
    const { Engine, Runner, Bodies, Body, Composite, Events, Mouse, MouseConstraint, Query, Sleeping } = Matter;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let cleanup = () => {};

    const build = () => {
      cleanup();
      const W = host.clientWidth;
      const H = host.clientHeight;
      const scale = W < 640 ? 0.72 : 1;
      const count = W < 640 ? 13 : STICKERS.length;

      const engine = Engine.create({ enableSleeping: true });
      engine.gravity.y = 1.1;
      const wall = { isStatic: true, friction: 0.6, render: { visible: false } };
      Composite.add(engine.world, [
        Bodies.rectangle(W / 2, H + 40, W * 3, 80, wall),
        Bodies.rectangle(-40, H / 2 - 400, 80, H * 3, wall),
        Bodies.rectangle(W + 40, H / 2 - 400, 80, H * 3, wall),
      ]);

      // Lay them out like a shuffled deck above the section, so they drop in one by one.
      const bodies = STICKERS.slice(0, count).map((s, i) => {
        const [w, h] = sizeOf(s).map((v) => v * scale);
        const x = 60 + ((i * 0.618034 * W) % (W - 120));
        const y = -120 - i * 70;
        const opts = { restitution: 0.32, friction: 0.5, frictionAir: 0.012, density: 0.0018, angle: (((i * 37) % 60) - 30) * (Math.PI / 180) };
        const body =
          s.kind === "badge"
            ? Bodies.circle(x, y, w / 2, opts)
            : Bodies.rectangle(x, y, w, h, { ...opts, chamfer: { radius: s.kind === "pill" ? h / 2 - 1 : 14 * scale } });
        Body.setAngularVelocity(body, ((i % 5) - 2) * 0.02);
        const el = els.current[i];
        if (el) {
          el.style.width = `${w}px`;
          el.style.height = `${h}px`;
        }
        return { body, el, w, h };
      });

      const sync = () => {
        for (const { body, el, w, h } of bodies) {
          if (!el) continue;
          el.style.transform = `translate(${body.position.x - w / 2}px, ${body.position.y - h / 2}px) rotate(${body.angle}rad)`;
        }
      };

      if (reduce) {
        Composite.add(engine.world, bodies.map((b) => b.body));
        for (let i = 0; i < 900; i++) Engine.update(engine, 1000 / 60);
        sync();
        cleanup = () => Engine.clear(engine);
        return;
      }

      // Drop when the section is on screen.
      let dropped = false;
      const timers: number[] = [];
      const drop = () => {
        if (dropped) return;
        dropped = true;
        bodies.forEach((b, i) => timers.push(window.setTimeout(() => Composite.add(engine.world, b.body), i * 110)));
      };
      const io = new IntersectionObserver(([e]) => e.isIntersecting && drop(), { threshold: 0.3 });
      io.observe(host);

      // Cursor: shove things it moves through; press and drag to throw.
      const last = { x: 0, y: 0, inside: false };
      // Matter's Mouse listens on the host; we keep its mouse drag but drop its wheel and touch
      // handlers, which would otherwise block page scrolling.
      let detachMouse = () => {};
      if (finePointer) {
        const mouse = Mouse.create(host);
        const m = mouse as unknown as Record<"mousemove" | "mousedown" | "mouseup" | "mousewheel", EventListener>;
        const off = (pairs: [string, EventListener][]) => pairs.forEach(([t, fn]) => host.removeEventListener(t, fn));
        off([["wheel", m.mousewheel], ["touchmove", m.mousemove], ["touchstart", m.mousedown], ["touchend", m.mouseup]]);
        detachMouse = () => off([["mousemove", m.mousemove], ["mousedown", m.mousedown], ["mouseup", m.mouseup]]);
        Composite.add(engine.world, MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: false } } }));
      }

      const onMove = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        if (last.inside && e.pointerType !== "touch") {
          const speed = Math.min(Math.hypot(x - last.x, y - last.y), 40);
          if (speed > 1.5) {
            for (const { body, w } of bodies) {
              const dx = body.position.x - x;
              const dy = body.position.y - y;
              const d = Math.hypot(dx, dy);
              if (d < w / 2 + 50 && d > 0) {
                Sleeping.set(body, false);
                Body.applyForce(body, body.position, { x: (dx / d) * speed * 0.00045 * body.mass, y: ((dy / d) * speed * 0.00045 - 0.0012) * body.mass });
              }
            }
          }
        }
        const hit = Query.point(bodies.map((b) => b.body), { x, y }).length > 0;
        host.style.cursor = hit ? "grab" : "";
        last.x = x;
        last.y = y;
        last.inside = true;
      };
      const onLeave = () => {
        last.inside = false;
      };
      // Tap (or click) to flick a sticker into the air.
      const onDown = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        const p = { x: e.clientX - r.left, y: e.clientY - r.top };
        for (const body of Query.point(bodies.map((b) => b.body), p)) {
          Sleeping.set(body, false);
          if (e.pointerType === "touch") {
            Body.setVelocity(body, { x: (Math.random() - 0.5) * 8, y: -14 });
            Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.4);
          }
        }
      };
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
      host.addEventListener("pointerdown", onDown);

      Events.on(engine, "afterUpdate", sync);
      const runner = Runner.create();
      Runner.run(runner, engine);

      cleanup = () => {
        io.disconnect();
        timers.forEach(clearTimeout);
        host.removeEventListener("pointermove", onMove);
        host.removeEventListener("pointerleave", onLeave);
        host.removeEventListener("pointerdown", onDown);
        detachMouse();
        Runner.stop(runner);
        Engine.clear(engine);
        host.style.cursor = "";
      };
    };

    build();
    let lastW = host.clientWidth;
    const ro = new ResizeObserver(() => {
      if (Math.abs(host.clientWidth - lastW) > 40) {
        lastW = host.clientWidth;
        build();
      }
    });
    ro.observe(host);
    return () => {
      ro.disconnect();
      cleanup();
    };
  }, [box]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {STICKERS.map((s, i) => (
        <div
          key={i}
          ref={(el) => {
            els.current[i] = el;
          }}
          className="absolute left-0 top-0 select-none will-change-transform"
          style={{ transform: "translate(-500px,-500px)" }}
        >
          <StickerView s={s} />
        </div>
      ))}
    </div>
  );
}

export function Contact() {
  const box = useRef<HTMLDivElement>(null);
  return (
    <section id="contact" className="scroll-mt-24 px-2 pb-2 sm:px-3 sm:pb-3">
      <div ref={box} className="relative h-[820px] touch-pan-y overflow-hidden rounded-[32px] bg-sage sm:h-[800px] sm:rounded-[44px]">
        <PhysicsPile box={box} />
        <div className="pointer-events-none relative z-10 mx-auto max-w-5xl px-5 pt-20 text-center sm:pt-24">
          <h2 className="text-[clamp(2.8rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.055em]">Ready when you are.</h2>
          <p className="mx-auto mt-5 max-w-lg text-[19px] leading-relaxed text-ink-soft">
            We&apos;re looking for vets, para-vets and dairy cooperatives in Maharashtra to pilot with, and partners to grow with.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={whatsapp("Hi Vetra, I found you through your website.")}
              className="pointer-events-auto inline-flex h-[52px] items-center rounded-full bg-lime px-7 text-[16px] font-semibold text-ink shadow-[0_10px_30px_-12px_rgba(63,105,0,0.6)] transition-transform hover:-translate-y-0.5"
            >
              WhatsApp {PHONE}
            </a>
            <a
              href={mail("Hello from the website")}
              className="pointer-events-auto inline-flex h-[52px] items-center rounded-full bg-ink px-7 text-[16px] font-semibold text-parch transition-transform hover:-translate-y-0.5"
            >
              Email {EMAIL}
            </a>
          </div>
          <p className="mt-6 text-[14px] text-ink-muted">Go on, push them around.</p>
        </div>
      </div>
    </section>
  );
}
