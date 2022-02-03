import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import line from '../img/footer__line.png';
import Logo from '../img/Logo.png';
import '../components/Footer.css';
import arow from '../img/arow.png';
import location from '../img/location.png';
import insta from '../img/insta.png';
import twiter from '../img/twiter.png';
import youtube from '../img/youtube.png';
import face from '../img/face.png';
import site from '../img/site.png';
import email from '../img/email.png';
import linkdln from '../img/link.png';
import teliphn from '../img/tele.png';
import apple from '../img/apple.png';
import google from '../img/google.png';


const Footer = () => {
  return (
       
    <div className='Footer_info'>
        <img src={line} alt="" />

            <div className='footer__header'>
                <img src={Logo} alt="" />
            </div>

            <Container className='footer__top'>
                <Row>
                        <Col className='col__p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, velit! Repudiandae.</Col>

                        <Col>
                            <ul><li><a href=""><img src={arow} alt="" />Doctor</a></li></ul>
                            <ul><li><a href=""><img src={arow} alt="" />Service</a></li></ul>
                            <ul><li><a href=""><img src={arow} alt="" />Pharmacy </a></li></ul>
                        </Col>
                        <Col>
                            <ul><li><a href=""><img src={arow} alt="" />About Us</a></li></ul>
                            <ul><li><a href=""><img src={arow} alt="" />Blog</a></li></ul>
                            <ul><li><a href=""><img src={arow} alt="" />Contact Us</a></li></ul>
                        </Col>

                        <Col>
                            <ul><li><a href=""><img src={arow} alt="" />Terms</a></li></ul>
                            <ul><li><a href=""><img src={arow} alt="" />Privacy Policy</a></li></ul>
                            <ul><li><a href=""><img src={arow} alt="" />FAQ</a></li></ul>
                        </Col>
                </Row>
            </Container>

            
             <div className='footer container__contact'>
                   <h5>Contact Us</h5>
                   <Container>
                         <Row>
                                <Col className='footer_location__left'>
                                    <ul><li><a href=""><img src={location} alt="" />House-20,Road-27,Banani,Dhaka</a></li></ul>
                                    <ul><li><a href=""><img src={teliphn} alt="" />+8801234567890,+88058269458</a></li></ul>
                                    <ul><li><a href=""><img src={email} alt="" />tmbd@gmail.com </a></li></ul>
                                    <ul><li><a href=""><img src={site} alt="" />tmbd.com </a></li></ul>
                                </Col>

                                
                                   <Col className='footer_location__midd'>
                                   <h6>Social Links</h6>
                                    <div className='social__link'>

                                    <ul><li><a href=""><img src={face} alt="" /></a></li></ul>
                                    <ul><li><a href=""><img src={youtube} alt="" /></a></li></ul>
                                    <ul><li><a href=""><img src={twiter} alt="" /></a></li></ul>
                                    <ul><li><a href=""><img src={insta } alt="" /></a></li></ul>
                                    <ul><li><a href=""><img src={linkdln} alt="" /></a></li></ul>

                                    </div>
                                   </Col>
                                
                                   <Col className='footer__right__part'>
                                    
                                    <div className='footer__right'>
                                        <ul className='our-app'><li><a href=""><img src="" alt="" />Download Our App</a></li></ul>
                                        <ul><li><a href=""><img src={google} alt="" /></a></li></ul>
                                        <ul><li><a href=""><img src={apple} alt="" /> </a></li></ul>

                                    </div>

                                    </Col>
                         </Row>
                   </Container>

                   <div className='footer__bottom'>
                       <p>@ Copyright TM 2021,All rights reserved, Created by Golden Infotech</p>
                       
                   </div>
                 
             </div>





        
    </div>
  )
};

export default Footer;
