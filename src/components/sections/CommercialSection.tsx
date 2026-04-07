import { feeSummary, invoicingSchedule } from "@/content/proposal";

export function CommercialSection() {
  return (
    <section id="commercial" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Commercial Terms</h2>
        <div className="w-12 h-1 bg-[#0369A1] rounded mb-6" />
        <p className="text-[#64748B] mb-8">
          The costs of the support are structured around the requirement of resourcing with a
          support insurance portion, and development hours for any required changes and enhancements.
        </p>

        <h3 className="text-lg font-semibold text-[#0F172A] mb-4" id="summary">
          Fee Summary
        </h3>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="text-left p-3 font-semibold text-[#0F172A]">Platform</th>
                <th className="text-left p-3 font-semibold text-[#0F172A]">Once-off (ex VAT)</th>
                <th className="text-left p-3 font-semibold text-[#0F172A]">Monthly (ex VAT)</th>
              </tr>
            </thead>
            <tbody>
              {feeSummary.map((row) => (
                <tr
                  key={row.platform}
                  className={
                    row.isTotal
                      ? "bg-[#0F172A] text-white font-bold"
                      : "border-b border-[#E2E8F0]"
                  }
                >
                  <td className="p-3">{row.platform}</td>
                  <td className="p-3">{row.onceOff}</td>
                  <td className="p-3">{row.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Invoicing Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="text-left p-3 font-semibold text-[#0F172A]">Milestone</th>
                <th className="text-left p-3 font-semibold text-[#0F172A]">Amount</th>
                <th className="text-left p-3 font-semibold text-[#0F172A]">Notes</th>
              </tr>
            </thead>
            <tbody>
              {invoicingSchedule.map((row, i) => (
                <tr key={i} className="border-b border-[#E2E8F0]">
                  <td className="p-3 text-[#334155]">{row.milestone}</td>
                  <td className="p-3 font-semibold text-[#0369A1]">{row.amount}</td>
                  <td className="p-3 text-[#64748B]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
