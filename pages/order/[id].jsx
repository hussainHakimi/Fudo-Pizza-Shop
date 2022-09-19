import { client } from '../../lib/client'
import { UilBill, UilBox } from '@iconscout/react-unicons'
import Image from 'next/image'
import Cooking from '../../assets/cooking.png'
import Onway from '../../assets/onway.png'
import Spinner from '../../assets/spinner.svg'
import { useEffect } from 'react'

export const getServerSideProps = async ({params}) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`
  const order = await client.fetch(query)

  return {
    props : {
      order : order[0]
    }
  }
}


export default function Orders({order}) {
  useEffect(() => {
    if(order.status > 3) {
      localStorage.clear()
    }
  })
  return (
    <div className='flex items-center justify-center flex-col gap-[4rem] mt-[3rem]'> {/* container  */}
      <span className='text-[2rem] font-[600]'>
        Order in Process
      </span>
      <div className='flex flex-col gap-[1rem] w-[48%]'> {/* Details  */}
        <div className='justify-between flex'>
          <span>Order ID</span>
          <span className='font-[600] '>{order._id}</span>
        </div>
        <div className='justify-between flex'>
          <span>Customer Name</span>
          <span className='font-[600] '>{order.name}</span>
        </div>
        <div className='justify-between flex'>
          <span>Phone</span>
          <span className='font-[600] '>{order.phone}</span>
        </div>
        <div className='justify-between flex'>
          <span>Method</span>
          <span className='font-[600] '>
            {order.method === 0 ? 'Cash On Delivery' : 'Online Payment(Paid)'}
          </span>
        </div>
        <div className='justify-between flex'>
          <span>Total</span>
          <span className='font-[600] '>${order.total}</span>
        </div>
      </div>
      <div className='flex gap-[15rem]'> {/* Status Container*/}
        <div className='flex flex-col gap-[2rem] w-[4rem] relative items-center'>
          <UilBill width={50} height={50} className='text-[#f54748]'/>
          <span>Payment</span>
          { order.method === 0 
          ? <span className='w-[max-content] bg-orange-400 text-white p-[0.5rem] text-[0.8rem] rounded-[1rem]'>On Delivery</span> 
          : <span>Completed</span>
        }
        </div>
        <div className='flex flex-col gap-[2rem] w-[4rem] relative items-center'>
          <Image src={Cooking} width={50} height={50} alt="cooking Image" className='text-[#f54748]'/>
          <span>Cooking</span>
          {order.status === 1 && (
            <div className='absolute left-[-0.95rem] top-[-1.5rem] w-[6rem]'> {/* Spinner */}
              <Image src={Spinner} alt='Spinner' /> 
            </div>
          )}
          {order.status > 1 && (
            <span className='rounded-[1rem] p-[0.5rem] text-[0.8rem] text-white bg-green-400'>Completed</span>
          )} 
        </div>
        <div className='flex flex-col gap-[2rem] w-[4rem] relative items-center'>
          <Image src={Onway} alt='' width={50} height={50}  className='text-[#f54748]'/>
          <span>Onway</span>
          {order.status === 2 && (
            <div className='absolute left-[-0.95rem] top-[-1.5rem] w-[6rem]'> {/* Spinner */}
              <Image src={Spinner} alt='Spinner' /> 
            </div>
          )}
          {order.status > 2 && (
            <span className='rounded-[1rem] p-[0.5rem] text-[0.8rem] text-white bg-blue-400'>Completed</span>
          )} 
        </div>
        <div className='flex flex-col gap-[2rem] w-[4rem] relative items-center'>
          <UilBox width={50} height={50} className='text-[#f54748]'/>
          <span>Delivered</span>
          {order.status === 3 && (
            <div className='absolute left-[-0.95rem] top-[-1.5rem] w-[6rem]'> {/* Spinner */}
              <Image src={Spinner} alt='Spinner' /> 
            </div>
          )}
          {order.status > 3 && (
            <span className='rounded-[1rem] p-[0.5rem] text-[0.8rem] text-white bg-violet-600'>Completed</span>
          )} 
        </div>

      </div>
    </div>
  )
};
