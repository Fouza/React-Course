import React from 'react'
import './Product.css'

const Product = ({ name, price, stock, handleAdd }) => {



    return (
        <div className='product_container'>
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{stock ? 'IN STOCK' : 'SOLD OUT'}</p>
            <button onClick={handleAdd}>Add to cart</button>
        </div>
    )
}

export default Product

