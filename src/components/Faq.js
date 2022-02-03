import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import '../components/Faq.css';
import p__1 from '../img/p__1.png';
import p__2 from '../img/p__2.png';
import p__3 from '../img/p__3.png';
import coma__up from '../img/coma__up.png';
import coma__down from '../img/coma__down.png';

const Faq = () => {
  return (

        <div className='Faq__container'>

            <div className='service about-container'>
                <h1>What are The Patients Saying About us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
            </div>

            <div className='Faq__body'>
                <Container>
                      <Row>
                           <Col>
                              <img src={p__1} alt="" />
                            
                           </Col>

                           <Col>
                               <div className='student-info'>
                                 

                                 <p> <img className='coma__up' src={coma__up} alt="" /><br /><br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ad ratione assumenda dicta ea dolorem eligendi consequuntur cum laborum maxime fugiat soluta quas nemo quisquam perferendis vitae, unde maiores officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ad ratione assumenda dicta ea dolorem eligendi. <br />
                                      
                                 </p>
                                  <h5>Foisal Morshed</h5>
                                  <h6>Student, CSE, University of Royal</h6>

                                  <img className='coma__down' src={coma__down} alt="" />


                                <section className='student__info__footer__pic'>
                                        <ul className='p__footer'>
                                            <li><a href=""> <img src={p__1} alt="" /></a></li>
                                            <li><a href=""> <img src={p__2} alt="" /></a></li>
                                            <li><a href=""> <img src={p__3} alt="" /></a></li>
                                        </ul>
                                </section>



                               </div>
                           </Col>
                      </Row>
                </Container>
            </div>

            
        </div>
  )
  
};

export default Faq;
