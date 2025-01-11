import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const phrases = ['Digital World', 'Connected Future', 'Global Classroom']; // Add dynamic phrases
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [phrases.length]);

  return (
    <div className=" text-center lg:pt-28 lg:pb-20 text-white items-center justify-around">
      <h1 className="text-2xl lg:text-6xl font-semibold spacing font-roboto text-justify md:text-center">Transforming University Life with Edusphere Digital World.</h1>
{/*       
      <h1 className="font-ubuntu font-bold text-2xl md:text-4xl text-justify max-w-80 md:max-w-full leading-normal tracking-tighter">
      Transforming University Life with EduSphere{' '}
        <span className="bg-green-600 p-1 text-white transition-all duration-500 ease-in-out">
          {phrases[index]}
        </span>
      </h1> */}
      <div className='mt-10 flex items-center justify-center gap-x-6">'>
      <Link to="/" className="bg-white p-2 text-black mr-3  rounded-md" >
                Get started
              </Link>
              <Link className="text- flex items-center justify-center font-semibold">
                <p className='mr-1'>Learn more</p>
                 <FaArrowRight />
              </Link>
      </div>
    </div>
  );
};

export default Header;
