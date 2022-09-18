import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../assets/Logo.png'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { UilReceipt } from '@iconscout/react-unicons'
import { useStore } from '../store/store'

  
const Header = () => {
  const state = useStore((state) => state)
  // console.log(state)
  const items = useStore((state) => state.cart.pizzas.length)
  const [Order, setOrder] = useState('')

  useEffect(() => {
    setOrder(localStorage.getItem('order'))
  }, [])

  return (
    <div className='w-full h-[100px] z-[99]'>
      <div className='flex items-center justify-between w-full h-full'>        
        <div className='flex items-center justify-start flex-1 gap-3 mx-5'>  {/* Logo  */}
          <Image src={logo} alt='logo' width={50} height={50} className='rounded-full'/>
          <span className='font-bold text-[1.5rem]'>Fudo</span>
        </div>
        
          <ul className='flex gap-[2rem] flex-1 justify-center '> {/* Menu */}
            <Link href='/'>
              <li className='hover:text-[#F54748] font-semibold hover:cursor-pointer'>
                Home
              </li>
            </Link>
            <Link href='/'>
              <li className='hover:text-[#F54748] font-semibold hover:cursor-pointer'>
                Menu
              </li>
            </Link>
            <Link href='/'>
              <li className='hover:text-[#F54748] font-semibold hover:cursor-pointer'>
                Contact
              </li>
            </Link>
          </ul>

        <div className='relative flex justify-end flex-1 mx-5'> {/* Cards */}
          <Link href='/cart'>
            <div className='relative mr-5'>
              <AiOutlineShopping size={35} className='text-[#2E2E2E] cursor-pointer '/>
              <div className='absolute bg-[#F54748] text-white rounded-full text-xs w-[20px] h-[20px] text-center flex items-center justify-center top-0 right-[-8px] cursor-pointer'>
                {items}
              </div>
          </div>
          </Link>
          {Order && (
            <Link href={`/order/${Order}`}>
              <div className='relative'>
                <UilReceipt size={35} className='text-[#2E2E2E] cursor-pointer '/>
                {Order != "" && 
                <div className='absolute bg-[#F54748] text-white rounded-full text-xs w-[20px] h-[20px] text-center flex items-center justify-center top-0 right-[-8px] cursor-pointer'
                  >
                  1
                </div>}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header