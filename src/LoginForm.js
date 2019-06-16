import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
MDBCol, MDBIcon,
MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput,MDBFooter 
} from "mdbreact";
import "./LoginForm.css";
import SignIn from './SignIn';
import Seances from './Seances';
import Nav from './Nav';
import Home from './Home';
import Foot from './Foot';

class LoginPage extends React.Component {
  
  render() {
    
    return (
    <div id="classicformpage">
     <BrowserRouter>
      <Nav/>
      <Route exact path="/" component= {Home}/>
      <Route path="/Seances" component= {Seances}/>
      <Foot/>
      </BrowserRouter>
      
    </div>
    );
  }
}

export default LoginPage;