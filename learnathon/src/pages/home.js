import React from "react";
import {
  Col,
  Container,
  Row,
  Carousel,
  Jumbotron,
  Button,
} from "react-bootstrap";
import { MDBFooter } from "mdbreact";
import Mac from "../images/mac.jpg";
function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={Mac} height="900" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron fluid className="jumbotron bg-brown text-dark">
              <h1>About Us</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <MDBFooter color="brown">
              <div className="footer-copyright text-center py-3">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.mdbootstrap.com"> Pylearn </a>
              </div>
            </MDBFooter>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
