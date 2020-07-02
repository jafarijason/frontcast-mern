import React from 'react'

import './App.css'
import ProductList from './components/ProductList'

const App = () => {
  return ( 
    <div className="container">
      <h2>Book Store</h2>
      <ProductList />
    </div>
   );
}
 
export default App;