import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Bachkhoa from "../pages/BachKhoaBox/Bachkhoa";
import BackToTopButton from "../pages/BackToTopButton";
import Home from "../pages/Home/Home";
import Hotline from "../pages/Hotline";
import Routers from "../router/Routers";

const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      {/* <Bachkhoa /> */}
      <Footer />
      <BackToTopButton />
      <Hotline />
    </div>
  );
};

export default Layout;
