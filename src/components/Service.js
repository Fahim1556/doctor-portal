import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import '../components/Service.css';
import service from '../img/service.png';
import arow from '../img/arow.png';
import girl__doctor from '../img/girl__doctor.png';

const Service = () => {
  return (
  
    <div className='service__container'>

         <div className='service about-container'>
            <h1>Our Service</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
        </div>

           <div className='container'>
                 <Container>
                      <Row>
                          <Col>
                              <div className='service__left'>
                                  <img src={service} alt="" />

                              </div>
                          </Col>

                          <Col>
                              <div className='service__right'>
                                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos cum excepturi doloremque odio, distinctio, consectetur minus corrupti nesciunt suscipit quae provident officia ipsa voluptas tempora possimus incidunt in debitis nobis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos cum excepturi doloremque odio, distinctio.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    
                                  <Button className='primary' variant="primary">Read More</Button>

                                  <div className='service__footer'>
                                      <Col><ul><li><a href=""><img src={arow} alt="" />Generel Healthcare</a></li></ul></Col>

                                      <Col><ul><li><a href=""><img src={arow} alt="" />Maternal Healthcare</a></li></ul></Col>

                                      <Col><ul><li><a href=""><img src={arow} alt="" />Child Healthcare</a></li></ul></Col>

                                      <Col><ul><li><a href=""><img src={arow} alt="" />Elder Healthcare</a></li></ul></Col>
                                     
                                  </div>

                              </div>
                          </Col>
                      </Row>

                 </Container>

           </div>

              <div className='service__expert__doctor'>

                    <div className='service about-container'>
                        <h1>Expert & Varified Doctors</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
                   </div>


                   <div className='service__expert__doctor__footer'>
                       <Container>
                            <Row>
                                 <Col>
                                    
                                    <ul><li><a href=""><img src={arow} alt="" />Generel Physician</a></li></ul>
                                    <ul><li><a href=""><img src={arow} alt="" />Pediatrics / Child Care</a></li></ul>
                                    <ul><li><a href=""><img src={arow} alt="" />Gynaecology</a></li></ul>
                                    <ul><li><a href=""><img src={arow} alt="" />Neurology / Brain</a></li></ul>
                                    <ul><li><a href=""><img src={arow} alt="" />Pulmonology / Lungs</a></li></ul>
                                    <ul><li><a href=""><img src={arow} alt="" />Herbal Medicine</a></li></ul>
                                 </Col>


                                  <Col>
                                  
                                    <ul><li><a href=""><img src={arow} alt="" />Gastroenterology</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Cardiology / Heart</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Ophthalmology /Eye</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Dentisty /Dental Care</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Endocrinology/Diabetes</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Occaupation therapy</a></li></ul>

                                  </Col>


                                  <Col>
                                    <ul><li><a href=""><img src={arow} alt="" />Nephrology/Kedney</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Obstetrics</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />ENT/Ear,Nose</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Parasitology</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Podiatry</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Oncology</a></li></ul>
                                    
                                  </Col>


                                  <Col>
                                        
                                    <ul><li><a href=""><img src={arow} alt="" />Psychiatry</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Rheumatology</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Urology</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Chiropractic</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Dermatology</a></li></ul>
                                        <ul><li><a href=""><img src={arow} alt="" />Vascular Surgery</a></li></ul>
                                    </Col>

                            </Row>
                       </Container>

                   </div>




              </div>



              {/* expert doctor */}

            <div className='Doctor about__vedio'>
            <div className='about-container'>
                <h1>Are Uou a Qualified & Expert Doctor</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aliquid accusamus facere a numquam at reprehenderit officiis totam quisquam molestias.</p>
            </div>

        <div className='Doctor container__detail'>
          
          <Container>
              <Row>
                  
                  <Col>
                   <h4>Be a Part of TM</h4>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad quos optio nostrum voluptatibus enim vero? Tempore nobis rem deleniti molestias quaerat eos voluptatibus libero earum velit, explicabo mollitia voluptatem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ad quos optio nostrum voluptatibus enim vero? Tempore nobis rem deleniti molestias quaerat eos voluptatibus libero earum velit, explicabo.</p></Col>

                  <button className='read-btn'>Sign Up Now</button>
                  
                   <div className='About__vedio__consultation'>

                   <Col> <img src={girl__doctor} alt="" /></Col>

                   </div>
                   

              </Row>  
           </Container>
          </div>
        </div>



    </div>
  
  ) 
};

export default Service;
