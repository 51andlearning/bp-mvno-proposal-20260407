import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { terms } from "@/content/proposal";

export function TermsSection() {
  return (
    <section id="terms" className="py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Badge className="mb-4 bg-[#0369A1]/10 text-[#0369A1] border-[#0369A1]/20 hover:bg-[#0369A1]/10">
            Legal
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">
            Terms &amp; Conditions
          </h2>
          <div className="w-14 h-1 bg-[#0369A1] rounded-full mb-6" />
          <p className="text-[#64748B] text-lg leading-relaxed max-w-3xl">
            The following terms govern this proposal and any resulting engagement between MVNE
            and BP (AFGRI).
          </p>
        </div>

        {/* Key callouts */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Proposal validity", value: "30 days", sub: "From date of issue" },
            { label: "Payment terms", value: "30 days", sub: "From invoice date" },
            { label: "Late payment penalty", value: "2% / month", sub: "Compounding monthly" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 text-center"
            >
              <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-2">
                {item.label}
              </p>
              <p className="text-2xl font-extrabold text-[#0F172A] mb-1">{item.value}</p>
              <p className="text-xs text-[#64748B]">{item.sub}</p>
            </div>
          ))}
        </div>

        <Accordion className="space-y-3">
          {terms.map((term) => (
            <AccordionItem
              key={term.id}
              value={term.id}
              className="bg-white border border-[#E2E8F0] rounded-xl px-5 data-open:border-[#0369A1]/30"
            >
              <AccordionTrigger className="text-[#0F172A] font-semibold hover:no-underline py-4">
                {term.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] leading-relaxed pb-4">
                {term.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
