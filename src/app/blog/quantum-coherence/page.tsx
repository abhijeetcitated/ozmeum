"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Bookmark, Clock, Activity } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto py-12 relative z-10 px-4 md:px-0">
      
      {/* Top Nav */}
      <div className="flex items-center justify-between">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-cyan-600 transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" /> Back to Archives
        </Link>
        <div className="flex items-center gap-4">
          <button className="text-zinc-500 hover:text-cyan-600 transition-colors duration-300">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="text-zinc-500 hover:text-cyan-600 transition-colors duration-300">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Container (Neumorphic) */}
      <div className="flex flex-col bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] rounded-[32px] overflow-hidden dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
        
        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 relative bg-zinc-200 dark:bg-zinc-800">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="Quantum Coherence" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent dark:from-black dark:via-black/40" />
          
          {/* Overlay Status Badge */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-widest">CYCLE 84.12 • VERIFIED</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 md:p-12 lg:p-16 flex flex-col gap-8">
          
          <div className="flex flex-col gap-4 border-b border-zinc-300 dark:border-zinc-800 pb-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 leading-tight">
              Quantum Coherence in Sub-Space Relays
            </h1>
            <div className="flex items-center gap-6 text-sm font-bold text-zinc-500 uppercase tracking-widest mt-2">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 12 MIN READ</span>
              <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> LOG 7382</span>
            </div>
          </div>

          <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none text-zinc-600 dark:text-zinc-400">
            <p className="lead text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-medium mb-8">
              Detailed breakdown of the recent stabilization protocols initiated across the secondary node array, achieving 99.8% coherence over a 12-hour sustained burst.
            </p>
            
            <p>
              The recent deployment of the V2.4 Quantum Pipeline has yielded unprecedented results in sub-space data relaying. For the first time since the network's inception, we observed a sustained coherence rate that barely fluctuated below the 99.8% threshold. This marks a monumental leap from the previous Cycle 83 metrics, where thermometric anomalies caused significant packet loss in Sector 4.
            </p>

            {/* Embedded Skeuomorphic Stat Callout */}
            <div className="my-10 p-6 md:p-8 rounded-[24px] bg-[#e0e0e0] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.55),_inset_-6px_-6px_12px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Peak Coherence Detected</span>
                <span className="text-4xl md:text-5xl font-mono font-bold text-cyan-600 dark:text-cyan-400">99.84%</span>
              </div>
              <div className="h-12 w-px bg-zinc-300 dark:bg-zinc-800 hidden md:block" />
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Sustained Duration</span>
                <span className="text-4xl md:text-5xl font-mono font-bold text-zinc-700 dark:text-zinc-200">12h 4m</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mt-12 mb-4">
              Architectural Enhancements
            </h3>
            
            <p>
              By leveraging a heavily skeuomorphic neural engine interface, operators were able to visually track entanglement shifts in real-time. The tactile feedback loop integrated into the physical dials on the dashboard reduced reaction times by an estimated 14%. When the node synchronization algorithms detected a minor slip, the automated system immediately spun up tertiary cooling loops.
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-6 mb-8 text-zinc-600 dark:text-zinc-400">
              <li><strong>Secondary Node Array:</strong> Fully optimized and running at 1024 concurrent threads.</li>
              <li><strong>Cooling Loops:</strong> Re-calibrated following the Sector 4 incident.</li>
              <li><strong>Operator UI:</strong> Neumorphic shadowing enhanced for better depth perception under low-light conditions.</li>
            </ul>

            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mt-12 mb-4">
              Future Projections
            </h3>
            
            <p>
              As we approach Cycle 85, the engineering team is preparing to phase out the last of the legacy cores. The absolute parity observed across the distributed cognitive nodes suggests that dark matter fluid dynamic models can now be executed natively within the relay itself, removing the need for external processing clusters.
            </p>

            <div className="mt-12 pt-8 border-t border-zinc-300 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-300 dark:bg-zinc-800 overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border border-white/20 dark:border-zinc-700">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200">Dr. Elena Rostova</span>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Lead Systems Architect</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}