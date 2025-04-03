import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Page() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>

      <form className="grid max-w-sm gap-4">
        <div>
          <Label htmlFor="name" className="block m-2 font-semibold text-sm">
            Billing Name
          </Label>
          <Input name="name" id="name" type="text" />
        </div>
        <div>
          <Label htmlFor="email" className="block m-2 font-semibold text-sm">
            Billing Email
          </Label>
          <Input name="email" id="email" type="text" />
        </div>
        <div>
          <Label htmlFor="amount" className="block m-2 font-semibold text-sm">
            Amount
          </Label>
          <Input name="amount" id="amount" type="value" />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block m-2 font-semibold text-sm"
          >
            Description
          </Label>
          <Textarea name="description" id="description"></Textarea>
        </div>
        <div>
          <Button className="w-full font-semibold cursor-pointer">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
