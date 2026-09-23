# Praxis — HR Advisory & Organizational Diagnostics

**Understand Your People. Improve Your Organization.** — افهم أفرادك. طوّر منظمتك.

A high-end professional HR advisory platform that diagnoses workforce and organizational problems using evidence-based HR thinking, then turns the diagnosis into practical action. The platform combines the rigor of a senior HR management professor with the pragmatism of an HR director who has signed the payroll checks.

## What It Does

- **AI Diagnosis Console** — describe a real people problem in plain language (English or Arabic) and receive a structured professor-level analysis: initial read → clarifying questions → full diagnosis (problem, evidence, ranked root causes, alternative explanations, compared interventions, implementation plan, KPIs, risks)
- **15-Step Diagnostic Method** — the complete evidence-based methodology in three phases: Diagnose → Analyze → Act & Learn
- **11 HR Domains** — from workforce planning and recruitment to organizational behavior and HR analytics, treated as one interconnected practice
- **Knowledge Library** — 37 substantive entries across 11 categories, each grounded in established research (structured interviewing validity, idiosyncratic rater effect, equity theory, psychological safety, and more)
- **12 Diagnostic Tools** — including an interactive Turnover Cost Analyzer
- **3 Worked Case Studies** — full before→after diagnostics with metrics
- **Action Plan Framework** — NOW → NEXT → LATER with owners, reasons, and KPIs
- **Small-Business Mode** — enterprise discipline without enterprise bureaucracy
- **HR Tech & AI Guidance** — automate the administrative layer, keep human judgment on decisions

## Bilingual: English + Arabic (RTL)

The platform is fully bilingual with a one-click language toggle:

| Capability | Implementation |
|---|---|
| Full content translation | Every UI string, all 12 diagnosis categories, 15 method steps, 11 domains, 37 library entries, 12 tools, 3 case studies |
| RTL layout | `dir="rtl"` on language switch, logical CSS properties (`ps-*`, `start-*`, `border-s`), mirrored icons |
| Arabic typography | IBM Plex Sans Arabic (body) + Noto Kufi Arabic (display) via `next/font`, no letter-spacing, upright emphasis, taller headings |
| Arabic AI persona | The professor responds in Modern Standard Arabic with identical discipline and structure; per-message bidi detection in the console |
| SSR-safe language state | `useSyncExternalStore` + `localStorage` persistence |

## Tech Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4** with a custom editorial design system (navy / sage / teal / amber)
- **shadcn/ui** component primitives
- **react-markdown + remark-gfm** for rendering AI responses
- **z-ai-web-dev-sdk** for the server-side diagnosis API (`POST /api/diagnose`)

## Getting Started

```bash
# install dependencies
bun install

# start the dev server
bun run dev
```

The app runs at `http://localhost:3000`.

### Environment

The AI diagnosis console requires the z-ai SDK credentials available in the runtime environment. See `.env` handling below.

### Scripts

| Command | Purpose |
|---|---|
| `bun run dev` | Development server |
| `bun run build` | Production build |
| `bun run start` | Serve the production build |
| `bun run lint` | ESLint |

## Project Structure

```
src/
├── app/
│   ├── api/diagnose/route.ts   # AI professor endpoint (EN/AR)
│   ├── layout.tsx              # fonts (incl. Arabic) + metadata
│   ├── page.tsx                # section assembly
│   └── globals.css             # design system + RTL typography rules
├── components/hr/              # 15 platform sections + console
└── lib/
    ├── hr-data.ts              # English content layer
    ├── hr-data-ar.ts           # Arabic content mirror
    └── i18n.tsx                # language context + content switching
```

## Design Principles

- **The system is the unit of analysis** — never automatically blame employees; diagnose leadership, structure, incentives, and job design first
- **Evidence before opinion** — facts, data, assumptions, and hypotheses are explicitly separated
- **Recommendations must be executable** — scored on impact, cost, complexity, risk, and sustainability
- **General HR knowledge is not legal advice** — jurisdiction-specific questions are flagged for local counsel

## License

All rights reserved.
