import { useState } from 'react'
import headerimage from './assets/images/header-imager.png'
import aboutimage from './assets/images/about-image.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import { Icon } from '@iconify-icon/react';

function App() {

  return (
    <>
      <Navbar />
      <div className='bg-rose-100 pb-0 md:p-32 md:pb-0 md:px-7 lg:px-32 lg:pb-0 pt-36 md:pt-44 lg:pt-48 h-auto md:h-auto grid-cols-1 md:grid md:grid-cols-2 gap-5 md:gap-6'>
        <div className='pb-0'>
        <p className='font-primary md:px-0 lg:px-0 font-bold text-4xl pb-5 px-16'>Find Your Root in Luxury and Comfort at <span className='text-rose-600 font-extrabold'>Akar Estates</span></p>
        <p className='font-primary md:px-0 lg:px-0 pb-5 text-sm font-bold px-16'>Discover a harmonious blend of modern design, nature-inspired living, and seamless elegance.</p>
        <button className='mx-16 px-6 md:mx-0 lg:mx-0 p-2 bg-rose-600 font-bold text-sm text-white rounded-md font-primary hover:bg-rose-800 duration-300'>Learn More --</button>
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

      <div id='features' className='bg-slate-100 p-9 md:p-7 lg:p-32 font-primary'>
      <div className='md:grid lg:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid gap-8'>
        <div>
        <p className='text-[12px] text-gray-400 font-primary tracking-[.40em] font-bold '>ESTATE FEATURES</p>
        <p className="text-3xl md:text-2xl lg:text-3xl font-primary font-bold">Features</p>
        </div>

        <div className='grid gap-10 text-black/60'>
          <div>
            <Icon icon="circum:map" className='text-3xl md:text-5xl lg:text-5xl' />
            <p className='text-sm font-bold'>Accessibility</p>
            <p className='text-sm'>Good road network and easy access to major cities or business districts.</p>
          </div>

          <div>
            <Icon icon="ph:security-camera-light" className='text-3xl md:text-5xl lg:text-5xl'  />
            <p className='text-sm font-bold'>CCTV and Surveillance</p>
            <p className='text-sm'>Cameras in strategic areas for monitoring.</p>
          </div>

          <div>
          <Icon icon="fluent-mdl2:weights" className='text-3xl md:text-5xl lg:text-5xl'/>
            <p className='text-sm font-bold'>Fitness Center</p>
            <p className='text-sm'>Gym facilities or jogging tracks.</p>
          </div>
        </div>

        <div className='grid gap-10 text-black/60'>
          <div>
          <Icon icon="fluent:vehicle-car-parking-48-regular" className='text-3xl md:text-5xl lg:text-5xl'/>
          <p className='text-sm font-bold'>Adequate Parking Spaces</p>
          <p className='text-sm'>For residents and visitors.</p>
          </div>

          <div>
          <Icon icon="fluent:payment-48-regular" className='text-3xl md:text-5xl lg:text-5xl'/>
          <p className='text-sm font-bold'>Flexible Payment Plans</p>
          <p className='text-sm'>For buyers or renters.</p>
          </div>

          <div>
          <Icon icon="ph:wifi-high-light" className='text-3xl md:text-5xl lg:text-5xl'/>
          <p className='text-sm font-bold'>Internet and Network Connectivity</p>
          <p className='text-sm'>High-speed broadband and good mobile network.</p>
          </div>
        </div>


        </div>

      </div>
    </>
  )
}

export default App
