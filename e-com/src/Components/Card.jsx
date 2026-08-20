import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Card({items}) {
    const navigate = useNavigate();
    const addToCart = async(productId) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first");
                navigate("/login");
                return;
            }
            
            const response = await axios.post(
                "http://localhost:3000/api/cart/add",
                {
                    productId: productId,
                    quantity: 1
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            alert("Product added to cart");

            navigate("/cart")

        } catch (error) {
            console.error("Add to cart error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Failed to add product");
        }
    }
    return (
            <div className="card col-12">
                <img width={200} height={200} src={`http://localhost:3000/uploads/${items.image}`} className="card-img-top" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{items.productName}</h5>
                    <p className="card-text">{items.description}</p>
                    <p className="card-text">Rs.{items.price}</p>
                    <Link to="/cart" onClick={() => addToCart(items._id)} className="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
           )
}