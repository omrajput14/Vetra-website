# Contributing to Vetra

Thank you for your interest in contributing to Vetra! We are building India's livestock healthcare and biosecurity platform for dairy farmers, veterinarians, and cooperatives.

## Development Setup

1. **Prerequisites**:
   - Node.js v20+ or v22+
   - `pnpm` or `npm`
2. **Clone and Install**:
   ```bash
   git clone https://github.com/omrajput14/Vetra-website.git
   cd Vetra-website
   npm install
   ```
3. **Run Local Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Branch & Commit Standards

- Use descriptive branch names:
  - `feat/<feature-name>` for new capabilities
  - `fix/<issue-name>` for bug fixes
  - `docs/<doc-topic>` for documentation
- Follow [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat: ...`, `fix: ...`, `docs: ...`, `test: ...`, `refactor: ...`

## Pre-Push Verification

Before submitting a Pull Request, ensure all automated checks pass:

```bash
npm test         # Run unit tests
npm run lint     # Run ESLint validation
npm run build    # Run Next.js production build
```

## Team Contacts

- **Om Rajput** — Founder & Product
- **Khushi Shinde** — Cloud Developer
- **Soham Pawar** — Full Stack Developer
