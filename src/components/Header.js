import React from 'react'
import "./app.css"

export default function Header({title}) {
  return (
    <div className='header'>
        <h1 className='title'>{title}</h1>
    </div>
  )
}
