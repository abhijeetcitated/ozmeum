"use client"

import * as React from "react"
import { TrendingUp, Activity, Calendar } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const fullChartData = [
  { date: "2024-04-01", coherence: 82.1, sync: 70.4 },
  { date: "2024-04-02", coherence: 84.5, sync: 73.2 },
  { date: "2024-04-03", coherence: 81.2, sync: 68.9 },
  { date: "2024-04-04", coherence: 86.4, sync: 75.1 },
  { date: "2024-04-05", coherence: 89.3, sync: 78.5 },
  { date: "2024-04-06", coherence: 87.1, sync: 76.2 },
  { date: "2024-04-07", coherence: 90.5, sync: 81.3 },
  { date: "2024-04-08", coherence: 88.2, sync: 79.8 },
  { date: "2024-04-09", coherence: 92.4, sync: 84.5 },
  { date: "2024-04-10", coherence: 94.1, sync: 86.2 },
  { date: "2024-04-11", coherence: 91.5, sync: 83.1 },
  { date: "2024-04-12", coherence: 93.8, sync: 85.7 },
  { date: "2024-04-13", coherence: 96.2, sync: 89.4 },
  { date: "2024-04-14", coherence: 95.1, sync: 87.8 },
  { date: "2024-04-15", coherence: 97.4, sync: 91.2 },
  { date: "2024-04-16", coherence: 94.8, sync: 88.5 },
  { date: "2024-04-17", coherence: 92.3, sync: 84.1 },
  { date: "2024-04-18", coherence: 95.6, sync: 89.7 },
  { date: "2024-04-19", coherence: 98.1, sync: 93.2 },
  { date: "2024-04-20", coherence: 99.4, sync: 95.8 },
  { date: "2024-04-21", coherence: 97.2, sync: 92.1 },
  { date: "2024-04-22", coherence: 98.5, sync: 94.6 },
  { date: "2024-04-23", coherence: 96.8, sync: 91.3 },
  { date: "2024-04-24", coherence: 95.4, sync: 88.9 },
  { date: "2024-04-25", coherence: 97.9, sync: 93.5 },
  { date: "2024-04-26", coherence: 99.1, sync: 96.2 },
  { date: "2024-04-27", coherence: 98.7, sync: 95.4 },
  { date: "2024-04-28", coherence: 99.5, sync: 97.8 },
  { date: "2024-04-29", coherence: 99.8, sync: 98.5 },
  { date: "2024-04-30", coherence: 99.9, sync: 99.2 },
]

const chartConfig = {
  coherence: {
    label: "Coherence (%)",
    color: "#06b6d4", // cyan-500
  },
  sync: {
    label: "Sync Rate (%)",
    color: "#3b82f6", // blue-500
  },
} satisfies ChartConfig

export function HomeAreaChart() {
  const [timeRange, setTimeRange] = React.useState("30d")

  const filteredData = fullChartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-04-30")
    let daysToSubtract = 30
    if (timeRange === "7d") daysToSubtract = 7
    if (timeRange === "14d") daysToSubtract = 14
    
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    
    return date >= startDate
  })

  return (
    <Card className="w-full rounded-2xl sm:rounded-3xl dark:rounded-[20px] sm:dark:rounded-[24px] bg-[#e0e0e0] shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_#ffffff] sm:shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.8)] border-none">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <CardTitle className="flex items-center gap-2 text-zinc-800 dark:text-zinc-100">
            <Activity className="w-5 h-5 text-cyan-500" />
            Quantum Sub-Space Telemetry
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400 mt-1">
            Live coherence and sync rate analysis
          </CardDescription>
        </div>
        
        <div className="w-full sm:w-40 relative z-50">
          <Select value={timeRange} onValueChange={(val) => val && setTimeRange(val)}>
            <SelectTrigger className="h-9 w-full bg-[#e0e0e0] shadow-[inset_2px_2px_5px_#bebebe,_inset_-2px_-2px_5px_#ffffff] dark:bg-[#050505] dark:border-zinc-800 dark:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] border-transparent text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 focus:ring-cyan-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <SelectValue placeholder="Select Range" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-[#e0e0e0] border border-white/60 shadow-[4px_4px_10px_#bebebe,_-4px_-4px_10px_#ffffff] dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
              <SelectItem value="7d" className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 focus:bg-[#d5d5d5] dark:focus:bg-zinc-800 cursor-pointer">Last 7 Days</SelectItem>
              <SelectItem value="14d" className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 focus:bg-[#d5d5d5] dark:focus:bg-zinc-800 cursor-pointer">Last 14 Days</SelectItem>
              <SelectItem value="30d" className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 focus:bg-[#d5d5d5] dark:focus:bg-zinc-800 cursor-pointer">Last 30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={filteredData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="fillCoherence" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-coherence)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="var(--color-coherence)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="fillSync" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-sync)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="var(--color-sync)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-zinc-300 dark:text-zinc-800" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
                className="text-zinc-500 font-mono text-xs"
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={[60, 100]}
                className="text-zinc-500 font-mono text-xs"
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="sync"
                stroke="var(--color-sync)"
                fill="url(#fillSync)"
                strokeWidth={2}
                fillOpacity={1}
              />
              <Area
                type="monotone"
                dataKey="coherence"
                stroke="var(--color-coherence)"
                fill="url(#fillCoherence)"
                strokeWidth={2}
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none text-zinc-700 dark:text-zinc-200">
              Trending up by 5.2% this cycle <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="flex items-center gap-2 leading-none text-zinc-500 dark:text-zinc-400">
              Showing total node stabilization for the selected range
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}