import { useEffect, useState } from "react"

const useInventoryItems=()=>{
    const [InventoryItems,setInventoryItems]=useState([])
    useEffect( ()=>{
      fetch('https://morning-mesa-90595.herokuapp.com/InventoryItems')
      .then(res => res.json())
      .then(data => setInventoryItems(data));
  }, []);
  return  [InventoryItems,setInventoryItems]
}
export default useInventoryItems


