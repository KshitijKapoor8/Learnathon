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
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={Mac} height="900" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Jumbotron
            fluid
            className="jumbotron bg-white text-dark"
            style={{ width: "100%" }}
          >
            <h1>About Us</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Jumbotron>
        </Row>
        <Row>
          <Jumbotron
            fluid
            className="jumbotron  text-dark"
            style={{ width: "100%", backgroundColor: "F1F1F1" }}
          >
            <h1>About Us</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Jumbotron>
        </Row>
        <Row>
          <Jumbotron
            fluid
            className="jumbotron bg-dark text-white"
            style={{ width: "100%" }}
          >
            <h1>About Us</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Jumbotron>
        </Row>
        <Row>
          <footer
            style={{
              width: "100%",
              backgroundColor: "#2E2E2E",
              color: "white",
            }}
          >
            <div className="footer-copyright text-center py-3">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.mdbootstrap.com"> Pylearn </a>
            </div>
          </footer>{" "}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
