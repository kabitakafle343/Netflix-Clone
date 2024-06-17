import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {
  const {user,logOut}=UserAuth();
  const navigate=useNavigate();
  const handleLogOut=async()=>{
    try{
      await logOut();
      navigate("/");
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
    <div className="z-10 absolute w-full flex flex-row justify-between items-center p-4  ">
  <Link to='/'>
    <h1 className=" font-bold uppercase text-red-600 cursor-pointer text-2xl lg:text-5xl md:text-5xl">Netflix</h1>
  </Link>
{user?.email?( <div className="">
  <Link to='/profile'>
<button className="capitalize pr-4  cursor-pointer text-white">Profile</button>
</Link>

<button onClick={handleLogOut} className="capitalize lg:px-5 lg:py-2 rounded cursor-pointer bg-red-600 px-3 py-1 text-white">logout</button>

  </div>):(
    <div className="">
  <Link to='/login'>
<button className="capitalize pr-4  cursor-pointer text-white">login</button>
</Link>
  <Link to='/signup'>
<button className="capitalize lg:px-5 lg:py-2 rounded cursor-pointer bg-red-600 px-3 py-1 text-white ">signup</button>
</Link>
  </div>

  )}

 
  </div>
  </>
  )
}

export default Navbar