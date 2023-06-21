import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='main-nav d-flex flex-row justify-content-between'>
      <div className='logo m-3'>Logo</div>
      <div className='navmanue'>
        <ul className='navbar-nav d-flex flex-row justify-content-between'>
          <li className='nav-item m-2'><NavLink className={"nav-link"} to={"/"}>Home</NavLink></li>
          <li className='nav-item m-2'><NavLink className={"nav-link"} to={"/store"}>Store</NavLink></li><li className='nav-item m-2'><NavLink className={"nav-link"} to={"/cart"}>Card</NavLink></li><li className='nav-item m-2'><NavLink className={"nav-link"} to={"/about"}>About</NavLink></li><li className='nav-item m-2'><NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink></li>

        </ul>
      </div>
      <div>
      <button className='btn btn-warning m-2'><NavLink className="nav-link" to={"/login"}>Login</NavLink></button>
          <button className='btn btn-warning m-2  '><NavLink className={"nav-link"} to={"/register"}>Register</NavLink></button>
      </div>

      </div>
    </div>
  )
}

export default Navbar