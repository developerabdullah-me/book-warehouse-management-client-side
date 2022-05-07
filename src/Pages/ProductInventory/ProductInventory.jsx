import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductInventory = (props) => {
    const {inventoryProduct,productDeleteHandle}= props;
    const {name,price,quantity,img,_id}=inventoryProduct;
    const navigate=useNavigate()
const handelUpdate=(id) => {
    navigate(`/update/${_id}`)
}
    return (
        <div >
          <div className="shadow-2xl px-3 py-2 w-80 mx-auto">
          <div className="">
               <img className="" src={img} alt="" />
               <div className=" ml-4">
               <h1>{name}</h1>
               <p>$ <small>{price}</small> </p>
               <p>quantity <small>{quantity}</small> </p>
               </div>
           </div>

            <div className=" flex justify-around mt-3">
                <button className="btn rounded"onClick={()=>productDeleteHandle(inventoryProduct._id)}>Delete</button>

                <button onClick={() =>handelUpdate(_id)} className="btn  rounded">Update</button>
            </div>
          </div>
        </div>
    );
};

export default ProductInventory;