import React from 'react';

const ProductInventory = (props) => {
    const {inventoryProduct,productDeleteHandle}= props;
    const {name,price,quantity,img}=inventoryProduct;
    return (
        <div >
          <div className="shadow-2xl px-3 py-2 w-80 mx-auto">
          <div className="">
               <img src={img} alt="" />
               <h1>{name}</h1>
               <p>$ <small>{price}</small> </p>
               <p>quantity <small>{quantity}</small> </p>
           </div>

            <div className="">
                <button className="btn"onClick={()=>productDeleteHandle(inventoryProduct._id)}>Delete</button>
            </div>
          </div>
        </div>
    );
};

export default ProductInventory;