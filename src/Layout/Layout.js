
import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import BackToTopButton from '../pages/BackToTopButton'
import Home from '../pages/Home/Home'
import Routers from "../router/Routers";


const Layout = () => {
  return (
    <div>
        <Header />
        <Home />
        <Footer />
        <BackToTopButton />
    </div>
  )
}

    
   
  

export default Layout;