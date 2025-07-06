"use client"
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex flex-row gap-10'>
         <Link href="/blog/test-blog">Blogs</Link>
      <Link href="/about">About ISR</Link>
      <Link href="/">Home</Link>
      <Link href="/products">Products SSR With CSR & SSG</Link>
      <Link href="/slowproducts">Slow Products with Supense</Link>
      <Link href="/user">Api Crud</Link>

    </nav>
  )
}

export default Nav