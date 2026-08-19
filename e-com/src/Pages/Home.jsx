import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [hello, setHello] = useState([]);

    const fetchHello = async() =>{
        try {
            const response = await axios.get('http://localhost:3000');
            // console.log(response.data);
            setHello(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() =>{
        fetchHello();
    },[]);
    return (
        <div className="container vh-100 d-flex ">
            <div className="row align-items-center w-100">

                {/* Left Content */}
                <div className="col-12 col-md-6 text-center text-lg-start">
                    {/* <h1>{hello}</h1> */}
                    <h1 className="display-4 fw-bold mb-4 ">
                        Discover Stylish Fashion For Every Season
                    </h1>

                    <p className="lead text-muted mb-4">
                       Discover Your Style with Our New Arrivals
                    </p>

                    <Link to="/shop">
                    <button className="btn btn-primary btn-lg">
                        Shop Now
                    </button>
                    </Link>
                    <Link to="/about">
                    <button className="btn btn-outline-primary btn-lg ms-2">
                        Learn More
                    </button>
                    </Link>

                    
                </div>

                {/* Right Image */}
                <div className="col-12 col-md-6 text-center mt-5 mt-lg-0">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxcEVB2EgLM6-p22qC1PfDwysyDrxPAUL_DD4B7ZywQ&s=10"
                        alt="Fashion"
                        className="img-fluid rounded "
                        style={{ maxHeight: "500px", objectFit: "cover" }}
                    />
                </div>

            </div>
        </div>
    );
}