/*

HoC that reads an existing Checkout object from the store based on its id

NOT USED

*/
import React from 'react'
import { graphql, gql, compose, withApollo } from 'react-apollo'
import CheckoutFragment from '../../fragments/checkoutFragment'
import withCheckoutId from './withCheckoutId'

export const readCheckout = WrappedComponent => {
  return class extends React.Component{
    render() {
      if (this.props.checkoutId) {
        const checkout = this.props.client.readFragment({
          id: this.props.checkoutId, // `id` is any id that could be returned by `dataIdFromObject`.
          fragment: CheckoutFragment
        })
        return <WrappedComponent checkout={checkout} {...this.props} />
      } else {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}

export default compose(
  withCheckoutId,
  readCheckout,
)