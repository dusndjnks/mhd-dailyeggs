import React from 'react'
import img from "../images/Vector 5.png";
import img1 from "../images/bgonly.png"
import eggs1 from "../images/firstegg.png"


const Contact = () => {
  return (
    <div>
    <div>
        <div className="xl:h-[650px] h-48 s:h-[230px] sm:h-[300px] md:h-[400px] lg:h-[480px] bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
          <div className="flex  xl:h-screen xl:pr-20 px-2 ">
             <div className="w-2/6 mr-2">
              <img src={eggs1} alt='' className="h-24 w-24 s:h-32 s:w-32 sm:h-48 sm:w-48 md:h-[230px] md:w-[230px] lg:w-[280px] lg:h-[300px] xl:h-[400px] xl:w-[950px]  rounded-full xl:mt-10 mt-2 xl:mx-5 mx-2" />
             </div>
             <div className="flex flex-col items-center  justify-center w-5/6  xl:pb-72 xl:pl-10 xl:pt-[124px] mt-7 md:mt-10  mr-9">
             <h1 className="xl:text-[68px] text-[23px] s:text-[32px] sm:text-[45px] md:text-[60px] lg:text-[70px] font-extrabold text-center uppercase xl:leading-[60px] leading-[20px] s:leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] text-[#25282B]">Contact
              <br /> <span className="text-white ">Us</span></h1>
              <h1 className=" text-white text-center font-[Gill_Sans_MT] xl:text-[26px] text-[8px] s:text-[10px] sm:text-[14px] md:text-[18px] lg:text-[23px] sm:py-3 py-2">"Fresh Eggs, Every Day — Straight from Our Farm to Your Table!</h1>
              <p className="xl:text-[19px] text-[6px] s:text-[8px] sm:text-[11px] md:text-[14px] lg:text-[17px] text-center sm:px- text-white font-[Gill_Sans_MT]">At Daily Eggs, we’re passionate about delivering the highest quality, farm-fresh eggs to fuel your day. Whether you're making a hearty breakfast or baking something special, our eggs are packed with nutrition, flavor, and care. Taste the freshness in every bite!"</p>
             </div>
          </div>
        </div>  
    </div>


          <div className="flex items-center justify-center bg-cover bg-center lg:py-14 py-10 lg:px-16" style={{ backgroundImage: `url(${img1})` }}>
            <div  className="bg-[#68B9D9] md:p-8 py-6 rounded-3xl px-5 shadow-lg  w-[370px] s:w-[430px] sm:w-[580px] md:w-[660px] lg:w-[750px] xl:w-[1100px] xl:h-[670px] xl:py-10   " >
              <h2 className="xl:text-[48px] text-xl md:text-2xl mb-6 xl:mb-14 text-black font-[Gill_Sans_MT]">Send Message</h2>
              <form className="md:space-y-6 space-y-3 flex flex-col ">
                <input  type="text"  placeholder="Name"  className="w-full p-3 bg-white text-black sm:text-xl  xl:text-[28px] font-[Gill_Sans_MT] rounded-md border border-[#68B9D9] outline-none"/>
                <input  type="email"  placeholder="Email"  className="p-3 bg-white text-black sm:text-xl xl:text-[28px] font-[Gill_Sans_MT] rounded-md border border-[#68B9D9] outline-none"/>
                <textarea placeholder="Type your message..." rows="8" className="h-28 xl:h-56 p-3 bg-white text-black sm:text-xl xl:text-[28px] font-[Gill_Sans_MT] rounded-md border border-[#68B9D9] outline-none"></textarea>
                <button type="submit" className="bg-blue-600 text-white md:py-4 py-1 px-4 rounded-md font-semibold text-lg hover:opacity-90 transition ">Send</button>
              </form>
            </div>
         </div>

        <div className="flex justify-center py-5 ">
          <h1 className="s:text-[20px] sm:text-[25px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-[Gelasio]">🥚 <span className="text-[#3093CC]">Daily Eggs</span>  — Fresh from Farm to Family.</h1>
        </div>
     


    </div>
  )
}

export default Contact