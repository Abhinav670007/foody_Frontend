import React from 'react'
import '../pages/payment.css'
function Contact() {

  const handle=()=>{
    
  }
  return (
    <section className="contact-section w-75 m-auto">
   <div className='border rounded bg-amber-400'>
      <h2 className='text-2xl'>Contact Us</h2>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button onClick={handle} className='items-center' type="submit">Submit</button>
        </form>
      </div>
   </div>
  </section>
    )
}

export default Contact