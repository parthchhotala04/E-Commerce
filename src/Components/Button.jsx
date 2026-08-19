export default function Button(){
    const style = {
        backgroundColor: "blue",
        col
    }
    retutn(
        <>
            <button> {CSSStyleProperties.btnName} </button>
        </>
    )
}

import { useState } from "react";

export default function AddToCart() {
  const [cartItems, setCartItems] = useState([
    {
      _id: 1,
      name: "Laptop",
      price: 55000,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      _id: 2,
      name: "Headphones",
      price: 2500,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 100 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h3>Your Cart is Empty 🛒</h3>
          <p>Add products to continue shopping.</p>
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <div className="card mb-3 shadow-sm" key={item._id}>
                <div className="row g-0 align-items-center">
                  <div className="col-md-3 text-center p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="col-md-9">
                    <div className="card-body">
                      <h5>{item.name}</h5>
                      <p className="text-success">
                        ₹{item.price.toLocaleString()}
                      </p>

                      <div className="d-flex align-items-center mb-3">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => decreaseQty(item._id)}
                        >
                          -
                        </button>

                        <span className="mx-3 fw-bold">
                          {item.quantity}
                        </span>

                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => increaseQty(item._id)}
                        >
                          +
                        </button>
                      </div>

                      <p>
                        <strong>
                          Total : ₹
                          {(item.price * item.quantity).toLocaleString()}
                        </strong>
                      </p>

                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(item._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="mb-3">Order Summary</h4>

                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <button className="btn btn-success w-100 mt-4">
                  Proceed to Checkout
                </button>

                <button className="btn btn-outline-primary w-100 mt-2">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}