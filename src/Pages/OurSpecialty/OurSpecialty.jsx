
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./OurSpecialty.css";

// import required modules
import { Pagination } from "swiper";
import useServices from "../Sheare/Usedata/UseData";


const OurSpecialty = () => {
    const [services,setServices]=useServices()
    return (
        <div>
            
          <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      { 
            services.slice(0,6).map(service =>  <SwiperSlide className="border mt-11 mb-10" service={service._id}>
               
               <div className="pb-16">
               <img src={service.img} alt="" />
               <p>{service.name}</p>

               </div>
                
                </SwiperSlide>)
            }
      </Swiper>
    </>
        </div>
    );
};

export default OurSpecialty;