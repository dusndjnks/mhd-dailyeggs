import React from 'react'
import img from "../images/Vector 5.png";
import img1 from "../images/bgonly.png"
import eggs1 from "../images/firstegg.png"
import prdct1 from "../images/Image (1).png"
import prdct2 from "../images/Image.png"
import prdct3 from "../images/Image (2).png"


const Products = () => {
  return (
    <div>
        <div>
        <div className="xl:h-[650px] h-48 s:h-[230px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
          <div className="flex  xl:h-screen xl:pr-20 px-2">
             <div className="w-2/6 mr-2">
              <img src={eggs1} alt='' className="h-24 w-24 s:h-32 s:w-32 sm:h-48 sm:w-48 md:h-[230px] md:w-[230px] lg:w-[280px] lg:h-[300px] xl:h-[400px] xl:w-[950px]  rounded-full xl:mt-10 mt-2 xl:mx-5 mx-2" />
             </div>
             <div className="flex flex-col items-center  justify-center w-5/6  xl:pb-72 xl:pl-10 xl:pt-[124px] mt-5 md:mt-10  mr-9">
             <h1 className="xl:text-[68px] text-[20px] s:text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-extrabold text-center uppercase xl:leading-[60px] leading-[20px] s:leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#25282B]">OUR
              <br /> <span className="text-white ">PRODUCTS</span></h1>
              <h1 className=" text-white text-center font-[Gill_Sans_MT] xl:text-[26px] text-[6px] s:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] py-3">"Fresh Eggs, Every Day — Straight from Our Farm to Your Table!</h1>
              <p className="xl:text-[22px] text-[5px] s:text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-center sm:px- text-white font-[Gill_Sans_MT]">At Daily Eggs, we’re passionate about delivering the highest quality, farm-fresh eggs to fuel your day. Whether you're making a hearty breakfast or baking something special, our eggs are packed with nutrition, flavor, and care. Taste the freshness in every bite!"</p>
             </div>
          </div>
        </div>  
        </div>

        <div 
          className="h-full flex items-center justify-center bg-cover bg-center py-10 sm:py-14 md:py-20 px-6 sm:px-12 md:px-16" 
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="flex flex-col items-center text-center font-[Gill_Sans_MT] leading-relaxed">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl">With the right ingredients,</h1>
            <h1 className="text-[#3093CC] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Magic Can Happen</h1>
          </div>
        </div>

        <div className='flex flex-col md:gap-20 '>
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 px-4 sm:px-10 md:px-16 lg:px-28">
          <div className="bg-[#68B9D9] flex flex-col items-center w-full max-w-[300px] sm:max-w-[363px] h-[450px] sm:h-[513px] rounded-t-4xl">
            <img src={prdct3} alt="" className="w-[300px] sm:w-[363px] h-[180px] sm:h-[216px]" />
            <h2 className="text-base sm:text-lg font-bold pt-6 sm:pt-8 pb-3 sm:pb-5 text-center">Al Hayat Farm Fresh Egg</h2>
            <p className="text-gray-800 text-xs sm:text-sm text-center px-4">
              Savor the freshness of locally produced Al Hayat Farm Fresh Eggs. Free from artificial additives, these naturally fresh eggs are high in protein, making them a healthy choice for your daily diet.
            </p>
            <button className="mt-3 sm:mt-4 bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md">Buy</button>
          </div>

          <div className="bg-[#68B9D9] flex flex-col items-center w-full max-w-[300px] sm:max-w-[363px] h-[450px] sm:h-[513px] rounded-t-4xl">
            <img src={prdct2} alt="" className="w-[300px] sm:w-[363px] h-[180px] sm:h-[216px]" />
            <h2 className="text-base sm:text-lg font-bold pt-6 sm:pt-8 pb-3 sm:pb-5 text-center">Daily Foods Fresh Hen Egg</h2>
            <p className="text-gray-800 text-xs sm:text-sm text-center px-4">
              Experience the superior taste and nutrition of our imported Daily Foods Fresh Hen Eggs. Rich in essential proteins and nutrients, these eggs provide the daily energy you need. Perfect for a wide range of culinary applications, from breakfast dishes to gourmet recipes.
            </p>
            <button className="mt-3 sm:mt-4 bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md">Buy</button>
          </div>

          <div className="bg-[#68B9D9] flex flex-col items-center w-full max-w-[300px] sm:max-w-[363px] h-[450px] sm:h-[513px] rounded-t-4xl">
            <img src={prdct1} alt="" className="w-[300px] sm:w-[363px] h-[180px] sm:h-[216px]" />
            <h2 className="text-base sm:text-lg font-bold pt-6 sm:pt-8 pb-3 sm:pb-5 text-center">Perfect Eggs - Value Pack Edition</h2>
            <p className="text-gray-800 text-xs sm:text-sm text-center px-4">
              Introducing Perfect Eggs, our imported quality fresh eggs now available in a convenient value pack. Ideal for daily consumption, these eggs offer both quality and affordability for your everyday cooking needs.
            </p>
            <button className="mt-3 sm:mt-4 bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md">Buy</button>
          </div>
        </div>
            <div className="flex flex-wrap justify-center lg:justify-between gap-4 px-4 sm:px-10 md:px-16 lg:px-28">
              <div className="bg-[#68B9D9] flex flex-col items-center w-full max-w-[300px] sm:max-w-[363px] h-[450px] sm:h-[513px] rounded-t-4xl">
                <img src={prdct3} alt="" className="w-[300px] sm:w-[363px] h-[180px] sm:h-[216px]" />
                <h2 className="text-base sm:text-lg font-bold pt-6 sm:pt-8 pb-3 sm:pb-5 text-center">Al Hayat Farm Fresh Egg</h2>
                <p className="text-gray-800 text-xs sm:text-sm text-center px-4">
                  Savor the freshness of locally produced Al Hayat Farm Fresh Eggs. Free from artificial additives, these naturally fresh eggs are high in protein, making them a healthy choice for your daily diet.
                </p>
                <button className="mt-3 sm:mt-4 bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md">Buy</button>
              </div>
            
              <div className="bg-[#68B9D9] flex flex-col items-center w-full max-w-[300px] sm:max-w-[363px] h-[450px] sm:h-[513px] rounded-t-4xl">
                <img src={prdct2} alt="" className="w-[300px] sm:w-[363px] h-[180px] sm:h-[216px]" />
                <h2 className="text-base sm:text-lg font-bold pt-6 sm:pt-8 pb-3 sm:pb-5 text-center">Daily Foods Fresh Hen Egg</h2>
                <p className="text-gray-800 text-xs sm:text-sm text-center px-4">
                  Experience the superior taste and nutrition of our imported Daily Foods Fresh Hen Eggs. Rich in essential proteins and nutrients, these eggs provide the daily energy you need. Perfect for a wide range of culinary applications, from breakfast dishes to gourmet recipes.
                </p>
                <button className="mt-3 sm:mt-4 bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md">Buy</button>
              </div>
            
              <div className="bg-[#68B9D9] flex flex-col items-center w-full max-w-[300px] sm:max-w-[363px] h-[450px] sm:h-[513px] rounded-t-4xl">
                <img src={prdct1} alt="" className="w-[300px] sm:w-[363px] h-[180px] sm:h-[216px]" />
                <h2 className="text-base sm:text-lg font-bold pt-6 sm:pt-8 pb-3 sm:pb-5 text-center">Perfect Eggs - Value Pack Edition</h2>
                <p className="text-gray-800 text-xs sm:text-sm text-center px-4">
                  Introducing Perfect Eggs, our imported quality fresh eggs now available in a convenient value pack. Ideal for daily consumption, these eggs offer both quality and affordability for your everyday cooking needs.
                </p>
                <button className="mt-3 sm:mt-4 bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md">Buy</button>
              </div>
            </div>

        </div> 



        <div className="flex justify-center py-5 ">
          <h1 className="s:text-[20px] sm:text-[25px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-[Gelasio]">🥚 <span className="text-[#3093CC]">Daily Eggs</span>  — Fresh from Farm to Family.</h1>
        </div>

    </div>
  )
}

export default Products