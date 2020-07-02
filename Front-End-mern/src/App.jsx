import React, { useState } from 'react'

import './App.css'
import ProductList from './components/ProductList/ProductList'
import NewProduct from './components/NewProduct/NewProduct'

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Book1' },
    { id: 2, title: 'Book2' },
    { id: 3, title: 'Book3' },
  ])


  const addNewProductHandler = (newProduct) => {
    setProducts((prevProduct) => {
      return prevProduct.concat(newProduct)
    })
  }

  return (
    <div className="container">
      <h2>Book Store</h2>
      <NewProduct onAddProduct={addNewProductHandler} />
      <ProductList items={products} />

    </div>
  );
}

export default App;