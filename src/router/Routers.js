import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path='*' element={<Home />}></Route>
        
    </Routes>
  )
}

export default Routers