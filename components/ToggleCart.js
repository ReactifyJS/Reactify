import React, {Component} from 'react'
import withIsCartOpen from '../containers/redux/withIsCartOpen'
import { toggleCart } from '../lib/actions'

const ToggleCart = ({ dispatch }) => 
  <button onClick={e => {
    e.preventDefault()
    dispatch(toggleCart())
  }}>
    Toggle Cart
  </button>

export default withIsCartOpen(ToggleCart)