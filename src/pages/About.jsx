import React from 'react'
import about from '../assest/about-img.jpg'
import '../pages/payment.css'
import { Row } from 'react-bootstrap'
import '../pages/home.css'


function About() {
  return (
    <div className='pt-24 mb-3'>
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

      <Row className='flex justify-center m-auto mt-4 gap-3 pb-24'>
        <div className="hr col-3">
          <hr className=''/>
          <h1 className='hm mt-3'>WE ARE TRUSTED</h1>
          <p className='pg mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="hr col-3"><hr />
        <h1 className='hm mt-3'>WE ARE PROFESSIONAL</h1>
        <p className='pg mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
        <div className="hr col-3"><hr />
        <h1 className='hm mt-3'>WE ARE EXPERT</h1>
        <p className='pg mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Row>
      
      
    </div>
  )
}

export default About