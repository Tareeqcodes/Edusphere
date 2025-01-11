import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../app/context/Authcontext'

const NavItems = () => {
    const {user} = useAuth();
    if (!user) return null;
  return (
    <div className='flex flex-row justify-between font-poppins'>
          <Link className="px-3 font-bold" to="/pdfs">
          PDFs
          </Link>
          <Link className="px-3 font-bold" to="/rental">
          Rental
          </Link>
          <Link className="px-3 font-bold" to="/marketplace">
          Marketplace
          </Link>
        </div>
  )
}

export default NavItems