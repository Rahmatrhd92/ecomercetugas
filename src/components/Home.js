import React, {useState} from "react";
import NavbarNav from "./NavbarNav";
import Sidebar from "./Sidebar";
import pictures from "../assets/images/lg.png";
import Src from "./Src";
import Product from "./Product";
import { Row, Col, Container } from "react-bootstrap";
import banner from "../assets/images/product.png";
import bannerHero from "../assets/images/banner hero home.jpg";
import Hero from "./Hero";
import Modal from "./Modal";


const Home = () => {

  const [openModal, setOpenmodal] = useState(false)

  return (
    <div>
      <Src />
      <NavbarNav image={pictures} />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <div>
            <Sidebar />
            </div>
            <Col>
            <hr />
              <Hero image={bannerHero} />
              <hr />
                <Product open={setOpenmodal} image={banner} />
            </Col>
          </Row>
          <Modal open={openModal} image={banner} />
        </Container>
      </div>

      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3">
            
          </div>
          <div className="col-lg-3">
            <Product image={banner} />
          </div>
          <div className="col-lg-3">
            <Product image={banner} />
          </div>
          <div className="col-lg-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
          <div className="col-md-3">
            <Product image={banner} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
