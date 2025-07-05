import React from 'react'


const SlowProductsList = async() => {
    const res= await fetch('https://fakestoreapi.com/products')
    const products=await res.json()
  return (
    <div>
        <h1>Products Page</h1>

        <ul>
            {
                products.map((product)=> {
              return(<button key={product.id}>  {product.title}  </button> )
            })
        }
        </ul>

            
    </div>
  )
}

export default SlowProductsList