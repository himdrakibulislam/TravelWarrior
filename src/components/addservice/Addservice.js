import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './addservice.css';
const Addservice = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    axios.post('https://travelwarrior.herokuapp.com/package', {
      data
    })
    .then(function (response) {
      if(response.data.insertedId){
       reset();
       alert("Service Added");
       
      }
    })
    .catch(function (error) {
      console.log(error);
    });};
    return (
        <div className='addservice-style'>
       <div>
       <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Image Url' {...register("imgUrl", { required: true, maxLength: 100 })} />
      <br />
      <input placeholder='Place' {...register("place", { required: true, maxLength: 20 })} />
      <br />
      <input placeholder='Price'{...register("price")} />
      <br />
      <input placeholder='Hotel'{...register("hotel")} />
      <br />
      <input placeholder='Duration'{...register("duration")} />
      <br />
      <input placeholder='Person'{...register("person")} />
      <br />
      <textarea placeholder='Description'{...register("description")} />
      <br />
      <input className=' bg-success border rounded' type="submit" />
    </form>
       </div>
        </div>
    );
};

export default Addservice;