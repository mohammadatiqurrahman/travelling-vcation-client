import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './ShowServices.css'

const ShowServices = (props) => {
    const {_id,name,img,description} = props.service;
    return (

        <div className="mt-4 pt-4">
            <Col>
                <img className="style-img"  src={img} alt="" />
                <h4 className="text-start mt-4 text-primary">{name}</h4>
                <p className="text-start mt-4">{description.slice(0,150)}</p>
                <Link to={`/place_order/${_id}`}><Button variant="secondary" size="sm">Purchase Now</Button></Link>
            </Col>
        </div>
    );
};

export default ShowServices;