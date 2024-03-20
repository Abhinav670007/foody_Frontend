import React from 'react'
import '../pages/contact.css'
function Contact() {

  const handle=()=>{
    
  }
  return (
  //   <section className="contact-section w-75 m-auto">
  //  <div className='border rounded bg-amber-400'>
  //     <h2 className='text-2xl'>Contact Us</h2>
  //     <div className="contact-form">
  //       <form>
  //         <div className="form-group">
  //           <label htmlFor="name">Name:</label>
  //           <input type="text" id="name" name="name" required />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="email">Email:</label>
  //           <input type="email" id="email" name="email" required />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="message">Message:</label>
  //           <textarea id="message" name="message" required></textarea>
  //         </div>
  //         <button onClick={handle} className='items-center' type="submit">Submit</button>
  //       </form>
  //     </div>
  //  </div>
  // </section>
      
  <div className="contact-box-main">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-sm-12">
        <div className="contact-form-right">
          <h1 className='text-2xl'>GET IN TOUCH</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio
            justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac
            ex venenatis ultricies at cursus mauris.
          </p>
          <form id="contactForm">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required=""
                    data-error="Please enter your name"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Email"
                    id="email"
                    className="form-control"
                    name="name"
                    required=""
                    data-error="Please enter your email"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="name"
                    placeholder="Subject"
                    required=""
                    data-error="Please enter your Subject"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message"
                    rows={4}
                    data-error="Write your message"
                    required=""
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="submit-button text-center">
                  <button className="btn hvr-hover" id="submit" type="submit">
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="contact-info-left">
          <h2>CONTACT INFO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            urna diam, maximus ut ullamcorper quis, placerat id eros. Duis
            semper justo sed condimentum rutrum. Nunc tristique purus turpis.
            Maecenas vulputate.{" "}
          </p>
          <ul>
            <li>
              <p>
                <i className="fas fa-map-marker-alt" />
                Address: Michael I. Days 9000 <br />
                Preston Street Wichita,
                <br /> KS 87213{" "}
              </p>
            </li>
            <li>
              <p>
                <i className="fas fa-phone-square" />
                Phone: <a href="tel:+1-888705770">+1-888 705 770</a>
              </p>
            </li>
            <li>
              <p>
                <i className="fas fa-envelope" />
                Email:{" "}
                <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



    )
}

export default Contact