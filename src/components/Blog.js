import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import learn from '../img/Blog-2.png';
import sleep from '../img/Blog-3.png';
import pain from '../img/pain.png';
import baby from '../img/Blog-1.png';
import '../components/Blog.css';

const Blog = () => {
  return (
    <div className='blog__content'>
        
          <div className='service about-container'>
                <h1>News & Blogs</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
            </div>

            <Container className='blog__card'>
                 <Row>
                      <Col>
                       
                        <Card style={{ width: '15rem' }}>
                             <Card.Img variant="top" src={baby} />
                          
                            <Card.Body>
                                <Card.Title>November 5,2021 </Card.Title>
                                <Card.Text>
                                <p>Child care for winter season</p>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                
                             </Card.Body>

                                <Card.Body>
                                    <Card.Link  href="#">Dr.Saifur Rahman</Card.Link>
                                    <Button className='btn_btn' variant="primary">Read More</Button>
                                </Card.Body>

                        </Card>
                      
                      </Col>


                      <Col>
                      
                        <Card style={{ width: '15rem' }}>
                             <Card.Img variant="top" src={learn} />
                            <Card.Body>
                                <Card.Title>November 5,2021</Card.Title>
                                <Card.Text>
                                <p>Telimedicine Care</p>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>  
                             </Card.Body>

                               <Card.Body>
                                    <Card.Link href="#">Dr.Saifur Rahman</Card.Link>
                                    <Button className='btn_btn' variant="primary">Read More</Button>
                                </Card.Body>
                        </Card>
                      
                      </Col>


                      <Col>
                      
                        <Card style={{ width: '15rem' }}>
                             <Card.Img variant="top" src={sleep} />
                            <Card.Body>
                                <Card.Title>November 5,2021</Card.Title>
                                <Card.Text>
                                <p>Pragnency Complicated</p>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                
                             </Card.Body>

                               <Card.Body>
                                    <Card.Link href="#">Dr.Saifur Rahman</Card.Link>
                                    <Button className='btn_btn' variant="primary">Read More</Button>
                                </Card.Body>
                        </Card>
                      
                      </Col>


                      <Col>
                      
                        <Card style={{ width: '15rem' }}>
                             <Card.Img variant="top" src={pain} />
                            <Card.Body>
                                <Card.Title>November 5,2021</Card.Title>
                                <Card.Text>
                                <p>Backpain services</p>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                
                             </Card.Body>

                              <Card.Body>
                                    <Card.Link href="#">Dr.Saifur Rahman</Card.Link>
                                    <Button className='btn_btn' variant="primary">Read More</Button>
                                </Card.Body>

                        </Card>
                      
                      </Col>

                      
                    


                 </Row>

            </Container>

    </div>
  )
};

export default Blog;
