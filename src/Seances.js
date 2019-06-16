import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
    MDBCol, MDBIcon,
    MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput,MDBFooter 
    } from "mdbreact";
import "./LoginForm.css";
import Cards from './Cards';

class Seances extends Component {


render() {
  return (
    <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <span className="txt">This is your Schedule for today</span>
            <Cards/>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    );
  }
}

export default Seances;