"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const BlogStatic = () => {
    const params=usePathname()
  return (
    <div>Blog page static showing path name also
        <h1>{params}</h1>
    </div>
  )
}

export default BlogStatic