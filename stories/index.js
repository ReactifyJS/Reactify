import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

// import Cart from '../components/Cart.js';
import CustomerAuth from '../components/CustomerAuth.js';
import LineItem from '../components/LineItem.js';
import { Product } from '../components/Product.js';
import VariantSelector from '../components/VariantSelector.js';

import './storybook.css';

import {emptyCheckout, fullCheckout} from './data/checkout.js';
import sampleProduct from './data/product.js';
import sampleLineItem from './data/lineItem.js';
import sampleOption from './data/option.js';

// storiesOf('Cart', module)
//   .add('empty', () => <Cart checkout={emptyCheckout} isCartOpen={true} />)
//   .add('full', () => <Cart checkout={fullCheckout} isCartOpen={true} />)

// storiesOf('CustomerAuth', module)
//   .add('default', () => <CustomerAuth/>)

storiesOf('LineItem', module)
  .add('default', () => <LineItem line_item={sampleLineItem} />)

storiesOf('Product', module)
  .add('default', () => <Product product={sampleProduct} />)

storiesOf('VariantSelector', module)
  .add('default', () => <VariantSelector option={sampleOption} />)