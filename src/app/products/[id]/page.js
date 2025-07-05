import React from 'react'
// for generating params for SSG
export const generateStaticParams=async ()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const products=await res.json()
  return products.map((p)=>({id:p.id.toString()}))
}
// for SEO
export async function generateMetadata({ params }) {
    const { id } = await params
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()
  
    return {
      title: product.title,
      description: product.description.slice(0, 100),
    }
  }
  
const ProductsPage = async({params}) => {
    const {id}= await params
const res= await fetch(`https://fakestoreapi.com/products/${id}`)
if(!res.ok) return <h1>Not Found</h1>
const product=await res.json()  
    return (
        <div>
        <h1>{product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
      </div>
  )
}

export default ProductsPage