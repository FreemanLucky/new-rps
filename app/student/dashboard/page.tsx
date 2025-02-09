import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentDashboard() {
  // This data would typically come from an API or database
  const courses = [
    { id: "MTH110", name: "Mathematics 110", grade: "A" },
    { id: "MEE211", name: "Mechnics 211", grade: "B" },
    { id: "CPE301", name: "ELA 301", grade: "A" },
  ]

  const recentResults = [
    { id: "CHM101", name: "Chemistry 101", grade: "A" },
    { id: "CHE201", name: "Chemical Eng 201", grade: "B" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome, Student</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Registered Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.id} className="flex justify-between items-center">
                  <span>{course.name}</span>
                  <span className="text-sm text-gray-500">{course.id}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recentResults.map((result) => (
                <li key={result.id} className="flex justify-between items-center">
                  <span>{result.name}</span>
                  <span className="font-semibold">{result.grade}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

