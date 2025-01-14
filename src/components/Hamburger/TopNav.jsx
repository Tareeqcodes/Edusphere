import { Link } from 'react-router-dom';
import { FaUser, FaArrowRight } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg'
import { useAuth } from '../../../app/context/Authcontext';

const TopNav = () => {
  const { user } = useAuth(); 
  
  return (
    <nav className="fixed flex  md:hidden top-0 left-0 w-full bg-slate-100 shadow-xl justify-between items-center text-center z-50 px-3">
      <Link to='/'>
         <img src={logo} alt="logo" className='h-12  w- ml-1 mt-1'/>
        
         </Link>
         {user ? (
           <Link to="/profile" className=" text-black bg-white py-1 px-2 rounded">
            <FaUser />
          </Link>
          ): (
            <Link className=" text-black flex hover:bg-white hover:p-2 hover:rounded-md hover:text-black items-center justify-center py-1 px-2" to="/Auth">
                         <p className='mr-1 font-poppins text-lg '>Login</p>
                         <FaArrowRight />
                         </Link>
          )}
    </nav>
  );
};

export default TopNav;
