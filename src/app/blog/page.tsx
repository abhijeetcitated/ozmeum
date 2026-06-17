"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Blog() {
  return (
    <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto py-12 relative z-10 px-4 md:px-0">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-cyan-600 transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" /> Return to Base
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-700 dark:text-zinc-100 drop-shadow-sm transition-colors duration-300">
            Archival Records
          </h1>
          <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400 transition-colors duration-300 max-w-2xl">
            Access the latest telemetry reports, theoretical breakthroughs, and node configuration updates across the cluster network.
          </p>
        </div>

        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] transition-all duration-300 self-start md:self-end">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
          <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">Scientific Dispatch Nodes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {[
          { date: "CYCLE 84.12", title: "Quantum Coherence in Sub-Space Relays", excerpt: "Detailed breakdown of the recent stabilization protocols initiated across the secondary node array, achieving 99.8% coherence over a 12-hour sustained burst." },
          { date: "CYCLE 83.95", title: "Thermometric Anomalies Resolved", excerpt: "Following the minor fluctuations detected in sector 4, automated cooling loops have been re-calibrated. Core temperatures remain steady at optimal thresholds." },
          { date: "CYCLE 82.10", title: "Architectural Shift to Neumorphic Systems", excerpt: "A retrospective on the integration of highly tactile, skeuomorphic interfaces for mission-critical operations, reducing operator latency by 14%." },
          { date: "CYCLE 80.05", title: "Node Synchronization Enhancements", excerpt: "Deploying parallel verification methods across distributed hardware led to a significant 18% improvement in baseline synchronization speeds." },
          { date: "CYCLE 78.44", title: "Dark Matter Fluid Dynamics", excerpt: "Initial observations from the tertiary sensor grid suggest minor gravitational deviations. Simulation models are currently being updated." },
          { date: "CYCLE 75.12", title: "Legacy Core Retirement", excerpt: "Phasing out the initial prototype cores. All critical workloads have been successfully handed over to the new quantum pipeline architecture." }
        ].map((post, idx) => (
          <article 
            key={idx} 
            className="flex flex-col bg-[#e0e0e0] shadow-[10px_10px_20px_#bebebe,_-10px_-10px_20px_#ffffff] rounded-[28px] p-6 dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] dark:hover:border-zinc-700 transition-all duration-300"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e0e0e0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.55),_inset_-2px_-2px_5px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.95)] self-start">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shadow-[0_0_8px_rgba(148,163,184,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{post.date}</span>
            </div>
            
            <h2 className="text-xl font-bold text-zinc-700 dark:text-zinc-100 mt-5 leading-snug">
              {post.title}
            </h2>
            
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mt-3 flex-1">
              {post.excerpt}
            </p>
            
            <button className="self-end mt-8 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 flex items-center gap-2 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-50 dark:bg-none dark:hover:bg-zinc-200 dark:border-none dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-zinc-600 dark:text-zinc-900 hover:text-cyan-600 dark:hover:text-zinc-700">
              READ LOG →
            </button>
          </article>
        ))}
      </div>
      
    </div>
  );
}