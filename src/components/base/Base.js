import React from 'react'
import Header from '../hreader/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

function Base() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Base