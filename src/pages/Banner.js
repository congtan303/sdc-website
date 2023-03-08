
import React from 'react';
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';
import '../styles/Banner.css'
import banner1 from '../../src/assets/image/banner/banner1.jpg'
import banner2 from '../../src/assets/image/banner/banner2.jpg'
import banner3 from '../../src/assets/image/banner/banner3.jpg'

const Banner = () => {
  const banners = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    }
  ]
  return (
    <section className='section-banner'>
      <MDBCarousel showControls fade >
        {banners && banners.map(banner => (
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={banner.id}
            src={banner.image}
            alt='...'
            key={banner.id}
          />
        ))}
      </MDBCarousel>
    </section>

  )
}




export default Banner;
