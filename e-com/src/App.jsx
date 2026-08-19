import NavBar from './Layout/NavBar.jsx'
import Shop from './Pages/Shop.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import NoPage from './Pages/NoPage.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Cart from './Pages/Cart.jsx'
import Layout from './Layout/Layout.jsx'
import AdminLayout from './Layout/AdminLayout.jsx'
import AdminDashboard from './Admin/AdminDashboard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ManageProduct from './Admin/ManageProduct.jsx'

function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addtocart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/manage-product" element={<ManageProduct />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard  />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
