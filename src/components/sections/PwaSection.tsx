import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { pwa, supportLevels } from "@/content/proposal";

export function PwaSection() {
  return (
    <section id="pwa" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Badge className="mb-4 bg-[#0369A1]/10 text-[#0369A1] border-[#0369A1]/20 hover:bg-[#0369A1]/10">
            Scope of Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">
            {pwa.fullTitle}
          </h2>
          <div className="w-14 h-1 bg-[#0369A1] rounded-full mb-6" />
          <p className="text-[#64748B] text-lg leading-relaxed max-w-3xl">{pwa.description}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: support levels */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-[#334155] uppercase tracking-wide mb-4">
              Support Levels
            </h3>
            <div className="space-y-3 mb-8">
              {supportLevels.map((row) => (
                <div
                  key={row.level}
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                    row.highlight
                      ? "bg-[#0369A1]/5 border-[#0369A1]/30"
                      : "bg-[#F8FAFC] border-[#E2E8F0]"
                  }`}
                >
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-md shrink-0 ${
                      row.highlight
                        ? "bg-[#0369A1] text-white"
                        : "bg-[#E2E8F0] text-[#334155]"
                    }`}
                  >
                    {row.level}
                  </span>
                  <div>
                    <p
                      className={`text-sm ${
                        row.highlight ? "font-semibold text-[#0F172A]" : "text-[#64748B]"
                      }`}
                    >
                      {row.description}
                    </p>
                    {row.note && (
                      <Badge
                        variant="outline"
                        className="mt-1 text-xs border-[#0369A1]/30 text-[#0369A1]"
                      >
                        {row.note}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="mb-6" />

            <h3 className="text-base font-semibold text-[#334155] uppercase tracking-wide mb-4">
              Additional Services
            </h3>
            <ul className="space-y-3">
              {pwa.additionalServices.map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#64748B]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0369A1]/10 text-[#0369A1] flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: pricing cards */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="border-[#E2E8F0] shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-[#64748B] uppercase tracking-wide">
                  Once-off Fee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold text-[#0F172A] mb-1">
                  {pwa.onceOff.amount}
                </p>
                <p className="text-xs text-[#94A3B8] mb-3">{pwa.onceOff.note}</p>
                <p className="text-sm text-[#64748B]">{pwa.onceOff.label}</p>
              </CardContent>
            </Card>

            <Card className="border-[#0369A1]/30 bg-[#0369A1]/5 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-[#0369A1] uppercase tracking-wide">
                  Monthly Retainer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold text-[#0369A1] mb-1">
                  {pwa.monthly.amount}
                </p>
                <p className="text-xs text-[#94A3B8] mb-3">{pwa.monthly.note}</p>
                <p className="text-sm text-[#64748B] mb-3">{pwa.monthly.label}</p>
                <Separator className="mb-3" />
                <ul className="space-y-1">
                  {pwa.monthly.includes.map((item, i) => (
                    <li key={i} className="text-xs text-[#64748B] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0369A1] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
