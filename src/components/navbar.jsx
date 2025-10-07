import logo from "../assets/images/akar-estate-header-one.png";
import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
      };

      const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight * 0.3; // adjust for when you want the change
      if (window.scrollY > sectionHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <>
        <nav className={`fixed z-50 w-full lg:w-full p-4 ease-in ${
        scrolled ? "bg-white" : "bg-transparent"
      } flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl transition-all duration-300`}>
        <div className='flex space-x-3 rtl:space-x-reverse px-7 lg:px-32'>
          <a href="" className='font-heading duration-300' onClick={closeMenu} >
          <img src={logo} alt="" className="h-10 w-auto"  />
          </a>
          
        </div>

        <div className='md:flex md:items-center md:space-x-9 md:rtl:space-x-reverse'>
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

        
          <a href="#features" className="hidden lg:block md:text-[12px]  p-1 border-b-2 border-transparent hover:border-b-2  hover:text-rose-600 duration-300 " title='Features'>Features</a>
          <a href="#gallery" className="hidden lg:block md:text-[12px]  p-1 border-b-2 border-transparent hover:border-b-2  hover:text-rose-600 duration-300 " title='Gallery'>Gallery</a>
          <a href="#testimonials" className="hidden lg:block md:text-[12px]  p-1 border-b-2 border-transparent hover:border-b-2  hover:text-rose-600 duration-300 " title='Testimonial'>Testimonial</a>
          <a href="#contact-us" className="hidden lg:block md:text-[12px]  p-1 border-b-2 border-transparent hover:border-b-2  hover:text-rose-600 duration-300 " title='Contact Us'>Contact Us</a>

        </div>

       
      </nav>

      <div id="mobile" className={`${
          isOpen ? "left-0" : "left-full"
        } lg:hidden fixed grid duration-300 ease-out gap-6 text-left z-40 text-black font-primary text-sm h-auto w-full p-3 pb-80 pt-28 bg-white/90 backdrop-blur-md mx-auto max-w-screen-xl `}>
          <a href="#about-us" className="md:block text-2xl  font-thin border-b-[1px] pb-2 p-2 hover:text-red-600   duration-300 " onClick={closeMenu} title="About Us">About us </a>
          <a href="#features" className="md:block  text-2xl font-thin border-b-[1px] pb-2 p-2 hover:text-red-600   duration-300 " onClick={closeMenu} title='Features'>Features </a>
          <a href="#gallery" className="md:block  text-2xl font-thin border-b-[1px] pb-2 p-2 hover:text-red-600  duration-300 " onClick={closeMenu} title='Gallery'>Gallery </a>
          <a href="#testimonials" className="md:block  text-2xl font-thin border-b-[1px] pb-2 p-2 hover:text-red-600 duration-300 " onClick={closeMenu} title='Testimonial'>Testimonial </a>
          <a href="#contact-us" className="md:block  text-2xl font-thin border-b-[1px] pb-2 p-2 hover:text-red-600  duration-300 " onClick={closeMenu} title='Contact Us'>Contact Us </a>

      
      </div>
      
      <Outlet />
        </>
    );  
}


export default Navbar
