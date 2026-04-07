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

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:info@mvne.co.za?subject=Proposal%20Acceptance%20%E2%80%94%20BP%20MVNO%20PWA%20%26%20USSD&body=Dear%20Yaron%2C%0A%0AWe%20hereby%20accept%20the%20proposal%20for%20the%20BP%20MVNO%20PWA%20and%20USSD%20platform%20dated%2031%20March%202026.%0A%0AKind%20regards%2C"
            className="flex-1 inline-flex items-center justify-center gap-3 bg-[#0369A1] hover:bg-[#0284C7] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Accept Proposal
          </a>
          <a
            href="/proposal.pdf"
            download="BP-MVNO-PWA-USSD-Proposal-MVNE-20260331.pdf"
            className="flex-1 inline-flex items-center justify-center gap-3 bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] font-semibold px-8 py-4 rounded-xl transition-colors text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Proposal
          </a>
        </div>
      </div>
    </section>
  );
}
