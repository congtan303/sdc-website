import React from "react";
import Banner from "./Banner";
import BoxCommunity from "./BoxCommunity";
import BoxNews from "./BoxNews";
import BoxPartners from "./BoxPartners";
import BoxReason from "./BoxReason";
import BoxTechnology from "./BoxTechnology";
import BoxValue from "./BoxValue";
import BoxProducts from "./BoxProducts";
import BoxLecturers from "./BoxLecturers";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackToTopButton from "./BackToTopButton";
import Hotline from "../Hotline";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <BoxReason />
        <BoxValue />
        <BoxLecturers />
        <BoxCommunity />
        <BoxTechnology />
        <BoxPartners />
        <BoxNews />
        <BoxProducts />
      </main>

      <Footer />
      <BackToTopButton />
      <Hotline />
    </  >
  );
};

export default Home;
