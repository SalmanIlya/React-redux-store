import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exect element={<h1>home</h1>} />
        <Route path='/about' exect element={<h1>about</h1>} />
        <Route path='/contact' exect element={<h1>contact</h1>} />
        <Route path='/*' exect element={<h1>not found </h1>} />


      </Routes>
    </div>
  )
}

export default Routing