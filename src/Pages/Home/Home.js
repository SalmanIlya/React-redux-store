import React, { useEffect } from 'react'
import Heorsection from '../../Components/Heorsection'
import { NavLink } from 'react-router-dom'
import { getProduct } from '../../app/Porduct'
import { useSelector,useDispatch } from 'react-redux'
import "./Style.scss"
const Home = () => {
  const product=useSelector((state)=>state.product.Product)
  const status=useSelector((state)=>state.product.Status)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
   console.log(product);
  return (
    <div className='main-div'>
        <Heorsection />
        <div className='card-items' >
          <div className='text-box container my-5'>
            <h4>Latest Products</h4>
            <button><NavLink className="nav-link">Shop Now</NavLink></button>
          </div>
          <div className=' '>{  status==="pending"? 
          <div className='m-5 d-flex justify-content justify-content-center aline-item-center text-center'><h1>Loading...</h1></div>
           : status==="fulfilled"? <div className='d-flex flex-row flex-wrap  justify-content-center'>{
            product.slice(0,8).map((item)=>{
              return <div class="card m-2 d-flex flex-col justify-content-between text-center " style={{width:"18rem"}}>
              <img class="card-img-top image" src={item.image} alt={item.title}/>
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                
                <a href="#" class="btn btn-primary">Go add to cart</a>
              </div>
            </div>
            })
            }</div>
          :<div></div>}</div>

        </div>
        <div className='poster'>
<div className='box1'></div>
<div className='box2'></div>

        </div>
    </div>
  )
}

export default Home