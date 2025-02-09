import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Blockchain Result System</CardTitle>
          <CardDescription>Secure and transparent result management</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Image src="/blockchain-logo.svg" alt="Blockchain Logo" width={150} height={150} />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button asChild className="w-full">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/login">Log In</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

