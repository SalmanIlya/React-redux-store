import React from 'react'
import Heorsection from '../../Components/Heorsection'
import { NavLink } from 'react-router-dom'
import "./Style.scss"
const Home = () => {
   
  return (
    <div className='main-div'>
        <Heorsection />
        <div className='card-items' >
          <div className='text-box container my-5'>
            <h4>Latest Products</h4>
            <button><NavLink className="nav-link">Shop Now</NavLink></button>
          </div>
          <div></div>

        </div>
    </div>
  )
}

export default Home