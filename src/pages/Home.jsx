import { useState } from 'react'
import headerimage from '../assets/images/header-imager.png'
import aboutimage from '../assets/images/about-image.webp'
import footerimage from '../assets/images/akar-estate-footer.png'
import '../App.css'
import { Icon } from '@iconify-icon/react';
import imageOne from '../assets/images/gallery-image-one.webp'
import imageTwo from '../assets/images/gallery-image-two.webp'
import imageThree from '../assets/images/gallery-image-three.webp'
import { Search } from 'lucide-react'

function App() {

  return (
    <>
      <div className='relative bg-slate-100 pb-0 md:p-32 md:pb-0 md:px-7 lg:px-32 lg:pb-0 pt-36 md:pt-44 lg:pt-48 h-auto md:h-auto grid-cols-1 md:grid md:grid-cols-2 gap-5 md:gap-6'>
        <div className='pb-0'>
          <p className='md:px-0 lg:px-0 font-normal text-3xl pb-5 px-16'>
            Find Your Root in Luxury and Comfort at <span className='text-rose-600 font-extrabold'>Akar Estates</span>
          </p>
          <p className='md:px-0 lg:px-0 pb-5 text-sm px-16'>
            Discover a harmonious blend of modern design, nature-inspired living, and seamless elegance.
          </p>
          <a className='mx-16 px-6 md:mx-0 lg:mx-0 p-2 bg-rose-600 font-bold text-sm text-white rounded-sm hover:bg-rose-800 duration-300' 
            href='#contact-us'>
            Learn More
          </a>
        </div>
        <div className='overflow-hidden h-auto mt-3'>
          <img src={headerimage} alt="" className='md:h-fit sm:h-fit' />
        </div>
        
       


        </div>

        <div className='flex justify-center items-center'>
          <form action="" className='relative p-6 bg-white shadow-slate-200 md:w-full w-full md:mx-24 mx-16 lg:w-fit shadow-md z-40 rounded-sm *:text-[13px] -mt-16'>
            <div className='grid md:grid lg:flex gap-4 md:gap-4 lg:gap-4 '>
            <input type="text" placeholder='Where?' className='p-4 px-5 md:px-4 lg:px-5 outline-none bg-slate-100/65 focus:bg-slate-100 duration-300' />
            <div className='md:flex grid md:w-full md:gap-4 gap-4'>
            <input type="text" placeholder='House Type' className='p-4 px-5 md:px-4 lg:px-5 outline-none bg-slate-100/65 focus:bg-slate-100 duration-300' />
            <input type="number" placeholder='Rooms' className='p-4 px-5 md:px-4 lg:px-5 outline-none bg-slate-100/65 focus:bg-slate-100 duration-300' />
            </div>
            <button className='border-none hover:bg-rose-800 duration-300 bg-rose-600 p-4 px-8 text-white rounded-md flex justify-center items-center gap-2 font-semibold'><Search size={20} /><p className='block md:block lg:hidden'>Find for you</p></button>
            </div>
          </form>
        </div>

    
      <div className='bg-white p-9 md:p-32 lg:p-32 pt-32 pb-10' id="about-us">
        <div className='md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 grid gap-5'>
          <div className='about-header'>
        <p className='text-[12px] text-gray-400 tracking-[.40em] font-bold'>ABOUT US</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-bold">Akar Estates</p>
        </div>

        <div>
          <p className='text-sm'>Akar Estates is a premier destination for modern living. With thoughtfully designed spaces and lush surroundings, 
            we bring you closer to nature without compromising luxury.</p>
            
        </div>
        </div>
      </div>
      <img src={aboutimage} alt="" className='w-full h-full md:hidden lg:hidden' />

      <div id='features' className='bg-slate-50 p-9 pb-28 pt-28 md:p-24 lg:p-32 '>
      <div className='md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 grid gap-8'>
        <div>
        <p className='text-[12px] text-gray-400 tracking-[.40em] font-bold '>ESTATE FEATURES</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-bold">Features</p>
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
        <p className='text-[12px] text-gray-400 tracking-[.40em] font-bold '>ESTATE GALLERY</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-bold">Gallery</p>
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
        <p className='text-[12px] text-gray-400 tracking-[.40em] font-bold'>OUR REVIEWS</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-bold">Testimonials</p>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          <div>
            <p className='text-sm text-slate-600 mb-3'> <div className='absolute text-9xl text-red-200/35'>“</div> "Akar Estates offers the perfect blend of luxury and comfort. The attention to detail in the designs is exceptional, and the locations are prime. 
            Moving into my new home here was the best decision I've made this year!"</p>
            <p className='text-black font-bold text-sm '>David Johnson</p>
          </div>

          <div>
            <p className='text-sm text-slate-600 mb-3'><div className='absolute text-9xl text-red-200/35'>“</div> "Living at Akar Estates has been an absolute dream. The properties are modern, spacious, and built with top-quality materials. 
              Highly recommend it to anyone looking for their next home!"</p>
            <p className='text-black font-bold text-sm'>Sophia Martinez</p>
          </div>

          <div>
            <p className='text-sm text-slate-600 mb-3'> <div className='absolute text-9xl text-red-200/35'>“</div> "I was impressed by the professionalism and quality of Akar Estates. The property I purchased is exactly as promised – beautiful, secure, 
              and conveniently located. It’s rare to find such integrity in real estate."</p>
            <p className='text-black font-bold text-sm'>Chike Okoro</p>
          </div>

          <div className='relative'>
            <p className='text-sm text-slate-600 mb-3'> <div className='absolute text-9xl text-red-200/35'>“</div> "Akar Estates truly delivers on its promise of upscale living. The homes are well-designed, energy-efficient, and surrounded by serene environments. 
              I couldn’t ask for a better place to raise my family!"</p>
            <p className='text-black font-bold text-sm '>Fatima Khan</p>
          </div>

          

        </div>

        <div>
          
        </div>
        </div>
        </div>

        <div className='bg-black p-9 md:p-32 lg:p-32 pt-32 pb-10' id="contact-us">
        <div className='md:grid md:grid-cols-3'>
        <div className='text-white md:col-span-2 lg:col-span-2 '>
        <p className='text-[12px] text-gray-400 tracking-[.40em] font-bold '>REACH OUT TO US</p>
        <p className="text-3xl md:text-2xl lg:text-3xl text-white font-bold">Contact us</p>
        <form action="" className=' *:border-[1px] pb-12 *:outline-none *:p-2 *:text-sm *:w-full *:md:w-1/2 *:lg:w-1/2 gap-3 *:border-white grid'>
          <input type="text" placeholder='First Name' className='bg-transparent' />
          <input type="text" placeholder='Last Name' className='bg-transparent'/>
          <input type="email" placeholder='Email' className='bg-transparent'/>
          <textarea name="" placeholder='Message' id="" className='bg-transparent'></textarea>
          <button className='bg-white text-black font-bold hover:bg-slate-200 duration-300 text-sm'>Submit</button>
        </form>
        </div>     

        <div className='grid mb-10 gap-5'>
          <div>
          <p className='text-sm text-gray-400 font-bold tracking-[.40em] mb-2'>ADDRESS:</p>
          <p className='text-white text-sm'>No. 1, Black and white axis, Off James bond road, Abuja, Nigeria</p>
          </div>

          <div>
          <p className='text-sm text-gray-400 font-bold tracking-[.40em] mb-2'>TELEPHONE:</p>
          <p className='text-white text-sm'>000 0000 000</p>
          <p className='text-white text-sm'>000 0000 000</p>
          </div>
        </div>

        </div>
        <div className='flex justify-between'>
        <img src={footerimage} alt="" className='w-10 md:w-16 lg:w-16 h-auto' />
        <p className='text-white text-[8px] md:text-[11px] lg:text-[11px] font-bold'>Copyright Akar Estates 2024</p>
        </div>
        </div>


    </>
  )
}

export default App
