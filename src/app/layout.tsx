"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Activity, Menu, X } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <title>Ozmeum</title>
        <meta name="description" content="Hardware instrument ozmeum dashboard" />
      </head>
      <body className="min-h-full flex flex-col bg-[#e0e0e0] dark:bg-[#000000] text-zinc-800 dark:text-zinc-200 font-sans selection:bg-cyan-500/30 transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Header */}
          <header className="sticky top-0 z-50 w-full bg-[#e0e0e0]/90 dark:bg-[#000000]/80 dark:border-b dark:border-zinc-800/80 backdrop-blur-md transition-colors duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-none">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 h-16 sm:h-20 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Logo Socket / Plate */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[18px] bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] sm:shadow-[inset_6px_6px_12px_rgba(163,177,198,0.55),_inset_-6px_-6px_12px_#ffffff] dark:rounded-[12px] sm:dark:rounded-[14px] dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950 dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),_0_4px_12px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all duration-300">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                </div>
                <span className="font-bold text-base sm:text-lg md:text-xl tracking-wider text-zinc-600 dark:bg-gradient-to-br dark:from-white dark:to-zinc-500 dark:bg-clip-text dark:text-transparent">
                  Ozmeum
                </span>
              </div>
              
              <nav className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                {/* Mobile Menu Button */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="sm:hidden p-2.5 rounded-lg bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-950 dark:bg-none dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 text-zinc-600 dark:text-zinc-300"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                {/* Desktop Menu Buttons */}
                <Link href="/dashboard" className="hidden sm:inline-block px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:rounded-md dark:bg-zinc-950 dark:bg-none dark:hover:bg-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] dark:active:border-zinc-900 transition-all duration-300 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                  Dashboard
                </Link>
                <Link href="/blog" className="hidden md:inline-block px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:rounded-md dark:bg-zinc-950 dark:bg-none dark:hover:bg-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] dark:active:border-zinc-900 transition-all duration-300 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                  Blog
                </Link>
                <button className="hidden lg:inline-block px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:rounded-md dark:bg-zinc-950 dark:bg-none dark:hover:bg-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] dark:active:border-zinc-900 transition-all duration-300 text-cyan-600 dark:text-cyan-400">
                  Initialize
                </button>
                <div className="hidden sm:block w-px h-6 sm:h-8 bg-[#bebebe] dark:bg-zinc-800 mx-1 sm:mx-2" />
                <ThemeToggle />
              </nav>
            </div>

            {/* Mobile Menu Dropdown - Glassmorphic Sheet */}
            {mobileMenuOpen && (
              <>
                {/* Backdrop Blur Overlay below header */}
                <div 
                  className="sm:hidden fixed inset-0 top-[4rem] bg-[#e0e0e0]/40 dark:bg-black/60 backdrop-blur-md z-40 animate-in fade-in duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                />
                
                {/* Menu Panel below header */}
                <div className="sm:hidden absolute top-[4.5rem] left-3 right-3 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="w-full rounded-3xl bg-[#e0e0e0]/95 backdrop-blur-xl shadow-[8px_8px_20px_rgba(163,177,198,0.55),_-8px_-8px_20px_rgba(255,255,255,0.9)] dark:bg-zinc-950/95 dark:border dark:border-zinc-800/80 dark:shadow-[0_12px_32px_rgba(0,0,0,0.95)] p-5 flex flex-col gap-5">
                    
                    {/* Menu Items */}
                    <div className="flex flex-col gap-3">
                      <Link 
                        href="/" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full px-5 py-3.5 text-sm font-bold tracking-wide rounded-2xl bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,_inset_-4px_-4px_8px_#ffffff] dark:bg-zinc-900/50 dark:border dark:border-zinc-800/50 dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-center"
                      >
                        Home
                      </Link>
                      <Link 
                        href="/dashboard" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full px-5 py-3.5 text-sm font-bold tracking-wide rounded-2xl bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,_inset_-4px_-4px_8px_#ffffff] dark:bg-zinc-900/50 dark:border dark:border-zinc-800/50 dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-center"
                      >
                        Dashboard
                      </Link>
                      <Link 
                        href="/blog" 
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full px-5 py-3.5 text-sm font-bold tracking-wide rounded-2xl bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,_inset_-4px_-4px_8px_#ffffff] dark:bg-zinc-900/50 dark:border dark:border-zinc-800/50 dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-center"
                      >
                        Blog
                      </Link>
                      <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full px-5 py-3.5 text-sm font-bold tracking-wide rounded-2xl bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-950 dark:bg-none dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 text-cyan-600 dark:text-cyan-400 text-center mt-2"
                      >
                        Initialize System
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </header>

          <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
