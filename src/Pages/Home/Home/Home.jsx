import React from 'react';
import Locations from '../../Locations/Locations';

import OurSpecialty from '../../OurSpecialty/OurSpecialty';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
           
          <Banner></Banner>
          <InventoryItems></InventoryItems>
          <OurSpecialty></OurSpecialty>
          <Locations></Locations>
        
        </div>
    );
};

export default Home;