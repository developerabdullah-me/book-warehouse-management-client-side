
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./OurSpecialty.css";
import { Pagination } from "swiper";
import useServices from "../Sheare/Usedata/UseData";


const OurSpecialty = () => {
    const [services,setServices]=useServices()
    return (
        <div className="mt-16">
             <h1 className="text-4xl text-center">Best Sellers</h1>
             <p className="text-center py-1">This product is top sells in the year of {(new Date().getFullYear())}</p>
          <div>
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
            services.slice(0,6).map(service =>  <SwiperSlide className="border mt-11 mb-10  hover:shadow-lg cursor-pointer" service={service._id}>
               
               <div className="pb-16">
               <img src={service.img} alt="" />
               <p>{service.name}</p>
               <p>$ <small>{service.price}</small></p>
                
               </div>
                
                </SwiperSlide>)
            }
      </Swiper>
    </div>
        </div>
    );
};

export default OurSpecialty;