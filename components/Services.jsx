import React from 'react'
import Image from 'next/image'
import f1 from '../assets/s1.png'
import f2 from '../assets/s2.png'
import f3 from '../assets/s3.png'


const Services = () => {
  return (
    <div className='w-full h-screen mt-10'>
      <div className='flex flex-col items-center justify-center font-bold'>
        <span className='uppercase text-[#F54748] text-[1rem]'>What we serve</span>
        <span className='text-[2rem]'>Your Favorite Food</span>
        <span className='text-[2rem]'>Delivery Partner</span>
      </div>
      {/* Features */}
      <div className='flex justify-around w-full mt-[3rem]'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-[10rem] h-[10rem]'>
            <Image src={f1} alt='Feature Image' objectFit='cover' layout='intrinsic'/>
          </div>
          <span className='mt-3 font-bold'>Easy to Order</span>
          <span className='max-w-[80%] w-[20rem] text-[#828282] mt-3'>You need a few steps in food ordering</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-[10rem] h-[10rem]'>
            <Image src={f2} alt='Feature Image' objectFit='cover' layout='intrinsic'/>
          </div>
          <span className='mt-3 font-bold'>Easy to Order</span>
          <span className='max-w-[80%] w-[20rem] text-[#828282] mt-3'>Delivery that is always on time even Faster</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-[10rem] h-[10rem]'>
            <Image src={f3} alt='Feature Image' objectFit='cover' layout='intrinsic'/>
          </div>
          <span className='mt-3 font-bold'>Easy to Order</span>
          <span className='max-w-[80%] w-[20rem] text-[#828282] mt-3'>Not only fast for us, quality is also number one</span>
        </div> {/* End of third Feature  */} 
        
      </div>
    </div>
  )
}

export default Services