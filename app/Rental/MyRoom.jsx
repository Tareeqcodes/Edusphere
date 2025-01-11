import React from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import DeleteRoom from './DeleteRoom'

const MyRoom = ({ room }) => {
  
  return (
    <section className='items-center text-center justify-center'>
    <div className='flex flex-col font-poppins items-center justify-center shadow-lg py-10'>
     <h2 className='mb-5 font-semibold text-lg'>{room.name}</h2>
     
     <Link to={`/roomPage/${room.$id}`}  className='flex mb-4 shadow-xl rounded-md border py-2 px-4  gap-1 orange items-center justify-around'>
     <span className='text-sm'> <FaEye /></span>
     <p className='text-sm'>View Rental </p> 
     </Link>
     <DeleteRoom roomId={room.$id} />
    </div>
    </section>
  )
}

export default MyRoom