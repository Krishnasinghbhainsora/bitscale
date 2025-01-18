"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AlertCircle, ChevronDown, Download, ExternalLink, Filter, Grid3X3, LayoutGrid, Play, Plus, Search, Share2, Sparkles, Trash2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const companies = [
  {
    id: 1,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "complete",
    name: "Bitscale Evaluation",
    description: "Account relevancy check",
  },
  {
    id: 2,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "error",
    name: "BMW Evaluation",
    description: "Relevancy check",
    error: "cell data size exceeds limit",
  },
  {
    id: 3,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "complete",
    name: "Google Evaluation",
    description: "Lilevancy check",
    link: "https://www.linkedin.com/bitscale",
  },
  {
    id: 4,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "loading",
    name: "Apple Evaluation",
    description: "Olvancy check",
  },
  {
    id: 5,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "loading",
    name: "Figma Evaluation",
    description: "Evancy check",
  },
]

export function CompanyTable() {
  const [view, setView] = useState<"row" | "column">("row")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<"name" | "timestamp">("timestamp")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const filteredAndSortedCompanies = useMemo(() => {
    return companies
      .filter(
        (company) =>
          company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          company.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "name") {
          return sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        } else {
          return sortOrder === "asc"
            ? new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
            : new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        }
      })
  }, [searchTerm, sortBy, sortOrder])

  const handleSort = (column: "name" | "timestamp") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  return (
    <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-9 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 rounded-lg border dark:border-gray-600 p-1">
          <Button
            variant={view === "row" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setView("row")}
          >
            <LayoutGrid className="mr-2 h-4 w-4" />
            1/1 Row
          </Button>
          <Button
            variant={view === "column" ? "secondary" : "ghost"}
            size="sm"
            onClick={() => setView("column")}
          >
            <Grid3X3 className="mr-2 h-4 w-4" />
            3/3 Column
          </Button>
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Sort
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleSort("name")}>
              Sort by Name
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("timestamp")}>
              Sort by Timestamp
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="secondary" size="sm">
          <Sparkles className="mr-2 h-4 w-4" />
          Enrich
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-red-500 dark:text-red-400">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="rounded-lg border dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="w-[50px] dark:text-gray-400">#</TableHead>
              <TableHead className="bg-yellow-50/50 dark:bg-yellow-900/10">
                <div className="flex items-center gap-2">
                  <span className="font-black">A</span>
                  Input Column
                </div>
              </TableHead>
              <TableHead className="dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 rotate-90" />
                  Action column
                </div>
              </TableHead>
              <TableHead className="dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Enrich Company
                </div>
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedCompanies.map((company) => (
              <TableRow key={company.id} className="dark:border-gray-700">
                <TableCell className="dark:text-gray-400">{company.id}</TableCell>
                <TableCell className="dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    {company.timestamp}
                  </div>
                </TableCell>
                <TableCell>
                  {company.status === "loading" ? (
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-4 rounded-full dark:bg-gray-600" />
                      <span className="text-gray-500 dark:text-gray-400">Loading data, Please wait</span>
                    </div>
                  ) : company.status === "error" ? (
                    <div className="flex items-center gap-2 text-red-500 dark:text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      <span>{company.error}</span>
                    </div>
                  ) : company.link ? (
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:underline dark:text-blue-400"
                    >
                      {company.link}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 dark:text-gray-300">
                      {`${company.name} - ${company.description}`}
                    </div>
                  )}
                </TableCell>
                <TableCell className="dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-full dark:border-gray-600">
                      {company.name.split(" ")[0]}
                    </Badge>
                    <span>
                      {`${company.name} - ${company.description}`}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="dark:text-gray-400">
                    <Plus className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

