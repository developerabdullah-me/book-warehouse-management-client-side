import React from "react";
import { Link } from "react-router-dom";
import ProductInventory from "../ProductInventory/ProductInventory";
import useInventoryItems from "../Sheare/UseInventoryItems/UseInventoryItems";

const ManageInventory = () => {
  const [InventoryItems, setInventoryItems] = useInventoryItems();
  // console.log(product);

 const productDeleteHandle=id=>{
    const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/InventoryItems/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = InventoryItems.filter(InventoryItems => InventoryItems._id !== id);
                setInventoryItems(remaining);
            })
        }
 }

  return (
    <div className=" grid my-10 mx-auto  px-5 pt-5 ">
      <div>
        <p className="text-center mx-auto text-4xl font-serif font-semibold mb-5 border-b-2 border-zinc-700 w-6/12">
          ALL PRODUCTS
        </p>
      </div>

      <div className="flex justify-end mb-4">
        <Link
          to="/serviceAdd"
          className="card-shadow px-3 py-2 font-semibold hover:text-black"
        >
          ADD NEW ITEM
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {InventoryItems.map((inventoryProduct) => (
          <ProductInventory key={inventoryProduct._id} inventoryProduct={inventoryProduct}  
          
          productDeleteHandle={productDeleteHandle}>
             
          </ProductInventory>
        ))}

        {/* <ProductsInInventory
          key={product._id}
          inventoryProduct={inventoryProduct}
        >
          productDeleteHandle={productDeleteHandle}
        </ProductsInInventory> */}
      </div>
    </div>
  );
};

export default ManageInventory;
