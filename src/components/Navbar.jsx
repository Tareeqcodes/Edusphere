import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';
import { useAuth } from '../../app/context/Authcontext';
import NavItems from './Hamburger/NavItems';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      <nav className="fixed hidden md:block top-0 left-0 w-full bg-orange-600 shadow-lg font-poppins text-center px-4 lg:px-16 z-50">
        <div className="container mx-auto flex justify-between items-center py-3">
          
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-12" />
          </Link>
          <NavItems />

          {user ? (
            <Link to="/profile" className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-all">
              <FaUser size={20} />
            </Link>
          ) : (
            <Link to="/Auth" className="flex items-center bg-white text-orange-600 py-2 px-4 rounded-full hover:bg-gray-100 transition-all">
              <p className="mr-2 font-semibold">Login</p>
              <FaArrowRight size={18} />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
