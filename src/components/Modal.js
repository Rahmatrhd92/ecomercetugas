import React from 'react'
import { Card } from 'react-bootstrap'

const Modal = (props, {open}) => {
  if(!open) return null;
    
  return (
    <div className='overlay'>
        <div className='modalContainer'>
           <h1>hello</h1>
        {/* <Card.Img variant="top" src={props.image} /> */}
        </div>
    </div>
  )
}

export default Modal