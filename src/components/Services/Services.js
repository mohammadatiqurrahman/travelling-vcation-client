import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://thawing-harbor-82321.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container">
            <Row xs={1} md={3} lg={3} className="g-4">
            {
                services?.map(service=><ShowServices
                key = {service._id}
                service={service}
                ></ShowServices>)  
            }
            </Row>
        </div>
    );
};

export default Services;