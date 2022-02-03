import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import video__call from '../about/'

const About = () => {
  return (

    <div className='container'>
        <div className='about-container'>
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
        </div>

        <Container>
            <Row>
                <Col> <img src={ video__call} alt="" /></Col>

                <Col><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad quos optio nostrum voluptatibus enim vero? Tempore nobis rem deleniti molestias quaerat eos voluptatibus libero earum velit, explicabo mollitia voluptatem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad quos optio nostrum voluptatibus enim vero? Tempore nobis rem deleniti molestias quaerat eos voluptatibus libero earum velit, explicabo.</p></Col>
            </Row>
            <div className='about-btn'>
                <button>Read More</button>
            </div>
        </Container>
    </div>
  ) 
};

export default About;
