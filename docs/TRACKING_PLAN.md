# Tracking Plan

## Overview

This document defines the analytics and event tracking strategy for the BP MVNO proposal site.

---

## 1. Google Analytics (Placeholder)

**Status:** Not yet configured.

To add Google Analytics 4:

1. Create a GA4 property at analytics.google.com
2. Obtain your `NEXT_PUBLIC_GA_ID` (format: `G-XXXXXXXXXX`)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add the GA script to `src/app/layout.tsx` via `next/script`

---

## 2. Vercel Analytics (Recommended)

Vercel provides zero-config web analytics for Next.js sites.

To enable:
1. Install: `pnpm add @vercel/analytics`
2. Add `<Analytics />` to `src/app/layout.tsx`
3. Enable in Vercel project dashboard → Analytics tab

**Tracks:** Page views, unique visitors, referrers, countries.

---

## 3. Event Tracking (Placeholder)

The following custom events should be tracked once analytics is wired up:

| Event Name | Trigger | Notes |
|------------|---------|-------|
| `proposal_viewed` | Page load / scroll past hero | Indicates full proposal view |
| `section_viewed` | Intersection Observer on each section | Track which sections are read |
| `cta_clicked` | Click on any call-to-action button | e.g. "Accept Proposal", "Download PDF" |
| `signature_section_reached` | Scroll to `#signatures` | High-intent signal |
| `terms_expanded` | Accordion open on Terms section | Engagement indicator |

---

## 4. Form Submission Tracking (Placeholder)

No forms are implemented in the current scope. If a contact or acceptance form is added:

- Track `form_submit_attempt` on submit click
- Track `form_submit_success` on successful API response
- Track `form_submit_error` on failure

---

## 5. Conversion Goals (Placeholder)

| Goal | Definition |
|------|------------|
| Primary conversion | Signature section reached + time on page > 3 min |
| Secondary conversion | CTA button clicked |
| Engagement | > 2 sections viewed in one session |

---

## 6. Privacy Considerations

- No PII should be collected via analytics
- If GA4 is added, ensure GDPR/POPIA-compliant cookie consent is implemented
- Vercel Analytics is cookieless by default — preferred for compliance
