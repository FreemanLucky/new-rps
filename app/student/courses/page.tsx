import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const courses = [
  { id: "CPE481", name: "Engineering Mathematics 481", instructor: "Dr. Olaye" },
  { id: "CPE575", name: "Microntrollers", instructor: "Prof. Apeh" },
  { id: "CPE512", name: "VHDL", instructor: "Dr. Isi" },
]

export default function StudentCourses() {
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
                <strong>Instructor:</strong> {course.instructor}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

