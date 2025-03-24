import React from 'react'
import img from "../images/Vector 5.png";
import eggs1 from "../images/firstegg.png"
import img1 from "../images/bgonly.png"
import img4 from "../images/daily.png"
import img3 from "../images/cara-beth-buie-IN3Mr4A4SqQ-unsplash 2.png"



const Daily = () => {
  return (
    <div>
         <div>
        <div className="xl:h-[650px] h-48 s:h-[230px] sm:h-[300px]  md:h-[400px] lg:h-[480px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
          <div className="flex  xl:h-screen xl:pr-20 px-2">
             <div className="w-2/6 mr-2">
              <img src={eggs1} alt='' className="h-24 w-24 s:h-32 s:w-32 sm:h-48 sm:w-48 md:h-[230px] md:w-[230px] lg:w-[280px] lg:h-[300px] xl:h-[400px] xl:w-[950px]  rounded-full xl:mt-10 mt-2 xl:mx-5 mx-2" />
             </div>
             <div className="flex flex-col items-center  2xl:pt-[98px] justify-center w-5/6  xl:pb-72 xl:pl-10 xl:pt-[124px] mt-5 md:mt-10  mr-9">
             <h1 className="xl:text-[68px] text-[20px] s:text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-extrabold text-center uppercase xl:leading-[60px] leading-[20px] s:leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#25282B]">WHY DAILY
              <br /> <span className="text-white ">EGGS?</span></h1>
              <h1 className=" text-white text-center font-[Gill_Sans_MT] xl:text-[26px] text-[6px] s:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] py-3">"Fresh Eggs, Every Day — Straight from Our Farm to Your Table!</h1>
              <p className="xl:text-[22px] text-[5px] s:text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-center sm:px- text-white font-[Gill_Sans_MT]">At Daily Eggs, we’re passionate about delivering the highest quality, farm-fresh eggs to fuel your day. Whether you're making a hearty breakfast or baking something special, our eggs are packed with nutrition, flavor, and care. Taste the freshness in every bite!"</p>
             </div>
          </div>
        </div>  
        </div>

        <div className=" px-4 sm:px-10 md:px-20 lg:px-24 pt-8 md:pt-20">
          <h1 className="font-[Gill_Sans_MT] text-left text-[15px] s:text-[17px] sm:text-[22px] md:text-[27px] lg:text-[35px] xl:text-[48px]">
            Start Every Day with Daily Eggs
          </h1>
          <h1 className="font-[Gill_Sans_MT] text-right text-[17px] s:text-[19px] sm:text-[25px] md:text-[28px]  lg:text-[35px] xl:text-[53px] text-[#3093CC] leading-tight">
            — Fresh, Nutritious, and Full of Goodness!
          </h1>
        </div>


        <div className="h-full flex flex-col items-center justify-center bg-cover bg-center py-10 px-4 s:px-6 sm:px-8 lg:px-10" 
        style={{ backgroundImage: `url(${img1})` }}>
  
          <div className="flex flex-col lg:flex-row justify-between mt-6 sm:mt-10">
            <div className="w-full md:w-3/7 flex justify-center">
              <img src={img4} alt="" className="w-full max-w-[600px] px-10 sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] h-auto" />
            </div>
            <div className="w-full md:w-4/7 flex items-center px-4 sm:px-8 md:px-10">
              <p className="font-[Gill_Sans_MT] text-[14px] s:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] leading-relaxed px-2 ">
                At Daily Eggs, we believe that great health starts with great food. That’s why we provide farm-fresh, naturally nutritious eggs from healthy, well-cared-for hens. Our eggs are packed with high-quality protein, essential vitamins, and antioxidants — perfect for boosting energy, supporting brain function, and promoting overall well-being.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row justify-between  mt-6 sm:mt-10">
            <div className="w-full md:w-4/7 flex items-center px-4 sm:px-8 md:px-10">
              <p className="font-[Gill_Sans_MT] text-[14px] s:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[28px] leading-relaxed px-2">
                We take pride in ethical, sustainable farming practices, ensuring every egg is produced with care and delivered with freshness. Whether you’re whipping up a quick breakfast, powering through a workout, or crafting a gourmet meal, Daily Eggs brings wholesome goodness to your table.
              </p>
            </div>
            <div className="w-full md:w-3/7 flex justify-center">
              <img src={img3} alt="" className="w-full max-w-[600px] px-10 sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] h-auto" />
            </div>
          </div>
      </div>



        <div className="flex justify-center py-5 ">
          <h1 className="s:text-[20px] sm:text-[25px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-[Gelasio]">🥚 <span className="text-[#3093CC]">Daily Eggs</span>  — Fresh from Farm to Family.</h1>
        </div>
    </div>
  )
}

export default Daily