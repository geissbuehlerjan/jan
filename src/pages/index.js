import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Skus from "../components/Products/Skus"
import CartOverview from "../components/CartOverview"

import { CartProvider } from "use-shopping-cart"

const CartExample = () => (
  <Layout>
    <SEO title="Cart Example" />
    <h1>Checkout with cart example</h1>
    <h2>
      With{" "}
      <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
    </h2>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
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