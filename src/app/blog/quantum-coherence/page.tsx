"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Bookmark, Clock, Activity, Calendar, User, ChevronRight, CheckCircle2 } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-7xl mx-auto py-6 sm:py-8 md:py-12 relative z-10 px-4 sm:px-6 lg:px-8">
      
      {/* Top Nav */}
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-cyan-600 transition-colors duration-300">
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Back to Archives
        </Link>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-[#e0e0e0] shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.95)] flex items-center justify-center text-zinc-500 hover:text-cyan-600 transition-all duration-300 active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
            <Bookmark className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#e0e0e0] shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.95)] flex items-center justify-center text-zinc-500 hover:text-cyan-600 transition-all duration-300 active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:active:shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Standalone Hero Header */}
      <header className="flex flex-col gap-4 sm:gap-6">
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] self-start">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
          <span className="text-[8px] sm:text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">CYCLE 84.12 • VERIFIED LOG</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 leading-[1.1]">
          Quantum Coherence in Sub-Space Relays
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1 sm:mt-2">
          <Link href="https://www.linkedin.com/in/abhijeet-pratap-singh-teeli-net/" target="_blank" className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700">
              <img src="/abhijeetparatapsingh.webp" alt="Abhijeet Pratap Singh" className="w-full h-full object-cover" />
            </div>
            <span>Abhijeet Pratap Singh</span>
          </Link>
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> OCT 24, 2026</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 12 MIN READ</span>
          <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> LOG 7382</span>
        </div>
      </header>

      {/* Standalone Hero Image */}
      <div className="w-full h-[30vh] sm:h-[40vh] md:h-[60vh] rounded-3xl sm:rounded-[32px] overflow-hidden mt-2 sm:mt-4 bg-zinc-200 dark:bg-zinc-900 shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] dark:border dark:border-zinc-800/80 relative">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="Quantum Coherence" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6 sm:mt-8">
        
        {/* Left Column: Main Content */}
        <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
          
          <div className="prose prose-sm sm:prose-base md:prose-lg prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
            <p className="lead text-lg sm:text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-medium mb-6 sm:mb-8 leading-relaxed">
              Detailed breakdown of the recent stabilization protocols initiated across the secondary node array, achieving 99.8% coherence over a 12-hour sustained burst.
            </p>
            
            <p>
              The recent deployment of the V2.4 Quantum Pipeline has yielded unprecedented results in sub-space data relaying. For the first time since the network's inception, we observed a sustained coherence rate that barely fluctuated below the 99.8% threshold. This marks a monumental leap from the previous Cycle 83 metrics, where thermometric anomalies caused significant packet loss in Sector 4.
            </p>

            {/* Tactical Data Table */}
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-10 sm:mt-12 mb-4 sm:mb-6 tracking-tight">
              Performance Metrics (Cycle 83 vs 84)
            </h3>
            
            <div className="w-full overflow-x-auto rounded-[24px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] mb-8 sm:mb-10 p-2 sm:p-4">
              <table className="w-full text-left border-collapse min-w-[400px]">
                <thead>
                  <tr className="border-b-2 border-zinc-300 dark:border-zinc-700">
                    <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-widest">Metric</th>
                    <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-widest border-l border-zinc-300 dark:border-zinc-800">Cycle 83</th>
                    <th className="py-4 px-6 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest border-l border-zinc-300 dark:border-zinc-800">Cycle 84 (New)</th>
                    <th className="py-4 px-6 text-xs font-bold text-zinc-500 uppercase tracking-widest border-l border-zinc-300 dark:border-zinc-800">Delta</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  <tr className="border-b border-zinc-300/50 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-6">Peak Coherence</td>
                    <td className="py-4 px-6 border-l border-zinc-300/50 dark:border-zinc-800/50">94.2%</td>
                    <td className="py-4 px-6 font-bold text-zinc-900 dark:text-white border-l border-zinc-300/50 dark:border-zinc-800/50">99.84%</td>
                    <td className="py-4 px-6 text-green-600 dark:text-green-400 border-l border-zinc-300/50 dark:border-zinc-800/50">+5.64%</td>
                  </tr>
                  <tr className="border-b border-zinc-300/50 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-6">Packet Loss (S4)</td>
                    <td className="py-4 px-6 border-l border-zinc-300/50 dark:border-zinc-800/50">2.1%</td>
                    <td className="py-4 px-6 font-bold text-zinc-900 dark:text-white border-l border-zinc-300/50 dark:border-zinc-800/50">0.01%</td>
                    <td className="py-4 px-6 text-green-600 dark:text-green-400 border-l border-zinc-300/50 dark:border-zinc-800/50">-2.09%</td>
                  </tr>
                  <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="py-4 px-6">Core Temp Avg</td>
                    <td className="py-4 px-6 border-l border-zinc-300/50 dark:border-zinc-800/50">48°C</td>
                    <td className="py-4 px-6 font-bold text-zinc-900 dark:text-white border-l border-zinc-300/50 dark:border-zinc-800/50">38°C</td>
                    <td className="py-4 px-6 text-green-600 dark:text-green-400 border-l border-zinc-300/50 dark:border-zinc-800/50">-10°C</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-10 sm:mt-12 mb-3 sm:mb-4 tracking-tight">
              Architectural Enhancements
            </h3>
            
            <p>
              By leveraging a heavily skeuomorphic neural engine interface, operators were able to visually track entanglement shifts in real-time. The tactile feedback loop integrated into the physical dials on the dashboard reduced reaction times by an estimated 14%. When the node synchronization algorithms detected a minor slip, the automated system immediately spun up tertiary cooling loops.
            </p>

            <ul className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 mb-8 sm:mb-10 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">Secondary Node Array:</strong> Fully optimized and running at 1024 concurrent threads across the distributed grid.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">Cooling Loops:</strong> Re-calibrated using predictive thermodynamic modeling following the Sector 4 incident.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">Operator UI:</strong> Neumorphic shadowing enhanced for better depth perception and reduced eye fatigue during 12-hour shifts.</span>
              </li>
            </ul>

            {/* Embedded Skeuomorphic Stat Callout */}
            <div className="my-8 sm:my-12 p-6 sm:p-8 rounded-3xl sm:rounded-[32px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="flex flex-col md:flex-row items-center justify-around gap-6 sm:gap-8 text-center md:text-left">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest">Sustained Duration</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-zinc-800 dark:text-zinc-100">12h 4m</span>
                </div>
                <div className="h-px w-full md:h-16 md:w-px bg-zinc-300 dark:bg-zinc-800" />
                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest">Latency Drop</span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-cyan-600 dark:text-cyan-400">14.2%</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-10 sm:mt-12 mb-3 sm:mb-4 tracking-tight">
              Future Projections
            </h3>
            
            <p>
              As we approach Cycle 85, the engineering team is preparing to phase out the last of the legacy cores. The absolute parity observed across the distributed cognitive nodes suggests that dark matter fluid dynamic models can now be executed natively within the relay itself, removing the need for external processing clusters.
            </p>

            <hr className="my-8 sm:my-12 border-zinc-300 dark:border-zinc-800" />

            {/* FAQ Section */}
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6 sm:mb-8 tracking-tight">
              Frequently Asked Questions
            </h3>
            
            <div className="flex flex-col gap-4">
              {[
                {
                  q: "What happens to the legacy cores?",
                  a: "They will be safely decommissioned and their physical components recycled for the tertiary sensor grid expansion planned for Q4."
                },
                {
                  q: "Will the Neumorphic UI be rolled out to all sectors?",
                  a: "Yes. Following the 14% efficiency gain in Sector 4, the UI update is scheduled for network-wide deployment by Cycle 86."
                },
                {
                  q: "How did you achieve 99.8% coherence?",
                  a: "We implemented predictive thermodynamic modeling coupled with a heavily optimized 1024-thread secondary node array, effectively eliminating sub-space packet loss."
                },
                {
                  q: "Is there any risk of quantum entanglement failure?",
                  a: "The risk is mathematically nominal. Our automated tertiary cooling loops spin up instantly to compensate for any detected thermometric anomalies."
                },
                {
                  q: "When is the next system diagnostic scheduled?",
                  a: "A full network diagnostic is slated for the beginning of Cycle 85, immediately prior to the legacy core phase-out."
                }
              ].map((faq, idx) => (
                <details key={idx} className="group p-5 sm:p-6 rounded-2xl sm:rounded-[20px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] dark:hover:border-zinc-700 transition-all duration-300">
                  <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-200 gap-4">
                    <span>{faq.q}</span>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400 group-open:rotate-90 transition-transform duration-300 shrink-0" />
                  </summary>
                  <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-zinc-300/50 dark:border-zinc-800/50 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <p className="m-0">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 relative">
          
          {/* Author Card */}
          <div className="p-6 sm:p-8 rounded-3xl sm:rounded-[32px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex flex-col items-center text-center gap-3 sm:gap-4">
            <Link href="https://www.linkedin.com/in/abhijeet-pratap-singh-teeli-net/" target="_blank" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-2 border-white/20 dark:border-zinc-700 hover:scale-105 transition-transform duration-300">
              <img src="/abhijeetparatapsingh.webp" alt="Abhijeet Pratap Singh" className="w-full h-full object-cover" />
            </Link>
            <div className="flex flex-col items-center">
              <h3 className="text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-100">Abhijeet Pratap Singh</h3>
              <p className="text-[10px] sm:text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mt-1">Lead Systems Architect</p>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-2">
              Overseeing the transition from legacy processing cores to the new distributed quantum pipeline.
            </p>
            <Link href="https://www.linkedin.com/in/abhijeet-pratap-singh-teeli-net/" target="_blank" className="mt-2 px-5 py-2.5 w-full rounded-full flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-50 dark:bg-none dark:hover:bg-zinc-800 dark:border-none dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> Connect
            </Link>
          </div>

          {/* Table of Contents Card */}
          <div className="p-6 sm:p-8 rounded-3xl sm:rounded-[32px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] sticky top-[30vh]">
            <h3 className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-widest mb-4 sm:mb-6 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-cyan-600" />
              Table of Contents
            </h3>
            <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                <ChevronRight className="w-3 h-3" /> Performance Metrics
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                <ChevronRight className="w-3 h-3" /> Architectural Enhancements
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                <ChevronRight className="w-3 h-3" /> Future Projections
              </li>
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                <ChevronRight className="w-3 h-3" /> FAQs
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}