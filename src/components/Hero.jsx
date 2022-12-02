import React from 'react'
import video from '../assets/video.mp4'
import {AiOutlineSearch} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover'
        src={video}
        autoPlay
        loop
        muted 
        />
        <div className="absolute w-full top-0 left-0 bg-gray-900/90"></div>
        <div className='absolute bg-gray-900/30 top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>Víno nás spája</h1>
            <h2 className='py-4'>Vôňa kvitnúcej prírody a svieže mladé vínka vedia písať krásne zážitky</h2>
        </div>
    </div>
    
  );
};

export default Hero