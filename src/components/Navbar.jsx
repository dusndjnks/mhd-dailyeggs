import React from 'react'
import bg1 from "../images/logo1.png"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [extendNavbar,setExtendNavbar] = useState(false)

  return (
    <div className='bg-[#3093CC] '>
      <div className='md:p-8 p-2 bg-[#3093CC] '>
    <div className=" bg-white rounded-2xl justify-center items-center">
          <div className={`flex justify-between  relative z-[+1]  duration-500 lg:px-10 px-7 md:static ${extendNavbar ? "sm:h-[350px] h-[300px] pt-4 sm:pt-6" : "sm:h-[72px] h-[60px] pt-1 items-center "}`}>
                <div>
                <img src={bg1} alt='' className="h-9" />
                </div>
                <div className=''>
                <ul className={`flex md:flex-row duration-700 md:static absolute xs:flex flex-col lg:gap-7 gap-3 text-gray-800 font-semibold font-[Gelasi] font-[px] sm:text-xl  md:text-base lg:text-xl font-[Gelasi] ${extendNavbar ? "left-8 top-20 " : "left-[-200px] top-20"}  `}>
                <NavLink to="/"           className="hover:text-[#3093CC] cursor-pointer border-none outline-none">Home</NavLink>
                <NavLink to="/daily"      className="hover:text-[#3093CC] cursor-pointer border-none outline-none">Why Daily Eggs?</NavLink>
                <NavLink to="/products"   className="hover:text-[#3093CC] cursor-pointer border-none outline-none">Products</NavLink>
                <NavLink to="/benefits"   className="hover:text-[#3093CC] cursor-pointer border-none outline-none">Benefits</NavLink>
                <NavLink to="/contact"    className="hover:text-[#3093CC] cursor-pointer border-none outline-none">Contact Us</NavLink>
                <NavLink to="/brochure"   className="hover:text-[#3093CC] cursor-pointer border-none outline-none">Brochure</NavLink>
              </ul>
                </div>
                <div className='md:hidden' onClick={() => {setExtendNavbar(open => !open)}}>
                  {
                      extendNavbar ? <CloseIcon/> : <MenuIcon/>
                  }
              </div>
          </div>
    </div>
  </div>
    </div>
  )
}

export default Navbar