import React, { useEffect, useState } from 'react';
import './manageorder.css'
const ManageOrder = () => {
    const [manageOrders,setManageOrders] = useState([])
    useEffect(()=>{
        fetch('https://travelwarrior.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setManageOrders(data))

    },[])
    console.log(manageOrders)
    return (
        <div className='manageorder-style'>
            <h3 className='text-center text-primary mb-2'>All Order</h3>
            {
                manageOrders.map(manageOrder=> <div className='mb-5' key={manageOrder._id}>
                   <table className='border d-flex'>
                   <div className='me-2 '>
                   <tr className='fw-bolder'>Email</tr>
                    <td>{manageOrder.email}</td>
                   </div>
                   <div>
                   <tr className='fw-bolder'>Address</tr>
                    <td>{manageOrder.address}</td>
                    <td>{manageOrder.city}</td>
                    <tr className='fw-bolder'>Order Info</tr>
                    <td>{manageOrder.orderPackageInfo.place}</td>
                    <td>${manageOrder.orderPackageInfo.price}</td>
                    <button className='btn btn-danger'>Delete</button>
                   </div>
                   </table>
                </div>)
            }
        </div>
    );
};

export default ManageOrder;