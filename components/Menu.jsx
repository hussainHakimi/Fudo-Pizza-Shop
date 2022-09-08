import React from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'
import Link from 'next/link'

const Menu = ({pizzas}) => {
  return (
    <div className='flex flex-col w-full h-screen mt-[-7rem] items-start justify-center gap-[0.5rem] text-[1.5rem] font-bold'>
      <div className='flex flex-col justify-start font-bold'>
        <span className='uppercase text-[#f54748] mb-[2rem]'>our menu</span>
        <span className='text-[2rem]'>Menu That Always</span>
        <span className='text-[2rem]'>Make you Fall in Love</span>
      </div>
      <div className="flex flex-wrap gap-y-[2rem] items-center justify-around">  
        { pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url()
          return (
            <div className='flex flex-col gap-2 ' key={id}>
              <Link href={`pizza/${pizza.slug.current}`}>
                <div className ='w-[22rem] h-[16rem] relative overflow-hidden rounded-[2rem] hover:shadow-xl shadow-gray-900 cursor-pointer'>
                  <Image loader={() => src} src={src} alt='' layout='fill' objectFit='cover' className='hover:scale-[1.1]'/>
                </div>
              </Link>
              <span>{pizza.name}</span>
              <span><span className='text-[#F54748]'>$</span> {pizza.price[1]}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu