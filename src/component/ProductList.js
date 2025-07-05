'use client'

import { useRouter } from 'next/navigation'

const ProductList = ({ product }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/products/${product.id}`)
  }

  return (
    <li onClick={handleClick} style={{ cursor: 'pointer' }}>
      {product.title}
    </li>
  )
}

export default ProductList
