import { graphql, gql } from 'react-apollo'
import CheckoutFragment from '../fragments/checkoutFragment'

export const createCheckout = gql`
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
`;

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


export function addVariantToCart(variantId, quantity){
  this.props.checkoutLineItemsAdd(
    { variables: { checkoutId: this.state.checkout.id, lineItems:  [{variantId, quantity: parseInt(quantity, 10)}] }
    }).then((res) => {
    this.setState({
      checkout: res.data.checkoutLineItemsAdd.checkout
    });
  });

  this.handleCartOpen();
}

export function updateLineItemInCart(lineItemId, quantity){
  this.props.checkoutLineItemsUpdate(
    { variables: { checkoutId: this.state.checkout.id, lineItems: [{id: lineItemId, quantity: parseInt(quantity, 10)}] }
    }).then((res) => {
    this.setState({
      checkout: res.data.checkoutLineItemsUpdate.checkout
    });
  });
}

export function removeLineItemInCart(lineItemId){
  this.props.checkoutLineItemsRemove(
    { variables: { checkoutId: this.state.checkout.id, lineItemIds: [lineItemId] }
    }).then((res) => {
    this.setState({
      checkout: res.data.checkoutLineItemsRemove.checkout
    });
  });
}

export function associateCustomerCheckout(customerAccessToken){
  this.props.checkoutCustomerAssociate(
    { variables: { checkoutId: this.state.checkout.id, customerAccessToken: customerAccessToken }
    }).then((res) => {
    this.setState({
      checkout: res.data.checkoutCustomerAssociate.checkout,
      isCustomerAuthOpen: false
    });
  });
}