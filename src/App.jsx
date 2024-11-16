import { useState } from 'react'
import headerimage from './assets/images/header-image.png'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='bg-rose-100 p-16 md:p-32 pt-36 md:pt-44 lg:pt-48 h-lvh grid-cols-1 md:grid md:grid-cols-2 gap-5 md:gap-6 mb-36 md:mb-40 lg:mb-0'>
        <div className='pb-5'>
        <p className='font-primary font-bold text-4xl pb-5'>Find Your Root in Luxury and Comfort at <span className='text-rose-600 font-extrabold'>Akar Estates</span></p>
        <p className='font-primary pb-5 text-sm font-bold'>Discover a harmonious blend of modern design, nature-inspired living, and seamless elegance.</p>
        <button className='px-6 p-2 bg-rose-600 font-bold text-sm text-white rounded-md font-primary hover:bg-rose-800 duration-300'>Learn More --</button>
        </div>
        <img src={headerimage} alt="" className='h-fit' />
      </div>
      <div className='bg-white h-lvh'>
        
      </div>
    </>
  )
}

export default App
