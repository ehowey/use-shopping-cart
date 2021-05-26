import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
// import Skus from '../components/Products/Skus'
// import CartOverview from '../components/CartOverview'

const CartExample = () => (
  <Layout>
    <Seo title="Cart Example" />
    <h1>Checkout with cart example</h1>
    <h2>
      With{' '}
      <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
    </h2>
    {/* <CartOverview />
    <Skus /> */}
  </Layout>
)

export default CartExample
