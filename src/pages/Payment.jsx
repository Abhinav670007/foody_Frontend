import React from 'react'
import '../pages/payment.css'
import { toast } from 'react-toastify'

function Payment() {

  const submit=(e)=>{
    e.preventDefault()
    toast.success('Payment Success ')
  }
  return (
    <div className='pt-20'>

<div className="container">
  <form action="#" onSubmit={submit}>
    <div className="row">
      <div className="col">
        <h3 className="title">Billing Address</h3>
        <div className="inputBox">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required=""
          />
        </div>
        <div className="inputBox">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email address"
            required=""
          />
        </div>
        <div className="inputBox">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            required=""
          />
        </div>
        <div className="inputBox">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" placeholder="Enter city" required="" />
        </div>
        <div className="flex">
          <div className="inputBox">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              placeholder="Enter state"
              required=""
            />
          </div>
          <div className="inputBox">
            <label htmlFor="zip">Zip Code:</label>
            <input type="number" id="zip" placeholder="123 456" required="" />
          </div>
        </div>
      </div>
      <div className="col">
        <h3 className="title">Payment</h3>
        <div className="inputBox">
          <label htmlFor="name">Card Accepted:</label>
          <div className='flex'>
            <img src="https://w7.pngwing.com/pngs/242/982/png-transparent-visa-logo-credit-card-e-commerce-visa-payment-mastercard-visa-company-text-service.png" alt="credit/debit card image" />
            <img src="https://pngimg.com/d/mastercard_PNG23.png" alt="credit/debit card image" />
            <img src="https://w7.pngwing.com/pngs/191/51/png-transparent-google-pay-or-tez-hd-logo-thumbnail.png" alt="credit/debit card image" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="credit/debit card image" />

          </div>

        </div>
        <div className="inputBox">
          <label htmlFor="cardName">Name On Card:</label>
          <input
            type="text"
            id="cardName"
            placeholder="Enter card name"
            required=""
          />
        </div>
        <div className="inputBox">
          <label htmlFor="cardNum">Credit Card Number:</label>
          <input
            type="text"
            id="cardNum"
            placeholder="1111-2222-3333-4444"
            maxLength={19}
            required=""
          />
        </div>
        <div className="inputBox">
          <label htmlFor="">Exp Month:</label>
          <select name="" id="">
            <option value="">Choose month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="flex">
          <div className="inputBox">
            <label htmlFor="">Exp Year:</label>
            <select name="" id="">
              <option value="">Choose Year</option>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
              <option value={2027}>2027</option>
            </select>
          </div>
          <div className="inputBox">
            <label htmlFor="cvv">CVV</label>
            <input type="number" id="cvv" placeholder={1234} required="" />
          </div>
        </div>
      </div>
    </div>
    <input onClick={submit}
      type="submit"
      defaultValue="Proceed to Checkout"
      className="submit_btn"
    />
  </form>
</div>


    </div>
  )
}

export default Payment