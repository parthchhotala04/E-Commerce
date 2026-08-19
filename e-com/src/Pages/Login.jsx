import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const userData = {
             email, password
        }
        console.log(userData);
       try {
        const response = await axios.post('http://localhost:3000/api/auth/login',
            userData
        );
        console.log(response.data);
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("address", response.data.address);
        localStorage.setItem("role", response.data.role);
        //localStorage.setItem("token", response.data.token);
        navigate("/");
       } catch (error) {
        console.log(error);
        alert(error.response.data.message);
       }
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}