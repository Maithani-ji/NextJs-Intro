"use client"

import { useRouter } from "next/navigation";
import Nav from "../component/Nav";
import styles from "../app/globals.css"


export default function Home() {
  const router=useRouter()
  return (
    <div style={{fontSize:"2rem"}} id="name" className="flex place-content-center place-items-center bg-amber-100 min-h-screen gap-10 font-[family-name:var(--font-geist-sans)]">
    <h2>Home</h2>
    <button className="bg-red-100" onClick={() => router.push("/blog/hello") } >Click Me</button>
    </div>
  );
}
