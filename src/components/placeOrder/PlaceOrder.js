import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './plaeOrder.css'
const PlaceOrder = () => {
    const [placeOrder,setPlaceOrder] = useState({})
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => { 
    data['orderPackageInfo']  = placeOrder   
    axios.post('https://travelwarrior.herokuapp.com/placeOrder', {
        data
      })
      .then(function (response) {
        if(response.data.insertedId){
         reset();
         alert("Order Successful")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}
    const {placeOrderId} = useParams()
    useEffect(()=>{
        const url = `https://travelwarrior.herokuapp.com/package/${placeOrderId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setPlaceOrder(data))
    },[])
  const {user} = useAuth();
    return (
        <div className='placeOrder-style'>
            <h3 className='text-center'>Place Order</h3>
            <div className='addservice-style'>
       <div>
       <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} placeholder='Name' {...register("name", { required: true, maxLength: 100 })} />
      <br />
      <input defaultValue={user.email} placeholder='E-mail' {...register("email", { required: true, maxLength: 100 })} />
      <br />
      <input placeholder='Address'{...register("address")} />
      <br />
      <input placeholder='City'{...register("city")} />
      <br />
      <input className=' bg-success border rounded' type="submit" />
    </form>
       </div>
        </div>
        </div>
    );
};

export default PlaceOrder;