import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../Pages/Home/Home'
import Store from '../Pages/Product Store/Store'
import Login from '../Pages/Login&Signup/Login'
import Register from '../Pages/Login&Signup/Register'
import About from '../Pages/About/About'
import Contacts from '../Pages/Contacts/Contacts'
import Notfound from '../Pages/Notfound'
import Cart from '../Pages/Card/Cart'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exect element={
        <>
        <Navbar/>
        <Home/>
        <Footer/>
        </>} />
        <Route path='/store' exect element={<>
        <Navbar/>
        <Store/>
        <Footer/>
        </>} />
        <Route path='/cart' exect element={<>
        <Navbar/>
        <Cart/>
        <Footer/>
        </>} />
        <Route path='/login' exect element={
          <>
          <Login/>
          </>
        } />
        <Route path='/register' exect element={<Register/>} />
        <Route path='/about' exect element={<>
        <Navbar/>
        <About/>
        <Footer/>
        </>} />
        <Route path='/contact' exect element={<>
        <Navbar/>
        <Contacts/>
        <Footer/>
        </>} />
        <Route path='/*' exect element={<Notfound/>} />


      </Routes>
    </div>
  )
}

export default Routing