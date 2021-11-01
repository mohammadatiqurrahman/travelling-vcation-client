import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner3 from '../../images/banner/banner3.jpg'
import banner5 from '../../images/banner/banner5.jpg'
// import './Heading.css'

const Heading = () => {
    return (
    <div className="container mt-4">
<Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100 mx-auto heightt"
            src={banner3}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 style={{color: 'black'}}>First slide label</h3>
            <p style={{color: 'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
            <img
            className="d-block w-100 heightt"
            src={banner5}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3 style={{color: 'black'}}>Second slide label</h3>
            <p style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
            <img
            className="d-block w-100 heightt"
            src={img4}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item> */}
    </Carousel>
    </div>
    );
};

export default Heading;