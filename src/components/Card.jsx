import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {addCartItems} from "../redux/productSlice"
import { toast } from 'react-toastify'

function Card({image,name,price,category,id}) {
  const dispatch = useDispatch() 
  const AddToCart=()=>{
    dispatch(addCartItems({
      _id:id,
      name,
      price,
      category,
      image
    }))
  }

    const check=()=>{  if(sessionStorage.getItem('isLogin')){
        AddToCart()
        }else{
          toast.error("login to Continue")
        }}
  return (
    <div className='h-64 mt-4'>
      <div className='w-full min-w-[200px] max-w-[200px]  max-h-[250px] bg-white hover:bg-gradient-to-r from-green-500 to-green-800 py-5 px-4 cursor-pointer flex flex-col rounded shadow'>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
          <div className="h-14 flex flex-col justify-center items-center">
              <img className='h-full bg-blend-color-burn' src={image}  />
          </div>
          <h3 className='font-semibold text-slate-600 text-center capitalize text-lg mt-2 text-nowrap'>{name}</h3>
          <p className=' text-slate-500  font-medium'>{category}</p>
          <p className=" font-bold">
              <span className="text-red-500">₹</span>
              <span>{price}</span>
            </p> 
            </Link> 
            <button onClick={check} className='bg-yellow-500 py-1 mt-2 rounded-pill hover:bg-green-600'>Add Cart</button>    
      </div>
    </div>

  )
}

export default Card