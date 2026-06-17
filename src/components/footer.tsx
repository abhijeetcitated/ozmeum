"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-auto relative border-t border-white/60 shadow-[inset_0_1px_0_rgba(0,0,0,0.02)] dark:border-zinc-900 dark:shadow-none bg-[#e0e0e0] dark:bg-[#000000] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Column 1: Branding & Status */}
          <div className="flex flex-col gap-6 items-start col-span-2 lg:col-span-1">
            <div>
              <div className="font-sans text-lg tracking-wide font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <defs>
                    <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                Ozmeum
              </div>
              <div className="font-sans text-xs tracking-wider text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                Ozmeum v4.1.2
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-5 h-5 rounded-full shadow-[inset_1px_1px_3px_#bebebe,_inset_-1px_-1px_3px_#ffffff] dark:bg-[#050505] dark:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.9)] border border-transparent dark:border-zinc-900/50">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
              </div>
              <div className="font-sans text-[11px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
                System Nominal
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#social-grad-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform">
                  <defs>
                    <linearGradient id="social-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1DA1F2" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#social-grad-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform">
                  <defs>
                    <linearGradient id="social-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Link>
              <Link href="#" className="group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#social-grad-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform">
                  <defs>
                    <linearGradient id="social-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Directories */}
          <div className="flex flex-col gap-4 col-span-1">
            <h3 className="font-sans font-bold tracking-widest text-zinc-800 dark:text-zinc-200 text-xs uppercase mb-1">
              Directories
            </h3>
            <div className="flex flex-col gap-3 font-sans text-sm font-medium">
              <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#dir-grad-1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <defs>
                    <linearGradient id="dir-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Home
              </Link>
              <Link href="/dashboard" className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#dir-grad-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <defs>
                    <linearGradient id="dir-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <rect width="7" height="9" x="3" y="3" rx="1"/>
                  <rect width="7" height="5" x="14" y="3" rx="1"/>
                  <rect width="7" height="9" x="14" y="12" rx="1"/>
                  <rect width="7" height="5" x="3" y="16" rx="1"/>
                </svg>
                Dashboard
              </Link>
              <Link href="/blog" className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#dir-grad-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <defs>
                    <linearGradient id="dir-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                </svg>
                Blog Archives
              </Link>
              <Link href="#" className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#dir-grad-4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <defs>
                    <linearGradient id="dir-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2v20"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                API Ledger
              </Link>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="flex flex-col gap-4 col-span-1">
            <h3 className="font-sans font-bold tracking-widest text-zinc-800 dark:text-zinc-200 text-xs uppercase mb-1">
              Legal
            </h3>
            <div className="flex flex-col gap-3 font-sans text-sm font-medium">
              <Link href="#" className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#leg-grad-1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <defs>
                    <linearGradient id="leg-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Privacy Policy
              </Link>
              <Link href="#" className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#leg-grad-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <defs>
                    <linearGradient id="leg-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" x2="8" y1="13" y2="13"/>
                  <line x1="16" x2="8" y1="17" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                Terms of Service
              </Link>
              <Link href="#" className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-400 transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#leg-grad-3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  <defs>
                    <linearGradient id="leg-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a10 10 0 0 1 10 10 5 5 0 0 0-5-5 5 5 0 0 0-5-5"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                  <circle cx="16" cy="15" r="1" fill="currentColor"/>
                  <circle cx="10.5" cy="14.5" r="1.5" fill="currentColor"/>
                </svg>
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Column 4: System Specs & Action */}
          <div className="flex flex-col items-start lg:items-end gap-6 justify-between col-span-2 lg:col-span-1 mt-2 lg:mt-0">
            
            {/* Live Specs Table */}
            <div className="w-full p-5 rounded-2xl bg-[#e0e0e0] dark:bg-[#030303] shadow-[inset_4px_4px_8px_#bebebe,_inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] dark:border dark:border-zinc-900">
              <div className="flex flex-col gap-3 font-sans text-xs font-medium">
                <div className="flex justify-between items-center gap-6">
                  <span className="text-zinc-500 dark:text-zinc-500">Runtime</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-bold">BUN v1.3.14</span>
                </div>
                <div className="flex justify-between items-center gap-6">
                  <span className="text-zinc-500 dark:text-zinc-500">Database</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-bold">SQLITE</span>
                </div>
                <div className="flex justify-between items-center gap-6">
                  <span className="text-zinc-500 dark:text-zinc-500">Coherence</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">99.992%</span>
                </div>
              </div>
            </div>

            {/* Scroll-To-Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center gap-3 w-full px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase rounded-2xl bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[4px_4px_10px_#bebebe,_-4px_-4px_10px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,_inset_-4px_-4px_8px_#ffffff] dark:bg-zinc-950 dark:bg-none dark:border dark:border-zinc-800/80 dark:shadow-[0_4px_12px_rgba(0,0,0,0.6)] dark:active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] dark:active:border-zinc-900 transition-all duration-300 text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              Scroll To Top
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#e0e0e0] dark:bg-zinc-900 shadow-[inset_1px_1px_2px_#bebebe,_inset_-1px_-1px_2px_#ffffff] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] group-active:shadow-none transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#arrow-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-active:-translate-y-0.5 transition-transform">
                  <defs>
                    <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </div>
            </button>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-zinc-300 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-500">
          <p>© 2026 Ozmeum. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <span className="text-red-500">♥</span> by Ozmeum
          </p>
        </div>
      </div>
    </footer>
  );
}