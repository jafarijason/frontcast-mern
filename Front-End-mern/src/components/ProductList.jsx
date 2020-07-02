import React from 'react';

import './ProductList.css'

const ProductList = props => {

    return (
        <ul className="product-list">
            {
                props.items.map((item) => (<li key={item.id}> {item.title} </li>))
            }
        </ul>
    );
}

export default ProductList;