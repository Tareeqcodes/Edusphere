import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft, FaWhatsapp } from 'react-icons/fa';
import Heading from '../../src/components/Heading';
import GetSingleRoom from './GetSingleRoom';
import Spinner from '../../src/components/Spinner';

const ViewRoom = () => {
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const fetchedRoom = await GetSingleRoom(id);
        setRoom(fetchedRoom);
      } catch (err) {
        console.error('Error fetching room:', err);
        setError('Unable to fetch room details.');
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  const bucketId = import.meta.env.VITE_STORAGE_ID;
  const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

  const imageUrl = room
    ? `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`
    : '/no-image.jpg';

    const countryCode = '+234';
    const formattedContact = room && room.contact ? (room.contact.startsWith('0')
    ? countryCode + room.contact.slice(1)
    : countryCode + room.contact) : '';



  const whatsappLink = room
    ? `https://wa.me/${formattedContact}?text=${encodeURIComponent(
        `Hello, I am interested in your room listing on Edusphere: ${room.name}.`
      )}`
    : '#';

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Heading title={error} />;
  }

  if (!room) {
    return <Heading title="Room Not Found" />;
  }

  return (
    <div className="flex flex-col font-poppins pt-16 h-screen overflow-scroll items-center justify-center text-center">
      <Link to="/rental" className="flex hover:text-white p-2 shadow-md rounded-md items-center mb-4">
        <FaChevronLeft className="mr-1 inline" />
        <span className="ml-1">Back to Rentals</span>
      </Link>
      
      <h4 className='text-2xl py-5 font-roboto font-semibold'>Property Details</h4>
      
      <div className="flex px-5 flex-col justify-start text-center items-center">
        <img
          src={imageUrl}
          alt={room.name}
          className=" w-[20rem] rounded-lg object-cover"
        />
        
        <div className=" text-start w-full px-10 py-5 md:py-8">
        <Heading title={room.name} />
        <p className='text-base font-medium mb-2'>{room.description}.</p>
        <h4 className="text-xl font-semibold orange">{room.price}/year</h4>
        

        <h4 className="mb-2 gray font-medium">Amenities:
          <span className="ml-2 text-black">{room.amenities}.</span> </h4>
        
        <h4 className='mb-2 gray '>Location: <span className='text-black'>{room.location}.
          </span></h4>
        
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 text-white font-semibold text-lg px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition"
        >
          <FaWhatsapp className="mr-2" /> Contact on me WhatsApp
        </a>
        </div>
      </div>
    </div>
  );
};

export default ViewRoom;
