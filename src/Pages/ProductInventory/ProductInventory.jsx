import React from 'react';

const ProductInventory = (props) => {
    const {inventoryProduct,productDeleteHandle}= props;
    const {name,price,quantity,img}=inventoryProduct;
    return (
        <div>
          
            <h1>name {name}</h1>

            <div className="">
                <button onClick={()=>productDeleteHandle(inventoryProduct._id)}>Delete</button>
            </div>
        </div>
    );
};

export default ProductInventory;