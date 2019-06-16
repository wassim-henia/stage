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
import { brotliDecompress } from 'zlib';

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
      <p>Physics </p>
      <p>From 8h to 10h</p>
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
      <p>Maths </p>
      <p>From 10h to 12h</p>
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
      <p>French </p>
      <p>From 14h to 16h</p>
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
      <p>English </p>
      <p>From 16h to 18h</p>
    </BackSide>
  </Flippy>
  </Col>
</Row>
</div>
    );
  }
}


export default Cards;