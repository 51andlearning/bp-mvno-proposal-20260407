import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    icon: "⚡",
    title: "24×7 Critical Support",
    description: "Round-the-clock monitoring and response for critical platform issues.",
  },
  {
    icon: "🔧",
    title: "Level 3 Code-Level Support",
    description: "Direct code-level corrections by MVNE engineers — not just restarts.",
  },
  {
    icon: "📈",
    title: "Monthly Development Hours",
    description:
      "Dedicated development hours included in the retainer, accumulating up to 3 months.",
  },
  {
    icon: "📋",
    title: "SOW-Governed SLA",
    description: "All support issues managed under a formal Scope of Work with defined SLA.",
  },
];

export function IntroSection() {
  return (
    <section id="introduction" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Badge className="mb-4 bg-[#0369A1]/10 text-[#0369A1] border-[#0369A1]/20 hover:bg-[#0369A1]/10">
            Overview
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">
            Introduction
          </h2>
          <div className="w-14 h-1 bg-[#0369A1] rounded-full mb-6" />
          <p className="text-[#64748B] text-lg leading-relaxed max-w-3xl">
            This proposal outlines the terms for the build and support for the{" "}
            <strong className="text-[#0F172A]">BP MVNO PWA platform</strong> with monthly
            development hours, and the{" "}
            <strong className="text-[#0F172A]">USSD service</strong> pricing. It covers the
            support requirement for both new platforms as well as{" "}
            <strong className="text-[#0F172A]">24×7 support</strong> for critical issues and
            development hours for ongoing platform changes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-[#0F172A] text-sm mb-2">{item.title}</h3>
              <p className="text-[#64748B] text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
