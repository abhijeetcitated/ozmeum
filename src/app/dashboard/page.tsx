"use client";

import { Terminal, Cpu, Network, Database, ShieldAlert, Zap, Activity, Thermometer } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface GaugeProps {
  label: string;
  value: number;
  min: number;
  max: number;
  unit: string;
  colorClass: string;
  icon: React.ElementType;
}

function Gauge({ label, value, min, max, unit, colorClass, icon: Icon }: GaugeProps) {
  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="group/stat flex flex-col items-center justify-center p-5 rounded-[24px] dark:rounded-[16px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:hover:border-zinc-700 dark:shadow-[0_8px_16px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 gap-3">
      {/* The Gauge Knob */}
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#ebebeb] to-[#c8c8c8] border border-white/60 shadow-[4px_4px_8px_#c0c0c0,_-2px_-2px_4px_#ffffff] dark:bg-[#030303] dark:bg-none dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] flex items-center justify-center transition-all duration-300">
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none drop-shadow-sm">
          <circle cx="28" cy="28" r={radius} fill="none" stroke="currentColor" strokeWidth="2.5" className="text-zinc-300/60 dark:text-zinc-800/80" />
          <circle 
            cx="28" cy="28" r={radius} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`transition-all duration-1000 ease-out ${colorClass}`} 
          />
        </svg>
        {/* Notch/LED */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2),_0_0_6px_rgba(6,182,212,0.8)] dark:hidden" />
        <Icon className="w-5 h-5 text-zinc-500 dark:text-zinc-500 transition-colors duration-300 group-hover/stat:text-cyan-500 dark:group-hover/stat:text-cyan-400" />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-mono font-bold text-zinc-700 dark:text-zinc-100 transition-colors duration-300">{value}{unit}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 transition-colors duration-300">{label}</span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [logs, setLogs] = useState<string[]>([
    `[${new Date().toLocaleTimeString()}] SYSTEM INITIALIZED`,
    `[${new Date().toLocaleTimeString()}] INTEGRITY CHECK: NOMINAL`,
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const logsEndRef = useRef<HTMLDivElement>(null);

  const [coreTemp, setCoreTemp] = useState(38);
  const [syncRate, setSyncRate] = useState(92);
  const [coherence, setCoherence] = useState(99.8);

  // Real-time random updating values for gauges
  useEffect(() => {
    const tempInterval = setInterval(() => {
      setCoreTemp(Math.floor(Math.random() * (45 - 38 + 1)) + 38);
    }, 2000);
    const syncInterval = setInterval(() => {
      setSyncRate(Math.floor(Math.random() * (95 - 92 + 1)) + 92);
    }, 1500);
    const coherenceInterval = setInterval(() => {
      // Randomly drop below 99 to trigger warning beacon
      const val = Math.random() > 0.8 ? (98 + Math.random()) : (99.1 + Math.random());
      setCoherence(Number(val.toFixed(2)));
    }, 3500);

    return () => {
      clearInterval(tempInterval);
      clearInterval(syncInterval);
      clearInterval(coherenceInterval);
    };
  }, []);

  const [toggles, setToggles] = useState({ uplink: false, neural: false, console: false });

  const handleToggle = (key: 'uplink' | 'neural' | 'console', label: string) => {
    setToggles(prev => {
      const newState = !prev[key];
      addLog(`[LOG] ${label} Feed: ${newState ? 'ENABLED' : 'DISABLED'}`);
      return { ...prev, [key]: newState };
    });
  };

  // Auto-scroll terminal
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    
    const cmd = terminalInput.trim().toLowerCase();
    addLog(`> ${cmd}`);
    
    if (cmd === '/help') {
      addLog("AVAILABLE COMMANDS:");
      addLog("  /help   - Show this message");
      addLog("  /sync   - Run telemetry sync simulator");
      addLog("  /clear  - Clear terminal screen");
    } else if (cmd === '/sync') {
      addLog("TELEMETRY SYNC SIMULATOR INITIATED...");
      setTimeout(() => addLog("SYNCING CORE NODES [||||||||||] 100%"), 1000);
      setTimeout(() => addLog("SYNC COMPLETE. ALL SYSTEMS NOMINAL."), 2000);
    } else if (cmd === '/clear') {
      setLogs([]);
    } else {
      addLog(`COMMAND NOT RECOGNIZED: ${cmd}`);
    }
    setTerminalInput("");
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 w-full max-w-7xl mx-auto py-4 sm:py-6 relative z-10 px-4 sm:px-6 lg:px-8">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        @keyframes wave-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave {
          animation: wave-scroll 3s linear infinite;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Return to home link */}
      <div className="w-full flex flex-col sm:flex-row justify-between px-2 gap-4">
        <Link href="/" className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-cyan-600 transition-colors duration-300 flex items-center gap-2">
          ← Return
        </Link>
        <Link href="/blog" className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-cyan-600 transition-colors duration-300 flex items-center gap-2">
          Access Archives →
        </Link>
      </div>

      <section className="w-full relative">
        {/* Extruded / Raised Card */}
        <div className="group relative rounded-3xl dark:rounded-[24px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:hover:border-zinc-700 dark:shadow-[0_8px_16px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.2)] p-3 sm:p-4 md:p-6 transition-all duration-300">
          
          {/* Inner Sunken Panel */}
          <div className="rounded-2xl dark:rounded-[24px] bg-[#e0e0e0] shadow-[inset_8px_8px_16px_rgba(163,177,198,0.55),_inset_-8px_-8px_16px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] p-4 sm:p-8 md:p-12 overflow-hidden relative flex flex-col items-center justify-start min-h-[350px] sm:min-h-[400px] transition-all duration-300">
            
            {/* Background Custom Grid lines */}
            <div className="absolute inset-0 opacity-40 dark:opacity-100 bg-[linear-gradient(to_right,#bebebe_1px,transparent_1px),linear-gradient(to_bottom,#bebebe_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] sm:[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none transition-all duration-300" />

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full gap-6 sm:gap-8">
              
              {/* 1. Live Satellite Dispatch Node */}
              <div className="w-full flex items-center px-1 md:px-2 py-1.5 md:py-2 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300">
                <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 border-r border-zinc-300 dark:border-zinc-800 shrink-0 z-10 bg-[#e0e0e0] dark:bg-[#030303]">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest whitespace-nowrap">Live Satellite Dispatch Feed</span>
                </div>
                <div className="flex-1 overflow-hidden relative flex items-center h-4 ml-2 md:ml-4 mask-gradient">
                  <div className="whitespace-nowrap animate-marquee text-[8px] sm:text-[10px] font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    LOG 7382: ORBITAL NODE ALPHA SYNC COMPLETE /// LOG 7383: INCOMING TRANSMISSION FROM SECTOR 4 /// LOG 7384: QUANTUM UPLINK STABLE AT 99.8% /// LOG 7385: DETECTING MINOR FLUCTUATION IN CORE TEMP /// LOG 7386: OVERRIDE PROTOCOL STANDBY ///
                  </div>
                </div>
              </div>

              {/* Status & Warning Beacon */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] transition-all duration-300">
                  <div className="w-4 h-4 rounded-full bg-[#e0e0e0] dark:bg-black shadow-[inset_2px_2px_5px_rgba(163,177,198,0.55),inset_-2px_-2px_5px_#ffffff] dark:shadow-none flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
                  </div>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.2em] transition-colors duration-300">System Online</span>
                </div>
                
                {/* Warning Indicator LED Beacon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 transition-all duration-300 relative group/beacon">
                  <div className={`w-5 h-5 rounded-full shadow-[inset_2px_2px_5px_rgba(255,255,255,0.8),_inset_-2px_-2px_5px_rgba(0,0,0,0.3)] transition-all duration-500 ${coherence < 99 ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)] animate-[pulse_0.5s_ease-in-out_infinite]' : 'bg-zinc-300 dark:bg-zinc-800'}`} />
                  {/* Tooltip */}
                  <div className="absolute top-14 opacity-0 group-hover/beacon:opacity-100 transition-opacity duration-300 bg-zinc-800 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap pointer-events-none z-50">
                    Core Overload Warning
                  </div>
                </div>
              </div>

              {/* 2. Interactive Sine-Wave Oscilloscope */}
              <div className="w-full max-w-3xl rounded-2xl bg-[#e0e0e0] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.55),_inset_-6px_-6px_12px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] p-4 flex items-center justify-center overflow-hidden h-20 md:h-24 relative transition-all duration-300 group">
                <div className="absolute top-3 left-4 flex items-center gap-2 z-10">
                  <Activity className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Live Wave Analyzer</span>
                </div>
                
                {/* Grid lines inside oscilloscope */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#bebebe_1px,transparent_1px),linear-gradient(to_bottom,#bebebe_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] bg-[size:1rem_1rem]" />

                {/* SVG wave */}
                <svg className="w-[200%] h-[120%] opacity-60 dark:opacity-100 animate-wave absolute left-0" preserveAspectRatio="none" viewBox="0 0 1000 100">
                  <path 
                    d="M0,50 Q125,0 250,50 T500,50 Q625,0 750,50 T1000,50" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-zinc-400 dark:text-cyan-400 drop-shadow-none dark:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" 
                  />
                </svg>
                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-transparent dark:via-cyan-400/5 h-[200%] -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-linear" />
              </div>

              {/* Status Display Area with Metrics & Circular Telemetry Gauges */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 w-full">
                {[
                  { label: "Coherence", value: `${coherence}%`, icon: Cpu, isDynamic: true },
                  { label: "Nodes", value: "1,024", icon: Network },
                  { label: "Integrity", value: "Verified", icon: Database },
                  { label: "Threat", value: "Nominal", icon: ShieldAlert },
                ].map((stat, i) => (
                  <div key={i} className="group/stat flex flex-col items-center justify-center p-5 rounded-[24px] dark:rounded-[16px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:hover:border-zinc-700 dark:shadow-[0_8px_16px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.2)] gap-3 transition-all duration-300">
                    
                    {/* Physical Dials in Light Mode / Sunken in Dark Mode */}
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#ebebeb] to-[#c8c8c8] border border-white/60 shadow-[4px_4px_8px_#c0c0c0,_-2px_-2px_4px_#ffffff] dark:bg-[#030303] dark:bg-none dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] flex items-center justify-center transition-all duration-300">
                      {/* Notch/LED */}
                      <div className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)] dark:hidden ${stat.isDynamic && coherence < 99 ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]'}`} />
                      
                      <stat.icon className={`w-5 h-5 transition-colors duration-300 ${stat.isDynamic && coherence < 99 ? 'text-red-500 dark:text-red-500 dark:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'text-zinc-500 dark:text-zinc-500 group-hover/stat:text-cyan-500 dark:group-hover/stat:text-cyan-400 dark:group-hover/stat:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]'}`} />
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <span className={`text-2xl font-mono font-bold transition-colors duration-300 ${stat.isDynamic && coherence < 99 ? 'text-red-500 dark:text-red-400' : 'text-zinc-700 dark:text-zinc-100'}`}>{stat.value}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 transition-colors duration-300">{stat.label}</span>
                    </div>
                  </div>
                ))}
                
                {/* Telemetry Gauges */}
                <Gauge label="Core Temp" value={coreTemp} min={30} max={60} unit="°C" colorClass="text-orange-500 dark:text-orange-400 dark:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" icon={Thermometer} />
                <Gauge label="Sync Rate" value={syncRate} min={0} max={100} unit="%" colorClass="text-cyan-500 dark:text-cyan-400 dark:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" icon={Activity} />
              </div>

              {/* Curved Gradient Tactile Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                <button 
                  onClick={() => addLog("CORE INITIALIZATION SEQUENCE STARTED...")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-50 dark:bg-none dark:hover:bg-zinc-200 dark:border-none dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-cyan-600 dark:text-zinc-900 hover:text-cyan-600 dark:hover:text-zinc-700">
                  <Zap className="w-4 h-4" /> Initialize Core
                </button>
                <button 
                  onClick={() => addLog("ACCESSING SECURE LOGS ARCHIVE...")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-b from-white to-[#dcdfe4]/50 border-t border-white/60 shadow-[2px_2px_5px_#bebebe,_-2px_-2px_5px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] dark:bg-zinc-50 dark:bg-none dark:hover:bg-zinc-200 dark:border-none dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-zinc-600 dark:text-zinc-900 hover:text-cyan-600 dark:hover:text-zinc-700">
                  <Terminal className="w-4 h-4" /> Access Logs
                </button>
              </div>

              {/* 4. Interactive CLI Terminal Console Box & Toggles */}
              <div className="w-full mt-6 flex flex-col lg:flex-row items-stretch gap-6">
                
                {/* Terminal Box */}
                <div className="flex-1 rounded-[24px] dark:rounded-[16px] bg-[#e0e0e0] shadow-[inset_8px_8px_16px_rgba(163,177,198,0.55),_inset_-8px_-8px_16px_#ffffff] dark:bg-[#030303] dark:border dark:border-zinc-900 dark:shadow-[inset_0_4px_16px_rgba(0,0,0,0.95)] p-4 sm:p-5 md:p-6 flex flex-col transition-all duration-300 h-64 sm:h-56 relative text-left">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-300 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-zinc-500" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">System Logs & Console</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-700" />
                    </div>
                  </div>
                  
                  {/* Logs Display */}
                  <div className="flex-1 overflow-y-auto flex flex-col gap-1.5 mb-4 font-mono text-[11px] md:text-xs scrollbar-hide text-zinc-600 dark:text-zinc-400">
                    {logs.map((log, i) => (
                      <div key={i} className="leading-relaxed">
                        {log.startsWith('>') ? (
                          <span className="text-cyan-600 dark:text-cyan-400 font-bold">{log}</span>
                        ) : log.includes('NOT RECOGNIZED') ? (
                          <span className="text-red-500 dark:text-red-400">{log}</span>
                        ) : (
                          log
                        )}
                      </div>
                    ))}
                    <div ref={logsEndRef} />
                  </div>

                  {/* Input Prompt */}
                  <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 mt-auto">
                    <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-xs md:text-sm">{'>'}</span>
                    <input 
                      type="text" 
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type a command (/help, /sync, /clear)..." 
                      className="flex-1 bg-transparent border-none outline-none font-mono text-[11px] md:text-xs text-zinc-700 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-600"
                    />
                  </form>
                </div>

                {/* Hardware Toggles Strip */}
                <div className="w-full lg:w-32 rounded-[24px] bg-[#e0e0e0] shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 p-6 flex flex-row lg:flex-col items-center justify-between gap-6 shrink-0 transition-all duration-300">
                  
                  {[
                    { key: 'uplink', label: 'Uplink Sync' },
                    { key: 'neural', label: 'Neural Feed' },
                    { key: 'console', label: 'Console Logs' }
                  ].map((sw) => (
                    <div key={sw.key} className="flex flex-col items-center gap-3">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest text-center leading-tight max-w-[60px]">{sw.label}</span>
                      <button 
                        onClick={() => handleToggle(sw.key as 'uplink' | 'neural' | 'console', sw.label)}
                        className={`w-8 h-14 rounded-full p-1 transition-all duration-300 shadow-[inset_4px_4px_8px_rgba(163,177,198,0.55),_inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-transparent ${toggles[sw.key as keyof typeof toggles] ? 'bg-cyan-500/10 dark:bg-cyan-500/5 dark:border-cyan-500/20' : 'bg-[#e0e0e0] dark:bg-[#030303]'}`}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-[#ebebeb] to-[#c8c8c8] dark:from-zinc-700 dark:to-zinc-900 shadow-[2px_2px_4px_#bebebe,_-2px_-2px_4px_#ffffff] dark:shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-300 flex items-center justify-center ${toggles[sw.key as keyof typeof toggles] ? 'translate-y-6' : 'translate-y-0'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${toggles[sw.key as keyof typeof toggles] ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'bg-zinc-400 dark:bg-zinc-600'}`} />
                        </div>
                      </button>
                    </div>
                  ))}

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}