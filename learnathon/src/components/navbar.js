import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBLink,
} from "mdbreact";
import {Link} from 'react-router-dom'
import '../App.css';



export default function Navbar(props) {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);




  return (
    <div>
      <header>
        <MDBNavbar color="grey darken-3" fixed="top" dark expand="md">
          <MDBNavbarBrand href="/">
            <strong>PyLearn</strong>
          </MDBNavbarBrand>
          {!isWideEnough && (
            <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
          )}
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>
                <MDBNavItem style = {{}}>
                    Learn
                </MDBNavItem>
            </MDBNavbarNav>
            

            <MDBNavbarNav right>
                <MDBNavItem href = "/login" >
                    <Link to="/login" style = {{color:'white'}}>
                            <i class="fas fa-sign-in-alt"></i> Login
                    </Link>
                </MDBNavItem>

                <MDBNavItem href = "/signup" style = {{paddingLeft: '3rem'}}>
                    <Link  to="/signup" style = {{color:'white'}}>
                        <i class="fas fa-user-plus"></i> Sign Up
                    </Link>
                </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

        {props.renderContent}
      </header>
    </div>
  );
}
