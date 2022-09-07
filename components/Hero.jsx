import React from 'react'
import Image from 'next/image'
import cherry from '../assets/Cherry.png'
import heroImage from '../assets/HeroImage.png'
import { TiPhoneOutline } from 'react-icons/ti' 
import pizza1 from '../assets/p1.jpg'


const Hero = () => {
  return (
    <div className='w-full h-screen '>
      <div className='relative flex w-full h-full'>
        <div className='flex flex-col gap-[2rem]'> {/* Title */}
          <div className='flex items-center justify-center bg-[#FDECEC]  border-[#ffffff] rounded-[2rem] text-[#F54748] p-[1rem] font-bold text-[0.8rem] mt-[3rem] w-[200px]'>
            <span>More Than Faster</span>
            <Image src={cherry} alt='Cherry Image' width={40} height={25}/>
          </div>
          <div>
            <h1 className='text-[4rem] font-bold'>Be The Fastest <br/> In Delivering<br/>
            Your <span className='text-[#F54748]'>Pizza</span>
            </h1>
          </div>
          <span className='w-[70%] font-[600] text-[#828282]'>Our Mission is to filling your tummy with delicious food and with fast and free dilivery</span>
          <button className='bg-[#f54748] w-[max-content]  rounded-[30px] py-[1rem] px-[2.5rem] border-none text-white cursor-pointer text-[1.1rem] '>Get Started</button>
        </div>
        <div className='relative'> {/* Image */}
          <div className='absolute w-[38rem] top-[-3rem] left-[-5rem]'>
            <Image src={heroImage} alt='Hero Image' layout='intrinsic'/>
          </div>
          <div className='absolute flex bg-white w-[max-content] p-[1rem] text-[#f54748] font-semibold rounded-[5rem] top-[3rem] left-[-8rem] gap-[1rem] items-center justify-center shadow shadow-b-gray-400 hover:shadow-gray-400 hover:scale-[1.1] hover:cursor-pointer'>
            <span>Contact Us</span>
            <div className='bg-green-500 w-[2.5rem] h-[2.5rem] rounded-full items-center justify-center flex '>
              <TiPhoneOutline color='#fff' size={25}/>
            </div>
          </div>

          <div className='flex gap-[1rem] bg-white p-[0.5rem] rounded-[0.5rem] absolute bottom-[4rem] left-[19rem] w-[max-content] shadow-lg hover:scale-[1.1] cursor-pointer'>
            <div className='w-[6rem] h-[4rem] overflow-hidden rounded-lg'>
              <Image src={pizza1} layout='intrinsic' objectFit='cover'/>
            </div>
            <div className='flex flex-col justify-between font-bold '>
              <span>Italian Pizza</span>
              <span><span className='text-[#f54748]'>$ </span>22</span>
            </div>
          </div>
          

        </div>  {/* end of right*/}
      </div>
    </div>
  )
}

export default Hero