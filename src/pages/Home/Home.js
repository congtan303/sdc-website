
import React from 'react'
import Banner from '../Banner'
import BoxCommunity from '../BoxCommunity'
import BoxNews from '../BoxNews'
import BoxPartners from '../BoxPartners'
import BoxReason from '../BoxReason'
import BoxTechnology from '../BoxTechnology'
import BoxValue from '../BoxValue'
import BoxProducts from '../BoxProducts'
import BoxLecturers from "../BoxLecturers";

const Home = () => {
  return (
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
  );
};

export default Home;
