import React from 'react';
import OurSpecialty from '../../OurSpecialty/OurSpecialty';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
          <Banner></Banner>
          <Services></Services>
          <OurSpecialty></OurSpecialty>
        </div>
    );
};

export default Home;