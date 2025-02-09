import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LecturerDashboard() {
  // This data would typically come from an API or database
  const assignedCourses = [
    { id: "MATH101", name: "Mathematics 101", students: 45 },
    { id: "PHYS201", name: "Physics 201", students: 38 },
    { id: "CS301", name: "Computer Science 301", students: 52 },
  ]

  const pendingTasks = [
    { id: 1, task: "Upload results for Mathematics 101", course: "MATH101" },
    { id: 2, task: "Review student submissions for Physics 201", course: "PHYS201" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome, Lecturer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Assigned Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {assignedCourses.map((course) => (
                <li key={course.id} className="flex justify-between items-center">
                  <span>{course.name}</span>
                  <span className="text-sm text-gray-500">{course.students} students</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {pendingTasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center">
                  <span>{task.task}</span>
                  <Button size="sm">Complete</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

