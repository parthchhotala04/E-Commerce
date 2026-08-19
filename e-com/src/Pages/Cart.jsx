import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const fetchCart = async() =>{
    try {
      const response = await axios.get("http://localhost:3000/api/cart/all");
      setCartItems(response.data.cart)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="container">

      <h2 className="text-center mt-2">Shopping Cart</h2>

      {cartItems.lenght === 0 ?(

        
        <div className="text-center">
          <h3>Your cart is Empty</h3>
          <p>Add products to continue shopping</p>
        </div>
      ): (
        <div className="">
          {cartItems.map((item)=>(
            <div className="card" key={item._id}>
              <div>

              <img src={item.image} alt={item.name} />
              </div>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.quantity}</div>
            </div>
          ))}
        </div>
      )
      }
    </div>
  )
}

export default AddToCart