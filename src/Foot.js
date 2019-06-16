import React from "react";
import { BrowserRouter as Router , Route} from "react-router-dom";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
MDBCol, MDBIcon,
MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput,MDBFooter 
} from "mdbreact";

const Foot=() =>{
    return(
        <MDBFooter color="purple-gradient" >
      <MDBContainer>
        <MDBRow className="py-5">
          <MDBCol md="12" className="text-center">
            <span>
            © 2019 Copyright: Wassim Henia for Alien Dimension
            </span>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBFooter>

    )
};
export default Foot;