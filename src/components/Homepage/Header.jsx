// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  // const phrases = ['Digital World', 'Connected Future', 'Global Classroom']; // Add dynamic phrases
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  //   }, 3000); // Change every 3 seconds

  //   return () => clearInterval(interval); // Clean up on unmount
  // }, [phrases.length]);

  return (
    <div className=" text-center pt-4 lg:pt-28 lg:pb-10 text-black w-full items-center justify-around">
      <h1 className="text-2xl lg:text-6xl font-semibold spacing font-roboto text-justify md:text-center">Transforming University Life with Edusphere Digital World.</h1>
{/*       
      <h1 className="font-ubuntu font-bold text-2xl md:text-4xl text-justify max-w-80 md:max-w-full leading-normal tracking-tighter">
      Transforming University Life with EduSphere{' '}
        <span className="bg-green-600 p-1 text-white transition-all duration-500 ease-in-out">
          {phrases[index]}
        </span>
      </h1> */}
      
    </div>
  );
};

export default Header;
