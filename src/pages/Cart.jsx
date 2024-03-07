import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct';
import cartImage from "../assest/empty.gif"
import { Link } from 'react-router-dom';

function Cart() {
    const cartitem = useSelector((state)=>state.product.cartItem)
    console.log(cartitem);
   const totalPrice = cartitem.reduce((acc,curr)=>acc + parseInt(curr.total),0)
   const totalQty = cartitem.reduce((acc,curr)=>acc + parseInt(curr.qty),0)

  return (
    <div className=''>
      <div className='p-2 md:p-4 '>
        
          <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart items</h2>
          {cartitem[0] ?
          <div className="my-4 flex gap-3">
  
              {/* display cart items */}
  
              <div className="w-full max-w-3xl mt-3 ">
                {
                  cartitem.map(res=>{
                    return(
                      <CartProduct 
                      key={res._id}
                      id={res._id}
                      name={res.name}
                      image={res.image}
                      category={res.category}
                      qty={res.qty}
                      total={res.total}
                      price={res.price}/>
                    )
                  })
               
                }
              </div>
             
                  {/* total cart item */}
              <div className="w-full max-w-sm  ml-auto mt-3">
                <h2 className='bg-red-500 text-white p-2 text-lg'>Summary</h2>
                <div className='flex w-full py-2 text-lg border-b'>
                  <p>Total Qty</p>
                  <p className='ml-auto w-32 font-bold'>{totalQty}</p>
                </div>
                <div className='flex w-full py-2 text-lg border-b'>
                  <p>Total Price</p>
                  <p className='ml-auto w-32 font-bold'>{totalPrice}</p>
                </div>
               <Link to={"/payment"}> <button className='bg-green-400 w-full p-2 text-white'>Payment</button></Link>
              </div>
          </div>
          :
          <>
          <div className="flex w-full justify-center items-center flex-col ">
            <img src={cartImage} alt=""  className='w-full max-w-sm '/>
            <p className='text-slate-500 text-3xl font-bold'>Empty cart</p>
          </div>
          </>
         
          }
      </div>
    </div>
  )
}

export default Cart