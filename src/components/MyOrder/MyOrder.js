import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import ShowMyOrder from '../ShowMyOrder/ShowMyOrder';
const MyOrder = () => {
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://thawing-harbor-82321.herokuapp.com/user_info')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
            // console.log('infos are: ',info);
        })
    },[])

    const handleDeleteUser=(id)=>{
        const url = `https://thawing-harbor-82321.herokuapp.com/users/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Successfully Deleted!')
                const remainingOrders = orders.filter(order=>order._id !==id)
                setOrders(remainingOrders);
            }
        })
    }

    return (
        <div>
            {/* {
                users?.map(user=><ShowMyOrder
                key = {user._id}
                user = {user}
                ></ShowMyOrder>)
            } */}
            {
                orders?.map(order=> <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Place</th>
                    <th>Booking Id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{order.name}</td>
                    <td>{order.emailemail}</td>
                    <td>{order.phone}</td>
                    <td>{order.address}</td>
                    <td>{order.place}</td>
                    <td>{order._id}</td>
                    <td><button onClick={()=>handleDeleteUser(order._id)}>Delete</button></td>
                    </tr>
                </tbody>
                </Table>)
            }
        </div>
    );
};

export default MyOrder;