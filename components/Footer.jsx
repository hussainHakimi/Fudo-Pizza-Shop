import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
import Image from 'next/image'
import logo from '../assets/Logo.png'



const Footer = () => {
  return (
    <div className='w-full bg-green-500'>
      <div className='flex flex-col items-center justify-center w-full gap-[3rem] mt-[6rem] bg-gradient-to-t from-[#d4d0d0] to-[#ffeded]'>
        <span className='uppercase text-[#F54748] font-bold'>all rights reserved</span>
        <div className='flex gap-[1rem] text-[#F54748]'>
          <BsFacebook size={35}/>
          <AiOutlineGithub size={35}/>
          <AiOutlineInstagram size={35}/>
        </div>
        <div className='flex items-center justify-start flex-1 gap-3 mx-5'>  {/* Logo  */}
          <Image src={logo} alt='logo' width={50} height={50}/>
          <span className='font-bold text-[1.5rem]'>Fudo</span>
        </div>
      </div>
    </div>
  )
}

export default Footer