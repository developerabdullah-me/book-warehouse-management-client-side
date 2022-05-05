import React from 'react';
import BestBooks from '../../BestBooks/BestBooks';
import OurSpecialty from '../../OurSpecialty/OurSpecialty';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
           
          <Banner></Banner>
          <InventoryItems></InventoryItems>
          {/* <OurSpecialty></OurSpecialty> */}
          <BestBooks>
            
          </BestBooks>
        </div>
    );
};

export default Home;