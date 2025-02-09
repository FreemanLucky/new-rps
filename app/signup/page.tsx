"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"

type UserData = {
  role: string
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  faculty?: string
  department: string
  dateOfHire?: string
  userIdHash?: string
  username?: string
  matricNumber?: string
  dateOfBirth?: string
}

const AdminLecturerForm = ({ data, setData }: { data: UserData; setData: (data: UserData) => void }) => (
  <>
    <div className="space-y-2">
      <Label htmlFor="userIdHash">User ID/Hash</Label>
      <Input
        id="userIdHash"
        required
        value={data.userIdHash || ""}
        onChange={(e) => setData({ ...data, userIdHash: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        required
        value={data.firstName}
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        id="lastName"
        required
        value={data.lastName}
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="faculty">Faculty</Label>
      <Input
        id="faculty"
        required
        value={data.faculty || ""}
        onChange={(e) => setData({ ...data, faculty: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="department">Department</Label>
      <Input
        id="department"
        required
        value={data.department}
        onChange={(e) => setData({ ...data, department: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="dateOfHire">Date of Hire</Label>
      <Input
        id="dateOfHire"
        type="date"
        required
        value={data.dateOfHire || ""}
        onChange={(e) => setData({ ...data, dateOfHire: e.target.value })}
      />
    </div>
  </>
)

const StudentForm = ({ data, setData }: { data: UserData; setData: (data: UserData) => void }) => (
  <>
    <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input
        id="username"
        required
        value={data.username || ""}
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        required
        value={data.firstName}
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="lastName">Surname</Label>
      <Input
        id="lastName"
        required
        value={data.lastName}
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="matricNumber">Matric Number</Label>
      <Input
        id="matricNumber"
        required
        value={data.matricNumber || ""}
        onChange={(e) => setData({ ...data, matricNumber: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="department">Department</Label>
      <Input
        id="department"
        required
        value={data.department}
        onChange={(e) => setData({ ...data, department: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="dateOfBirth">Date of Birth</Label>
      <Input
        id="dateOfBirth"
        type="date"
        required
        value={data.dateOfBirth || ""}
        onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })}
      />
    </div>
  </>
)

export default function SignUpPage() {
  const [userData, setUserData] = useState<UserData>({
    role: "student",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    department: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Validation
      if (userData.password !== userData.confirmPassword) {
        throw new Error("Passwords do not match")
      }

      // Simulated successful signup
      console.log("User signed up:", userData)

      toast({
        title: "Account created successfully",
        description: `Welcome, ${userData.firstName}! You've signed up as a ${userData.role}.`,
      })

      // Redirect based on role
      switch (userData.role) {
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
      console.error("Signup error:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-green-100 p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-h-[70vh] overflow-y-auto px-1 py-2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Role</Label>
                  <RadioGroup
                    defaultValue="student"
                    onValueChange={(value) => setUserData({ ...userData, role: value })}
                  >
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <Label htmlFor="student">Student</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lecturer" id="lecturer" />
                        <Label htmlFor="lecturer">Lecturer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="admin" id="admin" />
                        <Label htmlFor="admin">Admin</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
                {userData.role === "student" ? (
                  <StudentForm data={userData} setData={setUserData} />
                ) : (
                  <AdminLecturerForm data={userData} setData={setUserData} />
                )}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    value={userData.confirmPassword}
                    onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-4 py-2 px-4 text-sm sm:text-base" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </form>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}

