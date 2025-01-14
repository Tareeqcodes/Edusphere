import React from 'react'
import { Link } from 'react-router-dom'



const RoomCard = ({room}) => {
  const bucketId = import.meta.env.VITE_STORAGE_ID
    const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

    const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

    

    const imageSrc = room.image ? imageUrl : '/no-image.jpg';

  return (
    <section className=' shadow-lg rounded-lg mb-10  text-center items-start  justify-center'>
      <div className="p-5 items-start">
        <picture>
          <source media="(min-width: )" srcset="" />
          <img
          src={imageSrc}
          alt={room.name}
          className='w-80 rounded-lg object-cover'
        />
        </picture>
    <div className='flex flex-col py-3 items-start w-full'>

          <h2 className='text-xl text-blue-700 font-bold'>{room.name}</h2>
           <p className="text-sm max-w-full text-orange-400 font-medium">
            {room.description}
          </p>
    </div>
    <div className="flex items-center justify-between ">
     <h3 className="text-md font-semibold orange">{room.price}/Year</h3>
    <Link to={`/roomPage/${room.$id}`} className="text-md font-semibold shadow-lg rounded-md black py-3 px-5 hover:bg-white hover:text-black">
            Rent
          </Link>   
    </div>
    </div>
    </section>
  )
}

export default RoomCard