import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllProduct from '../components/AllProduct'
import { addCartItems } from '../redux/productSlice'
import { toast } from 'react-toastify'

function Menu() {

  const {filterby} = useParams()
  const productData = useSelector(res=>res.product.productList)
  const dispatch = useDispatch() 

  const productDisplay = productData.filter((res) => res._id === filterby)[0];

  const check=()=>{  if(sessionStorage.getItem('isLogin')){
    dispatch(addCartItems(productDisplay))
    }else{
      toast.error("login to Continue")
    }}



  return (
    <div className='bg-gray-200 pt-5 '>
      <div className=' p-5 md:p-2 shadow w-75 m-auto'>
        <div className="w-full max-w-4xl  m-auto md:flex bg-white px-2">
          <div className="max-w-lg  overflow-hidden">
            <img src={productDisplay.image} className='hover:scale-105 transition-all' alt="" />
          </div>
          <div className="">
          <h3 className='font-semibold text-slate-600 text-center capitalize  text-2xl md:text-4xl'>{productDisplay.name}</h3>
          <p className='text-center text-slate-500  font-medium text-2xl'>{productDisplay.category}</p>
          <p className="text-center font-bold md:text-2xl">
              <span className="text-red-500">₹</span>
              <span>{productDisplay.price}</span>
            </p>  
            <div className="gap-3 md:flex ">
            <button className='bg-green-500 py-1 mt-2 rounded hover:bg-yellow-400 px-5 w-full'>Buy</button>    
            <button onClick={check} className='bg-green-500 py-1  mt-2 rounded hover:bg-yellow-400 px-5 w-full'>Add Cart</button>    
            </div>   
            <div className="">
              <p className='text-slate-600 font-medium'>Description : </p>
              <p>{productDisplay.description}</p>
              </div> 
          </div>
        </div>
      </div>
      <div>
        <AllProduct/>
      </div>
    </div>
  )
}

export default Menu