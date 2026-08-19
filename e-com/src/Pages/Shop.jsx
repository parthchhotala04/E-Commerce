import Card from "../Components/Card.jsx"
import axios from 'axios'
import { useEffect, useState } from "react"
export default function Shop() {

    const [productList, setProductList] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/products/all")
            setProductList(response.data.products);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mt-3">
            <div className="row col-12 ">
                {
                    productList.map((items) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={items._id}>
                            <Card items={items} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}