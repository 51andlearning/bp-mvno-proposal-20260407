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
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Image
              src="/images/mvne-logo.png"
              alt="MVNE"
              width={100}
              height={36}
              className="object-contain brightness-0 invert"
              priority
            />
            <span className="text-white/20 text-xl font-thin">|</span>
            <Image
              src="/images/dsg-logo.png"
              alt="DSG Group"
              width={80}
              height={28}
              className="object-contain opacity-90"
              priority
            />
          </div>
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
          <div className="flex flex-wrap gap-3">
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
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0369A1]/50 to-transparent" />
    </section>
  );
}
