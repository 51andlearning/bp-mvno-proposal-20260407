import Image from "next/image";
import { vendor, client, meta } from "@/content/proposal";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-[#0F172A] overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top logo bar */}
      <div className="relative border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-end">
          <div className="flex items-center gap-3">
            <span className="text-[#64748B] text-xs uppercase tracking-widest hidden sm:block">
              Prepared for
            </span>
            <Image
              src="/images/bp-logo.svg"
              alt="BP"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="mb-6 border-[#0369A1]/40 text-[#0369A1] bg-[#0369A1]/10 text-xs uppercase tracking-widest"
          >
            Confidential Proposal
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
            {meta.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-[#0369A1] font-semibold mb-8">
            {meta.subtitle}
          </h2>

          <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            This proposal outlines the terms for the build and ongoing support of the BP MVNO
            PWA platform and USSD service, including 24×7 critical support and monthly
            development hours.
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "Prepared by", value: vendor.name },
              { label: "Prepared for", value: client.name },
              { label: "Valid for", value: meta.validity },
              { label: "Date", value: meta.date },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm"
              >
                <span className="text-[#64748B] text-xs block">{label}</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#signatures"
              className="inline-flex items-center gap-2 bg-[#0369A1] hover:bg-[#0284C7] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Accept Proposal
            </a>
            <a
              href="/proposal.pdf"
              download="BP-MVNO-PWA-USSD-Proposal-MVNE-20260331.pdf"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Proposal
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0369A1]/50 to-transparent" />
    </section>
  );
}
