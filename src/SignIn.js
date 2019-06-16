import React, { Component } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";
import Seances from "./Seances";
import {  Route} from "react-router-dom";


class SignIn extends Component {
    state = {
      modal: false
    };
  
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    };
  
    logValue = value => {
      console.log(value);
    };
  
    render() {
      return (
        <MDBContainer>
          <MDBBtn size="lg" color="primary" rounded onClick={this.toggle}>login</MDBBtn>
          <MDBModal
            isOpen={this.state.modal}
            toggle={this.toggle}
            size="md"
            cascading
          >
            <MDBModalHeader
              toggle={this.toggle}
              titleClass="d-inline title"
              className="text-center light-blue darken-3 white-text"
            >
              <MDBIcon icon="pencil-alt" />
              &nbsp;&nbsp;SignIn
            </MDBModalHeader>
            <MDBModalBody>
            <MDBInput Placeholder="Your email" icon="envelope"  />
            <MDBInput Placeholder="Your password" icon="lock" type="password"/>
            <div className="text-center">
            <a href="/Seances"><MDBBtn onClick={this.toggle}>Login</MDBBtn></a>
              
            </div>
            </MDBModalBody>
            
          </MDBModal>
        </MDBContainer>
      );
    }
  }
  
  export default SignIn;