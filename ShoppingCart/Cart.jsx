import React from 'react'

const Cart = ({cartItems,removeProduct}) => {
  return (
<div className="products">
      {cartItems.map((product) => (
        <div key={product.product.id} className="product">
          <h1>{product.product.title}</h1>
          <h1>Quantity : {product.quantity}</h1>
          <img src={product.product.images[0]} className="image" alt="" />
          <button className='remove' onClick={()=>removeProduct(product)}>Remove</button>
        </div>
      ))}
      </div>
  )
}

export default Cart
