import React from "react";
import { BrowserRouter as Router , Route} from "react-router-dom";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
MDBCol, MDBIcon,
MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput,MDBFooter 
} from "mdbreact";
import "./LoginForm.css";
import SignIn from './SignIn';


class Home extends React.Component {
    state = {
    fname: "",
        password:"",
        confirmpass:"",
        email: ""
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
render() {
    
    return (

<MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <h1 className="h1-responsive font-weight-bold">
                  Welcome to our Site
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Please sign up to see every teacher's schedule.
                  If you are aleardy a memeber you just need to login
                </h6>
                <div>
                <SignIn/>
                </div>
                
              </div>

              <MDBCol md="6" xl="5" className="mb-4">
                <MDBCard style={{ backgroundColor: "transparent" }} id="classic-card">
                  <MDBCardBody className="z-depth-2 white-text">
                    <h3 className="text-center">
                      <MDBIcon icon="user" /> Register:
                    </h3>
                    <hr className="hr-light" />
                    <form>
                    <MDBInput label="Your name" icon="user" required value={this.state.fname}
                name="fname" onChange={this.changeHandler} style={{color:"white"}} />
                    <MDBInput label="Your email" icon="envelope" required value={this.state.email}
                name="email" onChange={this.changeHandler} style={{color:"white"}} />
                    <MDBInput label="Your password" icon="lock" type="password" required value={this.state.password}
                name="password" onChange={this.changeHandler} style={{color:"white"}} />
                    <MDBInput label="Confirm your password" icon="lock" type="password" required value={this.state.confirmpass}
                name="confirmpass" onChange={this.changeHandler} style={{color:"white"}} />
                    
             
                    <div className="text-center mt-4 black-text">

                      <a href="/Seances"><MDBBtn color="indigo">Sign Up</MDBBtn></a>

                      <hr className="hr-light" />
                      <div className="text-center d-flex justify-content-center white-label">
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon fab icon="twitter" className="white-text" />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon fab icon="linkedin-in" className="white-text" />
                        </a>
                        <a href="#!" className="p-2 m-2">
                          <MDBIcon fab icon="instagram" className="white-text" />
                        </a>
                      </div>
                      
                    </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
       );
    }
  }
  
  export default Home;
