import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const users = [
  { id: 1, name: "John Doe", role: "Student" },
  { id: 2, name: "Jane Smith", role: "Lecturer" },
  { id: 3, name: "Bob Johnson", role: "Admin" },
]

export default function AdminUsers() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">User Management</h2>
      <Button>Add New User</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
              <Button className="mt-2">Edit User</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

