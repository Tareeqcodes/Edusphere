import React, { useState } from 'react';
import { FaSignOutAlt, FaHome, FaFileUpload, FaListAlt } from 'react-icons/fa';
import { useAuth } from '../../../app/context/Authcontext';
import SignInForm from '../Auth/SignInForm';
import Spinner from '../Spinner';
import RentalDashboard from '../RentalDashboard';
import Upload from '../../../app/PDFS/Upload';


const Sidebar = ({  signOut,  user, onSelectSection }) => {

  return (
    <section className=" bg-blue-900 w-52 h-screen flex flex-col text-white   items-start text-center  justify-evenly font-poppins px-10 pt-20 pb-16">
        <div className='flex flex-col'>
      {user && (
          <p className='flex flex-col text-justify'>
            <strong>Email:</strong> 
            <span className='text-xs'>{user.email}</span>
          </p>
       
      )} 
      </div>
      <button
        className="flex flex-col items-center gap-1 cursor-pointer hover:bg-blue-700 px-2 py-3 rounded"
        onClick={() => onSelectSection('home')}
      >
        <FaHome className="text-xl" />
        <span className="text-xs">Home</span>
      </button>
        
        <button
          className="flex flex-col items-center gap-1 cursor-pointer hover:bg-blue-700 px-2 py-3 rounded"
          onClick={() => onSelectSection('rentaldashboard')}
        >
          <FaListAlt className="text-xl" />
          <span className="text-xs">Rentals</span>
        </button>
        <button
        className="flex flex-col items-center gap-1 cursor-pointer hover:bg-blue-700 px-2 py-3 rounded"
        onClick={() => onSelectSection('upload')}
      >
        <FaFileUpload className="text-xl" />
        <span className="text-xs">Upload</span>
      </button>
      <button
        className="flex items-center justify-center text-white rounded hover:bg-red-700 hover:p-3"
        onClick={signOut}
      >
        <FaSignOutAlt className="mr-2" />
        Sign Out
      </button>
    </section>
  );
};

const DashboardContent = ({ selectedSection }) => {
  return (
    <section className=" py-20 flex-1  font-poppins h-screen overflow-y-auto">
     {selectedSection === 'home' && (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
          <p className="mt-4">Select a section from the sidebar to get started.</p>
        </div>
      )}
     
   { selectedSection === 'rentaldashboard' && ( <RentalDashboard /> )}
   { selectedSection === 'upload' && ( <Upload /> )}
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
