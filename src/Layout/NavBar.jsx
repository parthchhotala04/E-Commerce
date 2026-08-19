import { Link, useNavigate } from "react-router-dom"
export default function NavBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const handleLogin = () =>{
        navigate('/login');
    }
    const handleRegister = () =>{
        navigate('/register');
    }

    const handleLogout = () =>{
        localStorage.clear();
        navigate("/")
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="#">E-COM</Link>
                {/* Toggle Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"> 
                             <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        {
                            role == "user" &&(
                            <>
                        <li className="nav-item">
                             <Link className="nav-link active" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link active" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link active" to="/about">About</Link>
                        </li>
                            </>
                        )}
                        {
                            role == "admin" &&(
                            <>
                                 <li className="nav-item">
                             <Link className="nav-link active" to="/manage-product">Manage Product</Link>
                        </li>
                            </>
                        )}
                    </ul>

                    {
                        token ?
                        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                        :
                        <>
                        <button onClick={handleLogin} className="btn btn-outline-success me-2" type="submit">Login</button>
                        <button onClick={handleRegister} className="btn btn-success" type="submit">Register</button>
                        </>
                    }
                </div>
            </div>
        </nav>
        </>
    )
}