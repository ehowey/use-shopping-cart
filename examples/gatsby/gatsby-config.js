require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// {/* <CartProvider
//       mode="client-only"
//       stripe={stripePromise}
//       successUrl={`${window.location.origin}/page-2/`}
//       cancelUrl={`${window.location.origin}/`}
//       currency="USD"
//       allowedCountries={['US', 'GB', 'CA']}
//       billingAddressCollection={true}
//     > */}

module.exports = {
  siteMetadata: {
    title: `Gatsby Use-Shopping-Cart Example`,
    description: `Accept payments in your Gatsby site with Use-Shopping-Cart and Stripe Checkout.`,
    author: 'Eric Howey <ehowey@gmail.com>',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Price'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-use-shopping-cart`,
      options: {
        mode: 'client-only',
        stripePublicKey:
          'pk_test_51I9wsTBd3GPToWTXiLTYb06BDQ2BLbZ9VGYFUxLEjDSZzISHY5Hf7yT7fgWtarYkwhWFJZSCk6aQzKMya0eormeB00gXeZVtrf',
        successUrl: 'wwww.google.com',
        cancelUrl: 'www.stripe.com',
        currency: 'USD',
        allowedCountries: ['US', 'GB', 'CA'],
        billingAddressCollection: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-use-shopping-cart`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
  ],
}
