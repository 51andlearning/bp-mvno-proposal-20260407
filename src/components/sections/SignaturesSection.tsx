import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { vendor, client, meta } from "@/content/proposal";

const SignatureLine = ({ label }: { label: string }) => (
  <div className="mb-5">
    <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-2">
      {label}
    </p>
    <div className="h-10 border-b-2 border-dashed border-[#E2E8F0]" />
  </div>
);

export function SignaturesSection() {
  return (
    <section id="signatures" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Badge className="mb-4 bg-[#0369A1]/10 text-[#0369A1] border-[#0369A1]/20 hover:bg-[#0369A1]/10">
            Acceptance
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-3">
            Signatures
          </h2>
          <div className="w-14 h-1 bg-[#0369A1] rounded-full mb-6" />
          <p className="text-[#64748B] text-lg leading-relaxed max-w-3xl">
            By signing below, both parties agree to the terms set out in this proposal and the
            detailed Scope of Work. This document, along with the SOW, represents the full
            understanding between MVNE and {client.legalName}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* MVNE block */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/mvne-logo.png"
                alt="MVNE"
                width={80}
                height={28}
                className="object-contain"
              />
              <div className="h-8 w-px bg-[#E2E8F0]" />
              <div>
                <p className="text-xs text-[#94A3B8]">For</p>
                <p className="font-semibold text-[#0F172A] text-sm">{vendor.name}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-1">
                Name
              </p>
              <p className="font-semibold text-[#334155]">{vendor.signatory}</p>
            </div>
            <div className="mb-6">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest mb-1">
                Position
              </p>
              <p className="font-semibold text-[#334155]">{vendor.signatoryTitle}</p>
            </div>
            <SignatureLine label="Date" />
            <SignatureLine label="Signature" />
          </div>

          {/* BP block */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/bp-logo.svg"
                alt="BP"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="h-8 w-px bg-[#E2E8F0]" />
              <div>
                <p className="text-xs text-[#94A3B8]">For</p>
                <p className="font-semibold text-[#0F172A] text-sm">{client.name}</p>
              </div>
            </div>

            <SignatureLine label="Name" />
            <SignatureLine label="Position" />
            <SignatureLine label="Date" />
            <SignatureLine label="Signature" />
          </div>
        </div>

        {/* Validity reminder */}
        <div className="mt-8 bg-[#0369A1]/5 border border-[#0369A1]/20 rounded-xl p-5 flex items-start gap-4">
          <span className="text-[#0369A1] text-xl shrink-0">ℹ</span>
          <p className="text-sm text-[#64748B]">
            This proposal is valid for <strong className="text-[#0F172A]">{meta.validity}</strong>.
            Acceptance is subject to signature of a comprehensive contract. Pricing is subject
            to USD/ZAR exchange rate fluctuations.
          </p>
        </div>
      </div>
    </section>
  );
}
