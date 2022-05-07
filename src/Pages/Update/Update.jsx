import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Update = () => {

    const { Id } = useParams()
console.log(Id);
    const [product, setProduct] = useState({})

    const { img, name, description, price, quantity } = product;

    useEffect(() => {
        fetch(`https://morning-mesa-90595.herokuapp.com/InventoryItems/${Id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])
    return (
        <div>
          <div className="shadow-lg w-80  mx-auto p-5 mb-7">
         <div className=" ">
         <img className="w-32 mx-auto rounded" src={img} alt="" />
             <div className="text-center">
             <h1> {name} </h1>
              <p> quantity: {quantity }</p>
              <p>price:{price}</p>
               
              <p> Add quantity : <input className='w-1/3' type="number" p /></p>
             </div>
         </div>
           <div className=" flex justify-around mt-3">
           <button className='btn'>Delivery</button>
           <button className='btn'>Add quantity</button>
           </div>
          </div>
        </div>
    );
};

export default Update;