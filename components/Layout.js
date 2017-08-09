import React, {Component} from 'react'
import Cart from './Cart'

const Layout = ({ children, shop, loading }) => 
  <div className="App">
    <header className="App__header">
      <ul className="App__nav">
      </ul>
      <div className="App__title">
        <h1>{shop && shop.name}: React Example</h1>
        <h2>{shop && shop.description}</h2>
      </div>
    </header>
    <div className="Wrapper">
      {children}
    </div>
    <Cart/>
  </div>

export default Layout