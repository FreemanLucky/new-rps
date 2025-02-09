"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Here you would typically send the login request to your backend
      // For this example, we'll use a mock login
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      // Mock login logic
      let role = "student"
      if (email.includes("admin")) {
        role = "admin"
      } else if (email.includes("lecturer")) {
        role = "lecturer"
      }

      toast({
        title: "Logged in successfully",
        description: `Welcome back, ${email}!`,
      })

      // Redirect based on role
      switch (role) {
        case "student":
          router.push("/student/dashboard")
          break
        case "lecturer":
          router.push("/lecturer/dashboard")
          break
        case "admin":
          router.push("/admin/dashboard")
          break
        default:
          router.push("/")
      }
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Error",
        description: "Failed to log in. Please check your credentials and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}

