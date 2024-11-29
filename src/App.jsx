import { useState } from 'react'
import headerimage from './assets/images/header-imager.png'
import aboutimage from './assets/images/about-image.webp'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import { Icon } from '@iconify-icon/react';
import imageOne from './assets/images/gallery-image-one.webp'
import imageTwo from './assets/images/gallery-image-two.webp'
import imageThree from './assets/images/gallery-image-three.webp'

function App() {

  return (
    <>
      <Navbar />
      <div className='bg-slate-100 pb-0 md:p-32 md:pb-0 md:px-7 lg:px-32 lg:pb-0 pt-36 md:pt-44 lg:pt-48 h-auto md:h-auto grid-cols-1 md:grid md:grid-cols-2 gap-5 md:gap-6'>
        <div className='pb-0'>
        <p className='font-primary md:px-0 lg:px-0 font-bold text-4xl pb-5 px-16'>Find Your Root in Luxury and Comfort at <span className='text-rose-600 font-extrabold'>Akar Estates</span></p>
        <p className='font-primary md:px-0 lg:px-0 pb-5 text-sm font-bold px-16'>Discover a harmonious blend of modern design, nature-inspired living, and seamless elegance.</p>
        <a className='mx-16 px-6 md:mx-0 lg:mx-0 p-2 bg-rose-600 font-bold text-sm text-white rounded-md font-primary hover:bg-rose-800 duration-300' href='#contact-us'>Learn More --</a>
        </div>
        <div className='overflow-hidden h-auto mt-12'>
        <img src={headerimage} alt="" className='md:h-fit sm:h-fit' />
        </div>
      </div>
    
      <div className='bg-white p-9 md:p-32 lg:p-32 pt-32 pb-10' id="about-us">
        <div className='md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 grid gap-5'>
          <div className='about-header'>
        <p className='text-[12px] text-gray-400 font-primary tracking-[.40em] font-bold'>ABOUT US</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-primary font-bold">Akar Estates</p>
        </div>

        <div>
          <p className='font-primary text-sm'>Akar Estates is a premier destination for modern living. With thoughtfully designed spaces and lush surroundings, 
            we bring you closer to nature without compromising luxury.</p>
            
        </div>
        </div>
      </div>
      <img src={aboutimage} alt="" className='w-full h-full md:hidden lg:hidden' />

      <div id='features' className='bg-slate-50 p-9 pt-28 md:p-24 lg:p-32 font-primary'>
      <div className='md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 grid gap-8'>
        <div>
        <p className='text-[12px] text-gray-400 font-primary tracking-[.40em] font-bold '>ESTATE FEATURES</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-primary font-bold">Features</p>
        </div>

        <div className='grid gap-10 text-black/60'>
          <div>
            <Icon icon="circum:map" className='text-3xl md:text-4xl lg:text-5xl' />
            <p className='text-sm font-bold'>Accessibility</p>
            <p className='text-sm'>Good road network and easy access to major cities or business districts.</p>
          </div>

          <div>
            <Icon icon="ph:security-camera-light" className='text-3xl md:text-4xl lg:text-5xl'  />
            <p className='text-sm font-bold'>CCTV and Surveillance</p>
            <p className='text-sm'>Cameras in strategic areas for monitoring.</p>
          </div>

          <div>
          <Icon icon="fluent-mdl2:weights" className='text-3xl md:text-4xl lg:text-5xl'/>
            <p className='text-sm font-bold'>Fitness Center</p>
            <p className='text-sm'>State-of-the-art gym equipment, including treadmills, free weights, and strength training machines.</p>
          </div>
        </div>

        <div className='grid gap-10 text-black/60'>
          <div>
          <Icon icon="fluent:vehicle-car-parking-48-regular" className='text-3xl md:text-4xl lg:text-5xl'/>
          <p className='text-sm font-bold'>Adequate Parking Spaces</p>
          <p className='text-sm'>Adequate parking spaces ensure convenience for residents and visitors alike. </p>
          </div>

          <div>
          <Icon icon="fluent:payment-48-regular" className='text-3xl md:text-4xl lg:text-5xl'/>
          <p className='text-sm font-bold'>Flexible Payment Plans</p>
          <p className='text-sm'>Flexible payment plans offer buyers easy installment options.</p>
          </div>

          <div>
          <Icon icon="ph:wifi-high-light" className='text-3xl md:text-4xl lg:text-5xl'/>
          <p className='text-sm font-bold'>Internet and Network Connectivity</p>
          <p className='text-sm'>High-speed broadband and good mobile network.</p>
          </div>
        </div>

        </div>
        </div>

        <div id='gallery' className='bg-black pb-28 p-9 pt-28 md:p-24 lg:p-32 font-primary'>
      <div className='md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 grid gap-8'>
        <div className='text-white'>
        <p className='text-[12px] text-gray-400 font-primary tracking-[.40em] font-bold '>ESTATE GALLERY</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-primary font-bold">Gallery</p>
        </div>

        <div className='col-span-2 grid gap-3'>
          <img src={imageOne} alt="" className='' />
         
         <div className='flex gap-3'>
         <div className='col-span-1'>
        <img src={imageTwo} alt=""  />
        </div>
        <div className='col-span-1'>
          <img src={imageThree} alt="" />
        </div>
          </div>
          </div>
    
          </div>

      </div>

      <div className='bg-white p-9 md:p-32 lg:p-32 pt-32 pb-10' id="testimonials">
        <div className='md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 grid gap-5'>
          <div>
        <p className='text-[12px] text-gray-400 font-primary tracking-[.40em] font-bold'>OUR REVIEWS</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-primary font-bold">Testimonials</p>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <p className='text-sm text-slate-600 font-primary mb-3'> <div className='absolute text-9xl text-red-200/35'>“</div> "Akar Estates offers the perfect blend of luxury and comfort. The attention to detail in the designs is exceptional, and the locations are prime. 
            Moving into my new home here was the best decision I've made this year!"</p>
            <p className='text-black font-bold text-sm font-primary'>David Johnson</p>
          </div>

          <div>
            <p className='text-sm text-slate-600 font-primary mb-3'><div className='absolute text-9xl text-red-200/35'>“</div> "Living at Akar Estates has been an absolute dream. The properties are modern, spacious, and built with top-quality materials. 
              Highly recommend it to anyone looking for their next home!"</p>
            <p className='text-black font-bold text-sm font-primary'>Sophia Martinez</p>
          </div>

          <div>
            <p className='text-sm text-slate-600 font-primary mb-3'> <div className='absolute text-9xl text-red-200/35'>“</div> "I was impressed by the professionalism and quality of Akar Estates. The property I purchased is exactly as promised – beautiful, secure, 
              and conveniently located. It’s rare to find such integrity in real estate."</p>
            <p className='text-black font-bold text-sm font-primary'>Chike Okoro</p>
          </div>

          <div className='relative'>
            <p className='text-sm text-slate-600 font-primary mb-3'> <div className='absolute text-9xl text-red-200/35'>“</div> "Akar Estates truly delivers on its promise of upscale living. The homes are well-designed, energy-efficient, and surrounded by serene environments. 
              I couldn’t ask for a better place to raise my family!"</p>
            <p className='text-black font-bold text-sm font-primary'>Fatima Khan</p>
          </div>

          

        </div>

        <div>
          
        </div>
        </div>
        </div>

        <div className='bg-black p-9 md:p-32 lg:p-32 pt-32 pb-10' id="contact-us">
        <div className=''>
        <div className='text-white font-primary'>
        <p className='text-[12px] text-gray-400 font-primary tracking-[.40em] font-bold '>REACH OUT TO US</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-primary text-white font-bold">Contact us</p>
        <form action="" className=' *:border-[1px] *:outline-none *:p-2 *:text-sm *:w-full *:md:w-1/2 *:lg:w-1/2 gap-3 *:border-white grid'>
          <input type="text" placeholder='First Name' className='bg-transparent' />
          <input type="text" placeholder='Last Name' className='bg-transparent'/>
          <input type="email" placeholder='Email' className='bg-transparent'/>
          <textarea name="" placeholder='Message' id="" className='bg-transparent'></textarea>
          <button className='bg-white text-black font-bold hover:bg-slate-200 duration-300 text-sm'>Submit</button>
        </form>
        </div>     
        </div>
        </div>


    </>
  )
}

export default App
