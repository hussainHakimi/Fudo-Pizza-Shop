import React, {useState} from 'react'
import { Modal, useMantineTheme } from '@mantine/core';

const OrderModal = ({opened, setOpened, PaymentMethod}) => {
  const theme = useMantineTheme();
  const [FormData, setFormData] = useState({})

  const handleInput = (e) => {
    setFormData({...FormData, [e.target.name] : e.target.value})
  }
  const total = typeof window !== 'undefined' && localStorage.getItem('total')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(FormData)
  }
  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened = {opened}
      onClose = {() => setOpened(null)}
    >
      {/* Modal content */}
      <form action='' onSubmit={handleSubmit} className='flex items-center flex-col gap-[1rem]'>        {/* form container */}
        <input 
          type='text' 
          name='name' 
          placeholder='Your Name' 
          required 
          className='w-full outline-none p-[0.8rem] border-2 border-gray-400 rounded-[0.4rem]'
          onChange={handleInput}
          />
        <input 
          type='text' 
          name='phone' 
          placeholder='Phone Number' 
          required 
          className='w-full outline-none p-[0.8rem] border-2 border-gray-400 rounded-[0.4rem]'
          onChange={handleInput}
          />
        <textarea
          name='address'
          rows={3}
          placeholder='Address'
          className='w-full outline-none p-[0.8rem] border-2 border-gray-400 rounded-[0.4rem]'
          onChange={handleInput}
          >
        
        </textarea>
        <span>You will Pay <span className='text-[#f54748] font-bold text-[1.3rem]'>$ {total}</span> on Delivery</span>
        <button type='submit' className='btn p-[0.9rem] text-[1rem] bg-green-500 font-bold '>place Order</button>
      </form>
      
    </Modal>
  )
}

export default OrderModal