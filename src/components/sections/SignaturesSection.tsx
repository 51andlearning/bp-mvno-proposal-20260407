import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { vendor, client } from "@/content/proposal";

export function SignaturesSection() {
  return (
    <section id="signatures" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Signatures</h2>
        <div className="w-12 h-1 bg-[#0369A1] rounded mb-6" />
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-[#E2E8F0]">
            <CardHeader>
              <CardTitle className="text-base text-[#0F172A]">
                For {vendor.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-[#64748B]">
              <div>
                <p className="font-semibold text-[#334155]">Name</p>
                <p>{vendor.signatory}</p>
              </div>
              <div>
                <p className="font-semibold text-[#334155]">Position</p>
                <p>{vendor.signatoryTitle}</p>
              </div>
              <div>
                <p className="font-semibold text-[#334155]">Date</p>
                <div className="h-8 border-b border-dashed border-[#CBD5E1] mt-2" />
              </div>
              <div>
                <p className="font-semibold text-[#334155]">Signature</p>
                <div className="h-12 border-b border-dashed border-[#CBD5E1] mt-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#E2E8F0]">
            <CardHeader>
              <CardTitle className="text-base text-[#0F172A]">For {client.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-[#64748B]">
              <div>
                <p className="font-semibold text-[#334155]">Name</p>
                <div className="h-8 border-b border-dashed border-[#CBD5E1] mt-2" />
              </div>
              <div>
                <p className="font-semibold text-[#334155]">Position</p>
                <div className="h-8 border-b border-dashed border-[#CBD5E1] mt-2" />
              </div>
              <div>
                <p className="font-semibold text-[#334155]">Date</p>
                <div className="h-8 border-b border-dashed border-[#CBD5E1] mt-2" />
              </div>
              <div>
                <p className="font-semibold text-[#334155]">Signature</p>
                <div className="h-12 border-b border-dashed border-[#CBD5E1] mt-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
