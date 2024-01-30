import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({products,AddtoProduct}) => {
  return (
    <div>
        <h1>Products</h1>
        <Link to="cart"><button>Cart</button></Link>
        <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h1>{product.title}</h1>
          <img src={product.images[0]} className="image" alt="" />
          <button onClick={()=>AddtoProduct(product)} className="button">Add to Cart</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Products
