import React from "react";
import logo from "../images/logo2.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#3093CC] mt-5 text-black md:py-10 pt-5 md:px-14 lg:px-20 px-5">
        <div>
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Daily Eggs Logo" className="md:w-28 xs:w-10 sm:w-16 md:w-24  " />
          <h2 className="lg:text-4xl md:text-3xl xs:text-xl sm:text-2xl text-white font-serif font-bold uppercase">Daily Eggs</h2>
        </div>
        </div>
        <div className="mt-6 border-t border-black"></div>


      <div className="container mx-auto flex flex-col md:flex-row font-serif tracking-wide  items-start md:gap-10  md:mt-5 py-4">

       <div className="s:flex-row xs:flex xs:flex-col gap-4 sm:gap-8 xs:px-5 s:mt-4 xs:text-center md:text-start w-full sm:justify-between lg:pr-12">
       <div className=" flex flex-col items-center s:w-56  2xl:w-64">
          <h3 className="md:text-xl sm:text-lg text-base  font-semibold md:pb-5">About Us</h3>
          <p className=" sm:text-sm text-xs md:leading-8">
            Eating eggs daily can be great for your health - they’re packed with
            nutrients and super versatile.
          </p>
        </div>
        <div className=" flex flex-col items-center xl:mr-12">
          <h3 className="md:text-xl sm:text-lg font-semibold md:pb-5">Contact Us</h3>
          <div className="flex flex-col md:gap-3">
          <p className=" sm:text-sm text-xs">Naas Al Hayat General Trading LLC</p>
          <p className=" sm:text-sm text-xs">Email: dailyeggs@gmail.com</p>
          <p className=" sm:text-sm text-xs">Phone: 025597216</p>
          </div>
        </div>
       </div>

        <div className=" md:flex flex-col xs:hidden w-[180px] lg:ml-24 xl:ml-56">
          <h3 className="text-lg font-semibold pt-5 md:pb-5">Links</h3>
          <ul className="space-y-2 text-sm flex flex-col pr-3">
          <NavLink to="/"           className="hover:text-white transition duration-300">Home</NavLink>
          <NavLink to="/daily"      className="hover:text-white transition duration-300">Why Daily Eggs?</NavLink>
          <NavLink to="/products"   className="hover:text-white transition duration-300">Our Products</NavLink>
          <NavLink to="/benefits"   className="hover:text-white transition duration-300">Benefits</NavLink>
          <NavLink to="/contact"    className="hover:text-white transition duration-300">Contact Us</NavLink>
        </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
