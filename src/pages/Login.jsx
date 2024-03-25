import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Login() {
  const navigate = useNavigate()
  const [signUp, setSignUp] = useState({
    email:"",
    psswd:""
  })
  const handlesubmit=(e)=>{
    e.preventDefault()
  }
  const sendData=async()=>{
    const {username,email,psswd}=signUp
    if( email &&psswd){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
        method:"POST",
        headers:{
          "content-type" : "application/json"
        },
        body : JSON.stringify(signUp)
      })
      const data = await fetchData.json()
      
      alert(data.message)
      if(data.alert){
        sessionStorage.setItem("isLogin",true)
        navigate('/')
      }
    }else{
      toast.warning('fill the form completely')
    }
  }
  console.log(signUp);
  return (
    <div className="bg-gray-400 h-[550px]">
      <center className="pt-24">
        <form
          className="items-center bg-gradient-to-r from-cyan-500 to-teal-800 border shadow rounded max-w-96 w-5/6 px-3 flex-column d-flex  pb-5"
          onClick={handlesubmit}
        >
          <h1 className="mt-3 text-3xl">Login</h1>
          <input
            className="mt-4 rounded border p-2 rounded-pill w-100"
            type="email"
            placeholder="email"
            onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
          />
          <input
            className="mt-4 rounded border p-2 rounded-pill w-100"
            type="number"
            placeholder="password"
            onChange={(e) => setSignUp({ ...signUp, psswd: e.target.value })}
          />
          <button
            onClick={sendData}
            className="btn btn-success md:w-32 text-center m-auto mt-4 "
          >
            Login
          </button>

          <h6 className='mt-3'>Dont have an account? <Link to={"/signUP"}>SignUp</Link></h6>
          
        </form>

    </center>

</div>  )
}

export default Login