import React from 'react'
import { CartProvider } from 'use-shopping-cart'

export const wrapRootElement = ({ element }, pluginOptions) => {
  const {
    checkoutMode,
    stripePublicKey,
    successUrl,
    cancelUrl,
    currency,
    allowedCountries,
    billingAddressCollection
  } = pluginOptions

  return (
    <CartProvider
      mode={checkoutMode}
      stripe={stripePublicKey}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency={currency}
      allowedCountries={allowedCountries}
      billingAddressCollection={billingAddressCollection}
    >
      {element}
    </CartProvider>
  )
}
