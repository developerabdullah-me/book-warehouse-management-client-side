import React from 'react';
import Service from '../../Service';
import useServices from '../../Sheare/Usedata/UseData';


const Services = () => {
    const [services,setServices]=useServices()
    return (
        <div>
   
   <h1 className="text-center text-3xl font-bold py-10">Our items{services.length}</h1>
   <div className="grid md:grid-cols-3 gap-7 sm:grid-cols-3 px-16">
   { 
   services.slice(0,6).map(service => <Service service={service} key={service._id}></Service>)
   }
   </div>
        </div>
    );
};

export default Services;