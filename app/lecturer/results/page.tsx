"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { verifyBlockchain } from "@/utils/blockchainVerification"

interface Result {
  studentId: string
  course: string
  grade: string
  verified: boolean
}

export default function LecturerResults() {
  const [results, setResults] = useState<Result[]>([])
  const [newResult, setNewResult] = useState({ studentId: "", course: "", grade: "" })

  const addResult = () => {
    if (newResult.studentId && newResult.course && newResult.grade) {
      setResults([...results, { ...newResult, verified: false }])
      setNewResult({ studentId: "", course: "", grade: "" })
    }
  }

  const verifyResult = (index: number) => {
    setResults((prevResults) =>
      prevResults.map((result, i) =>
        i === index
          ? { ...result, verified: verifyBlockchain(result.studentId + result.course + result.grade) }
          : result,
      ),
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Upload Results</h2>
      <Card>
        <CardHeader>
          <CardTitle>Add New Result</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                value={newResult.studentId}
                onChange={(e) => setNewResult({ ...newResult, studentId: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="course">Course</Label>
              <Input
                id="course"
                value={newResult.course}
                onChange={(e) => setNewResult({ ...newResult, course: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="grade">Grade</Label>
              <Input
                id="grade"
                value={newResult.grade}
                onChange={(e) => setNewResult({ ...newResult, grade: e.target.value })}
              />
            </div>
          </div>
          <Button onClick={addResult} className="mt-4">
            Add Result
          </Button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4">
        {results.map((result, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{result.course}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div>
                <p>Student ID: {result.studentId}</p>
                <p>Grade: {result.grade}</p>
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

