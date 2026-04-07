import { Badge } from "@/components/ui/badge";
import { feeSummary, invoicingSchedule } from "@/content/proposal";

export function CommercialSection() {
  return (
    <section id="commercial" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Badge className="mb-4 bg-[#0369A1]/10 text-[#0369A1] border-[#0369A1]/20 hover:bg-[#0369A1]/10">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">
            Commercial Terms
          </h2>
          <div className="w-14 h-1 bg-[#0369A1] rounded-full mb-6" />
          <p className="text-[#64748B] text-lg leading-relaxed max-w-3xl">
            The costs are structured around resourcing with a support insurance portion and
            development hours for any required changes and enhancements.
          </p>
        </div>

        {/* Fee summary cards */}
        <div id="summary" className="grid sm:grid-cols-3 gap-4 mb-12">
          {feeSummary.map((row) => (
            <div
              key={row.platform}
              className={`rounded-xl p-6 border ${
                row.isTotal
                  ? "bg-[#0F172A] border-[#0F172A] text-white"
                  : "bg-[#F8FAFC] border-[#E2E8F0]"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                  row.isTotal ? "text-[#64748B]" : "text-[#94A3B8]"
                }`}
              >
                {row.platform}
              </p>
              <div className="space-y-3">
                <div>
                  <p
                    className={`text-xs mb-1 ${
                      row.isTotal ? "text-[#64748B]" : "text-[#94A3B8]"
                    }`}
                  >
                    Once-off
                  </p>
                  <p
                    className={`text-2xl font-extrabold ${
                      row.isTotal ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {row.onceOff}
                  </p>
                </div>
                <div className={`h-px ${row.isTotal ? "bg-white/10" : "bg-[#E2E8F0]"}`} />
                <div>
                  <p
                    className={`text-xs mb-1 ${
                      row.isTotal ? "text-[#64748B]" : "text-[#94A3B8]"
                    }`}
                  >
                    Monthly
                  </p>
                  <p
                    className={`text-2xl font-extrabold ${
                      row.isTotal ? "text-[#0369A1]" : "text-[#0369A1]"
                    }`}
                  >
                    {row.monthly}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Invoicing schedule */}
        <h3 className="text-xl font-bold text-[#0F172A] mb-6">Invoicing Schedule</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-[#E2E8F0] hidden sm:block" />
          <div className="space-y-4">
            {invoicingSchedule.map((row, i) => (
              <div
                key={i}
                className="relative flex items-start gap-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5"
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-[#0369A1]/10 border-2 border-[#0369A1]/30 flex items-center justify-center hidden sm:flex">
                  <span className="text-[#0369A1] font-bold text-sm">{i + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <p className="font-semibold text-[#0F172A]">{row.milestone}</p>
                    <Badge className="bg-[#0369A1] text-white hover:bg-[#0369A1] text-xs">
                      {row.amount}
                    </Badge>
                  </div>
                  {row.note && (
                    <p className="text-sm text-[#64748B]">{row.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
