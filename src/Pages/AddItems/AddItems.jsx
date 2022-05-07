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
    console.log('Success:', data);
    toast.success('Success',data)
    
  })
 
    }
    return (
     <div className="mx-auto w-full mt-20 py-10">
<h1 className='text-center text-4xl py-5'>Places Added Your Best Book</h1> 
     <form className=' grid justify-center' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2 outline-none w-72 bg-slate-100 py-3 px-2 ' placeholder='name' {...register("name" )} />
      <input className='mb-2 block outline-none w-72 bg-slate-100 py-3 px-2 ' value={user.email} placeholder='email' type="email" {...register("email")} />
      <input className='mb-2 block outline-none w-72 bg-slate-100 py-3 px-2 ' placeholder='price' type="text" {...register("price")} />
      <input className='mb-2 block outline-none w-72 bg-slate-100 py-3 px-2 ' placeholder='quantity' type="text" {...register("quantity")} />
      <input className='mb-2 block outline-none w-72 bg-slate-100 py-3 px-2 ' placeholder='img' type="text" {...register("img")} />
      <textarea className='mb-2 block  w-72 h-12 border-2 outline-none' placeholder='description' {...register("description", )} />
      <input className='mb-2 block   w-72 bg-slate-100 py-3 px-2 ' value='Add Product' type="submit" />
    </form>
        </div>
    );
};

export default AddItems;