import { CompanyTable } from "../components/campany-table"
import { SideNav } from "../components/side-nav"
import { TableHeader } from "../components/table-header"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <TableHeader />
      <div className="flex flex-1">
        <SideNav />
        <main className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
          <CompanyTable />
        </main>
      </div>
    </div>
  )
}

