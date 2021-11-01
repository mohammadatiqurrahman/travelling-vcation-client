import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const {user} = useAuth();
    const {serviceId} = useParams();
    const [service,setService] = useState()
    useEffect(()=>{
        fetch(`https://thawing-harbor-82321.herokuapp.com/service/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data =>{
    axios.post('https://thawing-harbor-82321.herokuapp.com/users',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('successfull completed order')
            reset();
        }
    })
  };

return (
    <div>
        <h3 className="mt-4 mb-4 text-danger">Please Add Detail Information to Place Order</h3>
        <div className="d-flex">
            <div className="col-sm-12 col-md-6 col-lg-6">
                 <img src={service?.img} alt="" />
                 <h1>{service?.name}</h1>
                <p>{service?.description}</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 style-order">
                <h3>Provide Order Info</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 40 })} value = {user?.displayName}placeholder="name"/>
                <input {...register("email")} value={user?.email} placeholder="email" />
                <input type="number" {...register("phone")} placeholder="phone" />
                 <input {...register("address")} placeholder="address" />
                 <input {...register("place")} value={service?.name} placeholder="place" />
                 <input style={{width:'10%'}} type="submit" />
            </form>
        </div>
    </div>
        </div>
    );
};

export default PlaceOrder;