import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowTraveller from '../ShowTraveller/ShowTraveller';

const Traveller = () => {
    const [travellers,setTravellers] = useState([])
    useEffect(()=>{
        fetch('./traveller.json')
        .then(res=>res.json())
        .then(data=>setTravellers(data))
    },[])
    return (
        <div style={{marginTop: '100px'}}>
            <div className="container">
            <h4>The Best</h4>
            <h1 style={{fontWeight: 'bolder', fontSize: '50px'}}>Travel Experts</h1>
            <p className="w-75 mx-auto" style={{marginBottom: '50px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore doloribus qui alias repellendus, atque possimus nihil officiis deserunt officia sapiente ut beatae asperiores quos? Esse quis voluptatibus, omnis exercitationem at vero modi id similique iusto, sit assumenda inventore voluptate! Ipsum.</p>
            </div>
            <Row xs={1} md={4} lg={4} className="g-4">
            {
                travellers?.map(traveller=><ShowTraveller traveller={traveller}></ShowTraveller>)  
            }
            </Row>
        </div>
    );
};

export default Traveller;