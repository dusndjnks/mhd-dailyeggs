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
    <div className=''>
          <div className=''>
           <div className="xl:h-[650px] h-[160px] x:h-[190px] s:h-[230px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-cover bg-center " style={{ backgroundImage: `url(${img})` }}>
             <div className="flex  xl:h-screen xl:pr-20 px-2">
                <div className="w-2/6 mr-2">
                 <img src={eggs1} alt='' className="h-24 w-24 s:h-32 s:w-32 sm:h-48 sm:w-48 md:h-[230px] md:w-[230px] lg:w-[280px] lg:h-[300px] xl:h-[400px] xl:w-[950px]  rounded-full xl:mt-10 mt-2 xl:mx-5 mx-2" />
                </div>
                <div className="flex flex-col items-center justify-center w-5/6 xl:pb-10 xl:pl-10 xl:pt-[124px] sm:mt-5 md:mt-10 mt-2 mr-5 x:pt-6 xs:pt-4">
                <h1 className="xl:text-[68px] text-[20px] s:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-extrabold text-center uppercase xl:leading-[60px] leading-[20px] s:leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-black text-start ">Your daily needs
                 <br /> <span className="text-white ">daily foods</span></h1>
                 <h1 className=" text-white text-center font-[Gill_Sans_MT] xl:text-[26px] text-[6px] s:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] sm:py-3 py-1">"Fresh Eggs, Every Day — Straight from Our Farm to Your Table!</h1>
                 <p className="xl:text-[22px] text-[5px] s:text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-center sm:px- text-white font-[Gill_Sans_MT]">At Daily Eggs, we’re passionate about delivering the highest quality, farm-fresh eggs to fuel your day. Whether you're making a hearty breakfast or baking something special, our eggs are packed with nutrition, flavor, and care. Taste the freshness in every bite!"</p>
                 <div className="lg:mt-10 md:mt-3 mr-3 lg:mr-20">
                  <NavLink to="/products">
                  <button className="bg-white xl:w-56 s:w-24 sm:w-32 md:w-48 text-xs md:text-lg xl:text-2xl lg:py-3  px-3   font-semibold rounded-lg">Order Now</button>
                  </NavLink>
                  </div>
                </div>
             </div>
           </div>  
           </div>

           <div className="h-full  flex items-center justify-center bg-cover bg-center py-14 lg:px-16 px-2" style={{ backgroundImage: `url(${img1})` }}>
      <div className="h-screen flex justify-between w-screen px-3">
          <div className="w-full">
            <h1 className="text-xl s:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-[Rubik] leading-14">WHY DAILY <br /> <span className="text-[#3093CC] ">EGGS ?</span></h1>
            <div className=" lg:my-4 my-2 ml-2 s:ml-4">
              <div className="lg:w-20 w-10 h-[4px] bg-[#3093CC] rounded-lg"></div>
            </div>
            <p className="lg:py-5 lg:text-[28px] text-[9px] sm:text-[12px] md:text-[15px] lg:text-[20px] xl:text-[23px] font-[Gill_Sans_MT]">Eating eggs daily can be great for your he alth - they’re  packed with nutrients and super versatile</p>
            <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[20px] xl:text-[23px] font-[Gill_Sans_MT]"><span className="lg:text-[30px] text-[9px] sm:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[28px]  font-semibold">High-Quality Protein:</span> Helps with muscle repair and keeps you feeling full longer.</p>
            <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[20px] xl:text-[23px] font-[Gill_Sans_MT]"><span className="lg:text-[30px] text-[9px] sm:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[28px]  font-semibold">Rich in Nutrients:</span> Loaded with vitamins like B12, D, and choline, which support brain function and energy.</p>
            <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[20px] xl:text-[23px] font-[Gill_Sans_MT]"><span className="lg:text-[30px] text-[9px] sm:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[28px] font-semibold">Heart Health:</span> Eggs raise HDL (good cholesterol) and can improve heart health for many people.</p>
            <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[20px] xl:text-[23px] font-[Gill_Sans_MT]"><span className="lg:text-[30px] text-[9px] sm:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[28px]  font-semibold">Eye Health:</span> They contain lutein and zeaxanthin, antioxidants that protect your eyes from damage.</p>
            <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[20px] xl:text-[23px] font-[Gill_Sans_MT]"><span className="lg:text-[30px] text-[9px] sm:text-[14px] md:text-[17px] lg:text-[22px] xl:text-[28px]  font-semibold ">Weight Management:</span> Low in calories but high in protein, making them a great option for a satisfying meal.</p>
            <button className="lg:text-[26px] text-sm lg:w-64 md:py-2 px-3 md:text-xl rounded-lg  bg-[#3093CC] text-white md:ml-32 md:my-5 my-2 xl:ml-56 ml-5">View More</button>
          </div>
          <div className="xs:mr-2 s:ml-8">
              <img src={eggs2} alt="" className="pt-20 s:pt-16 sm:pt-14 lg:pt-40 lg:w-[1200px] w-56 s:w-[340px] sm:w-[450px] md:w-[530px] lg:w-[660px] xl:w-[80 0px] rounded-b-xl" />
          </div>
      </div>
          </div>

          

       <div className="flex  justify-center py-5 ">
          <h1 className="s:text-[20px] sm:text-[25px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-[Gelasio]">🥚 <span className="text-[#3093CC]">Daily Eggs</span>  — Fresh from Farm to Family.</h1>
        </div>
      
    </div>
  )
}

export default Home