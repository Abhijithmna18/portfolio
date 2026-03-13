"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AIPipelineScene } from "@/components/3d/AIPipelineScene";

export function AIPipelineSection() {
  return (
    <section id="ai-pipeline" className="pt-[100px] pb-[100px] bg-[#111827] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="AI System Visualization" 
          subtitle="Understanding the LLM evaluation framework pipeline: from Prompt input to final Score."
        />
        
        <div className="bg-[#1E293B] rounded-[16px] shadow-2xl overflow-hidden mt-12 relative p-4 group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
          <AIPipelineScene />
        </div>
      </div>
    </section>
  );
}
