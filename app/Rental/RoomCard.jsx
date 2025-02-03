import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const RoomCard = ({ room }) => {

  const bucketId = import.meta.env.VITE_STORAGE_ID;
  const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

  const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;
  const imageSrc = room.image ? imageUrl : '/no-image.jpg';

  return (
    <motion.section
      className="shadow-lg rounded-lg mb-10 text-center w-full max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-5 pt-0 pb-3 flex flex-col items-start">
        <picture>
          <img
            src={imageSrc}
            alt={room.name}
            className="w-full rounded-lg object-cover h-48 mb-4"
          />
        </picture>
        <div className="flex flex-col text-justify">
          <h2 className="text-xl text-blue-700 font-bold mb-3">{room.name}</h2>

          <div className="flex items-center mb-2 text-sm text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-green-500" />
            <span className="text-orange-500">{room.location || 'Location not available'}</span>
          </div>
          
        </div>
        <div className="flex items-center justify-between mt-5 w-full">
          <h3 className="text-lg font-semibold text-orange-600">{room.price}/Year</h3>
          <Link
            to={`/roomPage/${room.$id}`}
            className="text-md font-semibold bg-orange-600 text-white py-2 px-5 rounded-md shadow-lg hover:bg-orange-700 transition-all"
          >
            Rent
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default RoomCard;
