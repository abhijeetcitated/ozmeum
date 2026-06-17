"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full max-w-7xl mx-auto py-3 sm:py-4 md:py-6 relative z-10 px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Hero Section - Central Console Panel */}
      <section className="w-full relative">
        <div className="group relative rounded-2xl sm:rounded-3xl dark:rounded-[20px] sm:dark:rounded-[24px] bg-[#e0e0e0] shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_#ffffff] sm:shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.9)] dark:hover:border-zinc-700 dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.9)] p-2 sm:p-3 md:p-4 lg:p-6 transition-all duration-300">
          
          <div className="rounded-xl sm:rounded-2xl dark:rounded-[20px] sm:dark:rounded-[24px] bg-[#e0e0e0] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.55),_inset_-6px_-6px_12px_#ffffff] sm:shadow-[inset_8px_8px_16px_rgba(163,177,198,0.55),_inset_-8px_-8px_16px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative flex flex-col items-center justify-center min-h-[280px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[500px] transition-all duration-300">
            
            <div className="absolute inset-0 opacity-40 dark:opacity-100 bg-[linear-gradient(to_right,#bebebe_1px,transparent_1px),linear-gradient(to_bottom,#bebebe_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] md:bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] sm:[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-all duration-300" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full gap-4 sm:gap-6 md:gap-8">
              
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] transition-all duration-300">
                <div className="relative flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-black/10 dark:bg-black/50 shadow-inner">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] transition-colors duration-300">System Online</span>
              </div>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter text-zinc-700 dark:text-zinc-100 drop-shadow-sm transition-colors duration-300 leading-tight">
                Premium Hardware Neo <br className="hidden xs:block" />
                <span className="dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  & Vercel Skeuomorphism
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-medium max-w-2xl text-zinc-500 dark:text-zinc-400 transition-colors duration-300 px-2 sm:px-4 md:px-0 leading-relaxed">
                A seamless blend of ultra-premium hardware dials in light mode, and high-contrast, deep-space neon punch in dark mode.
              </p>

              <Link href="/dashboard" className="mt-3 sm:mt-4 md:mt-6 w-full sm:w-auto px-3 sm:px-4">
                <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-[10px] xs:text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider sm:tracking-widest transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[4px_4px_10px_#bebebe,_-4px_-4px_10px_#ffffff] active:shadow-[inset_2px_2px_5px_#bebebe,_inset_-2px_-2px_5px_#ffffff] dark:bg-cyan-600 dark:bg-none dark:hover:bg-cyan-500 dark:border-none dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:active:shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] text-cyan-700 dark:text-zinc-950">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 shrink-0" /> <span className="truncate">Launch Mission Control</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Node Grid Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 w-full mt-2 sm:mt-4">
        
        {/* Technical Specifications Sheet */}
        <div className="lg:col-span-7 group relative rounded-2xl sm:rounded-3xl dark:rounded-[20px] sm:dark:rounded-[24px] bg-[#e0e0e0] shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_#ffffff] sm:shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.8)] p-4 sm:p-6 md:p-8 transition-all duration-300">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-700 dark:text-zinc-100 mb-4 sm:mb-6 uppercase tracking-wider sm:tracking-widest flex items-center gap-2 sm:gap-3">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" />
            Hardware Specifications
          </h2>
          <div className="flex flex-col gap-3 sm:gap-4">
            {[
              { label: "Core Architecture", value: "Quantum V2.4" },
              { label: "Sub-Space Protocol", value: "Q-Relay Ext. 9" },
              { label: "Base Latency", value: "0.014 ms" },
              { label: "Max Throughput", value: "1024 Tbps" }
            ].map((spec, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-[12px] sm:rounded-[16px] bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] sm:shadow-[inset_6px_6px_12px_rgba(163,177,198,0.55),_inset_-6px_-6px_12px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] gap-1 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider sm:tracking-widest">{spec.label}</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Node Relay Grid */}
        <div className="lg:col-span-5 group relative rounded-2xl sm:rounded-3xl dark:rounded-[20px] sm:dark:rounded-[24px] bg-[#e0e0e0] shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_#ffffff] sm:shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.8)] p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col transition-all duration-300">
          <h2 className="text-sm font-bold text-zinc-700 dark:text-zinc-100 mb-6 uppercase tracking-widest relative z-10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Global Node Relay
          </h2>
          
          <div className="absolute inset-0 opacity-40 dark:opacity-100 bg-[linear-gradient(to_right,#bebebe_1px,transparent_1px),linear-gradient(to_bottom,#bebebe_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none transition-all duration-300" />
          
          <div className="relative w-full flex-1 min-h-[200px] z-10">
             <svg className="absolute inset-0 w-full h-full text-cyan-500/40 dark:text-cyan-500/30">
               <line x1="20%" y1="30%" x2="50%" y2="70%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_3s_ease-in-out_infinite]" />
               <line x1="50%" y1="70%" x2="85%" y2="40%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_2s_ease-in-out_infinite]" />
               <line x1="20%" y1="30%" x2="85%" y2="40%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[pulse_4s_ease-in-out_infinite]" />
             </svg>
             <div className="absolute left-[20%] top-[30%] w-3 h-3 rounded-full bg-[#e0e0e0] dark:bg-cyan-500 shadow-[2px_2px_4px_#bebebe,_-2px_-2px_4px_#ffffff] dark:shadow-[0_0_12px_rgba(6,182,212,0.8)] -translate-x-1.5 -translate-y-1.5 border border-white/50 dark:border-none" />
             <div className="absolute left-[50%] top-[70%] w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)] dark:shadow-[0_0_15px_rgba(6,182,212,1)] -translate-x-2 -translate-y-2 animate-pulse border-2 border-white/80 dark:border-none" />
             <div className="absolute left-[85%] top-[40%] w-3 h-3 rounded-full bg-[#e0e0e0] dark:bg-cyan-500 shadow-[2px_2px_4px_#bebebe,_-2px_-2px_4px_#ffffff] dark:shadow-[0_0_12px_rgba(6,182,212,0.8)] -translate-x-1.5 -translate-y-1.5 border border-white/50 dark:border-none" />
          </div>
        </div>
      </section>

      {/* Latest Satellite Dispatches - Full Width */}
      <section className="w-full">
        <div className="group relative rounded-2xl sm:rounded-3xl dark:rounded-[20px] sm:dark:rounded-[24px] bg-[#e0e0e0] shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_#ffffff] sm:shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.8)] dark:hover:border-zinc-700 dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.9)] p-4 sm:p-6 md:p-8 flex flex-col transition-all duration-300">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-700 dark:text-zinc-100 mb-4 sm:mb-6 uppercase tracking-wider sm:tracking-widest flex items-center gap-2 sm:gap-3">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" />
            Latest Satellite Dispatches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 flex-1">
            {[
              { title: "Quantum Coherence Relays", date: "2024.01.28" },
              { title: "Thermometric Anomalies", date: "2024.01.25" },
              { title: "Sub-Space Signal Protocol", date: "2024.01.22" }
            ].map((post, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-[12px] sm:rounded-[16px] bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] sm:shadow-[inset_6px_6px_12px_rgba(163,177,198,0.55),_inset_-6px_-6px_12px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] gap-1 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-wider sm:tracking-widest">{post.title}</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-cyan-600 dark:text-cyan-400">{post.date}</span>
              </div>
            ))}
          </div>
          <Link href="/blog" className="mt-4 sm:mt-6">
            <button className="w-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest transition-all duration-200 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-50 dark:bg-none dark:hover:bg-zinc-200 dark:border-none dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-zinc-600 dark:text-zinc-900 hover:text-cyan-600 dark:hover:text-zinc-700">
              [ VIEW ALL JOURNALS ]
            </button>
          </Link>
        </div>
      </section>

      {/* 3 Dynamic Showoff Grid Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-2 sm:mt-4 pb-8 sm:pb-12">
        {[
          {
            title: "Hardware Telemetry",
            desc: "Real-time metrics from distributed cognitive nodes. Ensuring absolute parity.",
            status: "Syncing",
          },
          {
            title: "Neural Engine",
            desc: "Advanced logic execution pipelines running parallel distributed workloads.",
            status: "Optimal",
          },
          {
            title: "Quantum Uplink",
            desc: "Sub-space communication channels established. Low latency confirmed.",
            status: "Secured",
          }
        ].map((card, idx) => (
          <div key={idx} className="group flex flex-col p-6 sm:p-8 rounded-2xl sm:rounded-3xl dark:rounded-[18px] sm:dark:rounded-[20px] bg-[#e0e0e0] shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_#ffffff] sm:shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.9)] dark:hover:border-zinc-700 dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.9)] relative transition-all duration-300">
            
            <div className="absolute top-6 sm:top-8 right-6 sm:right-8 flex items-center gap-2 sm:gap-3">
              <span className="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-widest transition-all duration-300">{card.status}</span>
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#e0e0e0] dark:bg-black shadow-[inset_2px_2px_5px_rgba(163,177,198,0.55),inset_-2px_-2px_5px_#ffffff] dark:shadow-none flex items-center justify-center">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
              </div>
            </div>

            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-5 sm:mb-6 md:mb-8 rounded-full bg-gradient-to-br from-[#ebebeb] to-[#c8c8c8] border border-white/60 shadow-[4px_4px_8px_#c0c0c0,_-2px_-2px_4px_#ffffff] dark:rounded-xl dark:bg-[#030303] dark:bg-none dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] flex items-center justify-center transition-all duration-300 relative shrink-0">
              <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),_0_0_6px_rgba(6,182,212,0.8)] dark:hidden" />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 transition-colors duration-300 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 dark:group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            </div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-700 dark:text-zinc-100 mb-2 sm:mb-3 tracking-tight transition-colors duration-300">{card.title}</h3>
            <p className="text-xs sm:text-sm flex-1 leading-relaxed text-zinc-500 dark:text-zinc-400 transition-all duration-300">{card.desc}</p>
            
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 sm:gap-6">
              <div className="flex gap-3 sm:gap-4">
                {[1, 2, 3].map((slider) => (
                  <div key={slider} className="h-8 w-2 sm:h-10 sm:w-2.5 md:h-12 md:w-3 bg-gradient-to-b from-[#d8dcd1]/30 to-[#f5f5f5] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.8),_inset_-2px_-2px_4px_#ffffff] dark:bg-[#030303] dark:bg-none dark:border dark:border-zinc-900 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] rounded-full relative overflow-hidden flex justify-center p-[2px] shrink-0">
                    <div className="w-1 h-2.5 sm:w-1.5 sm:h-3 md:w-2 md:h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.6)] translate-y-5 sm:translate-y-6 group-hover:translate-y-1 transition-transform duration-500" style={{ transitionDelay: `${slider * 100}ms` }} />
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => console.log(`Configuring ${card.title}`)}
                className="w-full xl:w-auto px-4 sm:px-5 py-2.5 sm:py-2.5 rounded-full dark:rounded-md text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-50 dark:bg-none dark:hover:bg-zinc-200 dark:border-none dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-zinc-600 dark:text-zinc-900 hover:text-cyan-600 dark:hover:text-zinc-700">
                Configure
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
