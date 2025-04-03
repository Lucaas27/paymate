import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col gap-6 justify-center text-center">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button
            className="cursor-pointer inline-flex gap-2"
            variant="ghost"
            asChild
          >
            <Link href="/invoices/new">
              <CirclePlus className="h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] p-4">Date</TableHead>
            <TableHead className="P-4">Customer</TableHead>
            <TableHead className="P-4">Email</TableHead>
            <TableHead className="text-center p-4">Status</TableHead>
            <TableHead className="text-right p-4">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-left p-4">
              <span className="font-semibold">31/10/2024</span>
            </TableCell>
            <TableCell className="text-left p-4">
              <span className="font-semibold">Philip James</span>
            </TableCell>
            <TableCell className="text-left p-4">
              <span>test@gmail.com</span>
            </TableCell>
            <TableCell className="text-center p-4">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="text-right p-4">
              <span className="font-semibold">£250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
