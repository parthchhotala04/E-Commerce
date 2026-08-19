import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light text-dark py-5 mt-2">
        <div className="container py-5 text-center">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mt-3">
            More Than Shopping. It's an Experience.
          </p>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            Welcome to our online store, where quality products, great value,
            and a seamless shopping experience come together.
          </p>
          <Link to="/shop" className="btn btn-dark btn-lg mt-3">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Shop With Us?</h2>
            <p className="text-muted">
              Everything you need for a better shopping experience.
            </p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="p-4">
                <div className="fs-1"></div>
                <h5 className="fw-bold mt-3">Quality Products</h5>
                <p className="text-muted">
                  Carefully selected products with great quality and value.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4">
                <div className="fs-1"></div>
                <h5 className="fw-bold mt-3">Secure Shopping</h5>
                <p className="text-muted">
                  Shop confidently with a safe and secure platform.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4">
                <div className="fs-1"></div>
                <h5 className="fw-bold mt-3">Fast Delivery</h5>
                <p className="text-muted">
                  We work hard to get your orders delivered safely and quickly.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4">
                <div className="fs-1"></div>
                <h5 className="fw-bold mt-3">Customer Support</h5>
                <p className="text-muted">
                  Our team is always ready to help you when you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Mission</h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "800px" }}
          >
            Our mission is to create a trusted online shopping destination
            where customers can discover great products, enjoy a smooth
            shopping experience, and feel confident with every purchase.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center py-4">
          <h2 className="fw-bold">Find Something You'll Love</h2>

          <p className="lead mt-3">
            Explore our collection and discover your next favorite product.
          </p>

          <Link to="/shop" className="btn btn-light btn-lg mt-3">
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;