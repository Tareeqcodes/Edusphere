import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Importing framer-motion
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
    <div className="flex flex-col font-poppins px-4 h-screen items-center justify-center text-center space-y-8">
      <motion.div
        className="flex bg-white hover:bg-black hover:text-orange-600 p-2 shadow-md rounded-md items-center mb-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link to="/rental" className='flex items-center'>
          <FaChevronLeft className="mr-1 inline" />
          <span className="ml-1">Back to Rentals</span>
        </Link>
      </motion.div>

      <motion.h4
        className="text-2xl py-5 mb-5 font-roboto font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Property Details
      </motion.h4>

      <motion.div
        className="flex flex-col justify-center text-justify items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={imageUrl}
            alt={room.name}
            className="w-[20rem] rounded-lg object-cover"
          />
        </motion.picture>

        <div className="text-start w-full py-5 md:py-8">
          <Heading title={room.name} />
          <motion.p
            className="text-base font-medium mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {room.description}.
          </motion.p>

          <motion.h4
            className="text-xl font-semibold text-orange-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {room.price}/year
          </motion.h4>

          <motion.h4
            className="mb-2 text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Amenities: <span className="ml-2 text-black">{room.amenities}</span>
          </motion.h4>

          <motion.h4
            className="mb-2 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Location: <span className="text-black">{room.location}</span>
          </motion.h4>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center black font-semibold text-lg px-4 py-2 rounded-lg mt-4 transition-all"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaWhatsapp className="mr-2" /> Contact on WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewRoom;
