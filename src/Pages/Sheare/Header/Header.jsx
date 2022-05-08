import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useInventoryItems from'../UseInventoryItems/UseInventoryItems'
const Header = () => {
  const [user] = useAuthState(auth);
  const handelSignOut = () => {
    signOut(auth);
  };
  const [InventoryItems,setInventoryItems]=useInventoryItems()
    return (
        <div className=" sticky-top">
 

 <nav className="
 relative
w-full
flex flex-wrap
items-center
justify-between
py-4

hover:text-gray-700
focus:text-gray-700
navbar navbar-expand-lg 
">
<div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
<button className="
    navbar-toggler
  
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
  className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path fill="currentColor"
    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
  </path>
</svg>
</button>
<Link to='/' className="text-xl text-black">Books warehouse</Link>
<div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
<ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto">
 
  
  <li className="nav-item px-2">
    <Link to='/manageInventory' className="nav-link active hover:border-b-4 " aria-current="page">ManageInventory</Link>
  </li>

{ user && <>

 
 
  <li className="nav-item px-2">
    <Link to='/myAddedItems' className="nav-link active hover:border-b-4 " aria-current="page">MyAdded Items</Link>
  </li>
  <li className="nav-item px-2">
    <Link to='/serviceAdd' className="nav-link active hover:border-b-4 " aria-current="page">serviceAdd</Link>
  </li>
  
</>}

<li className="nav-item px-2">
    <Link to='/blog' className="nav-link active hover:border-b-4 " aria-current="page">Blog</Link>
  </li>

  <li className="nav-item pr-2">
   { user? (
     <button  className="nav-link text-red-500 font-bold hover:text-gray-700 focus:text-gray-700 p-0" onClick={handelSignOut}>
     signOut{" "}
   </button>
   ):(
    <Link to='/register' className="nav-link text-black hover:text-gray-700 focus:text-gray-700 p-0">Register</Link>
   )}
  </li>
  
</ul>
</div>
</div>
  </nav>
        </div>
    );
};

export default Header;