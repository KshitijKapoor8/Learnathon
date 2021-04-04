import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Carousel,
  Jumbotron,
  Button,
} from "react-bootstrap";
import Navbar from "../components/navbar";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Mac from "../images/mac.jpg";
import pic1 from "../images/pic1.jpg";
import Modal from "../components/modal";
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <Modal
        isOpen={isOpen}
        number={"0"}
        title={"All About React"}
        body={
          "Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae undecommodi aspernatur enim, consectetur. Cumque deleniti temporibusipsam atque a dolores quisquam quisquam adipisci possimus"
        }
        ide={
          <iframe
            src="https://codesandbox.io/embed/priceless-williams-9m58p?fontsize=14&hidenavigation=1&theme=dark"
            style={{
              width: "100%",
              height: "500px",
              border: "0",
              borderRadius: "4px",
            }}
            title="priceless-williams-9m58p"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        }
        handleClose={handleDialogClose}
      ></Modal>
    );
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          flexDirection: "column",
          color: "white",
          backgroundImage: `url(${pic1})`,
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <strong style={{ fontSize: 48, paddingRight: "10rem" }}>
          Reacademy
        </strong>

        <div style={{ fontSize: 36, paddingLeft: "2rem" }}>
          learn ReactJS easily
        </div>
      </div>
      <Jumbotron>
        <h1>What We Do</h1>
        <p>
          Reacademy was created to help those who want to learn web development
          in a simple and straighforward way.
        </p>
      </Jumbotron>
      <Jumbotron style={{ backgroundColor: "#FFFFFF" }} className="text-center">
        <h1>Ready to Learn?</h1>
        <Button variant="dark" href="/login">
          Login
        </Button>{" "}
        <Button variant="dark" href="/signup">
          Sign Up
        </Button>{" "}
      </Jumbotron>
      <Jumbotron style={{ backgroundColor: "#2E2E2E", color: "#FFFFFF" }}>
        <Container fluid className="text-center">
          <Row>
            <Col s>
              <h5 className="text-center">Company</h5>
              <ul>
                <li
                  className="list-unstyled text-center"
                  style={{ paddingRight: "3.7rem" }}
                >
                  <h9> About Us</h9>
                </li>
                <li
                  className="list-unstyled text-center"
                  style={{ paddingRight: "2.1rem" }}
                >
                  <h9> Privacy Policy</h9>
                </li>
              </ul>
            </Col>
            <Col>
              <h5 className="title">Support</h5>
              <ul>
                <li
                  className="list-unstyled text-center"
                  style={{ paddingRight: "1.9rem" }}
                >
                  <h9> Contact Us</h9>
                </li>
                <li
                  className="list-unstyled text-center"
                  style={{ paddingRight: "2.3rem" }}
                >
                  <h9> Help/FAQ</h9>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <MDBFooter color="black">
        <div className="footer-copyright text-center py-3">
          <MDBContainer>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> Reacademy </a>
          </MDBContainer>
        </div>
      </MDBFooter>{" "}
    </div>
  );
}

export default Home;
