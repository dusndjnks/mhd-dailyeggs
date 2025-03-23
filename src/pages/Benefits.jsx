import React from 'react'
import img from "../images/Vector 5.png";
import img1 from "../images/bgonly.png"
import eggs1 from "../images/firstegg.png"
import img4 from "../images/Ellipse 43.png"


const Benefits = () => {
  return (
    <div>
         <div className="xl:h-[650px] h-48 s:h-[230px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
          <div className="flex  xl:h-screen xl:pr-20 px-2">
             <div className="w-2/6 mr-2">
              <img src={eggs1} alt='' className="h-24 w-24 s:h-32 s:w-32 sm:h-48 sm:w-48 md:h-[230px] md:w-[230px] lg:w-[280px] lg:h-[300px] xl:h-[400px] xl:w-[950px]  rounded-full xl:mt-10 mt-2 xl:mx-5 mx-2" />
             </div>
             <div className="flex flex-col items-center  justify-center w-5/6  xl:pb-72 xl:pl-10 xl:pt-[124px] mt-5 md:mt-10  mr-9">
             <h1 className="xl:text-[68px] text-[25px] s:text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-extrabold text-center uppercase xl:leading-[60px] leading-[20px] s:leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-white">Benefits</h1>
              <h1 className=" text-white text-center font-[Gill_Sans_MT] xl:text-[26px] text-[8px] s:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] py-3">"Fresh Eggs, Every Day — Straight from Our Farm to Your Table!</h1>
              <p className="xl:text-[22px] text-[7px] s:text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-center sm:px- text-white font-[Gill_Sans_MT]">At Daily Eggs, we’re passionate about delivering the highest quality, farm-fresh eggs to fuel your day. Whether you're making a hearty breakfast or baking something special, our eggs are packed with nutrition, flavor, and care. Taste the freshness in every bite!"</p>
             </div>
          </div>
        </div>


        <div className="h-full flex items-center w-scree justify-center bg-cover bg-center py-1 px-4" style={{ backgroundImage: `url(${img1})` }}>
  <div className="flex flex-col items-center  sm:px-10 py-10 md:py-16">
    <div className="rounded-full overflow-hidden border-4 border-white shadow-lg md:-mb-16 -mb-5 s:-mb-10 z-10">
      <img src={img4} alt="Farm Image" className=" object-cover w-[150px] s:w-[250px] sm:w-[280px] xl:w-[350px]"/>
    </div>
    <div className="shadow-2xl rounded-lg w-full bg-white px- py-12 s:pt-16 md:pt-28 xl:py-32  md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center items-center justify-center px-2 sm:px-6 md:px-8">
        <div>
          <h3 className="font-semibold font-[Gelasio] text-lg sm:text-xl">Rigorous Farm Selection</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base font-[Gill_Sans_MT]">
            We partner with farms that prioritize optimal bird breeds known for producing nutritious eggs ensuring superior quality for our customers.</p>
        </div>
        <div>
          <h3 className="font-semibold font-[Gelasio] text-lg sm:text-xl">Seasonal Health Monitoring</h3><p className="text-gray-600 mt-2 text-sm sm:text-base font-[Gill_Sans_MT]">  Our suppliers implement stringent health measures year-round to protect flocks from diseases, ensuring the safety of the eggs we distribute.</p>
        </div>
        <div>
          <h3 className="font-semibold font-[Gelasio] text-lg sm:text-xl">Climate and Humidity Control</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base font-[Gill_Sans_MT]">
            We ensure that our partner farms maintain ideal environmental conditions, essential for bird well-being and high-quality egg production.</p>
        </div>
        <div>
          <h3 className="font-semibold font-[Gelasio] text-lg sm:text-xl">Nutrient-Rich Feed</h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base font-[Gill_Sans_MT]">  The farms we work with provide balanced diets to their hens, enhancing bird health and resulting in superior egg quality.</p>
        </div>
      </div>
    </div>
  </div>
</div>



        <div className="flex  justify-center py-5 ">
          <h1 className="s:text-[20px] sm:text-[25px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-[Gelasio]">🥚 <span className="text-[#3093CC]">Daily Eggs</span>  — Fresh from Farm to Family.</h1>
        </div>

    </div>
  )
}

export default Benefits