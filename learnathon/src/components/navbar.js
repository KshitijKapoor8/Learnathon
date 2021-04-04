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


function LoggedIn()
{
    console.log(localStorage.getItem('loggedIn'));
    if(localStorage.getItem('loggedIn'))
    {
        return(
        <MDBNavbar color="black darken-3" fixed = "top" dark expand="md">
          
           <MDBNavbarNav left>
                <MDBNavbarBrand href="/">
                    <strong>Reacademy</strong>
                </MDBNavbarBrand>
                <MDBNavItem style = {{paddingLeft: '3rem'}}>
                    <Link  to="/tutorial" style = {{color:'white'}}>
                        Tutorial
                    </Link>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <MDBNavItem style = {{paddingLeft: '3rem'}}>
                    <Link  to="/" onClick = {() => {
                        localStorage.setItem('loggedIn', false)
                        window.location.reload()
                    }}style = {{color:'white'}}>
                        Logout
                    </Link>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
        )
    } 
    else
    {
        return(
            <MDBNavbar color="black darken-3" fixed="top" dark expand="md">
            <MDBNavbarNav left>
                <MDBNavbarBrand href="/">
                    <strong>Reacademy</strong>
                </MDBNavbarBrand>
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
        </MDBNavbar>
            
            
        )
    }
}


export default function Navbar(props) {

  return (
    <div>
      <header>
        <LoggedIn/>
      </header>
    </div>
  );
}
