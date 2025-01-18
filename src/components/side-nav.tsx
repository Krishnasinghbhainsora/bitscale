"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Grid, Moon, RefreshCw, Settings2, Sun, Table2 } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SideNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  
  return (
    <div className="flex w-16 flex-col items-center border-r bg-blue-600 dark:bg-blue-900 py-4">
      <div className="flex flex-1 flex-col items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-500 dark:hover:bg-blue-800"
        >
          <Table2 className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-500 dark:hover:bg-blue-800"
        >
          <RefreshCw className="h-5 w-5" />
        </Button>
        <Link href="/frame-12">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "text-white hover:bg-blue-500 dark:hover:bg-blue-800",
              pathname === "/frame-12" && "bg-blue-700 dark:bg-blue-800"
            )}
          >
            <Grid className="h-5 w-5" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-500 dark:hover:bg-blue-800"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-blue-500 dark:hover:bg-blue-800"
        >
          <Settings2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

