
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import '../styles/Banner.css'

import banner1 from '../../src/assets/image/banner/banner1.jpg'
import banner2 from '../../src/assets/image/banner/banner2.jpg'
import banner3 from '../../src/assets/image/banner/banner3.jpg'
const Banner = () => {
  return (

    <section className='section-banner'>
      <MDBCarousel showControls fade >
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src={banner1}
          alt='...'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src={banner2}
          alt='...'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src={banner3}
          alt='...'
        />
      </MDBCarousel>
    </section>

  )
}




export default Banner;
