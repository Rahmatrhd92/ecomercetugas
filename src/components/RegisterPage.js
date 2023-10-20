import React from 'react'
import NavbarNav from './NavbarNav';
import Register from './Register';
import "../style/Style.css";
import pictures from "../assets/images/lg.png";
import { Container, Row } from 'react-bootstrap';

const RegisterPage = () => {
  return (
    <div className="MyRg">
      <NavbarNav image={pictures}/>
       <Register />
    </div>
  )
}

export default RegisterPage;