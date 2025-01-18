"use client"

import { ArrowLeft, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export function TableHeader() {
  return (
    <div className="flex items-center justify-between gap-4 bg-white dark:bg-gray-800 p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-medium dark:text-gray-200">Name of the file</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Auto Save</span>
          <Switch />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

