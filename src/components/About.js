import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../components/About.css';
import video__call from '../img/Group.png';
import call from '../img/call.png';
import hand from '../img/hand.png';
import watch from '../img/watch.png';
import tast from '../img/tast.png';
import exp__doc from '../img/exp__doc.png';
import phn from '../img/phn.png';
import one from '../img/one.png';
import Location__png from '../img/location__sym.png'


const About = () => {
  return (

    <div className='container'>
        <div className='about-container'>
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
        </div>

        <div className='container__detail'>
          
        <Container>
            <Row>
                <Col> <img src={ video__call} alt="" /></Col>

                <Col><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad quos optio nostrum voluptatibus enim vero? Tempore nobis rem deleniti molestias quaerat eos voluptatibus libero earum velit, explicabo mollitia voluptatem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad quos optio nostrum voluptatibus enim vero? Tempore nobis rem deleniti molestias quaerat eos voluptatibus libero earum velit, explicabo.</p></Col>

               
                 <button className='about-btn'>Read More</button>
            </Row>  
         </Container>
        </div>

        <div className='about__vedio'>
        <div className='about-container'>
            <h1>Video Consultation from the best doctors</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
        </div>

        <div className='container__detail'>
          
          <Container>
              <Row>
                  
                  <Col><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad quos optio nostrum voluptatibus enim vero? Tempore nobis rem deleniti molestias quaerat eos voluptatibus libero earum velit, explicabo mollitia voluptatem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad quos optio nostrum voluptatibus enim vero? Tempore nobis rem deleniti molestias quaerat eos voluptatibus libero earum velit, explicabo.</p></Col>

                  <button className='read-btn'>Read More</button>
                   <div className='About__vedio__consultation'>

                   <Col> <img src={call} alt="" /></Col>

                   </div>
                   

              </Row>  
           </Container>
          </div>
        </div>

            <div className='about__chose'>

                    <div className='about-container'>
                        <h1>Why Choose TM?</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
                    </div>

                    <div className='about__chose_deatail'>
                       <Container>
                              <Row>
                                   <Col>
                                        <div className='chose__section'>
                                        <img src={hand} alt="" />
                                            <h2> Easy to Use</h2>
                                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quaerat praesentium culpa vero aspernatur </p>
                                        </div>
                                   </Col>
                                   <Col>
                                        <div className='chose__section'>
                                            <img src={watch} alt="" />
                                            <h2> 24 / 7 Service</h2>
                                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quaerat praesentium culpa vero aspernatur </p>
                                        </div>
                                   </Col>

                                   <Col>
                                        <div className='chose__section'>
                                        <img src={exp__doc} alt="" />
                                        <h2> Expert Doctors</h2>
                                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quaerat praesentium culpa vero aspernatur </p>
                                        </div>
                                   </Col>

                                   <Col>
                                      <div className='chose__section'>
                                           <img src={tast} alt="" />
                                           <h2>Trusted</h2>
                                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, quaerat praesentium culpa vero aspernatur </p>
                                       
                                       </div>
                                   </Col>
                              </Row>
                       </Container>

                    </div>
            </div>

                     <div className='doctor__appoinment'>

                            <div className='about-container'>
                                <h1>Only Three Easy Steps to Follow</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
                            </div>   

                            <div className='all__doctor'>
                                     
                                     <Container>
                                          <Row>
                                              <Col>
                                                 <div className='left__side__doctor'>
                                                     <img src={phn} alt="" />
                                                 </div>
                                              </Col>

                                              <Col>
                                              <div className='right__side__doctor'>
                                                  <div className='aside_left'>
                                                        <div>
                                                        <img src={one} alt="" />
                                                        </div>

                                                        <div className='aside_left_bio'>
                                                            <h6> Search the Doctor For   Appointment</h6>

                                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, possimus sin
                                                            amet, consectetur adipisicing elit. Debitis, possimus sint.
                                                            </p>

                                                        </div>


                                                  <div className='aside_left'>
                                                        <div>
                                                        <img src={one} alt="" />
                                                        </div>

                                                        <div className='aside_left_bio'>
                                                            <h6> Get Doctor Consultating through vedio Calling  </h6>

                                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, possimus sint amet, consectetur adipisicing elit. Debitis, possimus sint.</p>

                                                
                                                        </div>

                                                </div>



                                                <div className='aside_left'>
                                                        <div>
                                                        <img src={one} alt="" />
                                                        </div>

                                                        <div className='aside_left_bio'>
                                                        <h6> Get Your Prescription</h6>

                                                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, possimus sint amet, consectetur adipisicing elit. Debitis, possimus sint.</p>

                                                
                                                        </div>

                                                   </div>


                                                   </div>
                                                  

                                              </div>
                                              </Col>
                                          </Row>
                                     </Container>

                            </div>




                    </div>



               <div className='about__online__medicine'>

                                     
                            <div className='about-container'>
                            <h1>Order Medicine Online from Popular Pharmacy Nearby</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
                            </div> 


                  <div className='about__medicine__center'>
                         
                          <Container>
                               <Row>
                                   <Col>
                                      <div className='medicine__location'>
                                         <h6>Shahbag Medicine Corner</h6>
                                          <div> <img src={Location__png} alt="" /></div>
                                          <div><p>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,Dhaka-1000,Bangladesh</p></div>     
                                       </div>

                                       </Col>

                                        <Col> 
                                            <div className='medicine__location'>
                                                <h6>Shahbag Medicine Corner</h6>
                                                <div> <img src={Location__png} alt="" /></div>
                                                <div><p>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,Dhaka-1000,Bangladesh</p></div>     
                                            </div>
                                        </Col>

                                        <Col>
                                            <div className='medicine__location'>
                                            <h6>Shahbag Medicine Corner</h6>
                                            <div> <img src={Location__png} alt="" /></div>
                                            <div><p>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,Dhaka-1000,Bangladesh</p></div>     
                                        </div>
                                        </Col>
                               </Row>

                               <button className='view-btn'> View All</button>
                          </Container>



                  </div>


               </div>




    </div>
  ) 
};

export default About;
