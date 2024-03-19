import React from 'react'

function HomeCard({name,image,category,price,loading}) {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px] mt-3">
      {
        name ? (
        <>
                    <div className='w-40 min-h-[150px]'>
            <img className='h-full w-full' src={image} alt="" />
        </div>
        <h3 className='font-semibold text-slate-600 text-center capitalize text-lg' style={{fontSize:"20px"}}>{name}</h3>
        <p className='text-center text-slate-500  font-medium'>{category}</p>
        <p className="text-center font-bold">
            <span className="text-red-500">₹</span>
            <span>{price}</span>
          </p>       
        </>
        )
        :
        <div className="flex justify-center items-center w-full  min-h-[250px]">
        <p>{loading}</p>
      </div>
      }
    </div>
  )
}

export default HomeCard