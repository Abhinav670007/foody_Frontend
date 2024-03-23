import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function SignUp() { 
  const navigate = useNavigate()
  const [signUp, setSignUp] = useState({
    username:"",
    email:"",
    psswd:""
  })

  const handlesubmit=(e)=>{
    e.preventDefault()
  }
  const sendData=async()=>{
    const {username,email,psswd}=signUp
    if(username&& email &&psswd){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
        method:"POST",
        headers:{
          "content-type" : "application/json"
        },
        body : JSON.stringify(signUp)
      })
      const data = await fetchData.json()
      alert(data.message)
      if(data.alert){
        navigate("/login")
      }
    }else{
      toast.warning('fill the form completely')
    }
  }
  console.log(signUp);
  return (
    <div className='bg-gray-400 h-[450px]'>
        <center className='pt-20'>
           <form className='items-center bg-gradient-to-r from-cyan-500 to-teal-800 border shadow w-50 flex-column d-flex form-control pb-3' onClick={handlesubmit}> 
            <h1 className='mt-3 text-2xl'>signUp</h1>
            <input className='mt-4 rounded border p-2 rounded-pill w-50' type="text" placeholder='username' onChange={(e)=>setSignUp({...signUp,username:e.target.value})}/>
            <input className='mt-4 rounded border p-2 rounded-pill w-50' type="email" placeholder='email' onChange={(e)=>setSignUp({...signUp,email:e.target.value})}/>
            <input className='mt-4 rounded border p-2 rounded-pill w-50' type="number" placeholder='password' onChange={(e)=>setSignUp({...signUp,psswd:e.target.value})}/>
              <button onClick={sendData} className='btn btn-success  md:w-32 text-center m-auto mt-4 mb-1'>signUp</button>

              <h6>Already have account ?<Link to={"/login"}>Login</Link></h6>
            </form>

        </center>

    </div>
  )
}

export default SignUp