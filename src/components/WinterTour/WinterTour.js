import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowWinter from '../ShowWinter/ShowWinter';
import './WinterTour.css'

const WinterTour = () => {
    const [winter,setWinter] = useState([])
    useEffect(()=>{
        fetch('./tour.json')
        .then(res=>res.json())
        .then(data=>setWinter(data))
    },[])
    return (
            <div className="container">
            <h4 className="tour1">Enjoy Your</h4>
            <h1 className="tour2">Winter Holiday</h1>
            <p className="tour3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum.</p>
             <Row xs={1} md={4} lg={4} className="g-4">
            {
                winter.map(service=><ShowWinter
                service={service}
                ></ShowWinter>)  
            }
            </Row>
        </div>
    );
};

export default WinterTour;