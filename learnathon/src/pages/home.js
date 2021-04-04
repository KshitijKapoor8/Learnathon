import React from "react";
import {
  Col,
  Container,
  Row,
  Carousel,
  Jumbotron,
  Button,
} from "react-bootstrap";
import Navbar from '../components/navbar'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Mac from "../images/mac.jpg";
import pic1 from "../images/pic1.jpg"
function Home() {
  return (
    <div>
    <Navbar/>
            <div style = {{ flexDirection:'column', color:'white', backgroundImage: `url(${pic1})`, width:'100%', height:'100vh', justifyContent:'center', alignItems:'center', display:'flex'}}>
                <strong style = {{fontSize:48, paddingRight:'10rem'}}>
                    PyLearn
                </strong>

                <div style = {{fontSize:36, paddingLeft:'2rem'}}>
                    learn python easily
                </div>
            </div>
            <Jumbotron >
              <h1>About Us</h1>
              <p>
                PyLearn was created to help those who want to learn python in a simple and straighforward way.
              </p>
            </Jumbotron>
            <MDBFooter color="black">
              <div className="footer-copyright text-center py-3">
                <MDBContainer >
                  &copy; {new Date().getFullYear()} Copyright:{" "}
                  <a href="https://www.mdbootstrap.com"> PyLearn </a>
                </MDBContainer>
              </div>
            </MDBFooter>{" "}
    </div>
  );
}

export default Home;
