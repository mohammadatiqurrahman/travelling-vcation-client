import React from 'react';

const ShowTraveller = (props) => {
    const {img,name} = props.traveller;
    return (
        <div>
            <img style={{width: '100%'}} src={img} alt="" />
            <h5 className="mt-4">{name}</h5>
        </div>
    );
};

export default ShowTraveller;