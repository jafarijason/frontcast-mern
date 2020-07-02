import React, { useState } from 'react'

import './NewProduct.css'

const NewProduct = (props) => {
    const [userInput, setUserInput] = useState('')
    const addProductHandler = (event) => {
        event.preventDefault()
        const newProduct = {
            id: Math.floor(Math.random() * 100000),
            title: userInput
        }
        props.onAddProduct(newProduct)
        setUserInput('')
    }

    const textChaneHandler = event => {
        setUserInput(event.target.value)
    }

    return (
        <div className="new-product">
            <form onSubmit={addProductHandler} >
                <input type="text" name="" id="" value={userInput} onChange={textChaneHandler} />
                <button>Add Product</button>
            </form>
        </div>
    );
}

export default NewProduct;