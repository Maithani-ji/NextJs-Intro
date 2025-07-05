"use client"
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex flex-row gap-10'>
         <Link href="/blog/test-blog">Blogs</Link>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
    </nav>
  )
}

export default Nav