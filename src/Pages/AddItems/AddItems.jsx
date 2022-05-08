import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
  const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
      console.log(data);
      const url=`https://morning-mesa-90595.herokuapp.com/InventoryItems`
      fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    
    toast.success('Success',data)
   
  })
  
    }
    
    return (
     <div className="mx-auto w-full mt-20 py-10">
<h1 className='text-center text-4xl py-5 text-cyan-600'>Places Added Your Best Book</h1> 
     <form className=' grid justify-center shadow-lg md:w-1/3 mx-auto py-6' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-5 outline-none w-72 outline-gray-900 py-3 px-2 ' placeholder='name' {...register("name" )} required/>
      <input className='mb-5 block outline-none w-72 outline-gray-900 py-3 px-2 ' value={user.email} placeholder='email' type="email" {...register("email")}required />
      <input className='mb-5 block outline-none w-72 outline-gray-900 py-3 px-2 ' placeholder='price' type="text" {...register("price")} required/>
      <input className='mb-5 block outline-none w-72 outline-gray-900 py-3 px-2 ' placeholder='quantity' type="number" {...register("quantity")} required/>
      <input className='mb-5 block outline-none w-72 outline-gray-900 py-3 px-2 ' placeholder='img' type="text" {...register("img")} required/>
      <textarea className='mb-5 block outline-gray-900 w-72 h-12 border-2 outline-none' placeholder='description' {...register("description", )} required/>
      <input className='mb-5 block cursor-pointer btn w-72 py-3 px-2 ' value='Add Product' type="submit" />
    </form>
        </div>
    );
};

export default AddItems;