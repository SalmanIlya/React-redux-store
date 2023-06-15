import React from 'react'
import "./Style.scss"
import { NavLink } from 'react-router-dom'
const Heorsection = (props) => {
    const data=props.data
  return (
    <div className="herosection">
   
   <h3>hello world</h3>
   <button  className="btn btn-outline-success m-2 my-sm-0"><NavLink to={"/store"} className="nav-link">Shop Now</NavLink> </button>
    </div>
  )
}

export default Heorsection