import React from 'react'
import Counter from '../counter/page'
import ProductList from '@/component/ProductList'


const  ProductsPage = async() => {
    const res= await fetch('https://fakestoreapi.com/products')
    const products=await res.json()
  return (
    <div>
        <h1>Products Page</h1>

        <ul>
            {
                products.map((product)=> <ProductList key ={product.id} product={product} />)
            }
        </ul>

            <Counter/>
    </div>
  )
}

export default  ProductsPage