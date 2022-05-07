import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InventoryItem = (props) => {
const {name,img,price,quantity,description,_id}=props.service;
const navigate=useNavigate()
const handelUpdate=(id) => {
    navigate(`/update/${_id}`)
}
    return (
        <div className="">
  <div className="shadow-2xl px-3 py-2 w-80 mx-auto "data-aos="fade-down-right"
        >
            <img className="w-96 h-96" src={img} alt="" />
            <h1>Name: {name}</h1>
            <p>price: ${price}</p>
            <p>quantity: {quantity.slice(0,15)}</p>
            <p>{description}</p>
           <button onClick={() =>handelUpdate(_id)} className="btn w-72">Update</button>
        </div>
        </div>
      
    );
};

export default InventoryItem;