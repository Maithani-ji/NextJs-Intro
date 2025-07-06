
"use client"
import React, { useState } from 'react'

const Form = () => {
    const [userData,setUserData]=useState({
        name:"",
        email:"",
        number:""
    })
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch("api/form",{
            method:"POST",
            body:JSON.stringify({name:userData.name,email:userData.email,number:userData.number}),
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
    <h1>Form</h1>
   <form onSubmit={handleSubmit}>
   <input type='text' placeholder='enter name' value={userData?.name} onChange={(e)=>setUserData({...userData,name:e.target.value})} />
    <input type='email' placeholder='enter email' value={userData?.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
    <input type='number' placeholder='enter number' value={userData?.number} onChange={(e)=>setUserData({...userData,number:e.target.value})}/>
    <button type='submit'>Submit</button>
   </form>
   {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  )
}

export default Form