// Proposal content — all text data for the BP MVNO PWA & USSD proposal site

export const vendor = {
  name: "MVNE (Pty) Ltd",
  tagline: "A DSG Company",
  address: "15 6th Street, Parkhurst, Johannesburg",
  website: "www.mvne.co.za",
  signatory: "Yaron Assabi",
  signatoryTitle: "CEO",
};

export const client = {
  name: "BP",
  legalName: "AFGRI",
};

export const meta = {
  title: "Proposal for Development and Support",
  subtitle: "BP MVNO PWA and USSD Platforms",
  validity: "30 days from date of issue",
  date: "31 March 2026",
};

export const supportLevels = [
  {
    level: "Level 1",
    description: "Monitoring of the system functionality",
    note: "Can be added",
    highlight: false,
  },
  {
    level: "Level 2",
    description: "System functional issues that can be resolved by restarting or manual intervention",
    note: null,
    highlight: false,
  },
  {
    level: "Level 3",
    description: "Code-level corrections required",
    note: "Provided by MVNE",
    highlight: true,
  },
];

export const pwa = {
  title: "PWA",
  fullTitle: "Progressive Web App",
  description:
    "Support of the developed functionality and integration to the BP MVNO platform.",
  supportLevel: "Level 3",
  additionalServices: [
    "Identification of features, additions, and corrections — change request-based, billed on time and material basis",
    "Support issues logged with the support team following the SLA defined in the SOW between BP and MVNE",
    "Monthly development hours, which may be accumulated up to a maximum of three months",
  ],
  onceOff: {
    label: "PWA set up and development",
    amount: "R105,000",
    note: "ex VAT",
  },
  monthly: {
    label: "Tier 3 support — 40 hours per month + 10 hours development",
    amount: "R39,000",
    note: "per month, ex VAT",
    includes: ["Support for Level 3 issues", "10 hours per month of development work"],
  },
};

export const ussd = {
  title: "USSD",
  fullTitle: "USSD Platform",
  description:
    "Support of the developed functionality and integration to the USSD platform.",
  supportLevel: "Level 3",
  additionalServices: [
    "Identification of features, additions, and corrections — change request-based, billed on time and material basis",
    "Support issues logged with the support team following the SLA defined in the SOW between BP and MVNE",
  ],
  onceOff: {
    label: "USSD set up and development",
    amount: "R26,000",
    note: "ex VAT",
  },
  monthly: {
    label: "Tier 3 support per month",
    amount: "R3,000",
    note: "per month, ex VAT",
    includes: ["Support for Level 3 issues"],
  },
};

export const feeSummary = [
  { platform: "PWA", onceOff: "R105,000", monthly: "R39,000" },
  { platform: "USSD", onceOff: "R26,000", monthly: "R3,000" },
  { platform: "Total", onceOff: "R131,000", monthly: "R42,000", isTotal: true },
];

export const invoicingSchedule = [
  { milestone: "On signing", amount: "50% deposit", note: "Invoiced on signature; payment due before commencement" },
  { milestone: "Ready for Migration", amount: "25%", note: "" },
  { milestone: "Project Acceptance and ATP sign-off", amount: "25%", note: "" },
];

export const terms = [
  {
    id: "validity",
    title: "1. Validity",
    body: "All proposals from MVNE are valid for thirty (30) days unless otherwise stated.",
  },
  {
    id: "additional-agreements",
    title: "2. Additional Agreements",
    body: "The agreement is subject to the signature of a comprehensive contract.",
  },
  {
    id: "payment",
    title: "3. Payment Terms",
    body: "50% payable upfront before project commencement. All services are payable within thirty (30) days of the invoice date. Late payments are subject to a 2% penalty per month.",
  },
  {
    id: "invoicing",
    title: "4. Invoicing Schedule",
    body: "Payment milestones: 50% on signing, 25% on Ready for Migration, 25% on Project Acceptance and ATP sign-off.",
  },
  {
    id: "pricing",
    title: "5. Pricing Adjustments",
    body: "Pricing is indicative and subject to foreign currency exchange rate fluctuations. Should any significant changes occur in the USD rate, MVNE reserves the right to recalibrate the pricing.",
  },
  {
    id: "acceptance",
    title: "6. Proposal Acceptance",
    body: "Upon acceptance, both parties agree to the terms set out in this proposal and the detailed Scope of Work. This document, along with the SOW, represents the full understanding between MVNE and AFGRI.",
  },
];
