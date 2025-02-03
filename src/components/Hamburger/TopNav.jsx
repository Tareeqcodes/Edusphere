import { Link } from 'react-router-dom';
import { FaUser, FaArrowRight } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';
import { useAuth } from '../../../app/context/Authcontext';

const TopNav = () => {
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full bg-orange-600 md:hidden shadow-xl flex items-center justify-between px-4 py-3 z-50">
      
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Edusphere Logo" className="h-10" />
      </Link>

      {/* Auth Buttons */}
      {user ? (
        <Link to="/profile" className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-all">
          <FaUser size={20} aria-label="Profile" />
        </Link>
      ) : (
        <Link to="/Auth" className="flex items-center bg-white text-orange-600 py-2 px-2 rounded-full hover:bg-gray-100 transition-all">
          <p className="mr-2 font-semibold">Login</p>
          <FaArrowRight size={18} />
        </Link>
      )}
    </nav>
  );
};

export default TopNav;
