export function IntroSection() {
  return (
    <section id="introduction" className="py-16 px-6 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Introduction</h2>
        <div className="w-12 h-1 bg-[#0369A1] rounded mb-6" />
        <p className="text-[#64748B] leading-relaxed">
          This proposal outlines the terms for the build and support for the{" "}
          <strong className="text-[#0F172A]">BP MVNO PWA platform</strong> with monthly development
          hours, and also the <strong className="text-[#0F172A]">USSD service</strong> pricing.
        </p>
        <p className="text-[#64748B] leading-relaxed mt-4">
          It outlines a support requirement for the new platforms as well as the{" "}
          <strong className="text-[#0F172A]">24×7 support</strong> provided for critical issues,
          and development hours for platform changes.
        </p>
      </div>
    </section>
  );
}
