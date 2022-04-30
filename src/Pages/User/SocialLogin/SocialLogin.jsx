import React from 'react';
import google from '../SocialLogin/sosial-logo/google-logo.png'
import github from '../SocialLogin/sosial-logo/github-log.png'
import facebook from '../SocialLogin/sosial-logo/Facebook-logo.png'
const SocialLogin = () => {
    return (
        <div>
             <button className=" m-4" stroke="currentColor" > <img  className="bg-white rounded-full p-1 " src={google} alt="" /> </button>
            <button className=" m-4" stroke="currentColor"><img className="bg-white rounded-full p-1 " src={facebook} alt="" /></button>
            <button className=" m-4" stroke="currentColor" > <img  className="bg-white rounded-full p-1 " src={github} alt="" /> </button>
        </div>
    );
};

export default SocialLogin;