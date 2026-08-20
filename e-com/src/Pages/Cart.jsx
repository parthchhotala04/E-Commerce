import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:3000/api/cart/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Cart Response:", response.data);

      setCart(response.data.cart);
    } catch (error) {
      console.error(
        "Error fetching cart:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">
            Loading...
          </span>
        </div>

        <p className="mt-2">
          Loading cart...
        </p>
      </div>
    );
  }

  // Empty cart
  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="container text-center mt-5">
        <div className="py-5">

          <h1>🛒</h1>

          <h2>
            Your Cart is Empty
          </h2>

          <p className="text-muted">
            You haven't added any products to your cart yet.
          </p>

          <Link
            to="/shop"
            className="btn btn-primary mt-3"
          >
            Continue Shopping
          </Link>

        </div>
      </div>
    );
  }

  // Total number of products
  const totalItems = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const totalPrice = cart.items.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="fw-bold">
          Shopping Cart
        </h2>

        <span className="text-muted">
          {totalItems} Items
        </span>

      </div>

      <div className="row">

        {/* Cart Products */}
        <div className="col-lg-8">

          {cart.items.map((item) => {

            const product = item.product;

            const itemTotal =
              product.price * item.quantity;

            return (
              <div
                className="card mb-3 shadow-sm"
                key={product._id}
              >

                <div className="card-body">

                  <div className="row align-items-center">

                    {/* Image */}
                    <div className="col-md-2">

                      <img
                        src={`http://localhost:3000/uploads/${product.image}`}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />

                    </div>

                    {/* Product Details */}
                    <div className="col-md-4">

                      <h5 className="fw-semibold">
                        {product.name}
                      </h5>

                      <p className="text-muted mb-0">
                        ₹{product.price}
                      </p>

                    </div>

                    {/* Quantity */}
                    <div className="col-md-3">

                      <div className="d-flex align-items-center">

                        <button
                          className="btn btn-outline-secondary"
                          disabled
                        >
                          −
                        </button>

                        <span className="mx-3 fw-bold">
                          {item.quantity}
                        </span>

                        <button
                          className="btn btn-outline-secondary"
                          disabled
                        >
                          +
                        </button>

                      </div>

                    </div>

                    {/* Item Total */}
                    <div className="col-md-3 text-end">

                      <h5 className="fw-bold">
                        ₹{itemTotal}
                      </h5>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Summary */}
        <div className="col-lg-4">

          <div className="card shadow-sm">

            <div className="card-body">

              <h4 className="fw-bold mb-4">
                Cart Summary
              </h4>

              <div className="d-flex justify-content-between mb-3">

                <span>
                  Total Items
                </span>

                <strong>
                  {totalItems}
                </strong>

              </div>

              <div className="d-flex justify-content-between mb-3">

                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{totalPrice}
                </strong>

              </div>

              <div className="d-flex justify-content-between mb-3">

                <span>
                  Delivery
                </span>

                <strong className="text-success">
                  FREE
                </strong>

              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">

                <h5 className="fw-bold">
                  Total
                </h5>

                <h5 className="fw-bold">
                  ₹{totalPrice}
                </h5>

              </div>

              <button className="btn btn-primary w-100">
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Cart;