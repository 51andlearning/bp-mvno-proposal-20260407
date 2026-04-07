# Structure

## Folder Structure

```
bp-mvno-proposal/
├── docs/                         # Project documentation (this folder)
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md              # This file
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
├── public/
│   └── images/                   # Static image assets (logos, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles + shadcn CSS variables
│   │   ├── layout.tsx            # Root layout — fonts, metadata, nav
│   │   └── page.tsx              # Home page — composes all sections
│   ├── components/
│   │   ├── sections/             # Page section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   ├── PwaSection.tsx
│   │   │   ├── UssdSection.tsx
│   │   │   ├── CommercialSection.tsx
│   │   │   ├── TermsSection.tsx
│   │   │   └── SignaturesSection.tsx
│   │   └── ui/                   # shadcn primitives (auto-generated)
│   ├── content/                  # Static content data files
│   │   └── proposal.ts           # Typed content objects for all sections
│   └── lib/
│       └── utils.ts              # shadcn utility (cn helper)
├── CLAUDE.md                     # AI session context (auto-generated)
├── components.json               # shadcn config
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
└── tsconfig.json
```

## Section Composition Rules

1. **Each section is its own component** in `src/components/sections/`. Sections are imported and composed in `src/app/page.tsx`.
2. **Sections receive no props by default** — they import content directly from `src/content/proposal.ts`.
3. **shadcn primitives** (`Card`, `Badge`, `Accordion`, `Tabs`, etc.) are used inside sections. Raw HTML elements are avoided where a primitive exists.
4. **Anchor IDs** are set on the section's outermost wrapper `<section id="...">` to enable sticky nav scrolling.
5. **No inline styles** — all styling via Tailwind utility classes only.

## Content Management Approach

All proposal content is stored as typed TypeScript objects in `src/content/proposal.ts`. This makes it easy to:
- Update figures or text without touching component files
- Add type safety to content fields
- Replace with a CMS data source in future if needed

Logo assets (`DSG group.png`, `MVNE.png`, `bp-logo.svg`) should be placed in `public/images/` and referenced via Next.js `<Image>` components.
