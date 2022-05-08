import React from "react";
import { Link } from "react-router-dom";
import ProductInventory from "../ProductInventory/ProductInventory";
import useInventoryItems from "../Sheare/UseInventoryItems/UseInventoryItems";

const ManageInventory = () => {
  const [InventoryItems, setInventoryItems] = useInventoryItems();
  // console.log(product);

  const productDeleteHandle = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      const url = `https://morning-mesa-90595.herokuapp.com/InventoryItems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = InventoryItems.filter(
            (InventoryItems) => InventoryItems._id !== id
          );
          setInventoryItems(remaining);
        });
    }
  };

  return (
    <div className=" grid my-10 mx-auto  px-5 pt-5 ">
      <div>
        <p className="text-center mx-auto text-4xl font-serif font-semibold mb-5 border-b-2 border-zinc-700 w-6/12">
          ALL PRODUCTS
        </p>
      </div>

      <div className="text-center mb-4">
        <Link to="/serviceAdd" className="btn px-3 py-2  w-48">
          ADD NEW ITEM
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-7 sm:grid-cols-3">
        {InventoryItems.map((inventoryProduct) => (
          <ProductInventory
            key={inventoryProduct._id}
            inventoryProduct={inventoryProduct}
            productDeleteHandle={productDeleteHandle}
          ></ProductInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
