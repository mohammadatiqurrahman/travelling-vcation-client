import React from 'react';

const ShowWinter = (props) => {
    const {img,catefory,pera} = props.service;
    return (
        <div>
            <img src={img} alt="" />
            <h4 className="mt-4">{catefory}</h4>
            <p className="mt-4">{pera}</p>
        </div>
    );
};

export default ShowWinter;