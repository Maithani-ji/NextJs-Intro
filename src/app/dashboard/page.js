'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
//  throw new Error("Simulated dashboard crash")  for simulation crash and use of error.js
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin")
    }
  }, [status])

  if (status === "loading") {
    return <p>Loading...</p>  // Optional loading UI
  }

  return (
    <div>
      <h1>Welcome {session?.user?.name}!</h1>
      <p>This is a protected dashboard.</p>
    </div>
  )
}
