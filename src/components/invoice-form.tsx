import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function InvoiceForm() {
  return (
    <form className="grid gap-4 p-6 bg-card rounded-lg shadow-sm">
      <div>
        <Label htmlFor="name" className="block mb-2 font-semibold text-sm">
          Billing Name
        </Label>
        <Input name="name" id="name" type="text" placeholder="John Doe" />
      </div>
      <div>
        <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
          Billing Email
        </Label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <Label htmlFor="amount" className="block mb-2 font-semibold text-sm">
          Amount
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            £
          </span>
          <Input
            name="amount"
            id="amount"
            type="number"
            className="pl-7"
            placeholder="0.00"
          />
        </div>
      </div>
      <div>
        <Label
          htmlFor="description"
          className="block mb-2 font-semibold text-sm"
        >
          Description
        </Label>
        <Textarea
          name="description"
          id="description"
          placeholder="Enter invoice details..."
          className="min-h-[100px]"
        />
      </div>
      <Button className="w-full font-semibold mt-4">Create Invoice</Button>
    </form>
  )
}
