import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import './myorder.css'
const MyOrder = () => {
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://travelwarrior.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))

    },[])
  const {user} = useAuth();
  const handleDelete =(id) =>{
      const confirm = window.confirm('Do you Want to Delete The Package?')
      if(confirm){
        const url = `https://travelwarrior.herokuapp.com/deleteOrder/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                const remaining = orders.filter(orders => orders._id !== id)
                setOrders(remaining)
            }
        })
      }else{

      }
    
  }
  console.log(orders)
    return (
        <div className='cart-style'>
            <h3 className='text-center my-5 '>My Orders</h3>
          {
              orders.map(order => order.email === user.email ? <div key={order._id} className='d-flex  mb-4 border'>
                  <img className='me-2 img-style' src={order.orderPackageInfo.imgUrl} width='150' alt="" />
                 <div className='h-50'>
               <h3>Place:{order.orderPackageInfo.place}</h3>
                 <p> Price: $ {order.orderPackageInfo.price}</p>
                 <p>Order stauts : <span className='text-success'>Approved</span>
                 </p>
                 <button onClick={()=>handleDelete(order._id)} className='btn btn-danger m-1'>Delete Order</button>
                 
                 </div>
              </div> : <div></div>)
          }
        </div>
    );
};

export default MyOrder;