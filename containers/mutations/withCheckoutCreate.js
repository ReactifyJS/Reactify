/*

Mutation query HoC that creates a new checkout object

*/
import React from 'react'
import { graphql, gql } from 'react-apollo'
import CheckoutFragment from '../../fragments/checkoutFragment'

export const checkoutCreate = gql`
  mutation checkoutCreate ($input: CheckoutCreateInput!){
    checkoutCreate(input: $input) {
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
`

export default graphql(checkoutCreate, {name: 'checkoutCreate', alias: 'withCheckoutCreate'})