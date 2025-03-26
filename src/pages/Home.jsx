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
           <div className="xl:h-[650px] xs:h-[190px] s:h-[230px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-cover bg-center " style={{ backgroundImage: `url(${img})` }}>
             <div className="flex  xl:h-screen xl:pr-20 px-2">
                <div className="w-2/6 mr-2">
                 <img src={eggs1} alt='' className="h-28 w-28 s:h-32 s:w-32 sm:h-48 sm:w-48 md:h-[230px] md:w-[230px] lg w-[18px]:sm:w-[280px] lg:h-[300px] xl:h-[400px] xl:w-[950px]  rounded-full xl:mt-10 mt-2 xl:mx-5 mx-2" />
                </div>
                <div className="flex flex-col items-center justify- w-5/6 xl:pt-24  xl:pl-10 sm:mt-5 md:mt-10 mt-4 mr-5 x:pt-6 xs:pt-4">
                <h1 className="xl:text-[68px] text-[22px] s:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] font-extrabold text-center uppercase xl:leading-[60px] leading-[18px] s:leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-black text-start">Your daily needs
                 <br /> <span className="text-white ">daily foods</span></h1>
                 <h1 className=" text-white text-center font-[Gill_Sans_MT] xl:text-[26px] text-[8px] s:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] sm:py-3 py-2">"Fresh Eggs, Every Day — Straight from Our Farm to Your Table!</h1>
                 <p className="xl:text-[19px] text-[6px] s:text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-center sm:px- text-white font-[Gill_Sans_MT]">At Daily Eggs, we’re passionate about delivering the highest quality, farm-fresh eggs to fuel your day. Whether you're making a hearty breakfast or baking something special, our eggs are packed with nutrition, flavor, and care. Taste the freshness in every bite!"</p>
                 <div className="lg:mt-10 md:mt-3 mt-1 mr-10 lg:mr-20">
                  <NavLink to="/products">
                  <button className="bg-white xl:w-56 s:w-24 sm:w-32 md:w-48 text-[11px] x:text-xs md:text-lg xl:text-2xl lg:py-3 px-5 font-semibold rounded py-1">Order Now</button>
                  </NavLink>
                  </div>
                </div>
             </div>
           </div>

           <div className="flex items-center h-full bg-cover bg-center xl:pt-32 pt-10 px-2 md:px-7 lg:px-10 " style={{ backgroundImage: `url(${img1})` }}>
            <div className=" flex justify-between px-3">
            <div className="w">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-[Rubik] leading-14">WHY DAILY <br /> <span className="text-[#3093CC]">EGGS ?</span></h1>
              <div className="lg:my-4 my-2 ml-2 sm:ml-4">
                <div className="lg:w-20 w-10 h-[4px] bg-[#3093CC] rounded-lg"></div>
              </div>
              <p className="lg:py-5 lg:text-[28px] text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[23px] font-[Gill_Sans_MT]">Eating eggs daily can be great for your health - they’re packed with nutrients and super versatile.</p>
              <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[23px] font-[Gill_Sans_MT]">
                <span className="2xl:text-[30px] text-[8px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[25px] font-semibold">High-Quality Protein:</span> Helps with muscle repair and keeps you feeling full longer.</p>
              <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[23px] font-[Gill_Sans_MT]">
                <span className="2xl:text-[30px] text-[8px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[25px] font-semibold">Rich in Nutrients:</span> Loaded with vitamins like B12, D, and choline, which support brain function and energy.</p>
              <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[23px] font-[Gill_Sans_MT]">
                <span className="2xl:text-[30px] text-[8px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[25px] font-semibold">Heart Health:</span> Eggs raise HDL (good cholesterol) and can improve heart health for many people.
              </p>
              <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[23px] font-[Gill_Sans_MT]">
                <span className="2xl:text-[30px] text-[8px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[25px] font-semibold">Eye Health:</span> They contain lutein and zeaxanthin, antioxidants that protect your eyes from damage.
              </p>
              <p className="text-[8px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[23px] font-[Gill_Sans_MT]">
                <span className="2xl:text-[30px] text-[8px] sm:text-[14px] md:text-[17px] lg:text-[19px] xl:text-[25px] font-semibold">Weight Management:</span> Low in calories but high in protein, making them a great option for a satisfying meal.
              </p>
              <NavLink to="/daily">
              <button className="lg:text-[26px] text-xs sm:text-base sm:ml-28 px-4 py-1 lg:w-64 md:py-2 px-3 md:text-xl rounded-lg bg-[#3093CC] text-white md:ml-32 md:my-5 my-2 xl:ml-56 ml-5">View More</button>
              </NavLink>
            </div>
            <div className="xs:mr-2 sm:ml-8">
              <img src={eggs2} alt="" className="pt-20 sm:pt-16 sm:pt-14 lg:pt-40 lg:w-[1200px] w-56 sm:w-[340px] sm:w-[450px] md:w-[530px] lg:w-[660px] xl:w-[800px] rounded-b-xl" />
              </div>
            </div>
           </div>

            <div  className="h-full flex flex-col items-center justify-center bg-cover bg-center s:py-5 sm:py-14 md:py-20 px-6 sm:px-12 md:px-16" style={{ backgroundImage: `url(${img1})` }}>
               <div className="flex flex-col items-center text-center font-[Gill_Sans_MT] leading-relaxed">
                 <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl">OUR</h1>
                 <h1 className="text-[#3093CC] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">PRODUCTS</h1>
               </div>
               <div className="flex justify-center items-center my-4">
                  <div className="w-20 h-[4px] bg-[#3093CC] rounded-lg"></div>
                  </div>
            </div>


           <div className='flex flex-wrap justify-center lg:gap-16 gap-4 sm:gap-10 px-3 s:px-6 sm:px-7 md:px-10 lg:px-28'>
               <div className="bg-[#68B9D9] flex flex-col items-center w-[180px] s:w-[220px] sm:w-[280px] sm:h-[400px] xl:w-[300px] xl:h-[520px] 2xl:w-[363px] lg:h-[430px] h-[280px] s:h-[310px] pb-5 lg:rounded-t-[30px] rounded-t-[20px]">
                 <img src={prdct1} alt="" className="2xl:w-[363px] w-[180px] s:w-[220px] sm:w-[280px] xl:w-[320px]  rounded-t-[20px]" />
                 <h2 className=" text-xs xl:text-2xl sm:text-lg font-bold sm:pt-3 pt-2 sm:pt-8 pb-3 sm:pb-3 pb-1 text-center">Al Hayat Farm Fresh Egg</h2>
                 <p className="text-gray-800 s:text-[9px] text-[8px] xl:text-[18px] xl:leading-[23px] sm:text-xs text-center sm:px-4 px-2">Savor the freshness of locally produced Al Hayat Farm Fresh Eggs. Free from  artificial additives, these naturally fresh eggs are high in protein, making them  a healthy choice for your daily diet.</p>
                 <button className="mt-9 s:mt-12 sm:mt-4 lg:mt-10  bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md  xl:mt-10 text-[13px] lg:text-lg">Buy</button>
               </div>
               <div className="bg-[#68B9D9] hidden  lg:flex flex-col items-center w-[180px] s:w-[220px] sm:w-[280px] sm:h-[400px] xl:w-[300px] xl:h-[520px] 2xl:w-[363px] lg:h-[430px] h-[280px] s:h-[310px] pb-5 lg:rounded-t-[30px] rounded-t-[20px]">
                 <img src={prdct2} alt="" className="2xl:w-[363px] w-[180px] s:w-[220px] sm:w-[280px] xl:w-[320px]  rounded-t-[20px]" />
                 <h2 className=" text-xs xl:text-2xl sm:text-lg font-bold pt-2 sm:pt-8 pb-3 sm:pb-3 pb-1 text-center">Al Hayat Farm Fresh Egg</h2>
                 <p className="text-gray-800 s:text-[9px] text-[8px] xl:text-[18px] xl:leading-[20px] sm:text-xs text-center sm:px-4 px-2">Experience the superior taste and nutrition of our imported Daily Foods Fresh  Hen Eggs. Rich in essential proteins and nutrients, these eggs provide the daily  energy you need. Perfect for a wide range of culinary applications, from  breakfast dishes to gourmet recipes.</p>
                 <button className="mt-2 bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md xl:mt-5 text-[13px] lg:text-lg">Buy</button>
               </div>
               <div className="bg-[#68B9D9]  flex flex-col items-center w-[180px] s:w-[220px] sm:w-[280px] sm:h-[400px] xl:w-[300px] xl:h-[520px] 2xl:w-[363px] lg:h-[430px] h-[280px] s:h-[310px] pb-5 lg:rounded-t-[30px] rounded-t-[20px]">
                 <img src={prdct3} alt="" className="2xl:w-[363px] w-[180px] s:w-[220px] sm:w-[280px] xl:w-[320px]  rounded-t-[20px]" />
                 <h2 className=" text-xs xl:text-2xl sm:text-lg font-bold sm:pt-6 pt-2 sm:pt-8 pb-3 sm:pb-3 pb-1 text-center">Al Hayat Farm Fresh Egg</h2>
                 <p className="text-gray-800 s:text-[9px] text-[8px] xl:text-[18px] xl:leading-[20px] sm:text-xs text-center sm:px-4 px-2  lg:pb-3">Introducing Perfect Eggs, our imported quality fresh eggs now available in a  convenient value pack. Ideal for daily consumption, these eggs offer both  quality and affordability for your everyday cooking needs.</p>
                 <button className="mt-8 sm:mt-4 bg-white text-black px-12 sm:px-16 py-1.5 sm:py-2 rounded-full font-semibold shadow-md text-[13px] lg:text-lg">Buy</button>
               </div>
            </div>

            <div className="h-full flex items-center justify-center bg-cover bg-center py-10 xl:py-20 px-4 lg:px-14" 
             style={{ backgroundImage: `url(${img1})` }}>
              <div className="flex justify-between gap-3 items-center ">
                <div className="w-2/5 flex justify-center pt-5">
                  <img src={sld} alt="Egg Benefits" className="w-[230px] sm:w-[300px] md:w-[350px] lg:w-[400px]" />
                </div>
                <div className="w-3/5 sm:px-4 ">
                  <h1 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[68px] text-right text-[#3093CC]">Benefits</h1>
                  <div className="flex justify-end my-1 sm:my-3">
                    <div className="w-12 md:w-16 h-[3px] bg-[#3093CC] rounded-lg"></div>
                  </div>
                  <p className="text-[8px] s:text-[11px] sm:text-[14px] md:text-[17px] lg:text-[20px] xl:text-[28px] leading-relaxed text-left font-[Gill_Sans_MT]"> Eating eggs daily can provide a wide range of health benefits. They are packed with essential nutrients, including  high-quality protein, healthy fats, and important vitamins like A, D, and B12, as well as minerals such as iron and zinc.  Eggs are particularly beneficial for brain health, thanks to their rich choline content, which supports memory and cognitive  function. They also promote eye health through antioxidants like lutein and zeaxanthin, which help protect against vision problems.</p>
                  <NavLink to="/benefits">
                  <button className="text-[10px] sm:text-[18px] md:text-[20px] ml-12 xl:ml-56 lg:ml-40 w-28 sm:w-48 md:w-56 sm:py-2 py-1 rounded-lg bg-[#3093CC] text-white sm:mt-4 md:mt-6">
                    View More
                  </button>
                  </NavLink>
                </div>
               </div>
            </div>

            <div  className="h-full flex flex-col items-center justify-center bg-cover bg-center pb-5 s:py-5 sm:py-14 md:py-20 px-6 sm:px-12 md:px-16" style={{ backgroundImage: `url(${img1})` }}>
               <div className="flex flex-col items-center text-center font-[Gill_Sans_MT] leading-relaxed">
                 <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl">OUR</h1>
                 <h1 className="text-[#3093CC] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">CUSTOMER FEEDBACK</h1>
               </div>
               <div className="flex justify-center items-center my-4">
                  <div className="w-20 h-[4px] bg-[#3093CC] rounded-lg"></div>
                  </div>
            </div>

            <div className="h-full flex items-center justify-center bg-cover bg-center pb-10 sm:px-8 px-3 md:px-16" 
              style={{ backgroundImage: `url(${img1})` }}>
                  <div className="flex flex-wrap justify-center sm:gap-12 gap-4">
                    <div className="bg-[#68B9D9] rounded-2xl  shadow-lg w-[165px] sm:w-[280px] md:w-[370px] lg:w-[430px] text-center relative lg:p-6">
                      <img src={review3} alt="Reviewer" className="w-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full mx-auto lg:-mt-16 -mt-8" />
                      <p className="text-black font-[Gill_Sans_MT] text-[11px] sm:text-[14px] md:text-[20px] mt-2 sm:mt-6 lg:py-5 lg:leading-10 leading-6 px-2 font-[px]">"Wow, eggs are like a powerhouse of nutrients! I had no idea they did so much for brain and eye health."</p>
                      <p className="sm:py-3 py-2  text-white font-semibold font-[Gelasio] italic text-[14px]  sm:text-[16px] md:text-[18px]">Ziyad</p>
                    </div>
                    <div className="bg-[#68B9D9] rounded-2xl  shadow-lg w-[165px] sm:w-[280px] md:w-[370px] lg:w-[430px] text-center relative lg:p-6">
                      <img src={review1} alt="Reviewer" className="w-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full mx-auto lg:-mt-16 -mt-8" />
                      <p className="text-black font-[Gill_Sans_MT] text-[11px] sm:text-[14px] md:text-[20px] mt-2 sm:mt-6 lg:py-5 lg:leading-10 leading-7 px-2 font-[px]">"Amazing! I'm definitely adding more eggs to my diet — love that they help with muscle growth."</p>
                      <p className="sm:py-3 py-2  text-white font-semibold font-[Gelasio] italic text-[14px]  sm:text-[16px] md:text-[18px] xs:mt-3">Alice</p>
                    </div>
                    <div className="bg-[#68B9D9] rounded-2xl  shadow-lg w-[165px] sm:w-[280px] md:w-[370px] lg:w-[430px] text-center relative lg:p-6">
                      <img src={review2} alt="Reviewer" className="w-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full mx-auto lg:-mt-16 -mt-8" />
                      <p className="text-black font-[Gill_Sans_MT] text-[11px] sm:text-[14px] md:text-[20px] mt-2 sm:mt-6 lg:py-5 lg:leading-10 leading-6 px-2 font-[px]">"Incredible! It’s so cool that something as simple as eggs can boost energy and support immunity."</p>
                      <p className="sm:py-3 py-2  text-white font-semibold font-[Gelasio] italic text-[14px]  sm:text-[16px] md:text-[18px]">John</p>
                    </div>
                  </div>
            </div>

            <div className="flex items-center justify-center bg-cover bg-center xl:py-6 sm:px-8 px-4 lg:px-14 md:px-" style={{ backgroundImage: `url(${img1})` }}>
              <div className="flex items-center gap-3 md:gap-7 xl:gap-20">
                <div className="w-3/5">
                  <div className="xs:leading-7 s:leading-[40px] md:leading-[55px]">
                    <h1 className="text-[24px] s:text-[45px] sm:text-[50px] md:text-[45px] lg:text-[58px]">Our</h1>
                    <h1 className="text-[#3093CC] text-[26px] s:text-[48px] sm:text-[48px] md:text-[58px] lg:text-[60px]">Mission</h1>
                  </div>
                  <div className="flex justify-start sm:my-4 my-1">
                    <div className="w-8 s:w-16 sm:w-18 md:w-20 sm:h-[4px] h-[2px] s:h-[4px] bg-[#3093CC] rounded-lg"></div>
                  </div>
                  <p className="text-[7px] s:text-[12px] sm:text-[15px] md:text-[17px] lg:text-[23px] xl:text-[23px] text-left font-[Gill_Sans_MT]">
                    At Daily Eggs, our mission is to deliver the freshest, most nutritious eggs straight from the farm to your table. We are passionate about promoting healthier lifestyles by providing eggs that are rich in natural goodness, ethically sourced, and produced with care. <br />
                    We prioritize the well-being of our hens, working closely with local farmers who follow sustainable and humane practices. By supporting local communities and championing environmental responsibility, we aim to create a positive impact that extends beyond the breakfast plate. <br />
                    We believe that quality food is the foundation of a better life, and we're dedicated to making wholesome, protein-packed eggs accessible to every household — every single day.
                  </p>
                </div>
                <div className="w-2/5 pt-16 sm:pt-14 md:pt-28">
                  <img src={mission} alt="" className="w-[300px] x:w-[340px] s:w-[380px] sm:w-[420px] md:w-[460px] lg:w-[482px] h-auto" />
                </div>
              </div>
            </div>

            <div className="flex  justify-center my-5 md:my-16 ">
               <h1 className="s:text-[18px] sm:text-[25px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-[Gelasio]">🥚 <span className="text-[#3093CC]">Daily Eggs</span>  — Fresh from Farm to Family.</h1>
            </div>
    </div>
  )
}

export default Home