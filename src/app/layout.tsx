import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Activity } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Science Console",
  description: "Hardware instrument science console dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#e0e0e0] dark:bg-[#000000] text-zinc-800 dark:text-zinc-200 font-sans selection:bg-cyan-500/30 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Header */}
          <header className="sticky top-0 z-50 w-full bg-[#e0e0e0]/90 dark:bg-[#000000]/80 dark:border-b dark:border-zinc-800/80 backdrop-blur-md transition-colors duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] dark:shadow-none">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Logo Socket / Plate */}
                <div className="w-12 h-12 rounded-[18px] bg-[#e0e0e0] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.55),_inset_-6px_-6px_12px_#ffffff] dark:rounded-[14px] dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950 dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),_0_4px_12px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all duration-300">
                  <Activity className="w-6 h-6 text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                </div>
                <span className="font-bold text-xl tracking-wider text-zinc-600 dark:bg-gradient-to-br dark:from-white dark:to-zinc-500 dark:bg-clip-text dark:text-transparent">
                  SCI-CONSOLE
                </span>
              </div>
              
              <nav className="flex items-center gap-6">
                {/* Curved Gradient Tactile Buttons */}
                <button className="px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:rounded-md dark:bg-zinc-950 dark:bg-none dark:hover:bg-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] dark:active:border-zinc-900 transition-all duration-300 text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 dark:hover:text-cyan-400">
                  Dashboard
                </button>
                <button className="px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:rounded-md dark:bg-zinc-950 dark:bg-none dark:hover:bg-zinc-900 dark:border dark:border-zinc-800/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] dark:active:border-zinc-900 transition-all duration-300 text-cyan-600 dark:text-cyan-400">
                  Initialize
                </button>
                <div className="w-px h-8 bg-[#bebebe] dark:bg-zinc-800 mx-2" />
                <ThemeToggle />
              </nav>
            </div>
          </header>

          <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
