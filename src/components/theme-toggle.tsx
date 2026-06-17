"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const buttonClasses = "w-10 h-10 flex items-center justify-center bg-[#e0e0e0] shadow-[6px_6px_12px_#bebebe,_-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] rounded-xl dark:rounded-md dark:bg-zinc-950 dark:hover:bg-zinc-900 border-transparent dark:border-zinc-800/80 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)] dark:active:border-zinc-900 transition-all duration-300 text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400";

  if (!mounted) {
    return (
      <button className={buttonClasses}>
        <div className="w-5 h-5 opacity-0" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={buttonClasses}
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
