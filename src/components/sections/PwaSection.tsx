import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pwa, supportLevels } from "@/content/proposal";

export function PwaSection() {
  return (
    <section id="pwa" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">{pwa.title}</h2>
        <div className="w-12 h-1 bg-[#0369A1] rounded mb-6" />
        <p className="text-[#64748B] mb-8">{pwa.description}</p>

        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Support Levels</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F8FAFC]">
                <th className="text-left p-3 font-semibold text-[#0F172A]">Level</th>
                <th className="text-left p-3 font-semibold text-[#0F172A]">Description</th>
              </tr>
            </thead>
            <tbody>
              {supportLevels.map((row) => (
                <tr key={row.level} className={row.highlight ? "bg-[#0369A1]/5 font-semibold" : ""}>
                  <td className="p-3 text-[#334155]">{row.level}</td>
                  <td className="p-3 text-[#64748B]">
                    {row.description}
                    {row.note && (
                      <Badge variant="outline" className="ml-2 text-xs">
                        {row.note}
                      </Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-[#E2E8F0]">
            <CardHeader>
              <CardTitle className="text-base text-[#0F172A]">Once-off Fee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-extrabold text-[#0369A1]">{pwa.onceOff.amount}</p>
              <p className="text-sm text-[#64748B] mt-1">{pwa.onceOff.label}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{pwa.onceOff.note}</p>
            </CardContent>
          </Card>
          <Card className="border-[#E2E8F0]">
            <CardHeader>
              <CardTitle className="text-base text-[#0F172A]">Monthly Retainer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-extrabold text-[#0369A1]">{pwa.monthly.amount}</p>
              <p className="text-sm text-[#64748B] mt-1">{pwa.monthly.label}</p>
              <p className="text-xs text-[#94A3B8] mt-1">{pwa.monthly.note}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
