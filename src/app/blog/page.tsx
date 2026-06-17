"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Blog() {
  return (
    <div className="flex flex-col gap-10 sm:gap-12 w-full max-w-7xl mx-auto py-8 sm:py-12 relative z-10 px-4 sm:px-6 lg:px-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-cyan-600 transition-colors duration-300">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Return to Base
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-700 dark:text-zinc-100 drop-shadow-sm transition-colors duration-300">
            Archival Records
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium text-zinc-500 dark:text-zinc-400 transition-colors duration-300 max-w-2xl">
            Access the latest telemetry reports, theoretical breakthroughs, and node configuration updates across the cluster network.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] transition-all duration-300 self-start md:self-end">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
          <span className="text-[8px] sm:text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">Scientific Dispatch Nodes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {[
          { slug: "quantum-coherence", date: "CYCLE 84.12", title: "Quantum Coherence in Sub-Space Relays", excerpt: "Detailed breakdown of the recent stabilization protocols initiated across the secondary node array, achieving 99.8% coherence over a 12-hour sustained burst.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" },
          { slug: "thermometric-anomalies", date: "CYCLE 83.95", title: "Thermometric Anomalies Resolved", excerpt: "Following the minor fluctuations detected in sector 4, automated cooling loops have been re-calibrated. Core temperatures remain steady at optimal thresholds.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
          { slug: "architectural-shift", date: "CYCLE 82.10", title: "Architectural Shift to Neumorphic Systems", excerpt: "A retrospective on the integration of highly tactile, skeuomorphic interfaces for mission-critical operations, reducing operator latency by 14%.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
          { slug: "node-sync", date: "CYCLE 80.05", title: "Node Synchronization Enhancements", excerpt: "Deploying parallel verification methods across distributed hardware led to a significant 18% improvement in baseline synchronization speeds.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" },
          { slug: "dark-matter", date: "CYCLE 78.44", title: "Dark Matter Fluid Dynamics", excerpt: "Initial observations from the tertiary sensor grid suggest minor gravitational deviations. Simulation models are currently being updated.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
          { slug: "legacy-core", date: "CYCLE 75.12", title: "Legacy Core Retirement", excerpt: "Phasing out the initial prototype cores. All critical workloads have been successfully handed over to the new quantum pipeline architecture.", image: "https://images.unsplash.com/photo-1614064075525-45d2e08677c7?q=80&w=800&auto=format&fit=crop" }
        ].map((post, idx) => (
          <article 
            key={idx} 
            className="flex flex-col bg-[#e0e0e0] shadow-[10px_10px_20px_#bebebe,_-10px_-10px_20px_#ffffff] rounded-[28px] overflow-hidden dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] dark:hover:border-zinc-700 transition-all duration-300 group/article"
          >
            {/* Image Thumbnail */}
            <Link href={`/blog/${post.slug}`} className="w-full h-48 relative overflow-hidden bg-zinc-200 dark:bg-zinc-800 block">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover/article:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 dark:opacity-100" />
            </Link>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e0e0e0] shadow-[inset_2px_2px_5px_rgba(163,177,198,0.55),_inset_-2px_-2px_5px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.95)] self-start -mt-10 relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shadow-[0_0_8px_rgba(148,163,184,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{post.date}</span>
              </div>
              
              <Link href={`/blog/${post.slug}`}>
            <h2 className="text-lg sm:text-xl font-bold text-zinc-700 dark:text-zinc-100 mt-4 sm:mt-5 leading-snug group-hover/article:text-cyan-600 dark:group-hover/article:text-cyan-400 transition-colors duration-300">
              {post.title}
            </h2>
          </Link>
          
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 mt-2 sm:mt-3 flex-1">
            {post.excerpt}
          </p>
          
          <Link href={`/blog/${post.slug}`} className="self-end mt-6 sm:mt-8 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-50 dark:bg-none dark:hover:bg-zinc-200 dark:border-none dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-zinc-600 dark:text-zinc-900 hover:text-cyan-600 dark:hover:text-zinc-700">
              READ LOG →
            </button>
          </Link>
            </div>
          </article>
        ))}
      </div>
      
    </div>
  );
}