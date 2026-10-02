# Vetra Platform Architecture

## Executive Summary

Vetra is India's dedicated livestock healthcare and biosecurity platform. It provides every cow and buffalo with an immutable digital health record, enables multilingual voice triage for rural dairy farmers (in Marathi, Hindi, and English), and computes automated containment zones when veterinarians confirm contagious outbreaks.

```
                    ┌────────────────────────┐
                    │    Dairy Farmers       │
                    │  (Voice & Offline App) │
                    └───────────┬────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                      Vetra Core Platform                    │
│                                                             │
│  ┌───────────────────────┐       ┌───────────────────────┐  │
│  │   Offline-First Sync  │       │  PostGIS Outbreak     │  │
│  │   (CRDT & Event Store)│       │  Containment Engine   │  │
│  └───────────┬───────────┘       └───────────┬───────────┘  │
│              │                               │              │
│              ▼                               ▼              │
│  ┌───────────────────────┐       ┌───────────────────────┐  │
│  │  Digital Health Pass  │       │  Automated Alerts &   │  │
│  │  (INAPH / NDDB Schema)│       │  Cooperative Command  │  │
│  └───────────────────────┘       └───────────────────────┘  │
└───────────────────────────────┬─────────────────────────────┘
                                │
          ┌─────────────────────┴─────────────────────┐
          ▼                                           ▼
┌────────────────────────┐                 ┌────────────────────┐
│ Verified Veterinarians │                 │ Dairy Cooperatives │
│ & Clinical Officers    │                 │ & State Regulators │
└────────────────────────┘                 └────────────────────┘
```

## System Components

### 1. Farmer Client (Field Mobility)
- **Multilingual Voice Intake**: Real-time voice reporting in Marathi, Hindi, and English powered by lightweight on-device speech processing.
- **Offline Herd Record Caching**: Local SQLite event logs allowing uninterrupted animal inspection even in remote shed areas without cellular reception.

### 2. Clinical Diagnostic Suite (Veterinary Handheld)
- **Biometric Muzzle Verification**: Optical landmark detection and ridge texture matching against local herd indexes.
- **Verified Clinical Signing**: Cryptographically signs vaccination records, diagnosis flags, and treatment logs.

### 3. Outbreak Command Center (District & Cooperative Level)
- **Spatial Containment Ring Buffers**: Uses PostGIS spatial calculations (`ST_DWithin`) to calculate a 5km primary quarantine perimeter and 15km surveillance zone.
- **Supply Chain Protection**: Cross-checks milk collection tanker routes to prevent cross-cluster contagion during active outbreaks.

## Technical Specifications

- **Frontend & Web Showcase**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons, native Node test runner.
- **Geospatial Engine**: PostgreSQL 17 + PostGIS for spatial buffering and distance computations.
- **Sync Protocol**: Conflict-Free Replicated Data Types (CRDTs) with deterministic Last-Write-Wins and event log merging.
