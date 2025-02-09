"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { verifyBlockchain } from "@/utils/blockchainVerification"

interface Result {
  course: string
  grade: string
  verified: boolean
}

export default function StudentResults() {
  const [results, setResults] = useState<Result[]>([
    { course: "Mathematics 101", grade: "A", verified: false },
    { course: "Physics 201", grade: "B+", verified: false },
    { course: "Computer Science 301", grade: "A-", verified: false },
  ])

  const verifyResult = (index: number) => {
    setResults((prevResults) =>
      prevResults.map((result, i) =>
        i === index ? { ...result, verified: verifyBlockchain(result.course + result.grade) } : result,
      ),
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Results</h2>
      <div className="grid grid-cols-1 gap-4">
        {results.map((result, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{result.course}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">Grade: {result.grade}</p>
                <p className={result.verified ? "text-green-600" : "text-gray-500"}>
                  {result.verified ? "Blockchain Verified" : "Not Verified"}
                </p>
              </div>
              <Button onClick={() => verifyResult(index)} disabled={result.verified}>
                {result.verified ? "Verified" : "Verify"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

