import { Link } from "react-router-dom";
import Cart from "../Pages/Cart";

export default function Card({items}) {
    const addToCart = async(productId) => {
        try {
            const token = localStorage.getitem("token");
            
            const response = await axios.post(
                "http://localhost:3000/api/cart/add",
                {
                    productId: productId,
                    quantity: 1
                },
                {
                    Headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            alert("product added to cart");
        } catch (error) {
            console.error(error);
            alert("Failed to add product");
        }
    }
    return (
            <div className="card col-12">
                <img width={200} height={200} src={`http://localhost:3000/uploads/${items.image}`} className="card-img-top" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{items.productName}</h5>
                    <p className="card-text">{items.description}</p>
                    <p className="card-text">Rs.{items.price}</p>
                    <Link to="/addtocart" onClick={() => addToCart(product._id)} className="btn btn-primary">Add To Cart</Link>
                </div>
            </div>
           )
}