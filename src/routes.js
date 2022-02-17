import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contact } from './Components/Pages/Contact/Contact'
import { Home } from './Components/Pages/Home/Home'

export const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}
