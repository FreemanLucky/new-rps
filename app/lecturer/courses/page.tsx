import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  { id: "MTH110", name: "Mathematics 101", students: 45 },
  { id: "PHYS201", name: "Physics 201", students: 38 },
  { id: "CSC301", name: "Computer Science 301", students: 52 },
]

export default function LecturerCourses() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Course ID:</strong> {course.id}
              </p>
              <p>
                <strong>Enrolled Students:</strong> {course.students}
              </p>
              <Button className="mt-2">Manage Course</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

