import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementQty, deleteCartItems, incrementQty } from '../redux/productSlice'

function CartProduct({id,name,image,category,qty,total,price}) {
   
    const dispatch  = useDispatch()


  return (
    <div className='bg-slate-200 p-2 flex gap-3 rounded border border-slate mt-1'>
        <div className="bg-white p-3  rounded overflow-hidden">
            <img src={image} alt="" className='h-28 w-36 object-cover' />
        </div>
       <div>
            <div className="gap-1 w-full">
              <div className='flex justify-between'>
                  <h3 className='font-semibold text-slate-600 text-center capitalize  text-lg md:text-xl'>{name}</h3>
                    <div className="items-stretch" onClick={()=>dispatch(deleteCartItems(id))}>
                    <i class="fa-solid fa-trash"></i>
                    </div>
              </div>
              <p className='text-center text-slate-500  font-medium'>{category}</p>
              <p className="text-center font-bold ">
                  <span className="text-red-500">₹</span>
                  <span>{price}</span>
                </p> 
    
               <div className='flex justify-between '>
                    <div className="flex gap-3 items-center">
                    <button onClick={()=>dispatch(incrementQty(id))} className='bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 px-3'>+</button>    
                    <p className='fony-semibold'>{qty}</p>
                    <button onClick={()=>dispatch(decrementQty(id))} className='bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 px-3'>-</button>    
                    </div> 
                    <div className="flex items-center gap-2 font-bold ">
                        <p className='ms-3'>Total</p>
                        <p>{total}</p>
                    </div>
               </div>
              </div>
       </div>
    </div>
  )
}

export default CartProduct