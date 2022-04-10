import React, { useEffect, useState } from 'react';
import {Row, Spinner } from 'react-bootstrap';
import { addToLocal } from '../../hook/useLocal';
import Package from '../package/packages';
import './home.css';
const Home = () => {
    const [packages,setPackages] = useState([])
    useEffect(()=>{
        fetch('https://travelwarrior.herokuapp.com/allPackages')
        .then( res =>res.json())
        .then(data => setPackages(data))
    },[])
    const handleAddPackage = (id) =>{
        addToLocal(id)
    }
    return (
        <div>
            
                <h3 className='text-center my-5'>Tour <span className='text-success'>Packages</span></h3>
                <div className='spinner-style'>
                <div>
                {
                    packages.length === 0 ?<div className='spinner-style'> <Spinner animation="grow" variant="info" /></div>:<Row>
               
                    {
                        packages.map(packages => <Package key={packages._id} addPackage={handleAddPackage} packages={packages}></Package>)
                    }
    
                </Row>
                }
                </div>

                </div>
                
        </div>
    );
};

export default Home;