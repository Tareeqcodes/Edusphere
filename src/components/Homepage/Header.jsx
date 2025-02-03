import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const phrases = ['Digital World', 'Connected Future', 'Global Classroom'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-orange-600 text-white w-full mb-10 flex flex-col items-center text-center px-5 md:px-16 pt-32 pb-48 rounded-bl-[8rem] md:rounded-bl-[12rem]">
      <h1 className="text-3xl md:text-5xl font-bold font-nunito leading-snug tracking-tight max-w-3xl">
        Transforming University Life with Edusphere{' '}
        <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-2xl text-white px-2 py-1 rounded-md transition-all duration-500 ease-in-out">
          {phrases[index]}
        </span>
      </h1>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-20 bg-white text-orange-600 px-10 py-4 rounded-full font-semibold shadow-md hover:bg-orange-700 hover:text-white hover:shadow-lg transition-all"
      >
        Explore Features
      </motion.button>
    </div>
  );
};

export default Header;
