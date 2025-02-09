import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  // This data would typically come from an API or database
  const stats = [
    { title: "Total Students", value: 1234 },
    { title: "Total Lecturers", value: 56 },
    { title: "Active Courses", value: 78 },
    { title: "Pending Results", value: 23 },
  ]

  const recentActivities = [
    "New course added: Advanced Machine Learning",
    "Result verification completed for Physics 201",
    "5 new lecturer accounts approved",
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <Button>Verify Blockchain Results</Button>
            <Button>Generate Monthly Report</Button>
            <Button>Manage User Permissions</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

