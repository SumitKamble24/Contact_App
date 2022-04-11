import React from 'react'
import { Table, TableHead, TableRow, TableCell,Button } from '@mui/material';

import { useState, useEffect } from "react";


export default function ContactList() {

    const [data, Setdata] = useState([]);

function getContact(){
  fetch(" http://localhost:3000/Contact_Manager")
  .then((responce) => responce.json())
  .then((json) => {
    Setdata(json);
  })
  .catch((e) => {
  });
}

    useEffect(() => {
      getContact()
    }, []);

    function deleteUser(id){
      fetch(`http://localhost:3000/Contact_Manager/${id}`,
     { method:"DELETE"
   }).then((result)=>{
     result.json().then((resp)=>{
       console.warn(resp)
      getContact()
      alert("Your Contact has been deleted")
     })
   })
    }

    const renderTableRows = () => {
        return(
            <>
            {data.map((items)=>{
                return<>
                 <TableRow key={items.id}>
                  <TableCell>{items.id}</TableCell>
                  <TableCell>{items.name}</TableCell>
                  <TableCell>{items.email}</TableCell>
                  <TableCell>{items.contact}</TableCell>
                  <TableCell><Button onClick={()=>deleteUser(items.id)}>Delete</Button></TableCell>
                 
    
                </TableRow>
                </>
            })}
            </>
        );
    }

  return (
    <div>
          <Table className="Thead1">
        <TableHead className="thead">
          <TableCell><b> ID</b> </TableCell>
          <TableCell><b> Name</b> </TableCell>
          <TableCell><b>Email</b> </TableCell>
          <TableCell><b>Contact Number</b> </TableCell>
          <TableCell><b>Delete</b> </TableCell>
        </TableHead>
        <TableHead>
          {renderTableRows()}
        </TableHead>
      </Table>
    </div>
  )
        }
