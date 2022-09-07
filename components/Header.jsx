import React from 'react'
import Image from 'next/image'
import logo from '../assets/Logo.png'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='w-full h-[100px] z-[99]'>
      <div className='flex justify-between items-center w-full h-full'>        
        <div className='flex items-center justify-start gap-3 mx-5 flex-1'>  {/* Logo  */}
          <Image src={logo} alt='logo' width={50} height={50}/>
          <span className='font-bold text-[1.5rem]'>Fudo</span>
        </div>
        
          <ul className='flex gap-[2rem] flex-1 justify-center '> {/* Menu */}
            <Link href='/'>
              <li className='hover:text-[#F54748] font-semibold'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className='hover:text-[#F54748] font-semibold'>
                Menu
              </li>
            </Link>
            <Link href='/'>
              <li className='hover:text-[#F54748] font-semibold'>
                Contact
              </li>
            </Link>
          </ul>
        <div className='mx-5 flex flex-1 justify-end relative'> {/* Cards */}
          <AiOutlineShopping size={35} className='text-[#2E2E2E] cursor-pointer '/>
          <div className='absolute bg-[#F54748] text-white rounded-full text-xs w-[20px] h-[20px] text-center flex items-center justify-center top-0 right-[-8px] cursor-pointer'>1</div>
        </div>
      </div>
    </div>
  )
}

export default Header