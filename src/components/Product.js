import { useState } from "react";
import React from "react";
import { Button, Card, Container, Col, Row } from "react-bootstrap";


const Product = (props) => {
  const [setOpenmodal] = useState(false)

  return (
    <div className="myProduct">
      <Container fluid>
    <Row>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>BBBB <strong>BBBBBstrong</strong></Card.Title>
          <Card.Text> BBBB</Card.Text>
          <Button onClick={()=>setOpenmodal(true)} style={{ backgroundColor:"#E31E26" }}>Cek Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>BBBB <strong>BBBBBstrong</strong></Card.Title>
          <Card.Text> BBBB</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Cek Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>BBBB <strong>BBBBBstrong</strong></Card.Title>
          <Card.Text> BBBB</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Cek Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>BBBB <strong>BBBBBstrong</strong></Card.Title>
          <Card.Text> BBBB</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Cek Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>BBBB <strong>BBBBBstrong</strong></Card.Title>
          <Card.Text> BBBB</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Cek Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>BBBB <strong>BBBBBstrong</strong></Card.Title>
          <Card.Text> BBBB</Card.Text>
          <Button style={{ backgroundColor:"#E31E26" }}>Cek Detail</Button>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    </Container>
    </div>
  

  //   {/* <Container>
  //   <div className="myProduct">
  //     <Card>
  //       <Card.Img variant="top" src={props.image} />
  //       <Card.Body>
  //         
  //       </Card.Body>
  //     </Card>
  //   </div>
  //   </Container> */}
   );
};

export default Product;
