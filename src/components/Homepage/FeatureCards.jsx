import React from 'react';
import { FaFilePdf, FaChalkboardTeacher, FaHome, FaShoppingCart, FaNewspaper, FaBook, FaCoins } from 'react-icons/fa';

const FeatureCards = () => {
  return (
    <section className="items-center text-black bg-white justify-center text-center">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 mx-auto text-center gap-5 items-center justify-center">
        <div className="py-5 px-4 text-justify rounded shadow-lg bg-white border-t-2 border-blue-400">
          <FaFilePdf className="text-6xl text-blue-400 mb-3" />
          <h2 className="text-xl font-medium font-poppins pb-5 text-black bg-white">Access Online PDFs</h2>
          <p className="font-poppins text-justify word-spacing tracking-tighter">
            Download lecture notes, research papers, and syllabi effortlessly with a user-friendly interface.
          </p>
        </div>

        <div className="py-5 px-4 text-justify rounded shadow-lg bg-white border-t-2 border-blue-400">
          <FaChalkboardTeacher className="text-6xl text-blue-400 mb-3" />
          <h2 className="text-xl font-medium font-poppins pb-5 text-black bg-white">Tools for Teachers and Learners</h2>
          <p className="font-poppins word-spacing text-justify">
            Browse and book campus hostels with ease. Compare amenities, prices, and secure your accommodation in just a few clicks.
          </p>
        </div>

        <div className="py-5 px-4 text-justify rounded shadow-lg bg-white border-t-2 border-blue-400">
          <FaHome className="text-6xl text-blue-400 mb-3" />
          <h2 className="text-xl font-medium font-poppins pb-5 text-black bg-white">Rental Services</h2>
          <p className="font-poppins text-justify word-spacing">Find and rent hostels and homes near your campus.</p>
        </div>

        <div className="py-5 px-4 text-justify rounded shadow-lg bg-white border-t-2 border-blue-400">
          <FaShoppingCart className="text-6xl text-blue-400 mb-3" />
          <h2 className="text-xl font-medium font-poppins pb-5 text-black bg-white">Marketplace</h2>
          <p className="font-poppins text-justify word-spacing">
            Order goods online from trusted sellers within your campus community.
          </p>
        </div>

        <div className="py-5 px-4 text-justify rounded shadow-lg bg-white border-t-2 border-blue-400">
          <FaNewspaper className="text-6xl text-blue-400 mb-3" />
          <h2 className="text-xl font-medium font-poppins pb-5 text-black bg-white">Campus News</h2>
          <p className="font-poppins text-justify word-spacing">
            Stay informed with the latest updates, events, and announcements from your university.
          </p>
        </div>

        <div className="py-5 px-4 text-justify rounded shadow-lg bg-white border-t-2 border-blue-400">
          <FaBook className="text-6xl text-blue-400 mb-3" />
          <h2 className="text-xl font-medium font-poppins pb-5 text-black bg-white">Bukstore</h2>
          <p className="font-poppins text-justify word-spacing">
            Use Archway tokens to buy digital goods, subscribe to premium services, or gain access to workshops and events.
          </p>
        </div>

        <div className="py-5 px-4 text-justify rounded shadow-lg bg-white border-t-2 border-blue-400">
          <FaCoins className="text-6xl text-blue-400 mb-3" />
          <h2 className="text-xl font-medium font-poppins pb-5 text-black bg-white">Tokens System</h2>
          <p className="font-poppins text-justify word-spacing">
            Engage with EduSphere and earn Archway tokens to unlock discounts, exclusive content, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
