import logo from "../assets/images/akar-estate-header-one.png";
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
      };

    return (
        <>
        <nav className='fixed z-30 w-full lg:w-full p-4 ease-in bg-rose-100/75 backdrop-blur-md flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl'>
        <div className='flex space-x-3 rtl:space-x-reverse px-7 lg:px-32'>
          <a href="" className='font-heading duration-300' onClick={closeMenu} >
          <img src={logo} alt="" className="h-10 w-auto"  />
          </a>
          
        </div>

        <div className='md:flex md:items-center md:space-x-9 md:rtl:space-x-reverse md:text-black md:font-primary'>
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none relative scale-x-[-1] w-6 h-6">
            <span
              className={`block absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? 'rotate-45 bg-rose-600' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`block absolute w-5 h-0.5 bg-black transition-opacity duration-300 ${
                isOpen ? 'opacity-0 bg-rose-600' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? '-rotate-45 bg-red-600' : 'translate-y-1.5'
              }`}
            ></span>
          </button>
        </div>

        
          <a href="#about-us" className="hidden lg:block  md:text-[12px] font-bold p-1 border-b-2 border-transparent hover:border-b-2 hover:border-rose-400 hover:text-rose-600 duration-300 " title="Destination">About Us</a>
          <a href="#features" className="hidden lg:block md:text-[12px] font-bold p-1 border-b-2 border-transparent hover:border-b-2 hover:border-rose-400 hover:text-rose-600 duration-300 " title='Experiences'>Features</a>
          <a href="#gallery" className="hidden lg:block md:text-[12px] font-bold p-1 border-b-2 border-transparent hover:border-b-2 hover:border-rose-400 hover:text-rose-600 duration-300 " title='Plan Your Trip'>Gallery</a>
          <a href="#testimonials" className="hidden lg:block md:text-[12px] font-bold p-1 border-b-2 border-transparent hover:border-b-2 hover:border-rose-400 hover:text-rose-600 duration-300 " title='Gallery'>Testimonial</a>
          <a href="" className="hidden lg:block md:text-[12px] font-bold p-1 border-b-2 border-transparent hover:border-b-2 hover:border-rose-400 hover:text-rose-600 duration-300 " title='Contact Us'>Contact Us</a>

        </div>

       
      </nav>

      <div id="mobile" className={`${
          isOpen ? "left-0" : "left-full"
        } lg:hidden fixed grid duration-300 ease-out gap-2 text-left z-20 text-black font-primary text-md h-auto w-full p-3 px-11 pb-52 pt-32 bg-rose-100/90 backdrop-blur-md mx-auto max-w-screen-xl `}>
          <a href="#about-us" className="md:block  font-bold p-2 hover:text-red-600 rounded-md hover:bg-rose-600/10 duration-300 " onClick={closeMenu} title="Destination">About Us </a>
          <a href="#features" className="md:block  font-bold p-2 hover:text-red-600 rounded-md  hover:bg-rose-600/10 duration-300 " onClick={closeMenu} title='Experiences'>Features</a>
          <a href="#gallery" className="md:block  font-bold p-2 hover:text-red-600 rounded-md  hover:bg-rose-600/10 duration-300 " onClick={closeMenu} title='Plan Your Trip'>Gallery</a>
          <a href="#testimonials" className="md:block  font-bold p-2 hover:text-red-600 rounded-md hover:bg-rose-600/10 duration-300 " onClick={closeMenu} title='Gallery'>Testimonial</a>
          <a href="" className="md:block  font-bold p-2 hover:text-red-600 rounded-md  hover:bg-rose-600/10 duration-300 " onClick={closeMenu} title='Contact Us'>Contact Us</a>
      </div>
      
      
        </>
    );  
}


export default Navbar
