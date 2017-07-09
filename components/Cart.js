import React, {Component} from 'react';
import LineItem from './LineItem';
import withCheckout from '../containers/withCheckout.js';

class Cart extends Component {
  constructor(props) {
  super(props);

    this.openCheckout = this.openCheckout.bind(this);
    this.state = {
      checkout: { lineItems: { edges: [] } }
    }
  }

  componentWillMount() {
    this.props.createCheckout(
      { variables: { input: {
        allowPartialAddresses: true,
        shippingAddress: {city: 'Toronto', province: 'ON', country: 'Canada'}
        }}
      }).then((res) => {
      this.setState({
        checkout: res.data.checkoutCreate.checkout
      });
    });
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let line_items = this.state.checkout.lineItems.edges.map((line_item) => {
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
            onClick={this.props.handleCartClose}
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
              <span className="pricing">$ {this.state.checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.state.checkout.totalTax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.state.checkout.totalPrice}</span>
            </div>
          </div>
          <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
        </footer>
      </div>
    )
  }
}

export default withCheckout(Cart);
