import React from "react";

const Locations = () => {
  return (
    <div className=" flex justify-center w-full mt-10 pb-10">
    
     <div className=" flex gap-x-36 items-center" >
     <div className=""data-aos="fade-down-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.70002037449!2d90.40317604990251!3d23.793694284492354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77ded2a2369%3A0xebaef2adc463beb0!2sProgramming%20Hero!5e0!3m2!1sbn!2sbd!4v1651960437276!5m2!1sbn!2sbd"
          width="250"
          height="250"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <div className="input-group pb-4" data-aos="fade-down-right">
        <input
          type="email"
          placeholder="send email"
          className="input input-bordered"
          required
        />
        <button className="btn btn-square">send email</button>
      </div>
     </div>
    </div>
  );
};

export default Locations;
