import React, {Component} from 'react';
import LineItem from './LineItem';
import withCheckoutId from '../containers/redux/withCheckoutId'
import withIsCartOpen from '../containers/redux/withIsCartOpen'

import withCheckout from '../containers/queries/withCheckout'
import { setCheckoutId } from '../lib/actions'
import { compose } from 'react-apollo'
import branch from 'recompose/branch'
import { openCart, closeCart } from '../lib/actions'

class Cart extends Component {
  
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this)
    this.handleCartClose = this.handleCartClose.bind(this)
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  handleCartClose() {
    this.props.dispatch(closeCart())
  }


  render() {

    if (!this.props.checkout) {
      return <p>Loading…</p>
    }

    let line_items = this.props.checkout.lineItems.edges.map((line_item) => {
      return (
        <LineItem
          removeLineItemInCart={this.props.removeLineItemInCart}
          updateLineItemInCart={this.props.updateLineItemInCart}
          key={line_item.node.id.toString()}
          line_item={line_item.node}
        />
      );
    });

    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Cart</h2>
          <button
            onClick={this.handleCartClose}
            className="Cart__close">
            ×
          </button>
        </header>
        <ul className="Cart__line-items">
          {line_items}
        </ul>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalTax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalPrice}</span>
            </div>
          </div>
          <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
        </footer>
      </div>
    )
  }
}

Cart.defaultProps = {
  isCartOpen: true
}

export default compose(
  withIsCartOpen,
  withCheckoutId,
  branch( // only wrap with withCheckout if checkoutId is available
    props => !!props.checkoutId,
    withCheckout
  )
)(Cart)
