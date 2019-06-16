import React from "react";
import { BrowserRouter as Router , Route} from "react-router-dom";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
MDBCol, MDBIcon,
MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput,MDBFooter 
} from "mdbreact";
import {NavLink} from 'reactstrap';


class Nav extends React.Component {
    state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
  render() {
    const overlay = (
      <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
    );
    return (
    <div >
      <Router>
        <div>
          <MDBNavbar dark expand="md" fixed="top">
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text">Alien Dimension</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")} />
              <MDBCollapse id="navbarCollapse" isOpen={this.state.collapseID} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <NavLink href ="/">Home</NavLink>
                    
                  </MDBNavItem>
                 
                </MDBNavbarNav>
                <MDBNavbarNav right>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {this.state.collapseID && overlay}
        </div>
      </Router>
      </div>
    );
  }
}

export default Nav;
