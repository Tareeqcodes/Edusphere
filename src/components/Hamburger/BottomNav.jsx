import { AiOutlineHome,  AiOutlineFilePdf} from 'react-icons/ai';
import { FaStore, FaBuilding} from "react-icons/fa";
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 z-50 font-roboto  w-full bg-slate-100  flex flex-row  py-3 px-5 gap-6 text-center items-center justify-evenly text-black md:hidden'>
      <div className="flex flex-col">
      <Link to="/">
      <AiOutlineHome className="text-xl ml-1"/>
           <span className='font-semibold text-xs'>Home</span>
          </Link>
      </div>
      <div className="flex flex-col">
        <Link to="pdfs" >
      <AiOutlineFilePdf className=" text-xl" />
       <span className="font-semibold text-xs">Pdfs</span>
        </Link>
      </div>
      <div className="flex flex-col text-justify">
        <Link to="/rental">
        <FaBuilding className="text-xl ml-1"/>
          <span className="font-semibold text-xs">Rental</span>
          </Link>
      </div>
      <div className="flex flex-col">
        <Link to="/marketplace">
       <FaStore className=" text-xl ml-1" />
       <span className="font-semibold text-xs">Bukstore</span>
        </Link>
      </div>
    </div>
  )
}

export default BottomNav