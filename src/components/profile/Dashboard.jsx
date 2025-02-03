import React, { useState } from 'react';
import { FaSignOutAlt, FaHome, FaFileUpload, FaListAlt } from 'react-icons/fa';
import { useAuth } from '../../../app/context/Authcontext';
import SignInForm from '../Auth/SignInForm';
import Spinner from '../Spinner';
import RentalDashboard from '../RentalDashboard';
import Upload from '../../../app/PDFS/Upload';


const Sidebar = ({ signOut, user, onSelectSection, selectedSection }) => {
  return (
    <aside className="hidden md:flex flex-col bg-slate-200 w-48 h-screen pt-20 pb-6 px-6 text-black font-poppins">
      {/* User Email */}
      {user && (
        <p className="text-[12px] font-medium text-gray-700 py-5 mb-4">
          <strong>Email:</strong> {user.email}
        </p>
      )}

      {/* Sidebar Buttons */}
      <nav className="flex flex-col space-y-2">
        {[
          { name: "Home", icon: <FaHome />, section: "home" },
          { name: "Rentals", icon: <FaListAlt />, section: "rentaldashboard" },
          { name: "Upload", icon: <FaFileUpload />, section: "upload" },
        ].map(({ name, icon, section }) => (
          <button
            key={section}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg cursor-pointer transition-all ${
              selectedSection === section
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-100 text-gray-800"
            }`}
            onClick={() => onSelectSection(section)}
          >
            {icon}
            <span className="text-base">{name}</span>
          </button>
        ))}
      </nav>

      {/* Sign Out Button */}
      <button
        className="flex items-center space-x-2 text-orange-700 mt-auto py-3"
        onClick={signOut}
      >
        <FaSignOutAlt />
        <span className="text-base">Sign Out</span>
      </button>
    </aside>
  );
};
const MobileNav = ({ onSelectSection, selectedSection }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around py-3 text-gray-700 md:hidden">
      {[
        { name: "Home", icon: <FaHome />, section: "home" },
        { name: "Rentals", icon: <FaListAlt />, section: "rentaldashboard" },
        { name: "Upload", icon: <FaFileUpload />, section: "upload" },
      ].map(({ name, icon, section }) => (
        <button
          key={section}
          className={`flex flex-col items-center text-xs ${
            selectedSection === section ? "text-orange-600 font-bold" : ""
          }`}
          onClick={() => onSelectSection(section)}
        >
          {icon}
          {name}
        </button>
      ))}
    </nav>
  );
};

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const [selectedSection, setSelectedSection] = useState("home");

  if (loading) return <Spinner />;
  if (!user) return <SignInForm />;

  return (
    <div className="flex h-screen">
      {/* Sidebar (Hidden on Mobile) */}
      <Sidebar
        user={user}
        signOut={signOut}
        onSelectSection={setSelectedSection}
        selectedSection={selectedSection}
      />

      {/* Main Content */}
      <main className="flex-1 py-10 mt-16 px-6 overflow-y-auto">
        {selectedSection === "home" && (
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Welcome to the Dashboard!</h1>
            <p className="mt-4 text-gray-600">Select a section from the sidebar to get started.</p>
          </div>
        )}

        {selectedSection === "rentaldashboard" && <RentalDashboard />}
        {selectedSection === "upload" && <Upload />}
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav onSelectSection={setSelectedSection} selectedSection={selectedSection} />
    </div>
  );
};


export default Dashboard;
