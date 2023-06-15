import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand mx-5" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse mx-5 " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/">Home </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/store">Store </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/cart">Cart</NavLink>
        </li> <li className="nav-item "></li>
         <li className="nav-item ">

          <NavLink className="nav-link" to="/about">About </NavLink>
        </li> <li className="nav-item ">
          <NavLink className="nav-link" to="/contact">Contact </NavLink>
        </li>
        
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <button className="btn btn-outline-success m-2 my-sm-0" type="submit"><NavLink className="nav-link" to={"/login"}> SignIn </NavLink> </button>
        <button className="btn btn-outline-success m-2 my-sm-0" type="submit"><NavLink className="nav-link" to={"/register"}>SignUp </NavLink>  </button>

      </form>
    </div>
  </nav></div>
  )
}

export default Navbar