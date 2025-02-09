import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const results = [
  { id: 1, student: "John Doe", course: "MTH110", grade: "A" },
  { id: 2, student: "Jane Smith", course: "MEE201", grade: "B" },
  { id: 3, student: "Bob Johnson", course: "CSC301", grade: "C" },
]

export default function AdminResults() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Result Management</h2>
      <Button>Approve All Pending Results</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result) => (
          <Card key={result.id}>
            <CardHeader>
              <CardTitle>{result.student}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Course:</strong> {result.course}
              </p>
              <p>
                <strong>Grade:</strong> {result.grade}
              </p>
              <Button className="mt-2">Verify Result</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

