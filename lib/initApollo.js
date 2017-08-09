import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { toIdValue } from 'apollo-client'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const dataIdFromObject = object => object.id

function create () {
  return new ApolloClient({
    dataIdFromObject, 
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: createNetworkInterface({
      uri: 'https://graphql.myshopify.com/api/graphql', // Server URL (must be absolute)
      opts: { // Additional fetch() options like `credentials` or `headers`
        credentials: 'same-origin',
        headers: {
          'X-Shopify-Storefront-Access-Token': 'dd4d4dc146542ba7763305d71d1b3d38'
        }
      }
    }),
    // customResolvers: {
    //   Query: {
    //     node: (_, args) => {
    //       console.log('// customResolvers')
    //       console.log(_)
    //       console.log(args)
    //       return toIdValue(dataIdFromObject({ __typename: 'Checkout', id: args.id }))
    //     },
    //   },
    // },
  })
}

export default function initApollo () {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create()
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create()
  }

  return apolloClient
}
