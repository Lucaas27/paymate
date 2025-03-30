import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-6 justify-center max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">PayMate</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </div>
  )
}
