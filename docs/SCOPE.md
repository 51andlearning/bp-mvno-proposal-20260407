# Scope

## Pages Included

| Route | Description |
|-------|-------------|
| `/` | Full proposal — single-page layout with anchored sections |

The site is a single-page proposal. All content is presented on one scrollable page with a sticky navigation header linking to anchored sections.

## Sections Included

| Section | Anchor | Description |
|---------|--------|-------------|
| Hero / Cover | `#hero` | Vendor and client branding, proposal title, date |
| Introduction | `#introduction` | Context and purpose of the proposal |
| Scope of Work — PWA | `#pwa` | PWA support levels, service description |
| Scope of Work — USSD | `#ussd` | USSD support levels, service description |
| Commercial Terms | `#commercial` | Fee tables for PWA and USSD (once-off + monthly) |
| Fee Summary | `#summary` | Combined fee summary table |
| Terms & Conditions | `#terms` | Validity, payment terms, invoicing schedule, adjustments |
| Signatures | `#signatures` | Signature block for both parties |
| Footer | — | Copyright, vendor details |

## What Is Excluded

- Multi-page routing (no `/about`, `/contact`, `/case-studies`)
- Blog or news section
- Live form submission / e-signature integration (signatures section is display-only)
- Authentication or gated access
- CMS or admin panel
- Animations beyond basic Tailwind transitions
- Dark mode toggle
- Mobile app or PWA wrapper for this site itself
- PDF export functionality (the source DOCX is the export artefact)

## Launch Milestones

| Milestone | Description |
|-----------|-------------|
| M1 — Scaffold | Project created, shadcn init, folder structure, docs written |
| M2 — Content | All sections populated with proposal content |
| M3 — Styling | CI applied — colours, typography, card layouts matching reference |
| M4 — Build pass | `pnpm build` passes with zero TypeScript errors |
| M5 — Vercel deploy | Live URL confirmed, preview working |
| M6 — Review | Client review and sign-off on content accuracy |
