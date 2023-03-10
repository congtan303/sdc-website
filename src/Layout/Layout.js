
import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import BackToTopButton from '../pages/Home/BackToTopButton'
import Home from '../pages/Home/Home'
import Hotline from '../pages/Hotline'
import Routers from '../router/Routers'
import DetailNews from '../pages/PageDetailNews/DetailNews'

const Layout = () => {
  return (
    <div>
      {/* <DetailNews /> */}
        <Header />
        <Home />
        <Footer />
        <BackToTopButton />
        <Hotline/>
    </div>
  )
}

    
   
  

export default Layout;
