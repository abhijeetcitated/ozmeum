"use client"

import * as React from "react"
import { CheckCircle2, Loader2, GripVertical } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tasksData = [
  {
    id: "1",
    header: "Cover page",
    sectionType: "Cover page",
    status: "In Process",
    target: 18,
    limit: 5,
    reviewer: "Eddie Lake",
  },
  {
    id: "2",
    header: "Table of contents",
    sectionType: "Table of contents",
    status: "Done",
    target: 29,
    limit: 24,
    reviewer: "Eddie Lake",
  },
  {
    id: "3",
    header: "Executive summary",
    sectionType: "Narrative",
    status: "Done",
    target: 10,
    limit: 13,
    reviewer: "Eddie Lake",
  },
  {
    id: "4",
    header: "Technical approach",
    sectionType: "Narrative",
    status: "Done",
    target: 27,
    limit: 23,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: "5",
    header: "Design",
    sectionType: "Narrative",
    status: "In Process",
    target: 2,
    limit: 16,
    reviewer: "Jamik Tashpulatov",
  },
  {
    id: "6",
    header: "Capabilities",
    sectionType: "Narrative",
    status: "In Process",
    target: 20,
    limit: 8,
    reviewer: "Jamik Tashpulatov",
  },
]

export function ProjectTasksTable() {
  return (
    <Card className="w-full rounded-2xl sm:rounded-3xl dark:rounded-[20px] sm:dark:rounded-[24px] bg-[#e0e0e0] shadow-[8px_8px_16px_rgba(163,177,198,0.55),_-8px_-8px_16px_#ffffff] sm:shadow-[12px_12px_24px_rgba(163,177,198,0.55),_-12px_-12px_24px_#ffffff] dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:border dark:border-zinc-800/85 dark:shadow-[0_8px_16px_rgba(0,0,0,0.8)] border-none overflow-hidden">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800">
              <TableRow className="hover:bg-transparent dark:hover:bg-transparent border-none">
                <TableHead className="w-[50px] pl-6 py-4">
                  <div className="flex items-center gap-4">
                    <Checkbox className="border-zinc-400 dark:border-zinc-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" />
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 py-4">Header</TableHead>
                <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 py-4">Section Type</TableHead>
                <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 py-4">Status</TableHead>
                <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 py-4">Target</TableHead>
                <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 py-4">Limit</TableHead>
                <TableHead className="font-semibold text-zinc-600 dark:text-zinc-300 py-4 pr-6">Reviewer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasksData.map((task) => (
                <TableRow 
                  key={task.id}
                  className="border-b border-zinc-200 dark:border-zinc-800/50 hover:bg-white/50 dark:hover:bg-zinc-800/30 transition-colors"
                >
                  <TableCell className="pl-4 py-4">
                    <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-600">
                      <GripVertical className="w-4 h-4 cursor-grab" />
                      <Checkbox className="border-zinc-400 dark:border-zinc-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-zinc-800 dark:text-zinc-100 py-4">
                    {task.header}
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge variant="outline" className="bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 font-normal rounded-full px-3">
                      {task.sectionType}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center gap-2">
                      {task.status === "Done" ? (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Done
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-medium">
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          In Process
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-zinc-600 dark:text-zinc-300 font-medium py-4">
                    {task.target}
                  </TableCell>
                  <TableCell className="text-zinc-600 dark:text-zinc-300 font-medium py-4">
                    {task.limit}
                  </TableCell>
                  <TableCell className="text-zinc-600 dark:text-zinc-300 py-4 pr-6">
                    {task.reviewer}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
