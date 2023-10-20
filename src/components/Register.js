import React from "react";
import { Form, Button, Card, Container, Row } from "react-bootstrap";

const Register = () => {
  return (
<Container fluid>
    <div className="MyRgform">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">User Name</Form.Label>
          <Form.Control type="name" placeholder="User Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="name" placeholder="User Name" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="text-white">Konfirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button className="btn btn-warning" type="submit">
          REGISTRASI
        </Button>
      </Form>
      
    </div>
    </Container>
   
  
    
  );
};

export default Register;
