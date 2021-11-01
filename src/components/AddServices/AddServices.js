import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddServices.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post('https://thawing-harbor-82321.herokuapp.com/places',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('successfull')
            reset();
        }
    })
  };
    return (
        <div  className="style-service">
            <h1>Add Services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 40 })} placeholder="name"/>
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img url" />
                <input style={{width:'10%'}} type="submit" />
            </form>
        </div>
    );
};

export default AddServices;