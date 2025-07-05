// app/profile/page.js or app/about/page.js

export default async function ProfilePage() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await res.json()
console.log(users);

  return (
    <div>
      <h1>About Page</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
