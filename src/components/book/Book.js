import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './book.css'
const Book = () => {
    const {bookId } = useParams()
    const [bookPackage,setBookPackage] = useState({})
    useEffect(()=>{
        const url = `https://travelwarrior.herokuapp.com/package/${bookId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setBookPackage(data))
    },[])
    const {_id,imgUrl,place,price,hotel,duration,person,description} = bookPackage
        return (
        <div className='book-style'>
            <div className='text-center border rounded mx-5 my-5'>
              <img src={imgUrl} className="m-3 rounded circle" width="300" height="250" alt="" />
              <div className='w-50 mx-auto'>
              <p><span className='fw-bolder'>Place </span> : {place}</p>
              <p> <span className='fw-bolder'>Price </span> : {price}</p>
              <p> <span className='fw-bolder'>Hotel </span> : {hotel}</p>
              <p><span className='fw-bolder'>Duration </span> : {duration}</p>
              <p><span className='fw-bolder'>Person </span> :{person}</p>
              <p><span className='fw-bolder'>Description </span> :{description}</p>
              <Link to={`/placeOrder/${_id}`}><button className=' btn btn-success rounded circle m-4'>Place Order</button></Link>
              </div>
            </div>
        </div>
    );
};

export default Book;