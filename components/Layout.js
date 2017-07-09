import React, {Component} from 'react';

const Layout = ({ children, shop, loading }) => 
  <div className="App">
    <header className="App__header">
      <ul className="App__nav">
      </ul>
      <div className="App__title">
        <h1>{shop.name}: React Example</h1>
        <h2>{shop.description}</h2>
      </div>
    </header>
    <div className="Wrapper">
      {children}
    </div>
  </div>

export default Layout