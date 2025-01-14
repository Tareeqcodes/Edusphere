import React, { useState } from 'react';
import { FaSignOutAlt, FaHome, FaFileUpload, FaListAlt } from 'react-icons/fa';
import { useAuth } from '../../../app/context/Authcontext';
import SignInForm from '../Auth/SignInForm';
import Spinner from '../Spinner';
import RentalDashboard from '../RentalDashboard';
import Upload from '../../../app/PDFS/Upload';


const Sidebar = ({  signOut,  user, onSelectSection }) => {

  return (
    <section className=" bg-slate-200 w-52 h-screen text-black   items-start text-center  justify-center font-poppins px-10 pt-20 pb-16">
      <div className='flex flex-col justify-between pl-7'>
        <div className='flex flex-col'>
      {user && (
          <p className='flex flex-col text-justify'>
            <strong>Email:</strong> 
            <span className='user-email'>{user.email}</span>
          </p>
       
      )} 
      </div>
      <div className='mt-5'>
      <button
        className="flex flex-col items-center py-5 cursor-pointer  hover:bg-blue-700 px-2 rounded"
        onClick={() => onSelectSection('home')}
      >
        <div className='text-justify'>

        <FaHome className="text-2xl" />
        <span className="text-base">Home</span>
        </div>
      </button>
        
        <button
          className="flex flex-col items-center py-5 cursor-pointer  hover:bg-blue-700 px-2 rounded"
          onClick={() => onSelectSection('rentaldashboard')}
        >
          <div className='text-justify'>

          <FaListAlt className="text-2xl" />
          <span className="text-base">Rentals</span>
          </div>
        </button>
        <button
        className="flex flex-col items-center py-5 cursor-pointer  hover:bg-blue-700 px-2 rounded"
        onClick={() => onSelectSection('upload')}
      >
        <div className='text-justify'>

        <FaFileUpload className="text-2xl" />
        <span className="text-base">Upload</span>
        </div>
      </button>
      <button
        className="flex items-center justify-center text-orange-700"
        onClick={signOut}
      >
        <FaSignOutAlt className="mr-2" />
        <span className='text-base'>Sign Out</span>
      </button>
      </div>
      </div>
    </section>
  );
};

const DashboardContent = ({ selectedSection }) => {
  return (
    <section className=" py-20 flex-1  font-poppins h-screen overflow-y-auto">
     {selectedSection === 'home' && (
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
          <p className="mt-4">Select a section from the sidebar to get started.</p>
        </div>
      )}
     
   { selectedSection === 'rentaldashboard' && ( <RentalDashboard /> )}
   { selectedSection === 'upload' && (
    <div className='px-12'>
      <Upload />
    </div>
      )}
    </section>
  );
};

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const [selectedSection, setSelectedSection] = useState('home');

  if (loading) return <Spinner />;
  if (!user) return <SignInForm />;

  return (
    <div className="flex h-screen">
      <Sidebar user={user} signOut={signOut} onSelectSection={setSelectedSection} />
      <DashboardContent user={user} selectedSection={selectedSection} />
    </div>
  );
};

export default Dashboard;
