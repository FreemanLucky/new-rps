import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const reports = [
  { id: 1, name: "Student Performance Report", type: "PDF" },
  { id: 2, name: "Course Enrollment Statistics", type: "CSV" },
  { id: 3, name: "Lecturer Evaluation Summary", type: "PDF" },
]

export default function AdminReports() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Reports</h2>
      <Button>Generate New Report</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle>{report.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Type:</strong> {report.type}
              </p>
              <Button className="mt-2">Download Report</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

