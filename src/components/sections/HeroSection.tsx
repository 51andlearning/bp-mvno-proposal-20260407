import { vendor, client, meta } from "@/content/proposal";

export function HeroSection() {
  return (
    <section id="hero" className="bg-[#0F172A] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#0369A1] text-sm font-semibold uppercase tracking-widest mb-4">
          {vendor.name} · {vendor.tagline}
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{meta.title}</h1>
        <h2 className="text-xl md:text-2xl text-[#64748B] mb-8">{meta.subtitle}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-[#334155]">
          <span>Prepared for: <strong className="text-white">{client.name}</strong></span>
          <span>·</span>
          <span>Valid for: <strong className="text-white">{meta.validity}</strong></span>
          <span>·</span>
          <span>Date: <strong className="text-white">{meta.date}</strong></span>
        </div>
      </div>
    </section>
  );
}
