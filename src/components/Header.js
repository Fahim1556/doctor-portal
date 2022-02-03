import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Apple from '../img/apple.png';
import Google from '../img/google.png' ;
 import Frame from '../img/Frame.png';
 import vector from '../img/banner-1.png';
 import '../components/Header.css';

const Header = () => {
  return(
      <div className='banner'>
      <Container>
        
            <Row>
                <Col>
                <div className='banner-left'>
                    <img src={vector} alt="" />
                </div>
                
                </Col>
                <Col>
                  <div className='banner-container'>
                     <h1>Protect and Take Care of Your Health </h1>
                      <p>Download Our App and feel free to take your Health Advice from a Specialist</p>
                      <button className='src-btn'> Search for a Service</button>

                    <div className='banner-app'>
                       <ul>
                          <li><a href=""><img src={Google} alt="" /></a></li>
                          <li><a href=""><img src={Apple} alt="" /></a></li>
                       </ul>
                    </div>
                 </div>
                </Col>
                <Col>
                 <div className='banner-right'>
                
                     <img src={Frame} alt="" />

                    
                 </div>
                </Col>
            </Row>
            
       </Container>

       </div>
  ) 
};

export default Header;
