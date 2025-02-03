import { AiOutlineHome, AiOutlineFilePdf } from 'react-icons/ai';
import { FaStore, FaBuilding } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-slate-100 shadow-md py-3 px-5 flex justify-around items-center text-black md:hidden z-50">
      
      {/* Home */}
      <Link to="/" className="flex flex-col items-center group">
        <AiOutlineHome className="text-2xl group-hover:text-orange-600 transition-all" />
        <span className="text-xs font-medium">Home</span>
      </Link>

      {/* PDFs */}
      <Link to="/pdfs" className="flex flex-col items-center group">
        <AiOutlineFilePdf className="text-2xl group-hover:text-orange-600 transition-all" />
        <span className="text-xs font-medium">Pdfs</span>
      </Link>

      {/* Rentals */}
      <Link to="/rental" className="flex flex-col items-center group">
        <FaBuilding className="text-2xl group-hover:text-orange-600 transition-all" />
        <span className="text-xs font-medium">Rental</span>
      </Link>

      {/* Bookstore */}
      <Link to="/marketplace" className="flex flex-col items-center group">
        <FaStore className="text-2xl group-hover:text-orange-600 transition-all" />
        <span className="text-xs font-medium">Bukstore</span>
      </Link>

    </nav>
  );
};

export default BottomNav;
