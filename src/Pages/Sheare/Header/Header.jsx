import { signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handelSignOut = () => {
    signOut(auth);
  };
    return (
        <div className="">
 

 <nav className="
relative
w-full
flex flex-wrap
items-center
justify-between
py-4
bg-gray-100
text-gray-500
hover:text-gray-700
focus:text-gray-700
shadow-lg
navbar navbar-expand-lg navbar-light
">
<div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
<button className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
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
<Link to='/' className="text-xl text-black">Navbar</Link>
<div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
<ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto">
  <li className="nav-item px-2">
    <Link to='/blog' className="nav-link active" aria-current="page">Blog</Link>
  </li>
  <li className="nav-item pr-2">
    <Link to='/about' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">About</Link>
  </li>

<li className="nav-item pr-2 dropdown  static">
          <li className=" cursor-pointer  transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"  data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonQ" data-bs-toggle="dropdown"
          aria-expanded="false">Best Product
            <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </li>
          <div className="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full" aria-labelledby="dropdownMenuButtonQ">
            <div className="px-6 lg:px-8 py-5">
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="bg-white text-gray-600">
                  <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Lorem ipsum</p>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                </div>
                <div className="bg-white text-gray-600">
                  <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Explit voluptas</p>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                </div>
                <div className="bg-white text-gray-600">
                  <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Iste quaerato</p>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                  <li  aria-current="true" className="block px-6 py-3 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                  </li>
                </div>
                <div className="bg-white text-gray-600">
                  <p className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">Cras justo odio</p>
                  <li  aria-current="true" className="block px-6 py-3 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center">
                    <div className="shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" className="w-20 shadow-lg rounded" alt="Hollywood Sign on The Hill"/>
                    </div>
                    <div className="grow ml-4">
                      <p className="mb-1 font-semibold">Sed ut perspiciatis unde omnis</p>
                      <p><u>15.07.2021</u></p>
                    </div>
                 
    
                  </li>
                </div>
              </div>
            </div>
          </div>
        </li>

{/* register */}
    <li className="nav-item pr-2">
    <Link to='/login' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Login</Link>
  </li>
  <li className="nav-item pr-2">
   { user? (
     <button  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" onClick={handelSignOut}>
     signOut{" "}
   </button>
   ):(
    <Link to='/register' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Register</Link>
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