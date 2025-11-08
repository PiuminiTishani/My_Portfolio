import { NavLinks } from '@/constant/constant';
import React from 'react'
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

const Nav = () => {
  return (
    <div className='transition-all duration-200 h-[12vh] z-10000 fixed w-full'>
        <div className='flex items-center h-fulll justify-between w-90% mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2 pl-20 pt-5'>
                <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='w-5 h-5 text-black' />
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>Piumini</h1>
            </div>
            {/* Nav Links */}
            <div className='hidden lg:flex items-center space-x-10 pr-20 pt-5'>
              {NavLinks.map((link) => (
                <a key={link.id} href={link.url} className='text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
                  <p>{link.Label}</p>
                </a>
              ))}
            </div>
            {/* Buttons */}
            <div className='flex items-center space-x-4 pr-15 pt-5'>
              {/* CV button*/}
              <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900
              transition-all duration-300 text-white flex items-center space-x-2 '>
                <BiDownload className='w-5 h-5 mr-3' /> Download CV
              </button>
              {/* Burger Menu */}
              <h1>Piumini</h1>
              <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden'/> 
            </div>
        </div>
    </div>
  )
}

export default Nav