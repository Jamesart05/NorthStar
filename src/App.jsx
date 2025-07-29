import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import {  Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ProductList from './components/productList'
import Contact from './pages/contact'
import About from './pages/about'
import Cart from './components/cart'
import Checkout from './pages/checkout'
import ProductDetails from './components/productDetails'
import ScrollToTop from './components/scrollToTop'

function App() {
  [...document.querySelectorAll("*")].filter(el => el.scrollWidth > window.innerWidth)
  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
