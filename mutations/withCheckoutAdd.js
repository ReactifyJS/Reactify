import { graphql, gql } from 'react-apollo'
import CheckoutFragment from '../fragments/checkoutFragment'

const checkoutLineItemsAdd = gql`
  mutation checkoutLineItemsAdd ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export default graphql(checkoutLineItemsAdd, {
  name: 'checkoutLineItemsAdd',
  alias: 'withCheckoutAdd'
})