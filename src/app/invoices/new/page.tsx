import { InvoiceForm } from "@/components/invoice-form"
import Image from "next/image"

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="flex-1 max-w-sm">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Create Invoice</h1>
            <p className="text-muted-foreground">
              Fill out the form to generate a new invoice for your client.
            </p>
          </div>
          <InvoiceForm />
        </div>

        <div className="flex-1 max-w-md order-first md:order-last">
          <div className="relative aspect-square">
            <Image
              src="/invoice-illustration.svg"
              alt="Invoice illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
