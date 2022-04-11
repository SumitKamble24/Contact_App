import React from 'react';
import { TextField, Button } from "@mui/material";
import {useState } from 'react';
import "./app.css"

export default function CreateContact() {
  
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [contact,setContact]=useState("");
 function saveData()
 {
   let data={name,email,contact}
 // console.warn(data);
   fetch("http://localhost:3000/Contact_Manager", {
     method: "POST",
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body:JSON.stringify(data)
   }).then((resp)=>{
     // console.warn("resp",resp);;
     resp.json().then((result)=>{
       console.warn("result",result)
     })
     alert("You have updated Your contact")
   })
 }


  return (
    <div>
        <div className="textF1">
        <div className="textw1">
        <TextField 
           id="margin-normal"
           margin="Normal"
           label="Name"
           variant="outlined"
         type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} ></TextField>
        </div>
          
          <div div className="textw1">
              <TextField
           id="margin-normal"
           margin="Normal"
           label="Email Id"
           variant="outlined"
         type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} >
             </TextField></div>
         
         <div div className="textw1">
         <TextField 
           id="margin-normal"
           margin="Normal"
           label="Mobile Number"
           variant="outlined"
         type="text" name="mobile"  value={contact} onChange={(e)=>{setContact(e.target.value)}}></TextField> 
         </div>
         </div>
         <div className='btn'>
         <Button 
           className="dashbtn1"
         variant="contained"
         type="button" onClick={saveData} >Submit</Button>
         </div>
         
      
    </div>
  )
}
