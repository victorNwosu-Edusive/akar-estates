import { useState } from 'react'
import headerimage from './assets/images/header-imager.png'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='bg-rose-100 p-16 md:p-32 pt-36 md:pt-44 lg:pt-48 h-auto md:h-lvh grid-cols-1 md:grid md:grid-cols-2 gap-5 md:gap-6'>
        <div className='pb-5'>
        <p className='font-primary font-bold text-4xl pb-5'>Find Your Root in Luxury and Comfort at <span className='text-rose-600 font-extrabold'>Akar Estates</span></p>
        <p className='font-primary pb-5 text-sm font-bold'>Discover a harmonious blend of modern design, nature-inspired living, and seamless elegance.</p>
        <button className='px-6 p-2 bg-rose-600 font-bold text-sm text-white rounded-md font-primary hover:bg-rose-800 duration-300'>Learn More --</button>
        </div>
        <img src={headerimage} alt="" className='md:h-fit sm:h-fit' />
      </div>
    
      <div className='bg-white p-9 md:p-32 lg:p-32 py-32'>
        <div className='md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 grid gap-5'>
          <div className='about-header'>
        <p className='text-sm text-rose-300 font-primary tracking-[.40em] font-bold md:px-5 lg:px-5'>ABOUT US</p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold">Akar Estates</p>
        </div>

        <div>
          <p className='font-primary text-sm'>Akar Estates is a premier destination for modern living. With thoughtfully designed spaces and lush surroundings, 
            we bring you closer to nature without compromising luxury.</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
