import { useEffect, useState } from "react"

const useInventoryItems=()=>{
    const [InventoryItems,setInventoryItems]=useState([])
    useEffect( ()=>{
      fetch('http://localhost:5000/InventoryItems')
      .then(res => res.json())
      .then(data => setInventoryItems(data));
  }, []);
  return  [InventoryItems,setInventoryItems]
}
export default useInventoryItems


