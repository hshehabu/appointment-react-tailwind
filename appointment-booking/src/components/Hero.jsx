import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-20 bg-primary rounded-lg ">
     
        {/* text section  */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] text-white">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-right md:leading-tight lg:leading-tight">
          Book Appointment <br/>
          With Trusted Doctors
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
            <img className="w-28" src={assets.group_profiles} alt="" />
            <p>Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block"/>
            schedule your appointment hassle-free.</p>
          </div>
          <a href="#speciality" className="bg-white rounded-full py-3 px-8 text-gray-600 m-auto text-sm md:m-0 hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Book appointment <img className="w-3" src={assets.arrow_icon} alt="" />
          </a>
        </div>
          {/* image section  */}
        <div className="md:w-1/2 relative">
          <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="" />
          </div>
    
    </div>
  );
};

export default Hero;
