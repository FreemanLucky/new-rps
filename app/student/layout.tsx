"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function StudentLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Student Portal</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/student/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/student/courses" className="hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/student/results" className="hover:underline">
                  Results
                </Link>
              </li>
            </ul>
          </nav>
          <Button
            variant="outline"
            onClick={() => {
              // Here you would typically clear the user's session
              // For now, we'll just redirect to the login page
              router.push("/login")
            }}
            className="text-black"
          >
            Log Out
          </Button>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  )
}

