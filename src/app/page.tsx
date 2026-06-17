"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full max-w-6xl mx-auto py-4 relative z-10">
      {/* Hero Section - Central Console Panel */}
      <section className="w-full relative">
        <div className="group relative rounded-3xl dark:rounded-[24px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:border-zinc-700 dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.2)] p-4 md:p-6 transition-all duration-300">
          
          <div className="rounded-2xl dark:rounded-[24px] bg-[#e0e0e0] shadow-[inset_8px_8px_16px_rgba(163,177,198,0.55),_inset_-8px_-8px_16px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] p-6 md:p-12 overflow-hidden relative flex flex-col items-center justify-center min-h-[400px] transition-all duration-300">
            
            <div className="absolute inset-0 opacity-40 dark:opacity-100 bg-[linear-gradient(to_right,#bebebe_1px,transparent_1px),linear-gradient(to_bottom,#bebebe_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-all duration-300" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full gap-8">
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] transition-all duration-300">
                <div className="w-4 h-4 rounded-full bg-[#e0e0e0] dark:bg-black shadow-[inset_2px_2px_5px_rgba(163,177,198,0.55),inset_-2px_-2px_5px_#ffffff] dark:shadow-none flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
                </div>
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.2em] transition-colors duration-300">System Online</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-700 dark:text-zinc-100 drop-shadow-sm transition-colors duration-300">
                Premium Hardware Neo <br className="hidden md:block" />
                <span className="dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  & Vercel Skeuomorphism
                </span>
              </h1>
              
              <p className="text-lg md:text-xl font-medium max-w-2xl text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                A seamless blend of ultra-premium hardware dials in light mode, and high-contrast, deep-space neon punch in dark mode.
              </p>

              <Link href="/dashboard" className="mt-4">
                <button className="px-10 py-4 rounded-full text-sm md:text-base font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-3 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[4px_4px_10px_#bebebe,_-4px_-4px_10px_#ffffff] active:shadow-[inset_2px_2px_5px_#bebebe,_inset_-2px_-2px_5px_#ffffff] dark:bg-cyan-600 dark:bg-none dark:hover:bg-cyan-500 dark:border-none dark:shadow-[0_0_20px_rgba(6,182,212,0.5)] dark:active:shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)] text-cyan-700 dark:text-zinc-950">
                  <Zap className="w-5 h-5" /> Launch Mission Control
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Dynamic Showoff Grid Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
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
          <div key={idx} className="group flex flex-col p-8 rounded-3xl dark:rounded-[20px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:border-zinc-700 dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.2)] relative transition-all duration-300">
            
            <div className="absolute top-8 right-8 flex items-center gap-3">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest transition-all duration-300">{card.status}</span>
              <div className="w-4 h-4 rounded-full bg-[#e0e0e0] dark:bg-black shadow-[inset_2px_2px_5px_rgba(163,177,198,0.55),inset_-2px_-2px_5px_#ffffff] dark:shadow-none flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
              </div>
            </div>

            <div className="w-14 h-14 mb-8 rounded-full bg-gradient-to-br from-[#ebebeb] to-[#c8c8c8] border border-white/60 shadow-[4px_4px_8px_#c0c0c0,_-2px_-2px_4px_#ffffff] dark:rounded-xl dark:bg-[#030303] dark:bg-none dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] flex items-center justify-center transition-all duration-300 relative">
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),_0_0_6px_rgba(6,182,212,0.8)] dark:hidden" />
              <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 transition-colors duration-300 group-hover:bg-cyan-500 dark:group-hover:bg-cyan-400 dark:group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-zinc-700 dark:text-zinc-100 mb-3 tracking-tight transition-colors duration-300">{card.title}</h3>
            <p className="text-sm flex-1 leading-relaxed text-zinc-500 dark:text-zinc-400 transition-all duration-300">{card.desc}</p>
            
            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-4">
                {[1, 2, 3].map((slider) => (
                  <div key={slider} className="h-12 w-3 bg-gradient-to-b from-[#d8dcd1]/30 to-[#f5f5f5] shadow-[inset_2px_2px_4px_rgba(163,177,198,0.8),_inset_-2px_-2px_4px_#ffffff] dark:bg-[#030303] dark:bg-none dark:border dark:border-zinc-900 dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)] rounded-full relative overflow-hidden flex justify-center p-[2px]">
                    <div className="w-2 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.6)] translate-y-6 group-hover:translate-y-1 transition-transform duration-500" style={{ transitionDelay: `${slider * 100}ms` }} />
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => console.log(`Configuring ${card.title}`)}
                className="px-5 py-2.5 rounded-full dark:rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-50 dark:bg-none dark:hover:bg-zinc-200 dark:border-none dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-zinc-600 dark:text-zinc-900 hover:text-cyan-600 dark:hover:text-zinc-700">
                Configure
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}