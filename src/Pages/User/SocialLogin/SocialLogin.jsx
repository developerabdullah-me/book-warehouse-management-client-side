import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import google from '../SocialLogin/sosial-logo/google-logo.png'
import github from '../SocialLogin/sosial-logo/github-log.png'
import facebook from '../SocialLogin/sosial-logo/Facebook-logo.png'
import auth from '../../../firebase.init';
import Loding from '../../Sheare/Loding/Loding';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const [user] = useAuthState(auth);
    const [signInWithGoogle, userGoogle, loadinguserGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    if(loadinguserGoogle || loadingGithub ||  facebookLoading){
        return <Loding></Loding>
      }

      let from = location.state?.from?.pathname || "/";
      
      if(user){
        navigate(from, { replace: true });
      }

      let elementErrors ;
      if (errorGithub || errorGoogle || facebookError) {
        toast.error('alert-warning')
        
             
        }
        else{
          toast.success("success")
        }
    return (
        <div>
           <ToastContainer/>
             <button className=" m-4" stroke="currentColor" onClick={() => signInWithGoogle()}> <img  className="bg-white rounded-full p-1 " src={google} alt="" /> </button>
            <button onClick={() => signInWithFacebook()} className=" m-4" stroke="currentColor"><img className="bg-white rounded-full p-1 " src={facebook} alt="" /></button>
            <button className=" m-4" stroke="currentColor" onClick={() => signInWithGithub
                ()}> <img  className="bg-white rounded-full p-1 " src={github} alt="" /> </button>
        </div>
    );
};

export default SocialLogin;