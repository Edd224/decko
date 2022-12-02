import React from 'react'
import BG from '../assets/BG.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg5.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240] mx-auto py-16 px-4 text-center'>
        <h1>V Decku s deckom môžeš dovolenkovať hociktorý deň v týždni</h1>
        <p className='py-4'>Terasku rozkladáme každý deň o 15:00</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover rounded-md col-span-2 md:col-span-3 row-span-2' src={BG} alt="" />
            <img className='w-full h-full object-cover rounded-md' src={bg2} alt="" />
            <img className='w-full h-full object-cover rounded-md' src={bg3} alt="" />
            <img className='w-full h-full object-cover rounded-md' src={bg4} alt="" />
            <img className='w-full h-full object-cover rounded-md' src={bg5} alt="" />
        </div>
    </div>
  )
}

export default Destinations