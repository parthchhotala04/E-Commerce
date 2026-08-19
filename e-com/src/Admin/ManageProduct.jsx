import axios from 'axios';
import React, { useState } from 'react'

const ManageProduct = () => {
    const [data, setData] = useState({
        productName: "",
        image: "",
        price: "",
        description: ""
    });

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(data);

        const formData = new FormData();
        formData.append("productName", data.productName);
        formData.append("image", data.image);
        formData.append("price", data.price);
        formData.append("description", data.description);
        try {
            const response = await axios.post('http://localhost:3000/api/products/add', formData);
            console.log(response.data);
            alert(response.data.message);
        } catch (error) {
            console.log(error.response?.data || error.message);
        alert(error.response?.data?.message || "Something went wrong");
        }
    }
    return (
        <>
            <div className="container min-vh-100 justify-content-center align-items-center">
                <div className="row card p-4 shadow d">
                    <div className="col-md-12">
                        <h1 className="text-center">Manage Product</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="productName" className="form-label">Product Name</label>
                                <input onChange={(e) => setData({...data, productName: e.target.value})} type="text" className="form-control" id="productName" name="productName" />
                            </div>

                            <div>
                                <label htmlFor="image" className="form-label">Image</label>
                                <input onChange={(e) => setData({...data, image: e.target.files[0 ]})} type="file" className="form-control" id="image" name="image" />
                            </div>

                            <div>
                                <label htmlFor="price" className="form-label">Price</label>
                                <input onChange={(e) => setData({...data, price: e.target.value})} type="text" className="form-control" id="price" name="price" />
                            </div>

                            <div>
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea onChange={(e) => setData({...data, description: e.target.value})} name="description" id="description" className="form-control"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary mt-2" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageProduct;