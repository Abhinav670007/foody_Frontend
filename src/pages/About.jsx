import React from 'react'
import about from '../assest/about-img.jpg'
import '../pages/payment.css'
import { Row } from 'react-bootstrap'
import '../pages/home.css'


function About() {
  return (
    <div className='pt-24 mb-3'>
      {/* <div className='pt-18 w-full grid grid-cols-1 md:grid-cols-2' controls autoPlay loop muted>
      <video  className="video h-screen w-full object-cover" controls autoPlay loop muted>
            <source src={veg} type="video/mp4" />
        </video>
        <div className='pt-64 bg-gradient-to-r from-green-200 to-white-800'>
          <p className='about text-3xl text-center text-black-200'> Our commitment to organic farming practices means that our vegetables are free from harmful pesticides and chemicals vibrant bell peppers, each vegetable is bursting with freshness straight from our fields to your table.</p>
          </div>
      </div> */}

      <Row className='justify-center m-auto'>
          <div className="col-4">
              <img src={about} alt="" />
          </div>
          <div className="col-4">
            <p className='about text-3xl font-bold'>WE ARE FRESHSHOP</p>
              <p className='about1 mt-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volu dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat <br /> voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui <br /> in ea voluptate velit essmolestiae consequatur.Neque porro quisquam est, qui dolorem ipsum  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo.</p>

              <button className='bg-green-500 p-2 mt-2 text-white'>Read More</button>
          </div>
      </Row>
      
      
    </div>
  )
}

export default About