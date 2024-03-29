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
        <MDBNavbar color="black darken-3" fixed="top" dark expand="md">
          <MDBNavbarBrand href="/">
            <strong>Reacademy</strong>
          </MDBNavbarBrand>
          {!isWideEnough && (
            <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
          )}
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>

                {localStorage.getItem("loggedIn") ? <MDBNavItem style = {{paddingLeft: '3rem'}}>
                    <Link  to="/tutorial" style = {{color:'white'}}>
                        Tutorial
                    </Link>
                </MDBNavItem> : null}
                
            </MDBNavbarNav>
            

            <MDBNavbarNav right>
               <MDBNavItem >
                        <Link to="/login" style = {{color:'white'}}>
                            Login
                        </Link>
                </MDBNavItem>

                
                 <MDBNavItem style = {{paddingLeft: '3rem'}}>
                    <Link  to="/signup" style = {{color:'white'}}>
                        Sign Up
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
