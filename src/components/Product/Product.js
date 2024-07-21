import React from 'react'
import './Product.css'

const Product = ({ name, price, stocked, handleAdd }) => {



    return (
        <div className='product_container'>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{stocked ? 'IN STOCK' : 'SOLD OUT'}</p>
            <button onClick={() => handleAdd()}>Add to Cart</button>
            {/* <button onClick={() => handleAdd(name)}>Add to Cart</button> */}

        </div>
    )
}

export default Product