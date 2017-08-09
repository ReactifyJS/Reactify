/*

Query to get Checkout object

*/
import { gql, graphql } from 'react-apollo'
import CheckoutFragment from '../../fragments/checkoutFragment'

const checkout = gql`
  query checkoutQuery($id: ID!) {
    node(id:$id) {
      id
      ... on Checkout{
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`

export default graphql(checkout, {

  alias: 'withCheckout',

  options(props) {
    return {
      variables: {
        // id: 'Z2lkOi8vc2hvcGlmeS9DaGVja291dC9hN2FhMTQwMDM0Njg0NDJmNDQ4ZmE1NmRjZmEyNjRiYT9rZXk9ZmJkYzc5ZmYwZGJiMTEwZmExNWI4MDE5ZmRlNzVlZDQ='
        id: props.checkoutId
      }
    }
  },

  props: ({ data }) => {
    return {checkout: data.node}
  }
})

