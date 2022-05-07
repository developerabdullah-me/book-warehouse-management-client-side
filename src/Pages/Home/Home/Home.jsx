import React from 'react';

import OurSpecialty from '../../OurSpecialty/OurSpecialty';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
           
          <Banner></Banner>
          <InventoryItems></InventoryItems>
          {/* <OurSpecialty></OurSpecialty> */}
        
        </div>
    );
};

export default Home;