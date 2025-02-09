"use client"

import { type ReactNode, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Portal</h1>
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
          <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <Link href="/admin/dashboard" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/users" className="hover:underline">
                  Users
                </Link>
              </li>
              <li>
                <Link href="/admin/courses" className="hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/admin/results" className="hover:underline">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/admin/reports" className="hover:underline">
                  Reports
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

