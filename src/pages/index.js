import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Skus from "../components/Products/Skus"
import CartOverview from "../components/CartOverview"

import { CartProvider } from "use-shopping-cart"

const CartExample = () => (
  <Layout>
    <SEO title="Cart Example" />
    <h1>Schnyci's World</h1>
    <h2>
      Secret platform for unique products
    </h2>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
      successUrl={`https://janmain.gatsbyjs.io/`}
      cancelUrl={`https://janmain.gatsbyjs.io/`}
      currency="CHF"
      allowedCountries={["US", "GB", "CA", "CH"]}
      billingAddressCollection={true}
    >
      <CartOverview />
      <Skus />
    </CartProvider>
  </Layout>
)

export default CartExample