"use client"
import { notFound, useParams } from 'next/navigation'
import React from 'react'

const Blog = ({param}) => {
  const params=useParams()
  return (
    <div>Blog post: {(params &&params?.slug) || "NA"}</div>
  )
}

export default Blog