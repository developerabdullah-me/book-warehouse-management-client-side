import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
const {name,img,price,quantity,description}=props.service;
    return (
        <div className="">
  <div className="shadow-2xl mx-auto text w-80 px-3 py-2"data-aos="fade-down-right"
        >
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <p>price: ${price}</p>
            <p>quantity: {quantity}</p>
            <p>{description}</p>
           <Link to='/update' className="btn w-72">Update</Link>
        </div>
        </div>
      
    );
};

export default Service;