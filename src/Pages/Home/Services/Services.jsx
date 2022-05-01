import React from 'react';
import useServices from '../../Sheare/Usedata/UseData';


const Services = () => {
    const [services,setServices]=useServices()
    return (
        <div>
   
   <h1>services{services.length}</h1>
        </div>
    );
};

export default Services;