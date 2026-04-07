import Image from "next/image";
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
      <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/mvne-logo.png"
              alt="MVNE"
              width={72}
              height={26}
              className="object-contain"
            />
            <span className="text-white/20 font-thin">|</span>
            <Image
              src="/images/dsg-logo.png"
              alt="DSG Group"
              width={60}
              height={22}
              className="object-contain opacity-90"
            />
          </div>
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile: vendor name fallback */}
          <span className="md:hidden text-[#64748B] text-xs">{vendor.name}</span>
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

      <footer className="bg-[#0F172A] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/mvne-logo.png"
              alt="MVNE"
              width={80}
              height={28}
              className="object-contain opacity-90"
            />
            <div className="h-6 w-px bg-white/10" />
            <Image
              src="/images/dsg-logo.png"
              alt="DSG Group"
              width={60}
              height={22}
              className="object-contain opacity-60"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-[#475569] text-xs">
              © 2026 {vendor.name} · {vendor.tagline}
            </p>
            <p className="text-[#334155] text-xs mt-1">
              {vendor.address} · {vendor.website}
            </p>
            <p className="text-[#1E293B] text-xs mt-1 font-medium">Confidential</p>
          </div>
        </div>
      </footer>
    </>
  );
}
