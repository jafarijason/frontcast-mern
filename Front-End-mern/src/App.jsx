import React from 'react'

import './App.css'
import ProductList from './components/ProductList'

const App = () => {
  const products = [
    { id: 1, title: 'Book1' },
    { id: 2, title: 'Book2' },
    { id: 3, title: 'Book3' },
  ]

  return (
    <div className="container">
      <h2>Book Store</h2>
      <ProductList items={products} />
    </div>
  );
}

export default App;