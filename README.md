<div align="center">

# Vetra

**A record for every animal. A radius for every outbreak.**

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Tests Passing](https://img.shields.io/badge/tests-12%20passing-brightgreen?style=flat-square)]()
[![License](https://img.shields.io/badge/license-Private-red?style=flat-square)]()

*Digital animal health records, trilingual voice reporting, and spatial epidemiological containment for India's dairy farmers, veterinarians, and cooperatives.*

[Live Website](https://vetra.co.in) • [Interactive Demos](https://vetra.co.in/demo) • [Android App Release](/downloads/Vetra-v1.0-production.apk)

---

</div>

## Overview

In dairy farming communities across Maharashtra and rural India, millions of sick livestock wait days for veterinary care. Clinical records remain locked on fragmented paper cards, language barriers prevent farmers from articulating symptoms, and contagious epidemics like Lumpy Skin Disease (LSD) and Foot-and-Mouth Disease (FMD) spread unnoticed across cooperative milk routes.

**Vetra** solves this with an integrated livestock healthcare and biosecurity platform:
- **One Digital Record per Animal**: Complete lifelong Electronic Veterinary Medical Records (EVMR) indexed to 12-digit RFID ear tags aligned with Bharat Pashudhan / NDDB standards.
- **Trilingual Voice Reporting**: Smallholder farmers report symptoms by voice in **Marathi**, **Hindi**, or **English**. The platform transcribes phonetic speech, extracts clinical entities, and prepares case packets for practitioners.
- **Assistive Clinical AI with Human Sign-off**: Computer vision provides preliminary classification for skin nodules and hoof lesions; licensed veterinarians verify all diagnoses and retain sole clinical authority.
- **Automated Epidemiological Containment**: When a veterinarian confirms a contagious disease, Vetra's PostGIS spatial engine computes an automated 10–25 km containment ring, dispatching vernacular biosecurity advisories to neighboring holdings within seconds.

---

## Application Structure

```
vetra-website/
├── public/
│   ├── branding/                  # Brand vectors, official emblem, and high-res logos
│   ├── downloads/                 # Production Android APK release
│   └── system_architecture.svg    # 5-tier full-system cloud architecture diagram
├── src/
│   ├── app/
│   │   ├── api/tts/route.ts       # ElevenLabs Multilingual V2 audio synthesis endpoint
│   │   ├── demo/page.tsx          # Dedicated interactive clinical simulator route
│   │   ├── globals.css            # Tactile styling, typography variables, scanlines
│   │   ├── layout.tsx             # Root layout with Lexend, Inter, Devanagari typography
│   │   └── page.tsx               # Editorial brand homepage
│   ├── components/
│   │   ├── app/                   # Pixel-perfect Flutter & web command center mockups
│   │   │   ├── Command.tsx        # District command dashboard browser shell
│   │   │   ├── Device.tsx         # Android device container (360x792dp)
│   │   │   ├── RadiusScene.tsx    # Interactive 15 km ripple containment simulation
│   │   │   └── screens.tsx        # High-fidelity Flutter app screen rebuilds
│   │   ├── home/                  # Brand homepage sections
│   │   │   ├── Audiences.tsx      # Deep-linkable tabs (Vets, Cooperatives, Investors)
│   │   │   ├── Contact.tsx        # 2D physics-driven interactive sticker canvas (Matter.js)
│   │   │   ├── FieldReady.tsx     # Offline-first & rural resilience showcase
│   │   │   ├── Footer.tsx         # Site navigation & institutional footer
│   │   │   ├── Hero.tsx           # 3D interactive hero with real-time cursor tilt
│   │   │   ├── OneRecord.tsx      # EVMR digital passport & medical history cards
│   │   │   ├── Statement.tsx      # Mission thesis & clinical urgency
│   │   │   ├── Story.tsx          # 6-chapter field walkthrough from cow to cure
│   │   │   ├── Team.tsx           # Team roster with animated swinging ear tags
│   │   │   └── VetsDecide.tsx     # Human-in-the-loop clinical governance
│   │   ├── interactive/
│   │   │   ├── BiosecurityRadar3D.tsx  # PostGIS ST_DWithin outbreak containment radar
│   │   │   └── VoiceTriageSimulator.tsx # Trilingual voice triage with ElevenLabs TTS
│   │   └── sections/
│   │       ├── AiAssessmentDemoSection.tsx # Multimodal lesion triage case studies
│   │       ├── DigitalPassportSection.tsx  # Interactive biometric cattle passport
│   │       └── UnderTheHoodSection.tsx     # 5-tier cloud topology & tech specs
│   └── lib/
│       ├── useElevenLabsAudio.ts  # Audio playback hook with HTML5 speech synthesis fallback
│       └── voiceScenarios.ts      # Clinical NER entity dictionaries for mr, hi, en
└── tests/                         # Node.js native TypeScript test suite
    ├── biosecurityScenarios.test.ts # Outbreak radar perimeter & severity tests
    ├── links.test.ts              # WhatsApp & mailto deep link generation tests
    ├── ttsApi.test.ts             # API route payload & fallback handling tests
    └── voiceScenarios.test.ts     # Trilingual clinical metadata contract tests
```

---

## Technology Stack

| Tier | Technologies |
| :--- | :--- |
| **Web Frontend** | Next.js 14.2 (App Router), React 18, TypeScript 5.6 |
| **Styling & Physics** | Tailwind CSS 3.4, Framer Motion 11, Matter.js 2D rigid-body engine |
| **Mobile Client** | Flutter 3.29, Dart, Material 3, Riverpod 2.x, Offline SQLite Cache |
| **Backend Services** | Spring Boot 3.4.3 (Java 21 Virtual Threads), REST APIs (`/api/v1`) |
| **Spatial & Database** | PostgreSQL 17 + PostGIS (`ST_DWithin`), Redis 7.4 cluster caching |
| **Voice & AI** | ElevenLabs Multilingual V2, Devanagari phonetics, Browser Speech API fallback |
| **Cloud Infrastructure** | AWS Multi-AZ (ap-south-1), ECS Fargate, ALB TLS 1.3, Terraform IaC |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.18+ or v20+ (Node v24 recommended)
- `npm` or `pnpm` package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omrajput14/Vetra-website.git
   cd Vetra-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your [ElevenLabs API Key](https://elevenlabs.io/) to enable high-fidelity AI audio synthesis for voice triage. If not configured, the app automatically falls back to browser-native speech synthesis.

4. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the homepage, or [http://localhost:3000/demo](http://localhost:3000/demo) for interactive simulators.

---

## Testing & Quality Assurance

The repository includes a dependency-free, high-performance automated test suite utilizing Node.js native test runner and type stripping:

```bash
# Run all unit and integration tests
npm test

# Run ESLint validation
npm run lint

# Validate production build and static page generation
npm run build
```

---

## Core Team

- **Om Rajput** — Founder, Product & Technology
- **Khushi Shinde** — Cloud Developer
- **Soham Pawar** — Full Stack Developer
- **Mrunmai Joshi** — Research & Communication
- **Prachi Pawar** — Product Design & Presentation
- **Dhiraj Pawar** — Field Research & Operations

---

## Contributing & Collaboration

We follow standard GitHub Flow:
1. Create a descriptive feature branch (`feat/your-feature-name` or `fix/issue-description`).
2. Implement atomic, well-tested commits following [Conventional Commits](https://www.conventionalcommits.org/).
3. Verify changes with `npm test`, `npm run lint`, and `npm run build`.
4. Open a Pull Request referencing related issues and milestones for team review.
