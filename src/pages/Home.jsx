import React from 'react'
import img from "../images/Vector 5.png";
import img1 from "../images/bgonly.png"
import eggs1 from "../images/firstegg.png"
import eggs2 from "../images/mockup-graphics-oDJxJb4y5tE-unsplash 1.png"
import prdct1 from "../images/Image (1).png"
import prdct2 from "../images/Image.png"
import prdct3 from "../images/Image (2).png"
import sld from "../images/14.png"
import review1 from "../images/Ellipse 41.png"
import review2 from "../images/Ellipse 42.png"
import review3 from "../images/Ellipse 40.png"
import mission from "../images/Ellipse 49.png"
import { NavLink } from "react-router-dom";



const Home = () => {
  return (
    <div>
        <div className=''>
           <div className="xl:h-[650px] h-40 x:h-[190px] s:h-[230px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
             <div className="flex  xl:h-screen xl:pr-20 px-2">
                <div className="w-2/6 mr-2">
                 <img src={eggs1} alt='' className="h-24 w-24 s:h-32 s:w-32 sm:h-48 sm:w-48 md:h-[230px] md:w-[230px] lg:w-[280px] lg:h-[300px] xl:h-[400px] xl:w-[950px]  rounded-full xl:mt-10 mt-2 xl:mx-5 mx-2" />
                </div>
                <div className="flex flex-col items-center justify-center w-5/6 xl:pb-72 xl:pl-10 xl:pt-[124px] sm:mt-5 md:mt-10 mt-2 mr-5">
                <h1 className="xl:text-[68px] text-[20px] s:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-extrabold text-center uppercase xl:leading-[60px] leading-[20px] s:leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#25282B] text-start ">Your daily needs
                 <br /> <span className="text-white ">daily foods</span></h1>
                 <h1 className=" text-white text-center font-[Gill_Sans_MT] xl:text-[26px] text-[6px] s:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] sm:py-3 py-1">"Fresh Eggs, Every Day — Straight from Our Farm to Your Table!</h1>
                 <p className="xl:text-[22px] text-[5px] s:text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-center sm:px- text-white font-[Gill_Sans_MT]">At Daily Eggs, we’re passionate about delivering the highest quality, farm-fresh eggs to fuel your day. Whether you're making a hearty breakfast or baking something special, our eggs are packed with nutrition, flavor, and care. Taste the freshness in every bite!"</p>
                 <div className="lg:mt-10 md:mt-3 mr-3 lg:mr-20">
                  <NavLink to="/products">
                  <button className="bg-white xl:w-56 s:w-24 sm:w-32 md:w-48 text-xs md:text-lg  lg:py-3  px-3   font-semibold rounded-lg">Order Now</button>
                  </NavLink>
                  </div>
                </div>
             </div>
           </div>  
           </div>


      
    </div>
  )
}

export default Home