import React from 'react'
import img from "../images/Vector 5.png";
import eggs1 from "../images/firstegg.png"
import img1 from "../images/bgonly.png"
import img6 from "../images/Group 1127.png"
import img3 from "../images/Rectangle 1089.png"
import img8 from "../images/Ellipse 9.png"
import group from "../images/Group 7.png"
import prdct3 from "../images/Image (1).png"




const Brochure = () => {
  return (
    <div>
         <div className="xl:h-[650px] h-48 s:h-[230px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
          <div className="flex  xl:h-screen xl:pr-20 px-2">
             <div className="w-2/6 mr-2">
              <img src={eggs1} alt='' className="h-24 w-24 s:h-32 s:w-32 sm:h-48 sm:w-48 md:h-[230px] md:w-[230px] lg:w-[280px] lg:h-[300px] xl:h-[400px] xl:w-[950px]  rounded-full xl:mt-10 mt-2 xl:mx-5 mx-2" />
             </div>
             <div className="flex flex-col items-center  justify-center w-5/6  xl:pb-72 xl:pl-10 xl:pt-[124px] mt-5 md:mt-10  mr-9">
             <h1 className="xl:text-[68px] text-[20px] s:text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-extrabold text-center uppercase xl:leading-[60px] leading-[20px] s:leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#25282B]">CUSTOMER
              <br /> <span className="text-white ">FEEDBACK</span></h1>
              <h1 className=" text-white text-center font-[Gill_Sans_MT] xl:text-[26px] text-[6px] s:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] py-3">"Fresh Eggs, Every Day — Straight from Our Farm to Your Table!</h1>
              <p className="xl:text-[22px] text-[5px] s:text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-center sm:px- text-white font-[Gill_Sans_MT]">At Daily Eggs, we’re passionate about delivering the highest quality, farm-fresh eggs to fuel your day. Whether you're making a hearty breakfast or baking something special, our eggs are packed with nutrition, flavor, and care. Taste the freshness in every bite!"</p>
             </div>
          </div>
        </div> 

        <div className="flex items-center justify-center bg-cover bg-center py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 xl:py-24" style={{ backgroundImage: `url(${img1})` }}>
        <div className="flex justify-between s:gap-8 sm:gap-10 2xl:gap-20 w-full h-auto">
          <div className="relative w-1/2">
            <img src={img3} alt="Main Image" className="w-[160px] x:w-[180px] s:w-[230px] sm:w-[280px] md:w-[370px] lg:w-[500px] 2xl:w-[600px] rounded-xl object-cover " />
            <div className="absolute -bottom-8 right-0 s:-bottom-12 s:-right-9 sm:-bottom-16 sm:-right-14 md:-bottom-[80px] md:-right-[70px] 2xl:-bottom-[135px] lg:-bottom-[110px]">
              <img src={img6} alt="Overlay Image" className="w-[95px] x:w-[100px] s:w-[140px] sm:w-[190px] md:w-[240px] lg:w-[280px] 2xl:w-[350px] rounded-lg" />
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-lg text-left pt-2 md:pt-10 lg:pt-14 xl:pt-[60px] 2xl:pt-[80px]">
            <p className="text-[#EB5757] font-bold font-[Poppins] uppercase text-[8px] x:text-[10px] s:text-[12px] sm:text-[14px] xl:text-[18px] 2xl:text-[23px] lg:pb-2">What They Say</p>
            <h2 className="text-[10px] x:text-[14px] s:text-[16px] sm:text-[20px] md:text-[24px] xl:text-[32px] 2xl:text-[38px] tracking-wider font-extrabold text-gray-900 md:pb-3 lg:pb-5">What Our Customers <br /><span className="text-inherit font-inherit">Say About Us</span></h2>
            <p className="text-gray-600 font-[Poppins] font-semibold text-[7px] x:text-[9px] s:text-[11px] sm:text-[13px] lg:text-[15px] xl:text-[18px] 2xl:text-[21px] md:pb-4">“Fudo is the best. Besides the many and delicious meals, the service is also very good,especially in the very fast delivery. I highly recommend Fudo to you”.</p>
            <div className="flex items-center my-1 md:pb-3">
              <img src={img8} alt="Reviewer" className="w-[30px] x:w-[35px] s:w-[40px] sm:w-[50px] xl:w-[60px] rounded-full object-cover" />
              <div className="flex flex-col pl-2">
                <span className="text-[10px] x:text-[12px] s:text-[14px] sm:text-[16px] 2xl:text-[20px]">Theresa Jordan</span>
                <span className="text-[8px] x:text-[10px] s:text-[12px] 2xl:text-[15px] font-semibold text-[#828282]">Food Enthusiast</span>
              </div>
            </div>
            <div className="mt-2">
              <img src={group} alt="Ratings" className="w-[80px] x:w-[100px] s:w-[120px] sm:w-[140px] md:w-[160px] xl:w-[190px]" />
            </div>
        </div>
        </div>
      </div>


        <div className="flex justify-center py-5 ">
          <h1 className="s:text-[20px] sm:text-[25px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-[Gelasio]">🥚 <span className="text-[#3093CC]">Daily Eggs</span>  — Fresh from Farm to Family.</h1>
        </div>

    </div>
  )
}

export default Brochure