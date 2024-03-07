import React from 'react'

function FilterProduct({category,onClick}) {
  return (
   <div onClick={onClick}>
        <div className="text -3xl p-5 bg-yellow-500 rounded-full cursor-pointer">
        <i class="fa-solid fa-utensils"></i>  
        </div>
        <p className='text-center font-bold my-1 capitalize'>
            {category}
        </p>
   </div>
  )
}

export default FilterProduct