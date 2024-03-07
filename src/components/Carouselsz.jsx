import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carouselsz() {
  return (
    <div className='p-2'>
          <Carousel className='shadow-3xl  '>
      <Carousel.Item className=''>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/0f84f4e54186a870699e9cd1c8df692e" alt=""className='w-full' style={{height:"42rem"}}/>
        <Carousel.Caption>
          {/* <h3></h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/bbcd2b79065eac268a17166a53aa81d6" alt="" className='w-full' style={{height:"42rem"}}/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/bbcd2b79065eac268a17166a53aa81d6" alt=""className='w-full' style={{height:"42rem"}} />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
    </div>
  )
}

export default Carouselsz