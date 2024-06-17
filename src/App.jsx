

import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
import Navbar from "./Components/Navbar"
import { AuthContextProvider } from "./Context/AuthContext"


import NewProtected from "./Components/NewProtected.jsx"



function App() {


  return (
<>
<AuthContextProvider>

<Navbar/>
<Routes>

<Route path="/" element={<Home/>}/>
  
 
  <Route path="/login" element={<Login/>} />
  
  <Route path="/signup" element={<Signup/>} />
  <Route path="/profile" element={
<NewProtected><Profile/></NewProtected>
      
 
      

 } />

  

</Routes>
</AuthContextProvider>
  </>
  )
}

export default App
