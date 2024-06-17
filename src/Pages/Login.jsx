import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext';

const Login = () => {
  const [login,setlogin]=useState(false);
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('')
  const {user,logIn}=UserAuth();
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await logIn(email,password);
      navigate("/");
    }catch(error){
      console.log(error);
    }
  

  }
  return (
  <>
    <div className="w-full h-screen">
      <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/8a8e0c65-6d0f-4aae-bb8f-28ee225f5d6c/NP-en-20240422-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt='img'/>
      <div className="bg-black/70 fixed top-0 left-0 w-full h-screen">
      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[500px] mx-auto bg-black/80 rounded-lg">
          <div className="max-w--[320px] ">
            <h1 className="text-3xl font-bold text-white">Login In</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
  <input className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder='email' autoComplete='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
<input className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder='password' autoComplete='current-password' value={password} onChange={(e)=>setpassword(e.target.value)}/>

<button className="bg-red-600 py-3 my-6 rounded font-bold">Login</button>
<div className="flex justify-between items-center text-gray-600 ">
<p>
  <input type="checkbox" className="mr-2" checked={login} onChange={(e)=>setlogin(!login)}/>Remember me
</p>
<p>Need Help?</p>
</div> 
<p className="my-4">
<span className="text-gray-600 mr-2">New to netflix?</span>
<Link to='/signup' className="text-white">Sign Up</Link>
</p>

            </form>
          </div>
        </div>
      </div>

      </div>
    </div>
  </>
  )
}
export default Login;
