import React from "react";
import { Form, Button } from "react-bootstrap";

const Update = () => {
  return (
    <div className="MyUpform">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Nama Product</Form.Label>
          <Form.Control type="name" placeholder="Nama Product" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Harga Product</Form.Label>
          <Form.Control type="name" placeholder="Harga Product" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Categori Product</Form.Label>
          <Form.Control type="name" placeholder="Harga Product" />
        </Form.Group>
        <Form.Text className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-white">Detail Product</Form.Label>
          <Form.Control style={{height:'124px'}} type="name" placeholder="Detail Product" />
        </Form.Text>
       

       
        <Button className="btn btn-warning bnt mt-4" type="submit">
          UPDATE
        </Button>
      </Form>
    </div>
  );
};

export default Update;
