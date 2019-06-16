import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import { Container, Row, Col } from 'reactstrap';
import Imag from './prof.jpg';
import Imag2 from './prof2.jpg';
import Imag3 from './prof3.jpg';
import Imag4 from './prof4.jpg';
import './Cards.css';


class Cards  extends React.Component {
  constructor() {
    super()
  };
  

  render() {
    return (
 <div>
   
   <Row>
   <Col><Flippy
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r} 
    
  >
     <FrontSide>
    <div>
      <Card>
      <CardImg  src={Imag} className="img" alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Professor Will Steffen</strong></CardTitle>
          <CardSubtitle>Click here to see the schedule</CardSubtitle>
        </CardBody>
      </Card>
    </div>
    </FrontSide>
    <BackSide className="mon-txt">
    <p> 8h - 10h</p>
      <p>Physics </p>
      
    </BackSide>
  </Flippy>
  </Col>
  <Col><Flippy
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r} 
    
  >
     <FrontSide>
    <div>
      <Card>
      <CardImg  src={Imag2} className="img" alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Dr. Roger Gibson</strong> </CardTitle>
          <CardSubtitle>Click here to see the schedule</CardSubtitle>
        </CardBody>
      </Card>
    </div>
    </FrontSide>
    <BackSide >
    <p>10h - 12h</p>
      <p>Maths </p>
      
    </BackSide>
  </Flippy>
  </Col>
  <Col><Flippy
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r} 
    
  >
     <FrontSide>
    <div>
      <Card>
      <CardImg  src={Imag3} className="img" alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Dr. Joseph Plummer</strong></CardTitle>
          <CardSubtitle>Click here to see the schedule</CardSubtitle>
        </CardBody>
      </Card>
    </div>
    </FrontSide>
    <BackSide >
    <p> 14h - 16h</p>
      <p>French </p>
      
    </BackSide>
  </Flippy>
  </Col>
 


<Col><Flippy
    flipOnHover={false}
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r} 
    
  >
     <FrontSide>
    <div>
      <Card>
      <CardImg  src={Imag4} className="img" alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Dr Simon Jackman</strong></CardTitle>
          <CardSubtitle>Click here to see the schedule</CardSubtitle>
        </CardBody>
      </Card>
    </div>
    </FrontSide>
    <BackSide className="mon-txt">
    <p>16h - 18h</p>
      <p>English </p>
      
    </BackSide>
  </Flippy>
  </Col>
</Row>
</div>
    );
  }
}


export default Cards;
