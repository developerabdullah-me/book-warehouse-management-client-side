import React from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../../Sheare/InventoryItem/InventoryItem';

import useInventoryItems from '../../Sheare/useInventoryItems/useInventoryItems';


const InventoryItems = () => {
    const [InventoryItems,setInventoryItems]=useInventoryItems()
    return (
        <div>
   
   <h1 className="text-center text-3xl font-bold py-10" >Our items{InventoryItems.length}</h1>
   <div className="grid md:grid-cols-3 gap-7 sm:grid-cols-3 "  >
   { 
   InventoryItems.slice(0,6).map(service => <InventoryItem service={service} key={service._id}></InventoryItem>)
   }
   </div>
  <div className='w-full flex justify-center mt-10'data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
  <Link to='/manageInventory' className="btn w-72" >ManageInventory</Link>
  </div>
        </div>
    );
};

export default InventoryItems;