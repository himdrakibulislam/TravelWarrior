import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './package.css'
const Packages = (props) => {
    const {_id,imgUrl,place,price,hotel,duration,person,description} = props.packages
    return (
           <Col lg="3" md="6" sm="12" className='mb-4 d-flex justify-content-center'>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" width="286" height="188" src={imgUrl} />
            <Card.Body className='text-center'>
                <Card.Title>{place} <span className='text-danger'>${price}</span></Card.Title>
                <Card.Text>
                    <p className='details'>Hotel: {hotel}</p>
                    <p className='details'>Duration:{duration} days</p>
                    <p className='details'>Person: {person}</p>
                    <p>{description.slice(0,30)}....</p>
                    <Link to={`/book/${_id}`}><button onClick={()=>{props.addPackage(_id)}} className='package-button'>Book Now</button></Link>
                </Card.Text>
            </Card.Body>
            </Card>
           </Col>
       
    );
};

export default Packages;
