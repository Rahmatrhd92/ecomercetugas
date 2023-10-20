import React from "react";
import { Card, Container } from "react-bootstrap";

function Hero(props) {
  return (
    <Container fluid>
    <div className="myHero">
      <Card>
        <Card.Img variant="top" src={props.image} />
      </Card>
    </div>
    </Container>
  );
}

export default Hero;
