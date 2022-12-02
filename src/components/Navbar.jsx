import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest} from 'react-icons/fa'

function Navbar() {
  const [nav, setNav] =useState(false)
  const [logo, setlogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setlogo(!logo)
  }


  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>DECKO</h1>
      </div>
      <ul className='hidden md:flex text-xl '>
        <li className='hover:border-y-2 cursor-pointer hover:border-blue-400 duration-200'>Home</li>
        <li className='hover:border-y-2 cursor-pointer hover:border-blue-400 duration-200'>Destinations</li>
        <li className='hover:border-y-2 cursor-pointer hover:border-blue-400 duration-200'>Travel</li>
        <li className='hover:border-y-2 cursor-pointer hover:border-blue-400 duration-200'>View</li>
        <li className='hover:border-y-2 cursor-pointer hover:border-blue-400 duration-200'>Book</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='mr2
        ' size={20} />
        <BsPerson size={20} />
      </div>

      {/* HAMBURGER */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* MOBILE Menu dropdown */}

      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul className='mx-14'>
          <h1 className='mx-3'>DECKO</h1>
          <li className='border-b'>Home</li>
          <li className='border-b'>Destinations</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
        </ul>
        <div className='flex flex-col mx-16'>
          <button className='my-4'>Search</button>
          <button>Account</button>
        </div>
        <div className='flex justify-between my-6 mx-16'>
          <FaFacebook className='icon' />
          <FaTwitter className='icon' />
          <FaYoutube className='icon' />
          <FaInstagram className='icon' />
          <FaPinterest className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar