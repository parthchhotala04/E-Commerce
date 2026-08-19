import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [inputZip, setInputZip] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const userData = {
            name, email, password, address, address2, city, state, inputZip
        }
        console.log(userData);
       try {
        const response = await axios.post('http://localhost:3000/api/auth/register',
            userData
        );
        console.log(response.data);
        alert(response.data.message);
        navigate("/login");
       } catch (error) {
        console.log(error);
        alert(error.response.data.message);
       }
    }


    return (
        <div className="container py-3 min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow w-75 mt-">

                <h1 className="text-center mb-4">Register</h1>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" name="name" id="name" placeholder="Enter your Full name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" name="email" id="email" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" name="password" id="password" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" onChange={(e) => setAddress(e.target.value)} className="form-control" name="address" id="address" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="address2" className="form-label">Address 2</label>
                        <input type="text" onChange={(e) => setAddress2(e.target.value)} className="form-control" name="address2" id="address2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" onChange={(e) => setCity(e.target.value)} className="form-control" name="city" id="city" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="state" className="form-label">State</label>
                        <select name="state" id="state" onChange={(e) => setState(e.target.value)} className="form-select">
                            <option defaultValue={"Gujrat"}>Choose...</option>
                            <option>Gujrat</option>
                            <option>Maharashtra</option>
                            <option>Madhya Pradesh</option>
                            <option>Rajsthan</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" onChange={(e) => setInputZip(e.target.value)} className="form-control" name="inputZip" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register