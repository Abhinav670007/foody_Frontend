import React from 'react'
import veg from '../assest/fresh.mp4'
import '../pages/payment.css'


function About() {
  return (
    <div>
      <div className='pt-18 w-full grid grid-cols-1 md:grid-cols-2' controls autoPlay loop muted>
      <video  className="video h-screen w-full object-cover" controls autoPlay loop muted>
            <source src={veg} type="video/mp4" />
        </video>
        <div className='pt-64 bg-gradient-to-r from-green-200 to-white-800'>
          <p className='about text-3xl text-center text-black-200'> Our commitment to organic farming practices means that our vegetables are free from harmful pesticides and chemicals vibrant bell peppers, each vegetable is bursting with freshness straight from our fields to your table.</p>
          </div>
      </div>
      
    </div>
  )
}

export default About