
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./OurSpecialty.css";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css/autoplay'
import useInventoryItems from "../Sheare/useInventoryItems/useInventoryItems";


const OurSpecialty = () => {
    const [InventoryItems,setInventoryItems]=useInventoryItems()
    return (
        <div className="mt-16 px-16">
             <h1 className="text-4xl text-center">Best Sellers</h1>
             <p className="text-center py-1">This product is top sells in the year of {(new Date().getFullYear())}</p>
          <div data-aos="fade-left">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
     
        }}
        modules={[Pagination,Autoplay]}
        // autoplay={{
        //     delay: 1000,
        //     disableOnInteraction: false
        // }}
        className="mySwiper"
      >
      { 
            InventoryItems.slice(0,6).map(service =>  <SwiperSlide className="border mt-11 mb-10  hover:shadow-lg cursor-pointer" service={service._id}>
               
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