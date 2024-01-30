import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from "./products";
import Cart from "./Cart";
export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems,setCartItems]=useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  },[]);
  const AddtoProduct=(product)=>{
    const itemExist=cartItems.find((item)=> item.product.id===product.id);
    if(itemExist){
      const latestCart=cartItems.map((item)=>(
        item.product.id===product.id ? {...item,quantity:item.quantity + 1}: item
      ));
      setCartItems(latestCart)
    }else{
      setCartItems([...cartItems,{product:product,quantity:1}]);
    }
  }
  const removeProduct=(product)=>{
    const filterItems=cartItems.filter((item)=>item.product.id !== product.product.id);
    setCartItems(filterItems);
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products products={products} AddtoProduct={AddtoProduct} />} />
      <Route path="/cart" element={<Cart cartItems={cartItems} removeProduct={removeProduct} />} />
      </Routes>
    </BrowserRouter>
  );
}
