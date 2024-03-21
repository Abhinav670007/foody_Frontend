import React from 'react'

function FilterProduct({category,onClick}) {
  return (
   <div onClick={onClick}>
        <div className="text -3xl p-5 bg-yellow-400 hover:bg-yellow-600 rounded-full cursor-pointer mt-4">
        <i class="fa-solid fa-utensils"></i>  
        </div>
        <p className='text-center font-bold my-1 capitalize'>
            {category}
        </p>
   </div>
  )
}

export default FilterProduct