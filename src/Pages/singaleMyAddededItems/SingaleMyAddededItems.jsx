import React from 'react';

const singaleMyAddededItems = (props) => {
    const {img,price,name,quantity}=props.item;
    return (
        <div>
            <div className=""> 
   
   <div className="shadow-2xl px-3 py-2 w-80 mx-auto">
   <img src={img} alt=" " />
     <h1>{name}</h1>
     <p>price:${price}</p>
     <p>quantity:{quantity}</p>
   </div>
   
   </div>
        </div>
    );
};
export default singaleMyAddededItems;