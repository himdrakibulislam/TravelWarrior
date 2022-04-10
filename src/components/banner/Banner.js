import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from './banner-4.jpg';
import banner2 from './banner-2.jpg';
import banner3 from './banner-3.jpg';
import './banner.css'
const Banner = () => {
    return (
        <div className='banner-style'>
            <Carousel variant="dark" className='mt-3'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      width="100"
      height="500"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      width="100"
      height="500"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      width="100"
      height="500"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;