
"use client"
import React, { use, useEffect, useState } from 'react'

const User = () => {

    const [userData,setUserData]=useState({
        name:"",
        email:"",
        
    })
const fetchUser=async()=>{
    const res=await fetch("api/user/?id=1231312")
    const data=await res.json()
    console.log(data);
    
    alert(JSON.stringify(data))
}
    useEffect(() => {
       fetchUser() 
    },[])


    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch("api/user",{
            method:"POST",
            body:JSON.stringify({name:userData.name,email:userData.email}),
            headers:{"Content-Type":"application/json"}
        })
        const data=await res.json()
        console.log(data);
        
        alert(JSON.stringify(data))
        // setUserData({
        //     name:"",
        //     email:"",
        //     number:""
        // })
    }
    const handleEdit=async()=>{
       
        const res=await fetch("api/user/:id=123",{
            method:"PUT",
            body:JSON.stringify({name:userData.name,email:userData.email}),
            headers:{"Content-Type":"application/json"}
        })
        const data=await res.json()
        console.log(data);
        
        alert(JSON.stringify(data))
        // setUserData({
        //     name:"",
        //     email:"",
        //     number:""
        // })
    }
  return (
    <div>
    <h1>User Form</h1>
   <form onSubmit={handleSubmit}>
   <input type='text' placeholder='enter name' value={userData?.name} onChange={(e)=>setUserData({...userData,name:e.target.value})} />
    <input type='email' placeholder='enter email' value={userData?.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
   
    <button type='submit'>Submit</button>
   </form>
   {/* <button onClick={handleSubmit}>Submit</button> */}
   <button onClick={handleEdit}>Edit </button>

    </div>
  )
}

export default User