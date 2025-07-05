// app/profile/[username]/page.js

export const revalidate = 60 // ✅ ISR: Regenerate every 60s

// 🔁 Pre-render known usernames at build time
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return users.map((user) => ({
    username: user.username.toLowerCase(), // ensure lowercase matching
  }))
}

// ✅ Page component
export default async function ProfilePage({ params }) {
  const { username } =await params

  // Fetch all users and find the one with matching username
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await res.json()

  const user = users.find((u) => u.username.toLowerCase() === username.toLowerCase())

  if (!user) {
    return <h1>User not found</h1>
    // OR use `notFound()` to show custom 404
    // import { notFound } from 'next/navigation'
    // return notFound()
  }

  return (
    <div>
      <h1>Profile: {user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  )
}
