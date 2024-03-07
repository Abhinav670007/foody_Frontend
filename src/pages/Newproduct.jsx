import React, { useState } from 'react'
// import { toast } from 'react-hot-toast'
// import {BsCloudUpload} from "react-icons/bs"
import { ImagetoBase64 } from '../utility/ImagetoBase64'


function Newproduct() {
    const [data,setData] = useState({
        name : "",
        category : "",
        image : "",
        price : "",
        description : ""
      })
    
      const handleOnChange = (e)=>{
        const {name,value} = e.target
    
        setData((preve)=>{
            return{
              ...preve,
              [name] : value
            }
        })
    
      }
    
      const uploadImage = async(e)=>{
          const data = await ImagetoBase64(e.target.files[0])
          // console.log(data)
    
          setData((preve)=>{
            return{
              ...preve,
              image : data
            }
          })
      }
    
      const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(data)
    
        const {name,image,category,price} = data
    
        if(name && image && category && price){
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })
      
          const fetchRes =  await fetchData.json()
      
          console.log(fetchRes)
          alert(fetchRes.message);
    
          setData(()=>{
            return{
              name : "",
              category : "",
              image : "",
              price : "",
              description : ""
            }
          })
        }
        else{
          alert("Enter required Fields")
        }
        
       
      }
  return (
    <div className="p-4  bg-slate-400" >
    <form className='m-auto w-full form-control shadow d-flex flex-column p-3 py-5 bg-white w-50 rounded' onSubmit={handleSubmit}>
     <label htmlFor='name'>Name</label>
     <input type="text"  name="name" className='bg-slate-200 p-1 my-1 border  border-primary rounded' onChange={handleOnChange} value={data.name}/>

     <label htmlFor='category'>Category</label>
     <select className='bg-slate-200 p-1 my-1  border  border-primary rounded' id='category' name='category' onChange={handleOnChange} value={data.category}>
       <option value={"other"}>select category</option>
       <option value={"fruits"}>Fruits</option>
       <option value={"vegetable"}>Vegetable</option>
       <option value={"icream"}>Icream</option>
       <option value={"dosa"}>Dosa</option>
       <option value={"pizza"}>Pizza</option>
       <option value={"rice"}>rice</option>
       <option value={"cake"}>Cake</option>
       <option value={"burger"}>Burger</option>
       <option value={"panner"}>Panner</option>
       <option value={"sandwich"}>Sandwich</option>
     </select>

     <label htmlFor='image'>Image
     <div  className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
         {
           data.image ? <img src={data.image} className="" style={{height:"59px",width:"100px"}}/> :<span className='text-5xl'></span> 
         }
         
         
        <input type="file" accept="image/*" id="image" onChange={uploadImage} className="hidden mt-3 rounded"/>
     </div>
     </label>
     

     <label htmlFor='price' className='my-1'>Price</label>
     <input type={"text"} className='bg-slate-200 p-1 my-1  border  border-primary rounded' name='price' onChange={handleOnChange} value={data.price}/>

     <label htmlFor='description'>Description</label>
     <textarea rows={2} value={data.description} className='bg-slate-200 p-1 my-1 resize-none  border  border-primary rounded' name='description' onChange={handleOnChange}></textarea>

     <button className="btn btn-success w-25 m-auto mt-2">Save</button>
    </form>
 </div>
  )
}

export default Newproduct