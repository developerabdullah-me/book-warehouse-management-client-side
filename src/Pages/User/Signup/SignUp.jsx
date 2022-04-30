import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    const handleRegister =async ( event )=>{
        event.preventDefault();
       
    }
    return (
        <div>
          <div className=" mx-auto">
       
       <h1 className='text-center'>please register</h1>
      
       <div className ='mx-auto'>
             <div className ='text-center'>
            
             <SocialLogin></SocialLogin>
             </div>
             
          <div>
           
            <div className="flex items-center justify-center">
            <div className="h-1 bg-slate-700 w-28 rounded "></div>
             <p className="px-2">or</p>
             <div className="h-1 bg-slate-700 w-28 rounded "></div>
           
           </div>
         </div>
       <form onSubmit={handleRegister}>
         <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="name" placeholder="Name" required/>
         <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="email" name="email" placeholder="type your email" required/>
         <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="password" name="password" placeholder="type your password" required/>
         <input className="block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto" type="password" name="password" placeholder="type your confirm password" required/>
         <input className='block bg-slate-100 my-3 py-2 px-2 w-80 pl-4 outline-none mx-auto'  type="submit" value="Register" />
       </form>
       </div>
 
       <div className='pt-2 font-medium text-center'>
      <p> Already have an account ?   <Link to='/login' className='border-b'>please login </Link></p>
       </div>
       
     </div>
        </div>
    );
};

export default SignUp;