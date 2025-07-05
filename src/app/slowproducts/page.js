import SlowProductsList from '@/component/SlowProductList'
import React, { Suspense } from 'react'

const Page = () => {
  return (
    <div>
        <h1>Shop</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
            <SlowProductsList/>
        </Suspense>
    </div>
  )
}

export default Page