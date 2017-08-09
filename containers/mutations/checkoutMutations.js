/*

Define HoCs to add, update, remove line items, and associate checkout with customer
*/
import React from 'react'
import { graphql, gql, compose, withApollo } from 'react-apollo'
import CheckoutFragment from '../../fragments/checkoutFragment'

/*

Add a Line Item

*/
export const checkoutLineItemsAdd = gql`
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

export const withCheckoutLineItemsAdd = graphql(checkoutLineItemsAdd, {name: 'checkoutLineItemsAdd', alias: 'withCheckoutLineItemsAdd'})

/*

Update a Line Item

*/
export const checkoutLineItemsUpdate = gql`
  mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
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

export const withCheckoutLineItemsUpdate = graphql(checkoutLineItemsUpdate, {name: 'checkoutLineItemsUpdate', alias: 'withCheckoutLineItemsUpdate'})

/*

Remove a Line Item

*/
export const checkoutLineItemsRemove = gql`
  mutation checkoutLineItemsRemove ($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
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

export const withCheckoutLineItemsRemove = graphql(checkoutLineItemsRemove, {name: 'checkoutLineItemsRemove', alias: 'withCheckoutLineItemsRemove'})

/*

Associate a Checkout with a Customer

*/
export const checkoutCustomerAssociate = gql`
  mutation checkoutCustomerAssociate($checkoutId: ID!, $customerAccessToken: String!) {
    checkoutCustomerAssociate(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
      userErrors {
        field
        message
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const withCheckoutCustomerAssociate = graphql(checkoutCustomerAssociate, {name: 'checkoutCustomerAssociate', alias: 'withCheckoutCustomerAssociate'})
