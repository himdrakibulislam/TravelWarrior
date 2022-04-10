import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-style text-white'>
        
        <Row>
            <Col lg='4' sm='12'>
                <h5>Recent Posts</h5>
                <p className='text-style'>Good travel tips: wake up early and see everything
                Summarize what you want and where you wanna go</p>
            </Col>
            <Col lg='4' sm='12'>
                <h5>Visit Us</h5>
                <p className='text-style'>
                123 Anywhere street 12345 comilla, Bangladesh
                </p>
            </Col>
            <Col lg='4' sm='12'>
                    
                <h5> Contact</h5>
                <p className='text-style'>travelwarrior@gmail.com</p>
            </Col>

            </Row>
            
        </div>
    );
};

export default Footer;