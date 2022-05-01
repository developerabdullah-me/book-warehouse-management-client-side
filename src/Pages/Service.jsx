import React from 'react';

const Service = (props) => {
const {name,img,price,quantity,description}=props.service;
    return (
        <div className="shadow-2xl mx-auto text w-80 px-3 py-2">
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <p>price: ${price}</p>
            <p>quantity: {quantity}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;