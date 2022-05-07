
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';
import SingaleMyAddededItems from '../singaleMyAddededItems/SingaleMyAddededItems'
const MyAddededItems = () => {

    const [user] = useAuthState(auth);
 const [items, setItems] = useState([]);
   const navigate = useNavigate();
    useEffect( () => {
        
        const myAddedItems = async() =>{
            const email = user.email;
            const url = `https://morning-mesa-90595.herokuapp.com/myAddedItems?email=${email}`;
            try{
                const {data} = await axios.get(url,{
                    headers: {
                        authorization:` Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        myAddedItems();

    }, [user])

    

    return (
        <div className='px-20'>
            
        <h1 className='text-center mx-auto text-4xl mb-5 font-bold border-b-2 border-zinc-600 w-6/12'>My Added Items{items.length}</h1>
        
<div className='grid md:grid-cols-3 gap-7 sm:grid-cols-3'>
   { 
   items.map(item => <SingaleMyAddededItems item={item} key={item._id}></SingaleMyAddededItems>)
   }
</div>
        </div>
    );
};

export default MyAddededItems;