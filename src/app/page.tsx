import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { PwaSection } from "@/components/sections/PwaSection";
import { UssdSection } from "@/components/sections/UssdSection";
import { CommercialSection } from "@/components/sections/CommercialSection";
import { TermsSection } from "@/components/sections/TermsSection";
import { SignaturesSection } from "@/components/sections/SignaturesSection";
import { vendor } from "@/content/proposal";

const navLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#pwa", label: "PWA" },
  { href: "#ussd", label: "USSD" },
  { href: "#commercial", label: "Commercial" },
  { href: "#terms", label: "Terms" },
  { href: "#signatures", label: "Signatures" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur border-b border-white/10">
        <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white font-bold text-sm">{vendor.name}</span>
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#64748B] hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <HeroSection />
        <IntroSection />
        <PwaSection />
        <UssdSection />
        <CommercialSection />
        <TermsSection />
        <SignaturesSection />
      </main>

      <footer className="bg-[#0F172A] text-[#64748B] text-sm py-8 px-6 text-center">
        <p>
          © 2026 {vendor.name} · {vendor.tagline} · Confidential · {vendor.website}
        </p>
      </footer>
    </>
  );
}
