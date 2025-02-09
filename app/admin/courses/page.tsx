import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  { id: "CPE481", name: "Engineering Mathematics 481", instructor: "Dr. Olaye" },
  { id: "CPE575", name: "MicroProcessors", instructor: "Prof. Apeh" },
  { id: "CPE512", name: "VHDL", instructor: "Dr. Isi" },
]

export default function AdminCourses() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Course Management</h2>
      <Button>Add New Course</Button>
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
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <Button className="mt-2">Edit Course</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

