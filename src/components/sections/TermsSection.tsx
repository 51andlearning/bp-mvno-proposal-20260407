import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { terms } from "@/content/proposal";

export function TermsSection() {
  return (
    <section id="terms" className="py-16 px-6 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Terms &amp; Conditions</h2>
        <div className="w-12 h-1 bg-[#0369A1] rounded mb-6" />
        <Accordion className="space-y-2">
          {terms.map((term) => (
            <AccordionItem
              key={term.id}
              value={term.id}
              className="bg-white border border-[#E2E8F0] rounded-lg px-4"
            >
              <AccordionTrigger className="text-[#0F172A] font-semibold hover:no-underline">
                {term.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] leading-relaxed">
                {term.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
